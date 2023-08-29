import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
export { createUser, signInUser, initUser, signOutUser }

const createUser = async (email, password) => {
    const auth = getAuth();
    //Crear usuario
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
    
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            // ..
        });
        return credentials;
}

const signInUser = async (email, password) => {
    const auth = getAuth();
    //Registrar usuario
    const credentials = await signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
        return credentials;
}


const initUser = async () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log(uid);
            // ...
        } else {
        }
    });
}


const signOutUser = async () => {
    const auth = getAuth();
    const result = await auth.signOut();
}



