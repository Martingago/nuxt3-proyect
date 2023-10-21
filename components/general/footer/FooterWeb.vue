<template>
<footer class="footer-component bg-dark p-4" data-bs-theme="dark">
    <nav class="contenedor-footer  flex-column flex-lg-row  py-0 mx-md-auto">
        <ul class="d-flex align-items-center justify-content-center justify-content-lg-start flex-grow-1 mb-0">
          <li >
            <NuxtLink class="text-light fs-2" to="/"><img class="brand img-fluid" src="/img/BRAVUS-white.svg" alt="logo de la empresa BRAVUS"></NuxtLink>
          </li>
        </ul>
      
        <div class="flex-grow-1">
          <h3 class="text-light fs-5">Legal:</h3>
          <ul class="mb-0">
            <li>
              <NuxtLink class="text-lightgray" to="/aviso-legal" target="_blank"> Aviso legal</NuxtLink>
              <line-separator/>
            </li>
            <li>
              <NuxtLink class="text-lightgray" to="/terminos-y-condiciones" target="_blank"> Términos y privacidad</NuxtLink>
              <line-separator/>
            </li>
          </ul>
        </div>

        <div class="flex-grow-1">
          <h3 class="text-light fs-5 mb-1">Tienda:</h3>
          <ul class="list-footer mb-0">
            <li>
              <NuxtLink class="text-lightgray" to="/">Ver productos</NuxtLink>
              <line-separator/>
            </li>
            <li>
              <NuxtLink class="text-lightgray" to="/">In-ear</NuxtLink>
              <line-separator/>
            </li>
            <li>
              <NuxtLink class="text-lightgray" to="/">Auriculares</NuxtLink>
              <line-separator/>
            </li>
            <li>
              <NuxtLink class="text-lightgray" to="/">Altavoces</NuxtLink>
              <line-separator/>
            </li>
          </ul>
        </div>

        <div class="flex-grow-1">
          <h3 class="text-light fs-5 mb-1">Contacto:</h3>
          <ul class="list-social mb-0">
            <li>
              <NuxtLink class="d-flex align-items-center text-lightgray" to="https://www.linkedin.com/in/mart%C3%ADn-gago-chor%C3%A9n-6b1814241/" target="_blank"> <font-awesome-icon class="footer-icon" :icon="['fab', 'linkedin']" />Martin Gago</NuxtLink>
              <line-separator class="social-hr"/>
            </li>
            <li>
              <NuxtLink class="d-flex align-items-center text-lightgray" href="mailto:gagochorenmartin@gmail.com"> <font-awesome-icon class="footer-icon" :icon="['fas', 'envelope']" />Envíame un Correo</NuxtLink>
              <line-separator class="social-hr"/>
            </li>
          </ul>
        </div>
    </nav>
</footer>

</template>
<style scoped>

.text-lightgray{
  color: lightgray
}
.contenedor-footer{
  width: 100%;
  max-width: 1200px;
  display: flex;
}
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
 /* iconos */
  .footer-icon{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 22px;
    margin-right: .2rem;
  }


/* Pantallas medianas */
@media screen and (max-width: 992px) {
  .contenedor-footer{
    display: grid;
    grid-template-columns: auto auto;
    gap: 0 1rem;
  }
  .list-footer{
    grid-template-columns: 1fr 1fr;
  }
}

/* Patanllas pequeñas */
@media screen and (max-width: 600px) {
  .contenedor-footer{
    display: flex;
  }

  .contenedor-footer div h3{
    text-align: center;
  }
  .contenedor-footer div ul li{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.list-footer{
  display: block;
}

.list-social{
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-evenly;
  margin: auto;
}
}

@media screen and (max-width: 450px) {
  .list-social{
    grid-template-columns: 1fr;
  }
  
}

</style>
