<template>
<footer class="footer-component bg-dark p-4" data-bs-theme="dark">
    <nav class="container d-flex flex-column flex-lg-row  py-0 mx-md-auto">
        <ul class="d-flex align-items-center justify-content-center justify-content-lg-start flex-grow-1 mb-0">
          <li >
            <NuxtLink class="text-light fs-2" to="/"><img class="brand img-fluid" src="/img/BRAVUS-white.svg" alt="logo de la empresa BRAVUS"></NuxtLink>
          </li>
        </ul>
      
        <div class="flex-grow-1">
          <h3 class="text-light fs-5 mb-1">Legal:</h3>
          <ul>
            <li>
              <NuxtLink class="text-light" to="/aviso-legal" target="_blank"> Aviso legal</NuxtLink>
              <line-separator/>
            </li>
            <li>
              <NuxtLink class="text-light" to="/aviso-legal" target="_blank"> Términos y privacidad</NuxtLink>
              <line-separator/>
            </li>
          </ul>
        </div>

        <div class="flex-grow-1">
          <h3 class="text-light fs-5 mb-1">Tienda:</h3>
          <ul class="list-footer mb-0">
            <li>
              <NuxtLink class="text-light" to="/">Ver productos</NuxtLink>
              <line-separator/>
            </li>
            <li>
              <NuxtLink class="text-light" to="/">In-ear</NuxtLink>
              <line-separator/>
            </li>
            <li>
              <NuxtLink class="text-light" to="/">Auriculares</NuxtLink>
              <line-separator/>
            </li>
            <li>
              <NuxtLink class="text-light" to="/">Altavoces</NuxtLink>
              <line-separator/>
            </li>
          </ul>
        </div>

        <div class="flex-grow-1">
          <h3 class="text-light fs-5 mb-1">Contacto:</h3>
          <ul class="mb-0">
            <li>
              <NuxtLink class="d-flex align-items-center text-light" to="https://www.linkedin.com/in/mart%C3%ADn-gago-chor%C3%A9n-6b1814241/" target="_blank"> <font-awesome-icon class="footer-icon" :icon="['fab', 'linkedin']" />Martin Gago</NuxtLink>
            </li>
            <li>
              <NuxtLink class="d-flex align-items-center text-light" href="mailto:gagochorenmartin@gmail.com"> <font-awesome-icon class="footer-icon" :icon="['fas', 'envelope']" />Envíame un Correo</NuxtLink>
            </li>
          </ul>
        </div>
    </nav>
</footer>

</template>
<style scoped>
  .brand{
    width: 200px
  }


  .list-footer{
    display: grid;
    grid-template-columns: auto auto;
    justify-content: start;
    gap: 0 2rem;
  }

  .footer-component nav ul li a:hover{
    text-decoration: underline !important;
  }

  .footer-icon{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 22px;
    margin-right: .2rem;
  }
  /* col d-flex flex-column  gap-1 gap-md-3 align-items-center justify-content-center justify-content-md-end */

</style>
