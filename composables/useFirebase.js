import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
export { createUser, signInUser, initUser, signOutUser }

const createUser = async (email, password) => {
    const { $auth } = useNuxtApp();
    //Crear usuario
    const credentials = await createUserWithEmailAndPassword($auth, email, password)

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            // ..
        });
    return credentials;
}

const signInUser = async (email, password) => {
    const { $auth } = useNuxtApp();
    const credentials = await signInWithEmailAndPassword($auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
        });
    return credentials;
}


const initUser = () => {
    const { $auth } = useNuxtApp();
    //Se añade la informacion del usuario en el store:
    const firebaseUser = useFirebaseUser();
    firebaseUser.value = $auth.currentUser;
    onAuthStateChanged($auth, (user) => {
        if (user) {
            const uid = user.uid;
        } else {
            console.log("auth changed", user)
        }
        firebaseUser.value = user;
    });
}


const signOutUser = async () => {
    const auth = getAuth();
    const result = await auth.signOut();
}



