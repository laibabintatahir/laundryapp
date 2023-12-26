import { doc, setDoc, getDoc, getDocs, query, collection, where, deleteDoc } from "firebase/firestore";
import { firestore } from "../Configure/firebaseConfig";
import { useState } from "react";
import { Alert } from 'react-native';
import { addDoc } from "firebase/firestore";

const useFirestore = () => {
    const [loading, setLoading] = useState(false);

    const setUserProfile = async (userId, profileData) => {
        try {
          const userProfileRef = doc(firestore, 'users', userId);
          await setDoc(userProfileRef, profileData);
          console.log("User profile set successfully");
        } catch (error) {
          console.error("Error setting user profile: ", error.message);
        }
      };
      

    const getUserProfile = async (userId) => {
        const userProfileRef = doc(firestore, 'users', userId);
        const docSnap = await getDoc(userProfileRef);
        return docSnap.exists() ? docSnap.data() : null;
    };

    const deleteUserProfile = async (userId) => {
        const userProfileRef = doc(firestore, 'users', userId);
        await deleteDoc(userProfileRef);
    };

    const emailExists = async (email) => {
        setLoading(true);
        const q = query(collection(firestore, 'users'), where('email', '==', email));
        const querySnapshot = await getDocs(q);
        setLoading(false);
        return querySnapshot.docs.length > 0;
    };

    const userExsists = async (username) => {
        setLoading(true);
        const q = query(collection(firestore, 'users'), where('username', '==', username));
        const querySnapshot = await getDocs(q);
        setLoading(false);
        return querySnapshot.docs.length > 0;
    };

    const addPickupDetails = async (userId, pickupDetails) => {
        try {
          const pickupCollectionRef = collection(firestore, 'users', userId, 'pickups');
          await addDoc(pickupCollectionRef, pickupDetails);
          console.log("Pickup details added successfully");
        } catch (error) {
          console.error("Error adding pickup details: ", error.message);
        }
      };

      
    

    return { setUserProfile, getUserProfile, userExsists, emailExists, addPickupDetails, getUserPickups,addFeedbackDetails,loading };
};

export default useFirestore;
