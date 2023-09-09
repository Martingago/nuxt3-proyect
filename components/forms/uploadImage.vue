<template>
    <form @submit.prevent="subirFichero" enctype="multipart/form-data">
        <label for="uploadImage">Cargar imágen de portada</label>
        <input @change="clickImage($event)" type="file" accept="image/*" name="uploadImage" id="uploadImage">
        <img @click="eliminarImagen" class="preview-image" v-if="imageURL" :src="imageURL" alt="imagen de portada de la aplicación">
        <button class="btn btn-primary" @click="subirFichero" :disabled="!imagen" type="button"> Subir imagen</button>
    </form>
</template>

<script setup>

//const imagenes = ref([]);
//const storageRef = ref({});

//propiedades:
const imagen = ref(null);
const idProducto = ref('');
const imageURL = ref(null)

const clickImage = (e) => {
    imagen.value = e.target.files[0];
    idProducto.value = 'Ref34sdEf345dfdDsdsCD3DS234';
    let reader = new FileReader();
        reader.onloadend = function() {
            imageURL.value = reader.result;
        }
        reader.readAsDataURL(imagen.value);
    console.log("archivo: ", imagen.value)
}

const eliminarImagen = () => {
    imageURL.value = null;
    imagen.value = null;
}



const subirFichero = async () => {
    await subirFicheroPortada(idProducto.value, imagen.value);
}

</script>

<style scoped> 
.preview-image{
    width: 120px;
    height: 120px;
    background-color: lightgray;
    object-fit: contain;
}
</style>