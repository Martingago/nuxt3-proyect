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
    const credentials = await signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
        });
        return credentials;
}


const initUser = async () => {
    const auth = getAuth();
    //Se añade la informacion del usuario en el store:
    const firebaseUser = useFirebaseUser();
    firebaseUser.value = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
        } 
        firebaseUser.value = user;
    });
}


const signOutUser = async () => {
    const auth = getAuth();
    const result = await auth.signOut();
}



