<template>
        <button class="btn-user-info rounded flex-column m-auto" @mouseenter="showPopOver = true" @mouseleave="showPopOver = false">
            <span class="welcome-txt mb-0">Hola: {{ userStore?.info?.user_name}}</span>
            <span class="my-account-component">
                Cuenta y datos
            </span>
        </button>
</template>
<script setup>
import { useUserStore } from '~~/store/authUser';

const userStore = useUserStore();
const showPopOver = ref(false);
const isSmallScreen = ref(false);
const updateWidth = () => {
    isSmallScreen.value = window.innerWidth < 992;
}


onMounted(async () => {
    window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
})


</script>
<style scoped>
.btn-user-info {
    display: flex;
    background-color: transparent;
    padding: .75rem .25rem;
    margin: 0;
    border: 1px solid transparent;
    color: white;
    text-align: left;
    transition: all .2s linear;
}

.btn-user-info:hover {
    background-color: var(--color-dark);
    border: 1px solid white;
}

.welcome-txt {
    width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: white;
    font-size: .8rem;
    line-height: .9rem;
    text-align: left;
}

.my-account-component{
    font-size: 1rem;
    line-height: .9rem;
    font-weight: 700;
}

@media screen and (max-width: 991px) {
    .btn-user-info{
        display: none;
    }
    
}

</style>