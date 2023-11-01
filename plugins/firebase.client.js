import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    const firebaseConfig = {
        apiKey: config.FIREBASE_API_KEY,
        projectId: config.FIREBASE_PROJECT_ID,
        storageBucket: config.FIREBASE_STORAGE_BUCKET, 
         appId: config.FIREBASE_APPID,
    
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
     const analytics = getAnalytics(app);
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
