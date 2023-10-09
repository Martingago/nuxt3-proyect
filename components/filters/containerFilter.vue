
<template>
    <!-- Barra navegacion altas resoluciones -->
    <div class="btn-open-filter w-100 shadow rounded p-1 gap-2">
        <div class="position-relative flex-grow-1">
            <input type="text" class="input-search pr-2 w-100 rounded" name="buscarProducto" id="buscarProducto"
                placeholder="Buscar producto">
            <button class="btn-search btn h-100 position-absolute right-0" aria-label="Buscar"> <font-awesome-icon
                    :icon="['fas', 'magnifying-glass']" /></button>
        </div>
        <button class="btn-filters btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">Filtros <font-awesome-icon :icon="['fas', 'filter']" /> </button>
    </div>

    <!-- Modal offcanvas -->
    <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
        aria-labelledby="staticBackdropLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div id="offcanvas-tp">
                
            </div>
        </div>
    </div>

    <div id="aside-tp">
    </div>

    <!-- Filtro de búsqueda -->
    <FiltersUserFilterForm></FiltersUserFilterForm>
</template>



<style scoped>
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

.container-filters {
    display: none;
}

.btn-open-filter .input-search {
    height: 37.6px;
}


@media screen and (min-width: 1109px) {
    .btn-open-filter {
        display: none;
    }

    .container-filters {
        display: block;
    }
}


@media screen and (max-width: 992px) {
    .btn-open-filter {
        top: calc(var(--height-headerweb-md) + 5px)
    }
}

@media screen and (max-width: 355px) {
    .btn-open-filter {
        flex-direction: column;
    }
}
</style>