<template>
    <h1>mira nuestros productos!</h1>
    <div class="productos-container">
        <article v-for="producto in data" :key="producto">
            <h3>{{ producto.nombre }}</h3>
            <p>{{ producto.descripcion }}</p>
            <p>{{ producto.precio }}</p>
            <div class="caracteristicas">
                <p v-for="caracteristica in producto.caracteristicas" :key="caracteristica">{{caracteristica }}</p>
            </div>
        </article>
    </div>
</template>

<script setup>

const data = ref();
onMounted(async () => {
   data.value = await getDataFromStore("productos")
})

</script>