<template>
    
    <div class="p-4 text-center m-5 shadow rounded">
        <h2>Bienvenido a los Posts!</h2>

        <ul>
            <li>
                <NuxtLink to="/">Primer Post <font-awesome-icon :icon="['fas', 'house']" /></NuxtLink>
            </li>
            <li>
                <NuxtLink to="/">Segundo Post</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/">Tercer Post</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/">Cuarto Post</NuxtLink>
            </li>
        </ul>


    </div>
</template>
<script setup>

useHead({
    title: "Post"

})



</script>
