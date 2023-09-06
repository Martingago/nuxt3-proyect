<template>
    <form @submit.prevent="addCategory" class="d-flex flex-column  gap-3 container shadow rounded p-3">
        <fieldset class="d-flex flex-column gap-3 position-relative">
            <h3 class="text-center">{{ title }}</h3>
            <div class=" d-flex flex-column">
                <label for="nombreCategoria">Nombre de la categoria</label>
                <input v-model="nombreCategoria" type="text" name="nombreCategoria" id="nombreCategoria"
                    placeholder="Nombre de la categoría" required>
            </div>
            <div class="d-flex flex-column">
                <label for="descripcionCategoria">Breve descipción de la categoría</label>
                <textarea class="p-1" v-model="descripcionCategoria" name="descipcionCategoria" id="descripcionCategoria"
                    cols="30" rows="5" placeholder="Descripción" required></textarea>
            </div>
            <!-- <pre>{{ dataCategory }}</pre> -->
            <!-- loading -->
            <div v-if="loading"
                class="loading position-absolute d-flex flex-column  justify-content-center align-items-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p class="fs-5">Cargando datos...</p>
            </div>
        </fieldset>
        <div class="d-flex justify-content-end">
            <button class="btn btn-primary m-end" :disabled="loading">{{ buttonText }}</button>
        </div>

    </form>
    
</template>

<script setup>

const nombreCategoria = ref("");
const descripcionCategoria = ref("");
const idCategoria = ref("");
const loading = ref(false);

const pushmsg= ref("");

const emit = defineEmits(['toast-msg'])

const props = defineProps({
    action: String,
    title: String,
    buttonText: String,
    dataCategory: Object
})

//En caso de editar texto coloca como valor por defecto del texto la información obtenida
watch(() => props.dataCategory, (newVal) => {
    if (props.action === 'edit' && newVal) {
        nombreCategoria.value = newVal.nombre_categoria;
        descripcionCategoria.value = newVal.descripcion_categoria;
        idCategoria.value = newVal.id;
    }
})

const docData = {
    nombre_categoria: "default",
    descripcion_categoria: "Descripcion default de la categoria"
}

const addCategory = async () => {
    docData.nombre_categoria = nombreCategoria.value;
    docData.descripcion_categoria = descripcionCategoria.value;
    try {
        loading.value = true;
        if (props.action === 'add') {
            //Añadir categoria
            await subirCategoria(docData);
             pushmsg.value = `${docData.nombre_categoria} ha sido publicado correctamente`;

            //reestablece a vacio los textos del formulario
            nombreCategoria.value = "";
            descripcionCategoria.value = "";
        } else if (props.action === 'edit') {
            //editar categoria

            await actualizarCategoriaProducto(idCategoria.value, docData);
            pushmsg.value = `${docData.nombre_categoria} ha sido actualizado correctamente`;
        } else {
            console.log("error inesperado")
        }
        loading.value = false;
        //se realiza el emit
        emit('toast-msg', pushmsg.value);
    } catch (error) {
        console.log(error)
    }

}

</script>




<style scoped>
.loading {
    width: 100%;
    height: 100%;
    background-color: white;
}

form {
    max-width: 800px;
}

input {
    font-size: 1rem
}

textarea {
    resize: none;
}
</style>