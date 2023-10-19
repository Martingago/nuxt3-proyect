<template>
    <header class="header-container w-100 py-lg-5 py-md-4 py-3">
        <div class="container">
            <h1 class="mb-3 mb-lg-2">El Paraíso del Sonido de Alta Calidad</h1>
            <h2 class="mb-0">Explora Nuestra Colección Exclusiva de Productos de Audio Premium y Descubre la Magia del Sonido Inigualable que Transformará Tu Experiencia Auditiva</h2>
        </div>
    </header>
</template>

<style scoped>
.header-container {
    grid-column: 1 / -1;
    background: linear-gradient(126deg, rgba(10, 10, 11, 1) 0%, rgba(41, 43, 43, 1) 96%);
}

.header-container h1,
.header-container h2 {
    color: white;
}

h1{
    font-size: 1.5rem;
}
h2{
    font-size: .9rem;
}

@media screen and (max-width: 767px) {
    .container{
        max-width: none; 
    }
    h1{
        font-size: 1.3rem;
    }
    h2{
        font-size: .8rem;
    }
}

@media screen and (max-width: 500px) {
    h1{
        font-size: 1.2rem;
    }
    
}


</style>