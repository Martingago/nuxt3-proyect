<template>
    <form>
        <div class="input-number">
            <button class="input-number__btn input-number__btn--down" type="button" @click="decrement()">-</button>
            <input class="input-number__input" type="number" :value="value" :min="min" :max="max">
            <button class="input-number__btn input-number__btn--up" type="button"  @click="increment()">+</button>
        </div>
    </form>
</template>


<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    value:{
        type: Number,
        default: 1
    },
    min: {
        type: Number,
        default: 1
    },
    max: {
        type: Number,
        default: 10
    },
    disabled:{
        type: Boolean,
        default: false
    }

})

const emits = defineEmits(['update:count']);

const updateValue = (event) => {
    console.log("addfdf")
    const newValue = Number(event.target.value)
    if (!isNaN(newValue) && newValue >= props.min && newValue <= props.max) {
        emits('update:count', newValue)
    }
}

//aumenta el valor
const increment = () => {
    if(props.value < props.max){
        emits('update:count',  props.value +1);
        console.log(props.value)
        
    }
}

const decrement = () => {
    if(props.value>props.min){
        console.log("puede restar")
        count--;
        emits('update:count', count);
    }
}

</script>


<style scoped>
.input-number {
    display: flex;
    align-items: center;
    width: 150px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
    font-size: 18px;
    color: #333;
}

.input-number__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 100%;
    background-color: #f5f5f5;
    border: none;
    outline: none;
    cursor: pointer;
}

.input-number__btn:active {
    background-color: #e6e6e6;
}

.input-number__btn--down {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

.input-number__btn--up {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}

.input-number__input {
    flex-grow: 1;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    text-align: center;
}

.input-number__input::-webkit-outer-spin-button,
.input-number__input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.input-number__input[type="number"] {
    -moz-appearance: textfield;
}
</style>