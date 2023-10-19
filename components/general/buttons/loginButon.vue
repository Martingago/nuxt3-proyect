<template>   
            <!-- Boton de iniciar sesion -->
            <NuxtLink to="/login" v-if="!mobile" class="btn-navbar" @mouseover="showPopOver = true"
                @mouseleave="showPopOver = false">Iniciar
                sesion
            </NuxtLink>
            <!-- Submenu iniciar sesion/crear cuenta -->
            <SubLogin v-if="showPopOver || mobile" @mouseenter="showPopOver = true" @mouseleave="showPopOver = false"
                v-bind:class="{'mobile' : mobile, 'desktop shadow' : !mobile}" color-font="white"></SubLogin>
</template>


<script setup>

const props = defineProps({
    colorProp: String
});

const showPopOver = ref(false);
const mobile = ref(false);
const updateWidth = () => {
    return window.innerWidth < 992 ? mobile.value =true : mobile.value = false
}

onMounted(()=> {
  mobile.value =   updateWidth();
 addEventListener('resize', updateWidth)
})

</script>

<style scoped>

.btn-form{
    margin: auto;
    width: 120px;
}
.btn-form:hover{
    color: white;
}

/* clase para Mobile */
.mobile{
    width: 220px;
    background-color: transparent;
    box-shadow: none;
    margin: auto;
}
/* clase para Deskstop */
.desktop{
    width: 220px;
    background-color: rgb(32, 32, 32);
    position: absolute;
    right: 50%;
    top:100%;
    transform: translateX(50%);
    z-index:1;
}

@media screen and (max-width: 992px) {
  .btn-form{
    width: 220px
  }
}



</style>