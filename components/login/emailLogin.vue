<template>
    <div class="contenedor-form">
        
        <form  @submit.prevent="signIn" class="d-flex flex-column gap-2 p-3 m-auto container shadow rounded">
            <h2 class="text-center">Iniciar sesión</h2>
            <span>
                <label for="formEmail" class="form-label m-0">Dirección de email:</label>
                <input type="email" v-model="email" class="form-control" id="formEmail" placeholder="Email">
            </span>
            <span>
                <label for="formPassword"  class="form-label m-0">Contraseña:</label>
                <input type="password" v-model="password" id="formPassword" class="form-control" placeholder="Contraseña"
                    aria-describedby="passwordHelpBlock">
            </span>

            <button class="btn btn-primary mt-4"> Iniciar sesión</button>
        </form>
        
    </div>
</template>

<script setup>

//Iniciar sesion:
//const email = "holdf@gmail.com";
//const password = "holahola";

const email = ref("");
const password = ref("");
const signIn = async () => {
    console.log(email.value, password.value)
    const credentials = await signInUser(email.value, password.value)
    console.log("sesion iniciada:", credentials);
}

</script>

<style scoped>
.contenedor-form {
    width: 350px;
}

.form-label{
    font-weight: 600;
}
</style>