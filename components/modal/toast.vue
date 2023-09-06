<template>
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">Panel de control</strong>
                <small>Justo ahora</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
             {{ message }}
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    message : String
})
</script>

<style scoped>
.category-selected {
    font-weight: 600;
    text-transform: uppercase;
}
</style>