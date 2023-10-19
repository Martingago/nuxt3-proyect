<template>
    <div class="d-flex flex-column gap-2 mt-lg-3">

        <h3 class="text-uppercase fw-bold mb-2">Caracteristicas</h3>
        <ul class="caracteristicas-producto p-0 mb-0">
            <li v-for="caracteristica in dataProduct" :key="caracteristica" class="d-flex">
                <p class="d-flex justify-content-start align-items-start mb-2"><font-awesome-icon class="dot" :icon="['fas', 'circle']" /> </p>
                <p class="caracteristica mb-2 ">
                    {{ caracteristica.caracteristica }}
                </p>
            </li>

        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    dataProduct: Object,
    required: true
})

</script>

<style scoped>

.caracteristicas-producto{
    display: grid;
    grid-template-columns: repeat(2, auto);
}

div ul li>p:first-child {
    color: rgb(230, 150, 75);
    padding-right: .5rem;
}

.dot{
    padding-top: .65rem;
    width: 7px;
    height: 7px;
}

.caracteristica{
    text-align: left;
}

@media screen and (max-width:1399px) {
    .caracteristicas-producto{
        grid-template-columns: repeat(1, auto);
    }
}

</style>


