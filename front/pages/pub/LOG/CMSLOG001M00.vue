<template>

  <div class="login_wrap">
    <div class="login_box">
        <div class="left">
            <h2>CMS Shin</h2>
            <p class="stit">표준 자금 관리 시스템</p>
        </div>
        <div class="right">
            <h2>로그인</h2>
            <p class="txt">비빌번호를 잊어버리거나 5회 이상 틀렸을 경우에는<br>비밀번호 재설정 후 이용해 주시기 바랍니다.</p>

            <div class="login_form">
                <v-text-field label="아이디" v-model="userId" :rules="userIdRules" placeholder="아이디" class="i_basics"></v-text-field>
                <div class="ifm_keysec login">
                    <iframe src="/keyboard_security_pwd.html" frameborder="0" width="100%" height="100%"></iframe>
                </div>
                
                <div class="pwd_messages">
                    비밀번호 5회 초과 되었습니다.
                    <nuxt-link to="/pub/LOG/LOG001M00" class="vlink blue line ml_5">비밀번호 재설정</nuxt-link>
                </div>

                <v-btn class="vbtn login" size="large">로그인</v-btn>

                <div class="btn_util">
                    <v-checkbox v-model="idSave" label="아이디 기억하기" class="idsave" />  
                    <div>
                        <nuxt-link to="/pub/LOG/CMSLOG001M00" class="vlink basic pr_3">회원가입</nuxt-link>
                        <span>/</span>
                        <nuxt-link to="/pub/LOG/CMSLOG001M00" class="vlink basic pl_3 pr_3">아이디 찾기</nuxt-link>
                        <span>/</span>
                        <nuxt-link to="/pub/LOG/CMSLOG001M00" class="vlink basic pl_3">비밀번호 재설정</nuxt-link>
                    </div>
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