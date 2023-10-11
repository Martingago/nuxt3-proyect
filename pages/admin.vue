<template>
  <div class="d-flex flex-column gap-2 m-3">
    <h1 class="text-center">Página de administración</h1>
    <h3>Categoria de productos</h3>
    <!-- Categorias -->
    <!-- <FormsButtonAddData text_referencia="categoria" action="add" referencia_datos="categoria_productos"
      @emit-value="handleAdd"></FormsButtonAddData>

    <admin-listElements referencia_datos="categoria_productos" text_referencia="categoria"
      @emit-data="handleData"></admin-listElements> -->
    <!-- Marcas -->
    <FormsButtonAddData text_referencia="marca" action="add" referencia_datos="marca_productos" @emit-value="handleAdd">
    </FormsButtonAddData>

    <admin-listElements referencia_datos="marca_productos" text_referencia="marca"
      @emit-data="handleData"></admin-listElements>

    <!-- Productos -->
    <FormsButtonAddData text_referencia="producto" action="add" referencia_datos="productos" @emit-value="handleAdd">
    </FormsButtonAddData>

    <admin-listProducts @emit-data="handleData"></admin-listProducts>
    <div class="container d-flex flex-column justify-content-center align-items-center gap-4">
    </div>
  </div>


  <!-- Toast de notificaciones -->
  <modal-toast :message="msgToast"></modal-toast>
  <!-- Ventana modal de confirmacion de eliminacion de datos -->
  <ModalManageElements @toast-msg="mostrarToast" :dataObject="dataModal"></ModalManageElements>
  <ModalDeleteElement @toast-msg="mostrarToast" :selectedItem="dataModal"></ModalDeleteElement>
</template>

<script setup>

definePageMeta({
  layout: "simple",
  
})
useHead(
    {
        title: "BRAVUS - Admin",
    }    
);


const msgToast = ref("");
const dataModal = ref({});


const mostrarToast = (msg) => {
  //mostrar toast
  const { $bootstrap } = useNuxtApp();
  var toastEl = document.getElementById('liveToast');
  var toast = new $bootstrap.Toast(toastEl);
  msgToast.value = msg;
  toast.show();
}

//maneja los datos recibidos de los formularios
const handleData = (data) => {
  dataModal.value = data;
}

//Funcion que maneja añadir datos a la BBDD
const handleAdd = (data) => {
  dataModal.value = data;
}


</script>
