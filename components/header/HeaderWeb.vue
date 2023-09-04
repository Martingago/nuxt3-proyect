<template>
  <!-- Navegador -->
  <nav class="navbar bg-dark fixed-top navbar-expand-lg p-5" data-bs-theme="dark">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand fs-2 order-first " to="/">Audiophile</NuxtLink>

      <button class="btn border-0 navbar-toggler ms-auto order-first" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Botones de navegacion -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav bg-dark  mb-2 mb-lg-0 gap-3">
          <NuxtLink to="/">Inicio</NuxtLink>
          <NuxtLink to="/productos">Productos</NuxtLink>
          <ButtonsLogOutButon v-if="props.userData"></ButtonsLogOutButon>
          <ButtonsLoginButon v-else></ButtonsLoginButon>
          <button class="btn-carrito" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" />Cesta
          </button>
        </ul>
      </div>

    </div>
  </nav>

  <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header position-relative">
      <button type="button" class="btn-close position-absolute" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      <h5 class="offcanvas-title w-100 text-center" id="offcanvasExampleLabel">Carrito de compra</h5>
    </div>
    
    <div class="offcanvas-body">
      <div>
        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
      </div>
      <div class="dropdown mt-3">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
          Dropdown button
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  userData: Object
})
</script>


<style scoped>

.offcanvas{
  width: 300px;
}

.navbar {
  z-index: 999;
}

.navbar-toggler:not(:disabled):not(.disabled):focus {
  outline: none;
  box-shadow: none;
}

.btn-carrito{
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 1rem;
}
  .btn-carrito svg{
    font-size: 1.3rem;
    margin-right: .3rem;
  }


</style>