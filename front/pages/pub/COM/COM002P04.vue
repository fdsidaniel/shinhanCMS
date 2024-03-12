<template>
  
  <!-- popup size width:500 height:300 -->
  <div class="popup_body">
    <h2 class="poptit">지정한 날짜 다시 선택 안내 팝업 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    지정한 날짜 다시 선택 안내 팝업

    <div class="popup_func_btn"><!-- 화면 확인용 - 팝업 구동시 타이틀 display:none 처리됨 -->
      <v-btn class="vbtn">인증완료</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComRadioButton from '@/components/common/ComRadioButton.vue'

const selectedCertify = ref('value1')
const radioCertify = [
  { label: '휴대폰 인증', value: 'value1' },
  { label: '이메일 인증', value: 'value2' },
]

const userMobilecode = ref('')
const userMobilecodeRules = [  
  (v) => (v && v.length >= 6) || '인증번호를 다시 입력해주세요.',
  //(v) => !!v || '인증 번호 입력 시간이 초과 되었습니다.',
  //(v) => !!v || '인증 번호 5회 이상 잘못 입력 되었습니다. 인증번호 재전송 버튼을 선택하세요.',
  //(v) => !!v || '인증번호가 확인되었습니다.',
]

const comboMobile = ref('010')
const itemsMobile = ref([
  { title: '010', value: '010' },
  { title: '017', value: '017' },
  { title: '018', value: '018' },
])

const userMobileMiddle = ref('')
const userMobileMiddleRules = [

]

const userMobileLast = ref('')
const userMobileLastRules = [

]

</script> 