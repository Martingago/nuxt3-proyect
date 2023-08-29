<template>
    <button class="position-relative" @click="signIn"  @mouseover="mostrarPopOver" @mouseout="quitarPopOver" >Iniciar sesion</button>

    <div class="submenu-iniciar-sesion p-2 bg-body-tertiary shadow rounded position-absolute">
        <button>Identificarse</button>
        <button>Crear cuenta</button>
    </div>
</template>


<script setup>

//Iniciar sesion:
const signIn = async () => {
  const email = "holdf@gmail.com";
  const password = "holahola";
  const credentials = await signInUser(email, password)
  console.log(credentials);
}

const mostrarPopOver = () => {
    console.log("mostrar")
}

const quitarPopOver = () => {
    console.log("quitar")
}


</script>

<style scoped>

.submenu-iniciar-sesion{
    bottom: 0;
    right: 0%;
    transform: translateX(-50%)
}
  
</style>