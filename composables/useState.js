import { useUserStore } from "~~/store/authUser";
import { doc, onSnapshot } from "firebase/firestore";
export {  setUserDataStore }

const userStore = useUserStore();

const setUserDataStore = async (userId) => {
    const { $db } = useNuxtApp();
    const docRef = doc($db, "datos_usuarios", userId);
    // Establece un oyente en el documento
    onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()){
            console.log("datos encontrados")
            // Guarda los datos del usuario en el store
            userStore.setUserInfo(docSnap.data(), userId);
        }
    })
}