import { ref, uploadBytes } from "firebase/storage";
export { subirFicheroPortada }



const subirFicheroPortada = async (id, file) => {
    const { $storage } = useNuxtApp();

    try {
        if (file) {
            const path = `productos_images/${id}/portada/${file.name}` //path conformado por el id del producto y la carpeta portada
            const imagesRef = ref($storage, path);
            // 'file' comes from the Blob or File API
            await uploadBytes(imagesRef, file).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });
        }else{
            console.log("no se ha añadido una imagen")
        }
    } catch (error) {
        console.log(error)
    }

}