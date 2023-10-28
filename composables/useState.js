import { useUserStore } from "~~/store/authUser";
import { doc, onSnapshot } from "firebase/firestore";
export {  setUserDataStore }

const userStore = useUserStore();

/**
 * Establece la informacion del usuario.
 * Esta información es un objeto procedente de la BBDD
 * @param {*} userId 
 */
const setUserDataStore = async (userId) => {
    const { $db } = useNuxtApp();
    const docRef = doc($db, "datos_usuarios", userId);
    // Establece un oyente en el documento
    onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()){
            // Guarda los datos del usuario en el store
            userStore.setUserInfo(docSnap.data(), userId);
        }
    })
}