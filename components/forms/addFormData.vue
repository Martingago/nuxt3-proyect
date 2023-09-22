<template>
    <form @submit.prevent="addFormData" class="d-flex flex-column  gap-3 container shadow rounded p-3">
        <fieldset class="d-flex flex-column gap-3 position-relative">
            <h3 class="text-center">{{ txt_placeholder }} {{ getData.text_referencia }}</h3>
            <div class=" d-flex flex-column">
                <label for="nombreCategoria">Nombre de la {{ getData.text_referencia }}</label>
                <input v-model="formData.nombre" type="text" name="nombreCategoria" id="nombreCategoria"
                    :placeholder="'Nombre de la '+ getData.text_referencia" required>
            </div>
            <div class="d-flex flex-column">
                <label for="descripcionCategoria">Breve descipción de la {{ getData.text_referencia }}</label>
                <textarea class="p-1" v-model="formData.descripcion" name="descipcionCategoria" id="descripcionCategoria"
                    cols="30" rows="5" :placeholder="'Descripción de la ' + getData.text_referencia" required></textarea>
            </div>
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
            <button class="btn btn-primary m-end" :disabled="loading">{{txt_placeholder}} {{ getData.text_referencia }}</button>
        </div>
    </form>
</template>

<script setup>

const emit = defineEmits(['toast-msg'])

const props = defineProps({
    getData: Object
})

//datos del formulario
const formData = ref({
    nombre: "",
    descripcion: "",
})

const txt_placeholder = ref("Añadir");
const loading = ref(false); //loading
const pushmsg = ref(""); //mensaje del toast

//En caso de editar texto coloca como valor por defecto del texto la información obtenida
watch(() => props.getData.form_data, (newVal) => {
    if (props.getData.action === 'edit' && newVal) {
        txt_placeholder.value = "Editar"
         formData.value.nombre = newVal.nombre;
         formData.value.descripcion = newVal.descripcion;
    }else{
        txt_placeholder.value = "Añadir"
        //Elimina los datos para que el formulario esté limpio
        formData.value.nombre = "";
        formData.value.descripcion = "";
    }
})


/**
 * sube o actualiza los datos dependiendo de la información recibida en el componente || add: nuevo fichero || edit: modificar fichero existente
 */
const addFormData = async () => {
    
    try {
        loading.value = true;
        if (props.getData.action === 'add') {
            //Añadir categoria
            await uploadDatatoStore(props.getData.referencia_datos, formData.value)
            pushmsg.value = `${formData.value.nombre} ha sido subido con éxito`;
            formData.value.nombre = "";
            formData.value.descripcion = "";
        } else if (props.getData.action === 'edit') {
            //editar categoria
            const id = props.getData.form_data.id;
            const coleccion = props.getData.referencia_datos
            await updateDataToStore(coleccion, id, formData.value);
            pushmsg.value = `${formData.value.nombre} ha sido actualizado correctamente`;
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