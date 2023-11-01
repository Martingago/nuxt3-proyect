<template>
    <section class="contenedor my-3">
        <h1 class="text-center mb-4">Términos y condiciones de BRAVUS</h1>
        <article>
            <h2 class="mb-1">Aceptación de los Términos</h2>
            <p>Al utilizar nuestra aplicación, usted acepta estos términos y condiciones en su totalidad. Si no está de acuerdo con estos términos y condiciones o cualquier parte de estos términos y condiciones, no debe utilizar esta aplicación.</p>
        </article>

        <article>
            <h2 class="mb-1">Licencia para usar la aplicación</h2>
            <p>A menos que se indique lo contrario, nosotros poseemos los derechos de propiedad intelectual de la aplicación y el material en la aplicación. Todos estos derechos de propiedad intelectual están reservados.</p>
        </article>

        <article>
            <h2 class="mb-1">Uso Aceptable</h2>
            <p>No debe utilizar esta aplicación de ninguna manera que cause, o pueda causar, daño a la aplicación o deterioro de la disponibilidad o accesibilidad de la aplicación; o de cualquier manera que sea ilegal, fraudulenta o dañina, o en relación con cualquier propósito o actividad ilegal, fraudulenta o dañina.</p>
        </article>

        <h1 class="text-center mb-4">Política de Privacidad</h1>

        <article>
            <h2 class="mb-1">Recopilación de Información Personal</h2>
            <p>Podemos recopilar, almacenar y utilizar información personal sobre su uso de la aplicación.</p>
        </article>

        <article>
            <h2 class="mb-1">Uso de su Información Personal</h2>
            <p>La información personal enviada a nosotros a través de nuestra aplicación será utilizada para los fines especificados en esta política o en las páginas relevantes de la aplicación. Podemos utilizar su información personal para administrar nuestra aplicación y nuestro negocio.</p>
        </article>

        <article>
            <h2 class="mb-1">Divulgación de Información Personal</h2>
            <p>No proporcionaremos su información personal a terceros.</p>
        </article>

        <article>
            <h2 class="mb-1">Seguridad de su Información Personal</h2>
            <p>Tomaremos precauciones técnicas y organizativas razonables para evitar la pérdida, mal uso o alteración de su información personal.</p>
        </article>
    </section>

</template>

<script setup>

useHead(
    {
        title: "BRAVUS - Términos y condiciones",
        meta: [
            {
                name: 'description',
                content: 'BRAVUS: Página de Términos y condiciones'
            }

        ]
    }    
);


</script>

<style scoped>

.contenedor{
    width: 90%;
    max-width: 1200px;
    margin: auto;
}

@media screen and (max-width: 700px) {
    .contenedor{
        width: 95%
    }
}
</style>