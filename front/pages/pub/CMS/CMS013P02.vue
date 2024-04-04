<template>
  
  <!-- popup size width:500 height:632 -->
  <div class="popup_body">
    <h2 class="poptit">사용자 계정 내역 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>
    
    <ul class="pop_view_list">
      <li>
        <p class="tit">아이디</p>
        <div class="con"><v-text-field label="ID" v-model="userId" :rules="userIdRules" required placeholder="" class="i_basics none_details" /></div>
      </li>
      <li>
        <p class="tit">패스워드</p>
        <div class="con"><v-text-field label="PW" v-model="password" :rules="passwordRules" type="password" placeholder="" class="i_basics none_details" /></div>
      </li>
    </ul>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">저장</v-btn>
    </div>
    
  </div>

</template>

<style scoped>
  
</style>

<script setup >

const userId = ref('')
const userIdRules = [
  
]

const password = ref('')
const passwordRules = [
  
]

</script> 