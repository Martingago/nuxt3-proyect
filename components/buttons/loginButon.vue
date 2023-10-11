<template>
        <div class="position-relative d-flex">
            <!-- Boton de iniciar sesion -->
            <button type="button" v-if="!mobile" class="btn  btn-form m-auto" @click="navigateTo('/login')" @mouseover="showPopOver = true"
                @mouseleave="showPopOver = false">Iniciar
                sesion
            </button>
            <!-- Submenu iniciar sesion/crear cuenta -->
            <ButtonsSubLogin v-if="showPopOver || mobile" @mouseenter="showPopOver = true" @mouseleave="showPopOver = false"
                v-bind:class="{'mobile' : mobile, 'desktop shadow' : !mobile}" color-font="white"></ButtonsSubLogin>
        </div>
</template>


<script setup>

const props = defineProps({
    colorProp: String
});

const showPopOver = ref(false);
const mobile = ref(false);
const updateWidth = () => {
    console.log(mobile.value)
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
    transform: translate(50%, 30%);
    z-index:1;
}

@media screen and (max-width: 992px) {
  .btn-form{
    width: 220px
  }
}



</style>