<template>
    <!-- Tabla con el listado de elementos categoria -->
    <section class="d-flex flex-column gap-3">
        <table v-if="loading">
            <thead>
                <tr>
                    <th>Opciones</th>
                    <th>Categoria</th>
                    <th>Descripcion categoria</th>
                </tr>
            </thead>
            <tbody>
                <!-- Agrega filas aquí -->
                <tr v-for="item in data" :key="item.id" class="elemento-categoria">
                    <td class="options"><button class="w-100 mb-1" data-bs-toggle="modal" data-bs-target="#deleteModal" @click="handleClick(item)" >
                            <font-awesome-icon :icon="['fas', 'trash-can']" />
                        </button>
                        <button class="w-100 mt-1" data-bs-toggle="modal" data-bs-target="#editCategoryModal" @click="handleClick(item)">
                            <font-awesome-icon :icon="['fas', 'pen']" />
                        </button>
                    </td>
                    <td>{{ item.nombre_categoria }}</td>
                    <td>{{ item.descripcion_categoria }}</td>
                </tr>
            </tbody>
        </table>
        <div v-else class="d-flex flex-column m-2 justify-content-cetner align-items-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p>Cargando datos...</p>

        </div>

    </section>
    <!-- Ventana modal de confirmacion de eliminacion de datos -->
    <ModalDeleteElement @toast-msg="actualizarDatos" :selectedItem="selectedItem"></ModalDeleteElement>
    <ModalEditFormCategory @toast-msg="actualizarDatos" :selectedItem="selectedItem"></ModalEditFormCategory>
</template>

<script setup>

const data = ref({});
const loading = ref(false);
const selectedItem = ref({});

const emit = defineEmits(['toast-msg'])
const actualizarDatos = (msg) => {
    emit('toast-msg', msg)
}

onMounted(async () => {
    data.value = await listarCategoriaProducto();
    loading.value = true;
})
const handleClick = (object) => {
    selectedItem.value = object;
}
</script>

<style scoped>
table {
    border: 2px solid black
}

table td,
th {
    padding: .25rem;
    border: 2px solid black
}

.id-selected {
    font-weight: 600;
    text-decoration: underline;
    color: rgb(56, 56, 56)
}

.category-selected {
    font-weight: 600;
    text-transform: uppercase;
}
</style>