<template>
    <div class="contenedor-form">

        <form @submit.prevent="createAccount" class="d-flex flex-column gap-2 p-3 m-auto container shadow rounded">
            <h2 class="text-center">Crear cuenta</h2>
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

            <span>
                <label for="formPassword2" class="form-label m-0">Confirmar contraseña:</label>
                <input type="password" v-model="password2" autocomplete="current-password" id="formPassword2"
                    class="form-control" placeholder="Contraseña" aria-describedby="passwordHelpBlock">
            </span>
            <div class="error-section">
                <p v-if="err" class="alert alert-danger m-0 p-0 text-center" role="alert">
                    {{ alerta }}
                </p>
            </div>

            <div class="d-flex flex-row-reverse gap-2 justify-content-center align-items-center">
                <p class="terms-txt mb-0">Al continuar acepto los <NuxtLink class="link-terms">terminos y condiciones
                    </NuxtLink>
                </p>
                <input type="checkbox" v-model="acceptTerms" name="accept-terms" id="check-terms">
                
            </div>
            <button class="btn btn-warning" :disabled="!acceptTerms"> Crear cuenta</button>
            
        </form>
        <div class="d-flex gap-2 justify-content-center mt-2">
            <p>¿Ya tienes una cuenta?</p>
            <NuxtLink class="link-terms" to="/login">Inicia sesión</NuxtLink>
        </div>

    </div>
</template>

<script setup>

const err = ref(false);
const alerta = ref("");
const email = ref("");
const password = ref("");
const password2 = ref("");
const acceptTerms = ref(true)

const checkPassword = () => {
    if (password.value === password2.value) { return true; }
}


const createAccount = async () => {
    if (checkPassword()) {

        if (password.value.length >= 7) {
            const credentials = await createUser(email.value, password.value);
    console.log(credentials)
        }
        else {
            err.value = true;
            alerta.value = "Mínimo 7 caraceteres obligatorios"
        }

    } else {
        err.value = true;
        alerta.value = "Las contraseñas no coinciden."
    }
    
}

</script>

<style scoped>

.error-section{
    height: 20.8px;
}

.alert-danger{
    font-size: .8rem;
}

.contenedor-form {
    width: 350px;
}

.form-label {
    font-weight: 600;
}

.terms-txt {
    font-size: .9rem;
}

.link-terms {
    text-decoration: underline !important;
    cursor: pointer;
    color: rgb(255, 166, 0);
}
</style>

