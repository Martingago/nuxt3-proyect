import { ref, uploadBytes, getDownloadURL} from "firebase/storage";
export { uploadMainImage, uploadArrayImages }



const uploadMainImage = async (coleccion, id, file) => {
    const { $storage } = useNuxtApp();
    let urlImage = "";
    try {
        if (file) {
            const path = `${coleccion}/${id}/portada/${file.name}` //path conformado por el id del producto y la carpeta portada
            const imageRef = ref($storage, path);
            // 'file' comes from the Blob or File API
            await uploadBytes(imageRef, file).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });
            urlImage = await getDownloadURL(imageRef);
        } else {
            console.log("no se ha añadido una imagen")
        }
    } catch (error) {
        console.log(error)
    }
    return urlImage;
}

/**
 * 
 * @param {*} coleccion 
 * @param {*} id 
 * @param {*} arrayFiles 
 * @returns 
 */
const uploadArrayImages = async (coleccion, id, arrayFiles) => {
    const arrayImages = [];
    const { $storage } = useNuxtApp();
    try {
        if (arrayFiles && arrayFiles.length >0) {
            for (let i = 0; i < arrayFiles.length; i++) {  
                const path = `${coleccion}/${id}/views/${arrayFiles[i].name}` //path conformado por el id de producto y la carpeta de views
                const imagesRef = ref($storage, path);
                 await uploadBytes(imagesRef, arrayFiles[i]).then((snapshot) => {
                    console.log(`Uploaded a blob or file!: [${i+1} de: ${arrayFiles.length}]`);
                });
                const urlImage =  await getDownloadURL(imagesRef);
                arrayImages.push(urlImage)
            }
        } else {
            console.log("No existen imagenes en el array")
        }
    } catch (error) {
        console.log(`Ha ocurrido un error al subir los archivos: ${error}`)
    }
    console.log("Los archivos se han subido con éxito!")
    console.log("array de lectura:", arrayImages)
    return arrayImages
}

