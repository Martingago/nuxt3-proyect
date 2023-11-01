<template>
    <section class="contenedor my-3">
        <h1 class="text-center"> Aviso legal de BRAVUS</h1>
        <article>
            <h2 class="mb-1"> Información general</h2>
            <p>“BRAVUS” es una DEMO de una aplicación web desarrollada y operada por Martín, con residencia en España. Al utilizar nuestra aplicación, usted acepta estos términos.</p>
        </article>

        <article>
            <h2 class="mb-1">Uso de la aplicación</h2>
            <p>El uso de esta aplicación está sujeto a los siguientes términos y condiciones. Al utilizar nuestra aplicación, usted acepta estos términos. Nos reservamos el derecho de cambiar estos términos en cualquier momento sin previo aviso.</p>
        </article>

        <article>
            <h2 class="mb-1">Protección de Datos</h2>
            <p>Los datos personales proporcionados por los usuarios se almacenan en una base de datos alojada por Google. Estos datos son accesibles únicamente por el personal de la aplicación (el titular) y se utilizan exclusivamente para el funcionamiento de la aplicación. Los datos están asociados mediante tablas, pero nunca se sabe a qué persona están asociados. Nos comprometemos a mantener la confidencialidad de los datos personales y a garantizar el ejercicio de los derechos de acceso, rectificación, cancelación y oposición.</p>
        </article>

        <article>
            <h2 class="mb-1">Derechos del Titular</h2>
            <p>Como titular de la aplicación, nos reservamos el derecho de eliminar datos y cuentas que puedan afectar la integridad de la aplicación. Este derecho se ejercerá especialmente en casos donde se detecte un uso fraudulento o malintencionado de la aplicación.</p>
        </article>

        <article>
            <h2 class="mb-1">Uso Comercial</h2>
            <p>Los datos no se utilizan con fines económicos o de marketing a menos que el usuario tenga activadas las notificaciones por correo electrónico. En caso contrario, los datos solo se utilizarán para mejorar la experiencia del usuario y garantizar el correcto funcionamiento de la aplicación.</p>
        </article>

        <article>
            <h2 class="mb-1">Seguridad</h2>
            <p>La información es privada y segura. Sin embargo, en caso de un ataque cibernético, “BRAVUS” no se hace responsable si algunos datos pueden ser filtrados. Aunque hacemos todo lo posible para proteger su información personal, no podemos garantizar la seguridad absoluta de sus datos transmitidos a nuestra aplicación; cualquier transmisión es bajo su propio riesgo.</p>
        </article>

        <article>
            <h2 class="mb-1">Licencia de Uso</h2>
            <p>Al utilizar nuestra aplicación, se le concede una licencia limitada, revocable, no exclusiva, no sublicenciable e intransferible para usar nuestros servicios.</p>
        </article>

        <article>
            <h2 class="mb-1">Requisitos del Usuario</h2>
            <p>Es importante que el usuario cumpla con los requisitos solicitados para acceder y hacer uso de la aplicación y que debe comprometerse a proporcionar información verídica en todo momento.</p>
        </article>

        <article>
            <h2 class="mb-1">Jurisdicción Aplicable</h2>
            <p>En caso de disputas, se aplicará la legislación española y serán competentes los juzgados y tribunales españoles.</p>
        </article>
    </section>
</template>

<script setup>

useHead(
    {
        title: "BRAVUS - Aviso Legal",
        meta: [
            {
                name: 'description',
                content: 'BRAVUS: Página de aviso legal'
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