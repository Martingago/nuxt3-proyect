<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>

const login = await initUser();
const firebase = useFirebaseUser();

</script>
