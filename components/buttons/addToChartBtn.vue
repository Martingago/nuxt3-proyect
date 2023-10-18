<template>
    <ClientOnly>
        <teleport :to="isSmallScreen ? '#shortBtnChart' : '#longBtnChart'" >
            <button class="btn-carrito rounded w-100" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample">
                <div class="d-inline-flex position-relative">
                    <font-awesome-icon class="chart-icon " :icon="['fas', 'cart-shopping']" />
                    <p v-if="tam >0" class="chart-count position-absolute d-flex justify-content-center align-items-center">{{ tam }}</p>
                </div>    
                {{ btnContent }}      
            </button>
            
        </teleport>
    </ClientOnly>
</template>

<script setup>
import { useUserStore } from "~~/store/authUser";
const userStore = useUserStore();
const tam = ref(0);
watchEffect(() => {
  tam.value = userStore.info?.user_chart.length;
});

const isSmallScreen = ref(false);
const btnContent = ref("Cesta");


//Detecta un cambio de pantalla
const updateWidth = () => {
    isSmallScreen.value = window.innerWidth <992;
    if(window.innerWidth < 492){
        btnContent.value = "";
    }else{
        btnContent.value = "Cesta";
    }
    
}

onBeforeMount( () => {
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
  border: 1px solid transparent;
  outline: none;
  color: white;
  font-size: 1rem;
}
.btn-carrito:hover{
    background-color: var(--color-dark);
    border: 1px solid white;
}

.btn-carrito svg {
  font-size: 1.3rem;
  margin-right: .3rem;
}

button .chart-icon{
    font-size: 1.75rem;
}
.chart-count{
    top: -30%;
    right: -10%;  
    width: 25px;
    height: 25px;
    border-radius: 50%;
    color: white;
    background-color: var(--color-lightPink);
}
</style>