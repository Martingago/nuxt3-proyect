<template>
<footer class="footer-component bg-dark p-4" data-bs-theme="dark">
    <nav class="container d-flex flex-column flex-md-row mx-md-auto" style="max-width: 70%">

        <ul class="col-auto d-flex justify-content-center align-items-center">
          <li >
            <NuxtLink class="text-light fs-2" to="/"><img class="brand img-fluid" src="/img/BRAVUS-white.svg" alt="logo de la empresa BRAVUS"></NuxtLink>
          </li>
        </ul>
      
        <ul class="col d-flex flex-column flex-md-row gap-1 gap-md-3 align-items-center justify-content-center justify-content-md-end">
          <li>
            <NuxtLink class="text-light" to="/">Inicio</NuxtLink>
          </li>
          <li>
            <NuxtLink class="text-light" to="/">Auriculares</NuxtLink>
          </li>
          <li>
            <NuxtLink class="text-light" to="/">Altavoces</NuxtLink>
          </li>
          <li>
            <NuxtLink class="text-light" to="/">In-ear</NuxtLink>
          </li>
        </ul>
    </nav>
</footer>

</template>
<style scoped>
  .brand{
    width: 200px
  }
</style>
