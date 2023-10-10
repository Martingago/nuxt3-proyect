<template>
  <!-- Navegador -->
  <nav class="navbar bg-dark sticky-top navbar-expand-lg w-100 p-0" data-bs-theme="dark">
    <div class="container-fluid p-0">
      <div class="container-main-el mx-3 d-flex justify-content-between align-items-center">
        <NuxtLink class="navbar-brand fs-2 order-first px-3" to="/">Audiophile</NuxtLink>

        <span class="d-flex">
         <div id="shortBtnChart">

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

        <ul class="navbar-nav align-items-center  gap-1">
          <li>
            <NuxtLink to="/" class="btn btn-form">Inicio</NuxtLink>
          </li>
          <hr>
          <li v-if="isAdmin">
            <NuxtLink to="/admin" class="btn btn-form">Admin</NuxtLink>
          </li>
          <hr v-if="isAdmin">
          <li>
            <NuxtLink to="/productos" class="btn btn-form">Productos</NuxtLink>
          </li>
          <hr>
          <li>
            <ButtonsLogOutButon v-if="isAuth"></ButtonsLogOutButon>
            <ButtonsLoginButon v-else></ButtonsLoginButon>
          </li>
          <hr>
          <li id="longBtnChart">

          </li>
        </ul>
      </div>
    </div>
  </nav>
  <ButtonsAddToChartBtn></ButtonsAddToChartBtn>
  <OffCanvasChart></OffCanvasChart>
</template>

<script setup>
import { isAuth } from '~~/store/authUser';
import OffCanvasChart from './offCanvasChart.vue';

const isAdmin = false;
const props = defineProps({
  userData: Object
})

onMounted(()=>{
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

</script>


<style scoped>
.container-main-el,
.navbar {
  width: auto;
  height: var(--height-headerweb-lg);
}

.container-fluid{
  max-width: 1400px;
}

.navbar-toggler:not(:disabled):not(.disabled):focus {
  outline: none;
  box-shadow: none;
}

hr {
  display: none;
}

.btn-form {
  width: 120px;
  background-color: transparent;
}

.btn-form:hover {
  color: white;
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