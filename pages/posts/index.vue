<template>
    
    <div class="p-4 text-center m-5 shadow rounded">
        <h2>Bienvenido a los Posts!</h2>

        <ul>
            <li>
                <NuxtLink to="/posts/1">Primer Post <font-awesome-icon :icon="['fas', 'house']" /></NuxtLink>
            </li>
            <li>
                <NuxtLink to="/posts/2">Segundo Post</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/posts/3">Tercer Post</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/posts/4">Cuarto Post</NuxtLink>
            </li>
        </ul>


    </div>
</template>
<script setup>

useHead({
    title: "Post"

})



</script>
