<template>
  <nav class="navbar bg-dark fixed-top navbar-expand-lg p-5" data-bs-theme="dark">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand fs-2 order-first " to="/">Audiophile</NuxtLink>
      <button class="btn border-0 navbar-toggler ms-auto order-first" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div v-if="error">

        </div>
        <ul  class="navbar-nav bg-dark m-auto ms-auto mb-2 mb-lg-0 gap-3" v-else>
          <li class="nav-item m-auto" v-for="producto in productos" :key="producto.id">
            <NuxtLink class="nav-link" :to="`${producto.titulo}`" :producto="producto">{{ producto.titulo }}</NuxtLink>
          </li>
        </ul>
      </div>
      <NuxtLink class="navbar-brand fs-5 order-first order-lg-last" to="/"><font-awesome-icon
          :icon="['fas', 'cart-shopping']" /></NuxtLink>
    </div>
  </nav>
</template>

<script setup>

const productoData = ref([]);


const { data: p, error, pending } = await useFetch('/api/products');
console.log(p, error)
const productos = toRaw(p.value.productos.productos);

</script>


<style scoped>
.navbar {
  z-index: 999;
}

.container-fluid {
  height: 54px;
}

@media screen and (max-width: 600px) {
  .navbar {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }

}

@media screen and (min-width: 992px) {
  .container-fluid {
    max-width: 70%;
    font-size: 1.2rem;
  }
}

.navbar-toggler:not(:disabled):not(.disabled):focus {
  outline: none;
  box-shadow: none;
}
</style>