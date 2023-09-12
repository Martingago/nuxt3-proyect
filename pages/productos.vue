<template>
    

    <div v-if="!loading">
            <p>Cargando...</p>
        </div>
    <section v-else id="productos-container" class="container">
        <h1 class="text-center">Listado de productos</h1>
        <ProductArticleSelect   v-for="producto in data" :key="producto.id" :datoProducto="producto"></ProductArticleSelect>
    </section>
</template>

<script setup>

const data = ref([]);
const loading = ref(false)

onMounted(async () => {
   data.value = await getDataFromStore("productos");
   loading.value = true
   console.log(data.value)
})

</script>

<style scoped>
#productos-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 240px));
    justify-content: center;
    align-self: center;
    gap: 1rem;
    margin: auto;
}

#productos-container h1{
    grid-column: 1 / -1;
}

@media screen and (max-width: 767px) {
    #productos-container{
        grid-template-columns: repeat(auto-fill, minmax(200px, 230px));
    }
}

@media screen and (max-width: 500px) {
    #productos-container{
        grid-template-columns: repeat(auto-fill, minmax(150px, 170px));
        gap: .5rem
    }
}

@media screen and (max-width: 390px) {
    #productos-container{
        grid-template-columns: repeat(auto-fill, minmax(240px, 250px));
    }
    
}

</style>