<template>
    <!-- Seccion de productos -->
    <section v-if="data.length" class="productos-container  container mb-4">
        <ProductArticleSelect v-for="producto in data" :key="producto.id" :datoProducto="producto">
        </ProductArticleSelect>
    </section>
    <!-- loading -->
    <GeneralLoading v-else></GeneralLoading>
</template>
<script setup>
const { categoria } = useRoute().params;

const data = ref([]);
onMounted(async () => {
    const identificador = await getProductByAtribute("categoria_productos", "nombre", categoria);
    data.value = await getProductsByEtiqueta("productos", identificador.id);
})


</script>

<style scoped>
.productos-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    gap: .5rem;
    align-self: center;
    /* max-width: 1400px; */
}

@media screen and (max-width: 1109px) {
    .productos-container {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

}

@media screen and (max-width: 680px) {
    .productos-container {
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
}
</style>