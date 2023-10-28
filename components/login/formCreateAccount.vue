<template>
    <div class="contenedor-form">

        <form @submit.prevent="createAccount"
            class="d-flex flex-column gap-2 p-3 m-auto container shadow rounded position-relative">
            <h2 class="text-center">Crear cuenta</h2>
            <span>
                <label for="formName" class="form-label m-0">Nombre de usuario:</label>
                <input type="text" autocomplete="username" class="form-control" aria-describedby="usernameHelpBlock"
                    name="formName" id="formName" placeholder="Nombre" v-model="user_public.user_name" required="true">
            </span>
            <span>
                <label for="formEmail" class="form-label m-0">Dirección de email:</label>
                <input type="email" autocomplete="username" v-model="user_private.user_email" class="form-control"
                    id="formEmail" placeholder="Email" required="true">
            </span>

            <span>
                <label for="formEmailConfirm" class="form-label m-0">Confirmar dirección de email:</label>
                <input type="email" autocomplete="username" v-model="user_private.user_confirm_email" class="form-control"
                    id="formEmailConfirm" placeholder="Confirmar Email" required="true">
            </span>

            <span>
                <label for="formPassword" class="form-label m-0">Contraseña:</label>
                <input type="password" v-model="user_private.user_password" autocomplete="current-password" id="formPassword"
                    class="form-control" placeholder="Contraseña" aria-describedby="passwordHelpBlock" required="true">
            </span>

            <span>
                <label for="formPassword2" class="form-label m-0">Confirmar contraseña:</label>
                <input type="password" v-model="user_private.user_confirm_password" autocomplete="current-password"
                    id="formPassword2" class="form-control" placeholder="Contraseña" aria-describedby="passwordHelpBlock"
                    required="true">
            </span>
            <div class="error-section">
                <p v-if="userAlert.status" class="alert alert-danger h-100 d-flex justify-content-center align-items-center m-0 p-0 text-center" role="alert">
                    {{ userAlert.message }}
                </p>
            </div>

            <div class="d-flex flex-row-reverse gap-2 justify-content-end align-items-center">
                <label for="receibe-emails" class="promos-txt">Deseo recibir e-mails de ofertas y promociones</label>
                <input type="checkbox" v-model="user_public.accept_promotions" name="receibe-emails" id="receibe-emails">
            </div>
            <div class="d-flex flex-row-reverse gap-2 justify-content-center align-items-center">
                <p class="terms-txt mb-0">Al continuar acepto los <NuxtLink to="terminos-y-condiciones" target="_blank" class="link-terms">terminos y condiciones
                    </NuxtLink>
                </p>
                <input type="checkbox" v-model="user_public.accept_terms" name="accept-terms" id="check-terms">
            </div>


            <button class="btn btn-warning" :disabled="!user_public.accept_terms"> Crear cuenta</button>
            <!-- Spinner -->
            <div v-if="loading"
                class="loading  position-absolute d-flex flex-column w-100 h-100 justify-content-center align-items-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p>Creando cuenta</p>
            </div>
        </form>

        <div class="d-flex gap-2 justify-content-center mt-2">
            <p>¿Ya tienes una cuenta?</p>
            <NuxtLink class="link-terms" to="/login">Inicia sesión</NuxtLink>
        </div>

    </div>
</template>

<script setup>

import { manageCreateUsers } from '~~/store/createUser';
import { useUserStore } from '~~/store/authUser';


const userStore = useUserStore(); //store que permite establecer auth del usuario en la página
const storeCreateUser = manageCreateUsers(); //Store que permite crear un usuario

storeCreateUser.initUserPrivate(); //Se inicializa un usuario vacio (email, contraseña)
storeCreateUser.initUserPublic(); //Se inicialzia la infomación publica del usuario

const user_private = ref(storeCreateUser.user_private); //Informacion para crear un usuario mediante el auth de google;
const user_public = ref(storeCreateUser.user_public); //Informacion para crear una referencia en la BBDD de firebase
const userAlert = ref(storeCreateUser.alert);

const loading = ref(false);

//Crea una cuenta
const createAccount = async () => {
    userAlert.value.status = false;
    if (storeCreateUser.checkLenghtPassword()) {
        if (storeCreateUser.checkEmail()) {
            if (storeCreateUser.checkPassword()) {
                loading.value = true;
                //crear cuenta
                storeCreateUser.setPublicEmail(storeCreateUser.user_private.user_email); //Establecemos en el email publico el valor de email
                const result = await createUser(user_private.value, user_public.value);
                if (result === true) {
                    storeCreateUser.initUserPrivate(); //se resetean los datos privados
                    storeCreateUser.initUserPublic(); //Se resetean los datos publicos
                    //Regirige al usuario a otro apartado web
                    userStore.pushUser();
                } else {
                    userAlert.value.status = true;
                    userAlert.value.message = result;
                }
                loading.value = false;
            }
        }
    }
}

</script>

<style scoped>
.error-section {
    height: 40.38px;
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

.promos-txt {
    font-size: .8rem;
}

.link-terms {
    text-decoration: underline !important;
    cursor: pointer;
    color: rgb(255, 166, 0);
}

.loading {
    background-color: white;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
}
</style>

