<template>
        <headset></headset>
        <div class="container d-grid gap-4">
            <carrousel-product-component></carrousel-product-component>
            <productSpotLight></productSpotLight>
            <productBackdrop></productBackdrop>
            <ProductShowCase></ProductShowCase>
            <mediaBlock></mediaBlock> 
        </div>
  
</template>

<script setup>


useHead(
    {
        title: "BRAVUS - Los mejores equipos de sonido del mercado",
        meta: [
            {
                name: 'description',
                content: 'BRAVUS: Descubre el verdadero sonido de alta calidad. Ofrecemos equipos de sonido excepcionales a precios inmejorables. Experimenta la perfección auditiva con nuestros productos. ¡Entra y siente la diferencia!'
            }

        ]
    }    
);

</script>
