<template>
    <div class="container-pedido-details px-2 px-md-3 py-4 shadow rounded">
        <div class="d-flex justify-content-between gap-2">
            <p class="text-center mb-2">Código del pedido: <span class="user-data">{{ pedidoDetails?.codigo_pedido }}</span></p>
            <p class="text-center mb-2">Fecha del pedido: <span class="user-data">{{ date }}</span></p>
        </div>
        <hr>
        <article>
            <h3>Información envío</h3>
            <div class="data-user-container">
                <p class="mb-1">Nombre: <span class="user-data">{{ pedidoDetails?.nombre }}</span></p>
                <p class="mb-1">Dirección: <span class="user-data">{{ pedidoDetails?.direccion_pedido }}</span></p>
                <p class="mb-1">Telefono de contacto: <span class="user-data">{{ pedidoDetails?.telefono_contacto }}</span></p>
                <p class="mb-1">Email de contacto: <span class="user-data">{{ pedidoDetails?.email_contacto }}</span></p>
            </div>
        </article>
        <hr>
        <article class="">
            <h3>Información del pedido</h3>
            
            <ul>
                <li v-for="producto in pedidoDetails?.productos_pedido" :key="producto.productID" class="product-info px-2 border border-1 rounded mb-1">
                    <p class="d-flex align-items-center justify-content-center justify-content-lg-start text-center text-lg-start user-data mb-0">{{ producto?.nombre_producto }}</p>
                    <div class=" d-flex flex-column">
                        <p class="mb-0 text-end">Precio unitario: <span class="user-data product-val">{{ producto?.price }}€</span></p>
                        <p class="mb-0 text-end">Cantidad: <span class="user-data product-val">x{{ producto?.count }}</span></p>
                    </div>
                </li>
            </ul>
            <p class="d-flex justify-content-between">Total del pedido: <span class="user-data">{{ pedidoDetails?.precio_total }}€</span></p>
            
        </article>
    </div>
</template>

<script setup>

const props = defineProps({
    pedidoDetails: Object
})

const date = ref("");
const getFormatoFecha = () => {
            let dia = props.pedidoDetails.fecha_pedido.getDate();
            let mes = props.pedidoDetails.fecha_pedido.getMonth() + 1;
            let ano = props.pedidoDetails.fecha_pedido.getFullYear();
            if (dia < 10) dia = '0' + dia;
            if (mes < 10) mes = '0' + mes;
            date.value = dia + '/' + mes + '/' + ano;
        }
    getFormatoFecha();
</script>
<style scoped>
.user-data{
    font-weight: 700;
}

.product-info{
    display: grid;
    grid-template-columns: 1fr 200px;
}



.product-val{
    display: inline-block;
    width:75px;
}

@media screen and (max-width: 992px) {
    .product-info{
        grid-template-columns: 1fr;
    }
}

</style>