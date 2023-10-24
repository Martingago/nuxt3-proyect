<template>
    <section class="myaccount-container container">
        <!-- Formulario -->
        <UserDetails></UserDetails>
        
            <div>
                <loading v-if="!userStore?.loaded"></loading>
                
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

@media screen and (max-width: 992px) {
    .myaccount-container {
        grid-template-columns: 1fr;
        margin: 1rem;
    }
}

@media screen and (max-width: 592px) {
    .myaccount-container {
        margin: .5rem;
    }
}
</style>