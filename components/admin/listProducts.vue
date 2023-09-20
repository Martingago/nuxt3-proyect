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
            <tr v-for="producto in store.productos" :key="producto.id"
                :class="{ 'success': producto.stock_articulo > 10, 'warning': producto.stock_articulo <= 10, 'danger': producto.stock_articulo < 1 }">
                <td class="options">
                    <button class="button m-0" data-bs-toggle="modal" data-bs-target="#deleteModal"
                        @click="handleClick(producto, 'delete-product')">
                        <font-awesome-icon :icon="['fas', 'trash-can']" />
                    </button>
                    <button class="button m-0" data-bs-toggle="modal" data-bs-target="#addModal"
                        @click="handleClick(producto, 'edit')">
                        <font-awesome-icon :icon="['fas', 'pen']" />
                    </button>
                </td>
                <td>{{ producto.nombre_articulo }}</td>
                <td class="stock">{{ producto.stock_articulo }} uds</td>
                <td class="price">{{ producto.precio_venta }}€</td>
                <td class="discount">
                    {{ producto.descuento  ? producto.porcentaje_descuento + '%' : 'Sin descuento' }}
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
const emit = defineEmits(['emit-data']);


const cargarDatos = async () => {
    await store.getProductData("productos");
    loading.value = true;
    console.log("producto:", store.productos[0])
}
cargarDatos();



const selectedItem = ref({}); //datos del objeto seleccionado que se enviarán al padre

const handleClick = (object, value) => {
    selectedItem.value = {
        form_data: object,
        action: value,
        text_referencia: "Producto",
        referencia_datos: "productos"
    }
    console.log(selectedItem.value)
    emit('emit-data', selectedItem.value)
}

</script>

<style scoped>
table {
    border: 2px solid black
}

tr{
    display: grid;
    grid-template-columns: 80px 200px 55px 60px 100px auto;
    height: 30px;
    
}
/* Cabecera */
tr th{
    display: flex;
    justify-content: left;
    padding: .2rem;
    align-items: center;
    text-transform: capitalize;
    font-size: .8rem;
}
/* Elementos */
tr td{
    display: flex;
    align-items: center;
    font-size: .8rem;
    line-height: .9rem;
    overflow: hidden;
    white-space:  nowrap;
    text-overflow: ellipsis;
    padding: .2rem;
    margin: 0;
    width: 100%;
}
.options{
    gap: 3px;
}
.button {
    display: inline-flex;
    width: 25px;
    height: 25px;
    justify-content: center;
    align-items: center;
    margin: 2px;
}

table td,
th {
    border: 1px solid black
}

.success{
    background-color: #d1e7dd;
}
.warning{
    background-color: #fff3cd;
}
.danger{
    background-color: #f8d7da;
}


.stock, .price, .discount{
    justify-content: end;
}
</style>