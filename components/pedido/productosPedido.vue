<template>
    <section class="myaccount-container container my-4">
        <!-- Formulario -->
        <UserDetails></UserDetails>

        <div class="container-listchart shadow rounded border border-2 d-flex justify-content-center">
            <loading  v-if="!userStore?.loaded"></loading>
            <listItemsInChart v-else></listItemsInChart>
        </div>
    </section>
</template>
<script setup>
import { useUserStore } from "~~/store/authUser";
const userStore = useUserStore();

</script>

<style scoped>
.myaccount-container {
    display: grid;
    grid-template-columns: 1fr auto;
    justify-self: center;
    align-self: center;
    gap: 1rem;
    max-width: 1150px;
}

.container-listchart{
    max-width: 400px;
    min-width: 350px;
    width:100%;
    height: 646.42px;
}

@media screen and (max-width: 992px) {
    .myaccount-container {
        grid-template-columns: 1fr;
        margin: 1rem;
    }
    .container-listchart{
        max-width: none;
        height: auto;
        overflow: auto;
        min-width: auto;
    }
}

@media screen and (max-width: 592px) {
    .myaccount-container {
        margin: .5rem;
    }
}
</style>