<template>

  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" to="/">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink class="nav-link active" aria-current="page" to="/">Inicio</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/home">Sobre mi</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/posts">Posts</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

</template>

