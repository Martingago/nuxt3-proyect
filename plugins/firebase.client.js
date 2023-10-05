import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    const firebaseConfig = {
        apiKey: config.FIREBASE_API_KEY,
        // authDomain: "audiophile-product.firebaseapp.com",
        projectId: config.FIREBASE_PROJECT_ID,
        storageBucket: config.FIREBASE_STORAGE_BUCKET,
        // messagingSenderId: "638214144572",
        // appId: "1:638214144572:web:ac0b693543ddca1b65b939",
        // measurementId: "G-8TYYJRX1X7"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    //Initialize auth:
    const auth = getAuth(app);

    //Initialize FireStore
    const db = getFirestore(app);
    //Initialize store
    const storage = getStorage(app);

    //Exportamos valores:
    nuxtApp.vueApp.provide('auth', auth);
    nuxtApp.provide('auth', auth);
    
    nuxtApp.vueApp.provide('db', db);
    nuxtApp.provide('db', db);

    
    nuxtApp.vueApp.provide('storage', storage);
    nuxtApp.provide('storage', storage);
});
