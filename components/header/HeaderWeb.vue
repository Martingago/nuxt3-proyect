<template>
  <nav class="navbar bg-dark fixed-top navbar-expand-lg p-5" data-bs-theme="dark">
  <div class="container-fluid">
    <NuxtLink class="navbar-brand fs-2" to="#">Audiophile</NuxtLink>
    <button class="btn border-0 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav bg-dark ms-auto mb-2 mb-lg-0 gap-3">
        <li class="nav-item m-auto">
          <NuxtLink class="nav-link active" aria-current="page" to="/">Inicio</NuxtLink>
        </li>
        <li class="nav-item m-auto">
          <NuxtLink class="nav-link" to="/home">Altavoces</NuxtLink>
        </li>
        <li class="nav-item m-auto">
          <NuxtLink class="nav-link" to="/">Auriculares</NuxtLink>
        </li>
        <li class="nav-item m-auto">
          <NuxtLink class="nav-link" to="/home">In-ear</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


</template>

<style scoped>


.navbar{
  z-index: 999;
}

.container-fluid{
  height: 54px;
}
@media screen and (max-width: 600px) {
  .navbar{
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  
}

@media screen and (min-width: 992px) {
  .container-fluid{
  max-width: 70%;
  font-size: 1.2rem;
}
}

.navbar-toggler:not(:disabled):not(.disabled):focus {
  outline: none;
  box-shadow: none;
}

</style>