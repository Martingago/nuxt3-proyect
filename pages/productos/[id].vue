<template>
    <div class="p-2 text-center m-4 shadow rounded">
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

const head = ref('Audiophile')
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