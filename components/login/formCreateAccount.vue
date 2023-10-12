<template>
    <div class="contenedor-form">

        <form @submit.prevent="createAccount" class="d-flex flex-column gap-2 p-3 m-auto container shadow rounded">
            <h2 class="text-center">Crear cuenta</h2>
            <span>
                <label for="formName" class="form-label m-0">Nombre de usuario:</label>
                <input type="text" autocomplete="username" class="form-control" aria-describedby="usernameHelpBlock"
                    name="formName" id="formName" placeholder="Nombre" v-model="userData.user_name" required="true">
            </span>
            <span>
                <label for="formEmail" class="form-label m-0">Dirección de email:</label>
                <input type="email" autocomplete="username" v-model="userData.user_email" class="form-control"
                    id="formEmail" placeholder="Email" required="true">
            </span>

            <span>
                <label for="formEmailConfirm" class="form-label m-0">Confirmar dirección de email:</label>
                <input type="email" autocomplete="username" v-model="userData.user_confirm_email" class="form-control"
                    id="formEmailConfirm" placeholder="Confirmar Email" required="true">
            </span>

            <span>
                <label for="formPassword" class="form-label m-0">Contraseña:</label>
                <input type="password" v-model="userData.user_password" autocomplete="current-password" id="formPassword"
                    class="form-control" placeholder="Contraseña" aria-describedby="passwordHelpBlock" required="true">
            </span>

            <span>
                <label for="formPassword2" class="form-label m-0">Confirmar contraseña:</label>
                <input type="password" v-model="userData.user_confirm_password" autocomplete="current-password"
                    id="formPassword2" class="form-control" placeholder="Contraseña" aria-describedby="passwordHelpBlock" required="true">
            </span>
            <div class="error-section">
                <p v-if="userAlert.status" class="alert alert-danger m-0 p-0 text-center" role="alert">
                    {{ userAlert.message }}
                </p>
            </div>

            <div class="d-flex flex-row-reverse gap-2 justify-content-end align-items-center">
                <label for="receibe-emails" class="promos-txt">Deseo recibir e-mails de ofertas y promociones</label>
                <input type="checkbox" v-model="userData.accept_promotions" name="receibe-emails" id="receibe-emails">
            </div>
            <div class="d-flex flex-row-reverse gap-2 justify-content-center align-items-center">
                <p class="terms-txt mb-0">Al continuar acepto los <NuxtLink class="link-terms">terminos y condiciones
                    </NuxtLink>
                </p>
                <input type="checkbox" v-model="userData.accept_terms" name="accept-terms" id="check-terms">
            </div>
           

            <button class="btn btn-warning" :disabled="!userData.accept_terms"> Crear cuenta</button>

        </form>
        <div class="d-flex gap-2 justify-content-center mt-2">
            <p>¿Ya tienes una cuenta?</p>
            <NuxtLink class="link-terms" to="/login">Inicia sesión</NuxtLink>
        </div>

    </div>
</template>

<script setup>

import { manageCreateUsers } from '~~/store/createUser';

const store = manageCreateUsers();
store.initUser();
const userData = ref(store.user);
const userAlert = ref(store.alert);

const createAccount = async () => {
    if(store.checkLenghtPassword()){
        if(store.checkEmail()){
            if(store.checkPassword()){
                //crear cuenta
                const credentials = await createUser(userData.value);
                // const credentials = await createUser(userData.value.user_email, userData.value.user_password);
            }
        }
    }
}


</script>

<style scoped>
.error-section {
    height: 20.8px;
}

.alert-danger {
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
.promos-txt{
    font-size: .8rem;
}

.link-terms {
    text-decoration: underline !important;
    cursor: pointer;
    color: rgb(255, 166, 0);
}
</style>

