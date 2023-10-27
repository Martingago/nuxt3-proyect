<template>
    <form class="m-0 p-2 p-md-3 shadow rounded border border-1">
        <fieldset class="mb-2 mb-md-3">
            <h3 class="form-title  text-uppercase fs-1">Detalles de facturación</h3>
            <legend>Datos de usuario</legend>
            <div >
                <label class="form-label" for="user_nombre">Nombre y apellidos</label>
                <input class="form-control" type="text" name="nombre y apellidos"  value="Don Quijote de la Mancha" readonly id="user_nombre">
            </div>
            <div class="d-flex flex-column flex-md-row gap-2">

                <div class="flex-grow-1">
                    <label class="form-label" for="user_mail">Dirección E-mail</label>
                    <input class="form-control" type="email" value="example@example.com" readonly name="dirección de email" id="user_mail">
                </div>
                <div class="flex-grow-1">
                    <label class="form-label" for="user_phone">Número de telefono</label>
                    <input class="form-control" type="text" value="+34 000 000 000" readonly name="número de telefono" id="user_phone">
                </div>

            </div>
        </fieldset>

        <fieldset class="mb-2 mb-md-3">
            <legend>Datos de envío</legend>
            <div>
                <label class="form-label" for="user_addres">Dirección</label>
                <input class="form-control" type="text" value="Calle de mis Santos Nº12" readonly name="direccion del envio" id="user_addres">
            </div>
            <div class="d-flex flex-column flex-md-row gap-2">
                <div class="flex-grow-1">
                    <label class="form-label" for="user_zip">Código postal</label>
                    <input class="form-control" value="00000" readonly type="number" name="codigo postal" id="user_zip">
                </div>
                <div class="flex-grow-1">
                    <label class="form-label" for="user_city">Ciudad</label>
                    <input class="form-control" value="Madrid" readonly type="text" name="nombre de la ciudad" id="user_city">
                </div>

            </div>
        </fieldset >
        <fieldset class="mb-2 mb-md-3">
            <legend> Datos del pago</legend>
                <div>
                    <label class="form-label" for="user_target">Número de tarjeta</label>
                    <input class="form-control" type="string" value="0000 0000 0000 0000" readonly name="Número de la tarjeta" id="user_pin">
                </div>
                <div class="d-flex flex-column flex-md-row gap-2">
                    <div class="flex-grow-1">
                        <label class="form-label" for="user_target">Número PIN</label>
                        <input class="form-control" value="000" readonly type="number" name="Número de pin" id="user_pin">
                    </div>
                    <div class="flex-grow-1">
                        <label class="form-label" for="user_target">Tipo de tarjeta</label>
                        <select class="form-select" aria-label="Selector de tipo de tarjeta">
                            <option value="VISA">VISA</option>
                            <option value="MASTERCARD">MASTERCARD</option>
                        </select>
                    </div>
                </div>

        </fieldset>

    </form>
</template>
<style scoped>
legend {
    color: var(--color-terciario);
    font-weight: 600;
    text-transform: uppercase;
    font-size: .9rem;
}
label{
    font-weight: 600;
    font-size: .9rem;
    margin-bottom: 0;
}
input{
    margin-bottom: .5rem;
}

.form-title{
    font-weight: 600;
    letter-spacing: 3px;
}

@media screen and (min-width: 993px) {
    form {
        max-width: 800px
    }
}



</style>