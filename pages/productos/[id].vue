<template>
    <div class="text-center m-lg-4 m-sm-2 shadow rounded">
        <div v-if="loading">
            <p>Cargando...</p>
        </div>

        <div v-else>
            <div v-if="existe">
                <product-info :product="data"></product-info>
            </div>
            <div v-else>
                <p>Error 404, el producto no existe! :(</p>
            </div>
        </div>

    </div>
</template>

<script setup>
const { id } = useRoute().params;
const data = ref({});


const loading = ref(true);
const existe = ref(true);

const head = ref('BRAVUS')
useHead(
    {
        title: head,
    } );

onMounted(async()=> {
    data.value = await getProductByAtribute("productos","slug", id);
    if(data.value){
        head.value = data.value.nombre_articulo
        loading.value = false
    }else{
        loading.value = false;
        existe.value = false
    }
    //console.log(data.value)
})

</script>

<style scoped>
.p-2{
    background-color: red;
    /* height: calc(100vh - (var(--height-headerweb-lg) + 400px)); */
}
</style>