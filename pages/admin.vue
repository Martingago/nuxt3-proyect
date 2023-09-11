<template>
    <div class="d-flex flex-column gap-2 m-3">
      <h1 class="text-center">Página de administración</h1>
      <h3>Categoria de productos</h3>
      <ModalAddFormCategory @toast-msg="mostrarToast"></ModalAddFormCategory>
      <admin-listCategory @toast-msg="mostrarToast"></admin-listCategory>
      <div class="container d-flex flex-column justify-content-center align-items-center gap-4">
        <FormsUploadImage></FormsUploadImage>
        <FormsUploadArrayImages></FormsUploadArrayImages>
        
        <forms-uploadProduct></forms-uploadProduct>
      </div>
    </div>
<!-- Toast de notificaciones -->
<modal-toast :message="msgToast"></modal-toast>

</template>

<script setup>

definePageMeta({
  layout: "simple",
  // or middleware: 'auth'
})

const msgToast = ref("");

const mostrarToast = (msg) => {
      //mostrar toast
      const { $bootstrap } = useNuxtApp();
      var toastEl = document.getElementById('liveToast');
    var toast = new $bootstrap.Toast(toastEl);
    msgToast.value = msg;
    toast.show();
}

</script>
