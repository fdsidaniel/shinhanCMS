<script setup lang="ts">
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div> 
   <p>{{error.statusCode }} </p> 
   <p>{{error.statusMessage }} </p>  
    <button @click="handleError">Clear errors</button>
  </div>
</template>