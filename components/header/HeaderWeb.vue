<template>
  <!-- Navegador -->
  <nav class="navbar bg-dark sticky-top navbar-expand-lg w-100 p-0" data-bs-theme="dark">
    <div class="container-fluid p-0">
      <div class="container-main-el mx-3 d-flex justify-content-between align-items-center">
        <NuxtLink class="navbar-brand fs-2 order-first px-3" to="/"><img src="/img/BRAVUS-white.svg" class="img-fluid"
            alt="logo BRAVUS"></NuxtLink>

        <span class="d-flex">
          <div id="shortBtnChart">
            <headerButtonsAddToChart></headerButtonsAddToChart>
          </div>
          <button class="btn border-0 navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </span>
      </div>

      <!-- Botones de navegacion -->
      <div class="collapse navbar-collapse w-100 m-auto mx-lg-3 justify-content-lg-end" id="navbarSupportedContent">

        <ul class="navbar-nav align-items-center align-items-lg-stretch gap-1">
          <li>
            <NuxtLink to="/" class="btn-navbar">Inicio</NuxtLink>

          </li>
          <hr>
          <li v-if="isAdmin">
            <NuxtLink to="/admin" class="btn-navbar">Admin</NuxtLink>
          </li>
          <hr v-if="isAdmin">
          <li class="position-relative">
            <HeaderButtonsCategoryButton @mouseenter="submenuCategorias = true" @mouseleave="submenuCategorias = false">
            </HeaderButtonsCategoryButton>
            <HeaderSubmenusCategoriasSubmenu v-if="submenuCategorias" @mouseenter="submenuCategorias = true"
              @mouseleave="submenuCategorias = false"></HeaderSubmenusCategoriasSubmenu>
          </li>
          <hr>
          <li v-if="!userStore.auth" class="position-relative">
            <!-- Boton de login -->
            <ButtonsLoginButon colorProp="white"></ButtonsLoginButon>
          </li>
          <li v-else class="position-relative">
            <!-- boton cerrar sesion -->
            <HeaderButtonsMyAccount @mouseenter="submenuMyAccount= true" @mouseleave="submenuMyAccount = false"></HeaderButtonsMyAccount>
            <HeaderSubmenusMyAccountSubmenu v-if="submenuMyAccount" @mouseenter="submenuMyAccount = true" @mouseleave="submenuMyAccount = false"></HeaderSubmenusMyAccountSubmenu>
          </li>
          <hr>
          <li id="longBtnChart">

          </li>
        </ul>
      </div>
    </div>
  </nav>

  <OffCanvasChart></OffCanvasChart>
</template>

<script setup>

import { useUserStore } from '~~/store/authUser';
import OffCanvasChart from './offCanvasChart.vue';

const userStore = useUserStore();
const isAdmin = ref(false);
onBeforeMount(() => {
  const navLinks = document.querySelectorAll('.navbar-nav .btn');
  const navbarToggler = document.querySelector('.navbar-toggler');
  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
      if (navbarToggler.getAttribute('aria-expanded') === 'true') {
        navbarToggler.click();
      }
    });
  });
})


const submenuCategorias = ref(false); // muestra el submenu de las categorias
const submenuMyAccount = ref(false) // muestra el submenu de mi cuenta

</script>


<style scoped>
.container-main-el,
.navbar {
  width: auto;
  height: var(--height-headerweb-lg);
}

.navbar-brand {
  width: 200px;
}

.navbar-brand img {
  color: white;
}

.navbar-nav li {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-fluid {
  max-width: 1400px;
}

.navbar-toggler:not(:disabled):not(.disabled):focus {
  outline: none;
  box-shadow: none;
}

hr {
  display: none;
}

@media screen and (min-width: 992px) {
  .navbar-nav li {
    width: 130px;
  }
}



@media screen and (max-width: 991px) {

  .container-main-el,
  .navbar {
    height: var(--height-headerweb-md);
    width: 100%;
  }

  .btn-form {
    width: 220px;
    background-color: var(--color-dark);
  }


  .navbar-nav {
    height: calc(100vh - var(--height-headerweb-md));
    background-color: var(--color-dark);
    padding-top: 1rem;
  }

  hr {
    display: block;
    width: 60%;
    height: 1px;
    color: white;
    background-color: white;
    margin: .4rem auto;
    border: none;
    outline: none;
  }

}
</style>