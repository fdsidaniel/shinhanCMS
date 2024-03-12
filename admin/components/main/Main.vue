<template>
  <div>
    <v-btn class="bg-primary" @click="moveLogin()"> 로그인 </v-btn>
  </div>

  <p>
    <v-btn class="bg-primary" @click="moveSample()"> 샘플 컴포넌트 </v-btn>
  </p>
</template>
 
<script setup>
const moveLogin = () => {
  $fx.move('/LOG/LOG001M00')
}
const moveUserInfo = () => {
  $fx.move('/user/UserInfo')
}
const moveSample = () => {
  $fx.move('/sample/Sample')
}
</script> 