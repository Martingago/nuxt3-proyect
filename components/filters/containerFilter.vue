<template>
    <aside class="p-2 shadow rounded">
        <h6 class="text-center">Filtros de búsqueda</h6>
        <div class="position-relative">
            <input type="text" class="pr-2" name="buscarProducto" id="buscarProducto" placeholder="Buscar">
            <button class="btn position-absolute right-0"> <font-awesome-icon
                    :icon="['fas', 'magnifying-glass']" /></button>
        </div>
        <div class="mt-2">
            <p class="fw-600 mb-1">Precio</p>
            <div class="d-flex gap-2">
                <span class="w-100">
                    <label for="rangePrecioMinimo">De:</label>
                    <input class="w-100" type="number" name="rangePrecioMinimo" id="rangePrecioMinimo"  step="1" v-model="minValue" min="0" :max="maxValue">
                </span>
                <span class="w-100">
                    <label for="rangePrecioMaximo">Hasta:</label>
                    <input class="w-100" type="number" name="rangePrecioMaximo" id="rangePrecioMaximo" step="1" v-model="maxValue" max="999" :min="minValue">
                </span>
            </div>
        </div>
        <div class=" mt-2">
            <p class="fw-600 mb-1">Categorias:</p>
            <div v-for="categoria in categorias" :key="categoria.id">
                <input type="checkbox" :name="categoria.id" :id="categoria.id">
                <label :for="categoria.id" class="px-1">{{  categoria.nombre_categoria}}</label>
            </div>
        </div>
    </aside>
</template>

<script setup>

const minValue = ref(0);
const maxValue= ref(999);
const categorias = ref([]);

onMounted(async ()=> {
    categorias.value = await listarCategoriaProducto();
})



</script>



<style scoped>
aside {
    position: sticky;
    top: 180px;
    height: fit-content;
    width: 240px
}

#buscarProducto {
    padding-right: 2rem;
}

.fw-600{
    font-weight: 600;
}

.btn {
    width: 30px;
    height: 30px;
    padding: .25rem;
    transform: translateX(-100%);
    outline: none;
    border: none
}
</style>