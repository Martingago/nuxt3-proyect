<template>
    <section class="d-flex flex-column gap-3">
        <h2 class="text-center">Listado de Categorias de producto</h2>
        <table v-if="loading" class="m-3">
            <thead>
                <tr>
                    <th>Categoria</th>
                    <th>Descripcion categoria</th>
                </tr>
            </thead>
            <tbody>
                <!-- Agrega filas aquí -->
                <tr v-for="item in data" :key="item.id" class="elemento-categoria">
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
</template>

<script setup>

const data = ref({});
const loading = ref(false);

onMounted(async () => {
    console.log(data.value)
    data.value = await listarCategoriaProducto();
    loading.value = true;
})

</script>

<style scoped>
table {
    border: 2px solid black
}

table td,
th {
    height: 20px;
    padding: .25rem;
    border: 2px solid black
}
</style>