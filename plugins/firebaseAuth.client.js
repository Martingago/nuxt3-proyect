import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    const firebaseConfig = {
        apiKey: config.FIREBASE_API_KEY,
        // authDomain: "audiophile-product.firebaseapp.com",
        // projectId: "audiophile-product",
        // storageBucket: "audiophile-product.appspot.com",
        // messagingSenderId: "638214144572",
        // appId: "1:638214144572:web:ac0b693543ddca1b65b939",
        // measurementId: "G-8TYYJRX1X7"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    initUser();

    const auth = getAuth();
    
    nuxtApp.vueApp.provide('auth', auth);
    nuxtApp.provide('auth', auth);
})