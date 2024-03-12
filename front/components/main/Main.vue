<template>
  <div>
    <v-btn class="bg-primary" @click="moveLogin()"> 로그인 </v-btn>
  </div>

  <p>
    <v-btn class="bg-primary" @click="moveSample()"> 샘플 컴포넌트 </v-btn>
  </p>
</template>
 
<script setup>  
import { loadScript } from "vue-plugin-load-script";

 
onMounted(async()=>{
  
 await loadScript("https://t-4user.yeskey.or.kr/v1/fincertInt.js")


  FinCertInt.Sdk.init({
  "orgCode":"DB00880000",
  apikey:"a46aa0a4-1680-4382-9395-ef6935fcc167",
  lang : 'kor',
  "success" : function(){
    console.log("성공")
  },
  "fail" : function(){
console.log("실패")
  }
 })  
})
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