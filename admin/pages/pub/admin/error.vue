<template>

  <div class="error_page">
    <p class="tit">페이지를 찾을 수 없습니다.</p>
    <p class="txt">
      원하시는 결과를 찾을 수 없습니다.<br>
      올바른 URL을 입력하셨는지 확인하세요. 자세한 내용은 사이트 소유자에게 문의하시기 바랍니다.
    </p>
    <v-btn class="vbtn" size="large">메인화면으로 이동</v-btn>
  </div>

</template>

<style scoped>
  
</style>

<script setup >

const valid = ref(false)
const userId = ref('')
const password = ref('')

const nameRules = [
  (v) => !!v || '아이디를 입력하세요',
  (v) => (v && v.length >= 3) || '3자리 수 이상 입력하세요',
]
const passwordRules = [
  (v) => !!v || '비밀번호를 입력하세요',
  (v) => (v && v.length >= 3) || '3자리 수 이상 입력하세요',
]


</script> 