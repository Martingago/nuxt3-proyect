import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    const firebaseConfig = {
        apiKey: config.FIREBASE_API_KEY,
        // authDomain: "audiophile-product.firebaseapp.com",
        projectId: "audiophile-product",
        storageBucket: "audiophile-product.appspot.com",
        // messagingSenderId: "638214144572",
        // appId: "1:638214144572:web:ac0b693543ddca1b65b939",
        // measurementId: "G-8TYYJRX1X7"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    //Initialize FireStore
    const db = getFirestore(app);

    //Initialize store
    const storage = getStorage(app);

    console.log("app:", app)
    console.log("db:", db)
    console.log("storage:", storage)
    const auth = getAuth();
    const init = initUser();
    
    //Exportamos valores:
    nuxtApp.vueApp.provide('db', db);
    nuxtApp.provide('db', db);

    nuxtApp.vueApp.provide('init', init);
    nuxtApp.provide('int', init)

    nuxtApp.provide('auth', auth);
    nuxtApp.vueApp.provide('auth', auth);

    nuxtApp.provide('storage', storage);
    nuxtApp.vueApp.provide('storage', storage)
});