<template>
    <form @submit.prevent="subirFichero" enctype="multipart/form-data">
        <label for="uploadImage">Cargar imágenes</label>
        <input @change="clickImage($event)" type="file" accept="image/*" name="uploadImage" id="uploadImage">
        <button class="btn btn-primary" @click="subirFichero" :disabled="!imagen" type="button"> Subir imagen</button>
    </form>
</template>

<script setup>

//const imagenes = ref([]);
//const storageRef = ref({});

//propiedades:
const imagen = ref(null);
const idProducto = ref('');

const clickImage = (e) => {
    imagen.value = e.target.files[0];
    idProducto.value = 'Ref34sdEf345dfdDsdsCD3DS234';
    console.log("archivo: ", imagen.value)
}

const subirFichero = async () => {
    await subirFicheroPortada(idProducto.value, imagen.value);
}

</script>