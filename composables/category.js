import { addDoc, collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
export { subirCategoria, listarCategoriaProducto, eliminarCategoriaProducto, actualizarCategoriaProducto }

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

const eliminarCategoriaProducto = async (identificador) => {
    const { $db } = useNuxtApp();
    await deleteDoc(doc($db, "categoria_productos", identificador));
}

const actualizarCategoriaProducto = async (identificador, data) => {
    const { $db } = useNuxtApp();
    try {
        const docRef = doc($db, "categoria_productos", identificador)
        await updateDoc(docRef, data)

    } catch (error) {
        console.log(error)
    }

}
