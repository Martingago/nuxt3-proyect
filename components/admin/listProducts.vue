<template>
    <section class="d-flex flex-column gap-3">
        <table v-if="loading">
            <thead>
                <tr>
                    <th>Opciones</th>
                    <th>Nombre</th>
                    <th>Stock</th>
                    <th>Precio</th>
                    <th>Descuento</th>
                    <th>Marca</th>
                </tr>
            </thead>
            <tr v-for="producto in store.productos" :key="producto.id" class="alert"
                :class="{ 'alert-success': producto.stock_articulo > 10, 'alert-warning': producto.stock_articulo <= 10, 'alert-danger': producto.stock_articulo == 0 }">
                <td class="options">
                    <button class="button m-1" data-bs-toggle="modal" data-bs-target="#deleteModal"
                        @click="handleClick(producto, 'delete')">
                        <font-awesome-icon :icon="['fas', 'trash-can']" />
                    </button>
                    <button class="button m-1" data-bs-toggle="modal" data-bs-target="#addModal"
                        @click="handleClick(producto, 'edit')">
                        <font-awesome-icon :icon="['fas', 'pen']" />
                    </button>
                </td>
                <td>{{ producto.nombre_articulo }}</td>
                <td>{{ producto.stock_articulo }}</td>
                <td>{{ producto.precio_venta }}€</td>
                <td>
                    {{ producto.descuento ? producto.porcentaje_descuento : 'Sin descuento' }}
                </td>
                <td>{{ producto.nombre_marca }}</td>
            </tr>

        </table>

        <div v-else>
            <p>cargando...</p>
        </div>
    </section>
</template>


<script setup>
import { storeProducts } from '@/store/productStore.js';

const loading = ref(false);
const datos = ref([]);
const store = storeProducts();


const cargarDatos = async () => {
    await store.getProductData("productos");
    loading.value = true;
    console.log(store.productos[0])
}
cargarDatos();

const emit = defineEmits(['emit-data']);
const selectedItem = ref({});
const handleClick = (object, value) => {

    selectedItem.value = object;
    console.log(selectedItem.value)
    emit('emit-data', selectedItem.value)
}





</script>

<style scoped>
table {
    border: 2px solid black
}

.options {
    width: 96px
}

.button {
    display: inline-flex;
    width: 35px;
    height: 35px;
    justify-content: center;
    align-items: center;
}

table td,
th {
    padding: .25rem;
    border: 2px solid black
}

.id-selected {
    font-weight: 600;
    text-decoration: underline;
    color: rgb(56, 56, 56)
}

.category-selected {
    font-weight: 600;
    text-transform: uppercase;
}
</style>