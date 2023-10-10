<template>
    <ClientOnly>
        <teleport :to="isSmallScreen ? '#shortBtnChart' : '#longBtnChart'" >
            <button class="btn-carrito" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample">
                <font-awesome-icon :icon="['fas', 'cart-shopping']" />{{ btnContent }}
            </button>
        </teleport>
    </ClientOnly>
</template>

<script setup>

const isSmallScreen = ref(false);
const btnContent = ref("Cesta")
//Detecta un cambio de pantalla
const updateWidth = () => {
    isSmallScreen.value = window.innerWidth <992;
    if(window.innerWidth < 492){
        btnContent.value = "";
    }else{
        btnContent.value = "Cesta";
    }
    
}

onMounted( () => {
    updateWidth(); // Llama a updateWidth() para obtener el tamaño inicial de la ventana
    window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
})



</script>

<style scoped>
.btn-carrito {
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 1rem;
}

.btn-carrito svg {
  font-size: 1.3rem;
  margin-right: .3rem;
}
</style>