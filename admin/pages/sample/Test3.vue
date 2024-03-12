
       <!-- multi-sort -->
<template>   
  {{picked}}
  <Datepicker v-model="picked" />
</template>
<script setup>  
import Datepicker from 'vue3-datepicker'
const picked = ref(new Date())
</script>