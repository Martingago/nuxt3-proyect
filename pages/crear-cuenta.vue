<template>
        <div class="d-flex justify-content-center align-itmes-center p-3 p-md-5">
            <formCreateAccount></formCreateAccount>
        </div>
</template>

<script setup>
definePageMeta({
    layout: "simple",
});

useHead(
    {
        title: "BRAVUS - Crear cuenta",
        meta: [
            {
                name: 'description',
                content: 'BRAVUS: Crea tu cuenta y realiza todas tus compras!'
            }

        ]
    }    
);



</script>