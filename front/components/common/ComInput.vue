<template>
  <div>
    <input 
      :type="type" 
      :placeholder="placeholder"
      :value="value"      
      @input="handleInput"
    />
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
  </div>
</template>

<script setup>

import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  value: {
    type: [String, Number],
    default: ''
  },
  rules: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['update:value']);

const inputValue = ref('');
const errorMessage = ref('');

const handleInput = (event) => {
  const value = event.target.value;
  const ruleError = props.rules.find(rule => !rule.validator(value));
  console.log(ruleError.value+"////")
  if (ruleError) {
    errorMessage.value = ruleError.message;
    console.log('1')
  } else {
    errorMessage.value = '';
    emit('update:value', value);
    console.log('2')
  }
};

</script>
