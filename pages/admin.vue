<template>
  <div class="d-flex flex-column gap-2 m-3">
    <h1 class="text-center">Página de administración</h1>
    <h3>Categoria de productos</h3>
    <!-- Categorias -->
    <buttonAddData text_referencia="categoria" action="add" referencia_datos="categoria_productos"
      @emit-value="handleAdd"></buttonAddData>

    <listElements referencia_datos="categoria_productos" text_referencia="categoria"
      @emit-data="handleData"></listElements>
    <!-- Marcas -->
    <buttonAddData text_referencia="marca" action="add" referencia_datos="marca_productos" @emit-value="handleAdd">
    </buttonAddData>

    <listElements referencia_datos="marca_productos" text_referencia="marca"
      @emit-data="handleData"></listElements>

    <!-- Productos -->
    <buttonAddData text_referencia="producto" action="add" referencia_datos="productos" @emit-value="handleAdd">
    </buttonAddData>

    <listProducts @emit-data="handleData"></listProducts>
    <div class="container d-flex flex-column justify-content-center align-items-center gap-4">
    </div>
  </div>


  <!-- Toast de notificaciones -->
  <toast :message="msgToast"></toast>
  <!-- Ventana modal de confirmacion de eliminacion de datos -->
  <manageElements @toast-msg="mostrarToast" :dataObject="dataModal"></manageElements>
  <deleteElement @toast-msg="mostrarToast" :selectedItem="dataModal"></deleteElement>
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
