<template>
    <div class="contenedor-form">
        <form @submit.prevent="signIn" class="d-flex flex-column gap-2 p-3 m-auto container shadow rounded">
            <h2 class="text-center">Iniciar sesión</h2>
            <span>
                <label for="formEmail" class="form-label m-0">Dirección de email:</label>
                <input type="email" autocomplete="username" v-model="email" class="form-control" id="formEmail"
                    placeholder="Email">
            </span>
            <span>
                <label for="formPassword" class="form-label m-0">Contraseña:</label>
                <input type="password" v-model="password" autocomplete="current-password" id="formPassword"
                    class="form-control" placeholder="Contraseña" aria-describedby="passwordHelpBlock">
            </span>
            <div class="alert-user d-flex justify-content-center w-100">
                <p v-if="invalidData" class="alert alert-danger p-0 m-0 text-center w-100" role="alert">
                    Datos de usuario incorrectos
                </p>
            </div>
            <button class="btn btn-primary"> Iniciar sesión</button>
        </form>

    </div>
</template>

<script setup>

const router = useRouter();
const email = ref("");
const password = ref("");
const invalidData = ref(false);

const signIn = async () => {
    const credentials = await signInUser(email.value, password.value)
    if (credentials) {
        
        router.back();
        return credentials;
    } else {
        invalidData.value = true;
    }


}

</script>

<style scoped>

.alert-user{
height: 26px;
}
.contenedor-form {
    width: 350px;
}

.form-label {
    font-weight: 600;
}
</style>