<template>
    <hr>
</template>

<style scoped>

hr{
    display: none;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 90%;
    height: 2px;
    background-color: white;
    border: none;
}

@media screen and (max-width: 991px) {
    hr{
        display: inline-flex;
        margin: .5rem auto;
    }
}
</style>