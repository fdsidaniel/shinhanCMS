<template>
  
  <!-- popup size width:500 height:300 -->
  <div class="popup_body">
    <h2 class="poptit">이메일 인증 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <ul class="pop_view_list">
      <li>
        <p class="tit">인증방법</p>
        <div class="con">
          <ComRadioButton :options="radioCertify" v-model="selectedCertify" :isInline="true" />
        </div>
      </li>
      <li>
        <p class="tit">이메일</p>
        <div class="con">
          <div class="input_flex">
            <span class="mt_8 mr_5" v-if="true">ab********@gmail.com</span>

            <!-- 로그인 후 인증번호 발송 전 -->
            <div v-if="true">
              <v-btn class="vbtn line ml_5" size="small">인증번호 전송</v-btn>
              <v-btn class="vbtn line ml_5" size="small">회원정보 수정</v-btn>
            </div>
            <!-- //로그인 후 인증번호 발송 전 -->

            <!-- 로그인 후 인증번호 발송 후 -->
            <div v-if="false">
              <v-btn class="vbtn line ml_5" size="small">인증번호 재전송</v-btn>
            </div>
            <!-- //로그인 후 인증번호 발송 후 -->

            <!-- 로그인 전 인증번호 발송 전 -->
            <div class="input_flex" v-if="true">
              <v-text-field label="Your Email" v-model="userEmail" :rules="userEmailRules" placeholder="" value="shinahn" class="i_basics w_200 none_details"></v-text-field>
              <ComSelectBox groupCode="01" v-model="comboEmail" :items="itemsEmail" class="s_basics w_200 ml_5 none_details" />
              <v-text-field label="Your Email" v-model="userEmail2" :rules="userEmailRules2" placeholder="" value="text.com" class="i_basics w_200 ml_5 none_details"></v-text-field>
              <v-btn class="vbtn line ml_5" size="small">인증번호 전송</v-btn>
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

const selectedCertify = ref('value2')
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

const userEmail = ref('')
const userEmailRules = [

]

const userEmail2 = ref('')
const userEmailRules2 = [

]

const comboEmail = ref('')
const itemsEmail = ref([
  { title: '직접선택', value: '001' },
  { title: 'NAVER', value: '002' },
  { title: 'NATE', value: '003' },
])

</script> 