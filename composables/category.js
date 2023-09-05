import { addDoc, collection, getDocs } from "firebase/firestore";
export { subirCategoria, listarCategoriaProducto }

const subirCategoria = async (docData) => {
    const { $db } = useNuxtApp();
    const docRef = await addDoc(collection($db, "categoria_productos"), docData);
    console.log("Document written with ID: ", docRef.id);
}


const listarCategoriaProducto = async () => {
    const { $db } = useNuxtApp();
    const data = [];
    const querySnapshot = await getDocs(collection($db, "categoria_productos"));
    querySnapshot.forEach((doc) => {
        
        const item = {
            ...doc.data(),
            id: doc.id,
        };
        data.push(item);
    });
    return data;
}