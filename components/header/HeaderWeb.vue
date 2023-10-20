<template>
  <!-- Navegador -->
  <nav class="navbar bg-dark sticky-top navbar-expand-lg w-100 p-0" data-bs-theme="dark">
    <div class="container-fluid p-0">
      <div class="container-main-el mx-3 d-flex justify-content-between align-items-center">
        <NuxtLink class="navbar-brand fs-2 order-first px-3" to="/">
          <img src="/img/BRAVUS-white.svg" class="img-fluid" alt="logo BRAVUS">
        </NuxtLink>

        <div class="d-flex">
          <div id="shortBtnChart">
            <AddToChart></AddToChart>
          </div>
          <button class="btn border-0 navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>

      <!-- Botones de navegacion -->
      <div class="collapse navbar-collapse w-100 m-auto mx-lg-3 justify-content-lg-end" id="navbarSupportedContent">

        <headerList></headerList>
      </div>
    </div>
  </nav>

  <OffCanvasChart></OffCanvasChart>
</template>

<script setup>

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

</script>


<style scoped>
.navbar {
  width: auto;
  height: var(--height-headerweb-lg);
}

.navbar-brand {
  width: 200px;
}

.container-fluid {
  max-width: 1400px;
}

.navbar-toggler:not(:disabled):not(.disabled):focus {
  outline: none;
  box-shadow: none;
}

@media screen and (max-width: 991px) {

  .container-main-el,
  .navbar {
    height: var(--height-headerweb-md);
    width: 100%;
  }

  .navbar-nav {
    height: calc(100vh - var(--height-headerweb-md));
    background-color: var(--color-dark);
    padding-top: 1rem;
  }
}
</style>