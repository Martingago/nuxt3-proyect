<template>
        <div class="m-auto d-flex flex-column justify-content-center align-items-center" v-if="loading">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p>Cargando...</p>
        </div>

        <div v-else class="m-auto">
            
                <product-info v-if="existe"  :product="data"></product-info>

            <div class="m-auto d-flex flex-column justify-content-center align-items-center" v-else>
                <p>Error 404, el producto no existe! :(</p>
                <nuxt-link class="btn btn-dark" to="/">Volver al inicio</nuxt-link>
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
    });

onMounted(async () => {
    data.value = await getProductByAtribute("productos", "slug", id);
    if (data.value) {
        head.value = data.value.nombre_articulo
        loading.value = false
    } else {
        loading.value = false;
        existe.value = false
    }
})

</script>
