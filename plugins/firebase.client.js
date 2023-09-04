import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(nuxtApp => {
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
    const db = getFirestore(app);
    console.log("app:", app)
    initUser();

    //initialize Firestores
    console.log("db:", db)
    const auth = getAuth();
    //Exportamos valores:
    nuxtApp.vueApp.provide('db', db);
    nuxtApp.provide('auth', auth);
    nuxtApp.vueApp.provide('auth', auth);
    nuxtApp.provide('db', db);

    return {db, auth}
});
