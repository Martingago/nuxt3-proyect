<template>
        <div class=" d-flex flex-column gap-2">
            <label for="uploadImage">Cargar imágen de portada</label>
            <input @change="clickImage($event)" type="file" accept="image/*" name="uploadImage" id="uploadImage">
            <div class="preview-image">
                
                <img @click="eliminarImagen" class="preview-image" v-if="imageURL" :src="imageURL" alt="imagen de portada de la aplicación">
            </div>
        </div>
</template>

<script setup>

const emit = defineEmits(['portada-image-update'])

const props = defineProps({
    mainImage : Object
});


//propiedades:
const imagen = ref({}); //datos que se suben a la BBDD
const imageURL = ref(null); //imagen que carga como HTML

watch(props, ()=> {
    imageURL.value = props.mainImage.url;
}, { immediate: true })

//Observa las actualizaciones en la imagen

watch(imagen , ()=> {
    emit('portada-image-update', {
        file: imagen.value,
        registered: false
    });
})


const clickImage = (e) => {
    imagen.value = e.target.files[0];
    let reader = new FileReader();
        reader.onloadend = function() {
            imageURL.value = reader.result;
        }
        reader.readAsDataURL(imagen.value);
}

const eliminarImagen = () => {
    imageURL.value = null;
    imagen.value = null;
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