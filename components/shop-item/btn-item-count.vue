<template>
    <form>
        <div class="input-number">
            <button class="input-number__btn input-number__btn--down" type="button" @click="decrement">-</button>
            <input class="input-number__input" type="number" :value="valueCount" :min="minCount" :max="maxCount">
            <button class="input-number__btn input-number__btn--up" type="button" @click="increment">+</button>
            
        </div>
    </form>
</template>


<script setup>

const props = defineProps({
 
  minCount: {
    type: Number,
    default: 1
  },
  maxCount: {
    type: Number,
    default: 10
  }
});

const emits = defineEmits(['update:count']);

const valueCount = ref(1);

const increment = () => {
  if (valueCount.value < props.maxCount) {
    valueCount.value++;
    emits('update:count', valueCount.value)
  }
}

const decrement = () => {
  if(valueCount.value > props.minCount){
    valueCount.value--;
    emits('update:count', valueCount.value)
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