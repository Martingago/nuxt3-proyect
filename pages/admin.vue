<template>
    <h4>Pagina de admin</h4>
    <admin-listCategory @toast-msg="mostrarToast"></admin-listCategory>
<div class="container d-flex flex-column justify-content-center align-items-center gap-4">

  
  <forms-addCategoryProduct  @toast-msg="mostrarToast" action="add" title="Añadir categoría de producto" buttonText="Subir producto"></forms-addCategoryProduct>
  <forms-uploadProduct></forms-uploadProduct>
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
