<template>
    <h4>Pagina de admin</h4>
    <admin-listCategory></admin-listCategory>
<div class="container d-flex flex-column justify-content-center align-items-center gap-4">

  
  <forms-addCategoryProduct></forms-addCategoryProduct>
  <forms-uploadProduct></forms-uploadProduct>
</div>


</template>

<script setup>

definePageMeta({
  layout: "simple",
  // or middleware: 'auth'
})

</script>
