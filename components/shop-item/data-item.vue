<template>
    <div class="data-product d-flex flex-column p-2 justify-content-center align-itemsm-md-center align-items-lg-left">
        <h2 class="text-uppercase fw-bold fs-1">xx99 mark ii <br> headphones</h2>
        <p class="fs-5">Los nuevos XX99 auriculares son el pináculo del audio digital. Redefine la experiencia de unos auriculares
            premium reproduciendo el balanceado, profundo y preciso sonido con calidad de estudio de grabación
        </p>


        <div class="price-data-product">
            <p class="fs-5 fw-bold">{{ precioTotal }}</p>
            <shop-item-btn-item-count class="btn-cant" @update:count="calculo"></shop-item-btn-item-count>
            <button class="text-light">Añadir al carrito</button>
        </div>

    </div>
</template>

<script setup>

const precio = 1999.00;
let precioTotal = ref(precio);

const calculo = (value) => {
    precioTotal.value = precio * value;
}

</script>



<style scoped>

.price-data-product{
    display:grid;
    grid-template-columns: auto auto;
}

.price-data-product p{
    grid-column: 1 / 3;
}

@media screen and (max-width: 992px) {
    .price-data-product p {
       grid-row: 1 / 2;
       grid-column:  2 / 3;
       text-align: right;
    }
    .price-data-product .btn-cant{
        
       grid-row: 1 / 2

    }

    .price-data-product button{
        margin-top: 1rem;
        grid-column: 1 / 3;
    }
}

/* @media screen and (min-width: 1250px) {
    .data-product{
        max-width: 450px;
    }
} */

button {
    background-color: rgb(230, 150, 75);
}
</style>



