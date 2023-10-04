<template>
    <div class=" d-flex flex-column gap-2">
        <label for="uploadImage">Cargar imágen de portada</label>
        <input @change="clickImage($event)" type="file" accept="image/*" name="uploadImage" id="uploadImage">
        <div class="preview-image">

            <img @click="eliminarImagen" class="preview-image" v-if="fileURLImage" :src="fileURLImage"
                alt="imagen de portada de la aplicación">
        </div>


    </div>
    <div>
        <p>Elemento del filePushImage</p>
        {{ filePushImage }}
        <p>Elemento a eliminar:</p>
        {{ fileDeleteImage }}
    </div>
</template>

<script setup>

const emit = defineEmits(['portada-image-update'])

//Objeto que recibe el componente en casos de edicion (Imagen ya subida en la BBDD)
const props = defineProps({
    mainImage: Object
});

//CONSTANTES
const fileDeleteImage = ref(null); //Objeto que tiene el path con la imagen que se debe eliminar en la BBDD;
const filePushImage = ref(null); //Objeto que tiene el objeto File, con los datos del archivo a subir a la BBDD;
const fileURLImage = ref(null); //String con la referencia de la imagen para que sea previsualizada por el usuario;

/**
 * Observa los props recibidos del componente padre
 * En caso de recibir datos de imágenes, éstos se guardarán
 */
watch(props, () => {
    fileDeleteImage.value = null;
    fileURLImage.value = props.mainImage.url;
    if (props.mainImage && Object.keys(props.mainImage).length > 0) {
        filePushImage.value = {
            ...props.mainImage,
            registered: true
        }
    }
}, { immediate: true })


/**
 * Observa las actualizaciones en el objeto filePushImage, cuando se produzca un cambio se realizará un emit con la información actualizada:
 *  ==> Datos de la imagen a subir
 *  ==> Datos de la imagen a eliminar de la BBDD
 */
watch(filePushImage, () => {
    emit('portada-image-update', {
        filePushImage,
        fileDeleteImage
    });
    console.log("haciendo emit de portada")
})

/**
 * Funcion que permite seleccionar y gestionar los datos de una imagen
 * @param {*} event información del archivo refereciado 
 * Al seleccionar una imagen éste recibirá el atributo => registered: false, indicando que la imagen no ha sido subida con anterioridad a la BBDD
 * Los datos de la imagen se le atribuirán a filePushImage, como objeto de tipo File para su posterior gestión y subida en la BBDD
 * Finalmente se emplea la API de FileReader para leer la información del fichero y crear una URL de previsualización para el usuario
 */
const clickImage = (event) => {
    const file = event.target.files[0];
    filePushImage.value = {
        file: file,
        registered: false
    };

    let reader = new FileReader();
    reader.onloadend = function () {
        fileURLImage.value = reader.result;
    }
    reader.readAsDataURL(file);
}


/**
 * Funcion que elimina una imagen seleccionada por el usuario. Pueden darse 2 situaciones diferentes:
 *  ==> La imagen se encuentra previamente subida a la BBDD (registered: true) 
 *      la imagen se cargará en el objeto de fileDeleteImage para su porterior eliminación en la BBDD
 *  ==> La imagen simplemente fue gestionada de manera local (Nunca se llegó a subid en la BBDD).
 *      Simplemente la imagen se eliminará del objeto de imágenes que iban a ser subidas: filePushImage
 */
const eliminarImagen = () => {
    if (filePushImage.value.registered === true) {
        fileDeleteImage.value = filePushImage.value; //Si la imagen está registrada en la BBDD se guarda para su futura eliminación.
    }
    filePushImage.value = null;
    fileURLImage.value = null;
}
</script>

<style scoped> .preview-image {
     width: 120px;
     height: 120px;
     background-color: lightgray;
     object-fit: contain;
 }
</style>