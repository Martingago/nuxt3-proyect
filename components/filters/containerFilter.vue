<template>
    <!-- Barra navegacion altas resoluciones -->
    <div class="btn-open-filter w-100 shadow rounded p-1 gap-2"> 
        <div class="position-relative flex-grow-1">
            <input type="text" class="input-search pr-2 w-100 rounded" name="buscarProducto" id="buscarProducto" placeholder="Buscar producto">
            <button class="btn-search btn h-100 position-absolute right-0" aria-label="Buscar"> <font-awesome-icon
                    :icon="['fas', 'magnifying-glass']" /></button>
        </div>
        <button class="btn-filters btn btn-dark">Filtros <font-awesome-icon :icon="['fas', 'filter']" /> </button>
    </div>

    <aside  class="container-filters p-3 shadow rounded border border-1">
        <h3 class="text-center txt-h3 mb-1">Explora nuestras categorías: Auriculares, Cascos, Altavoces y más</h3>
        <div class="position-relative">
            <input type="text" class="pr-2 w-100" name="buscarProducto" id="buscarProducto" placeholder="Buscar">
            <button class="btn-search btn  position-absolute right-0" aria-label="Buscar"> <font-awesome-icon
                    :icon="['fas', 'magnifying-glass']" /></button>
        </div>
        <div class="mt-2">
            <p class="fw-600 mb-1">Precio</p>
            <div class="d-flex gap-2">
                <span class="w-100">
                    <label for="rangePrecioMinimo">De:</label>
                    <input class="w-100" type="number" name="rangePrecioMinimo" id="rangePrecioMinimo" step="1"
                        v-model="minValue" min="0" :max="maxValue">
                </span>
                <span class="w-100">
                    <label for="rangePrecioMaximo">Hasta:</label>
                    <input class="w-100" type="number" name="rangePrecioMaximo" id="rangePrecioMaximo" step="1"
                        v-model="maxValue" max="999" :min="minValue">
                </span>
            </div>
        </div>
        <div class=" mt-2">
            <p class="fw-600 mb-1">Categorias:</p>
            <div v-for="categoria in categorias" :key="categoria.id">
                <input type="checkbox" :name="categoria.id" :id="categoria.id">
                <label :for="categoria.id" class="px-1">{{ categoria.nombre }}</label>
            </div>
        </div>
        <div class="mt-2">
            <p class="fw-600 mb-1">Marcas:</p>
            <div v-for="brand in brands" :key="brand.id">
                <input type="checkbox" :name="brand.id" :id="brand.id">
                <label :for="brand.id" class="px-1">{{ brand.nombre }}</label>
            </div>
        </div>
    </aside>
</template>

<script setup>

const minValue = ref(0);
const maxValue = ref(999);
const categorias = ref([]);
const brands = ref([]);

onMounted(async () => {

    categorias.value = await listarCategoriaProducto();
    brands.value = await getDataFromStore("marca_productos");
    
})

</script>

<style scoped>
aside {
    position: sticky;
    top: calc(var(--height-headerweb-lg) + 20px);
    height: fit-content;
    width: 260px;
    z-index: 2;
    background-color: white;
}

#buscarProducto {
    padding-right: 2rem;
}

.fw-600 {
    font-weight: 600;
}

.txt-h3 {
    font-size: .8rem;
}

.btn-open-filter .input-search{
        height: 37.6px;
    }

.btn-search {
    width: 30px;
    height: 30px;
    padding: .25rem;
    transform: translateX(-100%);
    outline: none;
    border: none
}

.btn-open-filter {
    display: flex;
    grid-column: 1 / -1;
    position: sticky;
    top: calc(var(--height-headerweb-lg) + 10px);
    z-index: 2;
    backdrop-filter: blur(4px);
    background-color: rgba(174, 174, 174, 0.6);
}
.container-filters{
    display: none;
}

@media screen and (min-width: 1109px) {
    .btn-open-filter{
        display: none;
    }
    .container-filters{
        display: block;
    }
}


@media screen and (max-width: 992px) {
    .btn-open-filter{
        top: calc(var(--height-headerweb-md) + 5px)
    }
}

@media screen and (max-width: 355px) {
    .btn-open-filter{
        flex-direction: column;
    }
}

</style>