<template>
    <form @submit.prevent="addCategory" class="d-flex flex-column  gap-3 container shadow rounded p-3">
        <fieldset class="d-flex flex-column gap-3 position-relative">
            <h3 class="text-center">Añadir categoria de producto</h3>
            <div class=" d-flex flex-column">
                <label for="nombreCategoria">Nombre de la categoria</label>
                <input v-model="nombreCategoria" type="text" name="nombreCategoria" id="nombreCategoria"
                    placeholder="Nombre de la categoría" required>
            </div>
            <div class="d-flex flex-column">
                <label for="descripcionCategoria">Breve descipción de la categoría</label>
                <textarea class="p-1" v-model="descripcionCategoria" name="descipcionCategoria" id="descripcionCategoria" cols="30"
                    rows="3" placeholder="Descripción" required></textarea>
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
            <button class="btn btn-primary m-end" :disabled="loading">Subir categoria</button>
        </div>

    </form>
</template>

<script setup>

const nombreCategoria = ref("");
const descripcionCategoria = ref("");
const loading = ref(false);

const docData = {
    nombre_categoria: "default",
    descripcion_categoria: "Descripcion default de la categoria"
}

const addCategory = async () => {
    docData.nombre_categoria = nombreCategoria.value;
    docData.descripcion_categoria = descripcionCategoria.value;
    try {
        loading.value = true;
        await subirCategoria(docData)
        nombreCategoria.value = "";
        descripcionCategoria.value = "";
        loading.value = false;
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