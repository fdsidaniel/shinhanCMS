<script setup lang="ts"> 
onMounted(()=>{  
    console.log($utils.dayjs().format("YYYY-MM-DD HH:mm:ss"))
})
const move = () =>{
    $fx.move('/')
}
</script>

<template>
  <div> 
    <input type="button" value="이동" @click="move">
  </div>
</template>