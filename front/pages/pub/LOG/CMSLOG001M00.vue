<template>

  <div class="login_wrap">
    <p class="stit">AICMS 지능형 대금관리 시스템</p>
    <h2>빠르고 쉽게<br>협약부터 집행 · 정산까지</h2>
    <div class="login_form">
      <h2><img src="../../../assets/images/logo_login.svg" alt="AICMS"></h2>
      <div class="input_form"><!-- input 보안툴 때문에 컴포넌트 말고 iframe 으로 변경 -->
        <v-text-field label="아이디" v-model="userId" :rules="userIdRules" placeholder="아이디" class="i_basics"></v-text-field>
        <!--input type="text" class="i_basics" placeholder="아이디"--><!-- error class v-input--error -->
        <!-- <v-text-field label="비밀번호" v-model="password" :rules="passwordRules" type="password" placeholder="비밀번호" class="i_basics mt_10"></v-text-field> -->
        
        <!--input type="password" class="i_basics mt_10" placeholder="비밀번호"--><!-- error class v-input--error -->
        <div class="ifm_keysec login">
          <iframe src="/keyboard_security2.html" frameborder="0" width="100%" height="100%"></iframe>
        </div>
        
        <div class="pwd_messages">
          비밀번호 5회 초과 되었습니다.
          <nuxt-link to="/pub/LOG/LOG001M00" class="vlink blue line ml_5">비밀번호 재설정</nuxt-link>
        </div>
        

        <v-btn class="vbtn login" size="large">로그인</v-btn>

        <div class="btn_util">
          <v-checkbox v-model="idSave" label="아이디 기억하기" class="idsave" />  
          <div>
            <nuxt-link to="/pub/LOG/LOG001M00" class="vlink basic pr_3">회원가입</nuxt-link>
            <span>/</span>
            <nuxt-link to="/pub/LOG/LOG001M00" class="vlink basic pl_3 pr_3">아이디 찾기</nuxt-link>
            <span>/</span>
            <nuxt-link to="/pub/LOG/LOG001M00" class="vlink basic pl_3">비밀번호 재설정</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >

const userId = ref('')
const userIdRules = [
  (v) => !!v || '회원정보가 일치하지 않습니다. 다시 입력해주세요.',
  // (v) => (v && v.length >= 16) || '영문, 숫자 대소문자 구분없이 6~16 자리',  
]

const password = ref('')
const passwordRules = [
  (v) => !!v || '비밀번호가 일치하지 않습니다. 다시 입력해주세요.',
  // (v) => (v && v.length >= 16) || '영문, 숫자 대소문자 구분없이 6~16 자리',
]

const idSave = ref(false)

</script> 