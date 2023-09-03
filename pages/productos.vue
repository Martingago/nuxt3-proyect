<template>
    <h1>mira nuestros productos!</h1>
</template>

<script setup>
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const config = useRuntimeConfig()
    const firebaseConfig = {
        apiKey: config.FIREBASE_API_KEY,
        // authDomain: "audiophile-product.firebaseapp.com",
        projectId: "audiophile-product",
        // storageBucket: "audiophile-product.appspot.com",
        // messagingSenderId: "638214144572",
        // appId: "1:638214144572:web:ac0b693543ddca1b65b939",
        // measurementId: "G-8TYYJRX1X7"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);



const querySnapshot = await getDocs(collection(db, "productos"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});



</script>