<template>
  
  <!-- popup size width:500 height:300 -->
  <div class="popup_body">
    <h2 class="poptit">인증번호 발송 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <ul class="pop_view_list">
      <li>
        <p class="tit">인증방법</p>
        <div class="con">
          <ComRadioButton :options="radioCertify" v-model="selectedCertify" :isInline="true" />
        </div>
      </li>
      <li>
        <p class="tit">휴대전화번호</p>
        <div class="con">
          <div class="input_flex">
            <span class="mt_8 mr_5" v-if="true">010-12**-****</span>

            <!-- 로그인 후 인증번호 발송 전 -->
            <div v-if="true">
              <v-btn class="vbtn line ml_5" size="small">인증번호 전송</v-btn>
              <v-btn class="vbtn line ml_5" size="small">회원정보 수정</v-btn>
            </div>
            <!-- //로그인 후 인증번호 발송 전 -->

            <!-- 로그인 후 인증번호 발송 후 -->
            <div v-if="true">
              <v-btn class="vbtn line ml_5" size="small">인증번호 재전송</v-btn>
              <span class="time">05:00</span>
            </div>
            <!-- //로그인 후 인증번호 발송 후 -->

            <!-- 로그인 전 인증번호 발송 전 -->
            <div class="input_flex" v-if="true">
              <ComSelectBox groupCode="01" v-model="comboMobile" :items="itemsMobile" class="s_basics w_100 none_details" />
              <v-text-field label="휴대전화번호 중간 자리" v-model="userMobileMiddle" :rules="userMobileMiddleRules" type="number" placeholder="" class="i_basics w_100 ml_5 none_details"></v-text-field>
              <v-text-field label="휴대전화번호 마지막 자리" v-model="userMobileLast" :rules="userMobileLastRules" type="number" placeholder="" class="i_basics w_100 ml_5 none_details"></v-text-field>
              <v-btn class="vbtn line ml_5" size="small">인증번호 전송</v-btn>
              <span class="time">05:00</span>
            </div>
            <!-- //로그인 전 인증번호 발송 전 -->
          </div>
          <!-- 로그인 전 후 인증번호 발송 후 -->
          <div class="input_flex mt_10" v-if="true">
            <v-text-field label="code" v-model="userMobilecode" :rules="userMobilecodeRules" type="number" placeholder="인증번호 6자리" class="i_basics w_170 num_chk"></v-text-field>
            <v-btn class="vbtn line ml_5" size="small" disabled>확인</v-btn>
          </div>
          <!-- //로그인 전 후 인증번호 발송 후 -->
        </div>
      </li>
    </ul>

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