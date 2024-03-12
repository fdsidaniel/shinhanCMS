<template>

  <div class="title_box">
    <h2>비밀번호 재설정</h2>
    <ul class="loc">
      <li>홈</li>
      <li>로그인</li>
      <li>비밀번호 재설정</li>
    </ul>
  </div>

  <div class="conbody">

    <h3>약관 동의</h3>
    <div class="terms_box">
      <div class="d_flex">
        <v-checkbox v-model="checkbox2">
          <template v-slot:label>
            <span class="com">[필수]</span>이용약관
          </template>
        </v-checkbox>
        <nuxt-link to="../LOG/LOG001M01">보기</nuxt-link>
      </div>
    </div>

    <h3>정보 입력</h3>
    <v-table class="vtable_view">
      <tbody>
        <tr>
          <th>아이디</th>
          <td><v-text-field label="아이디" v-model="userId" :rules="userIdRules" placeholder="" class="i_basics w_160"></v-text-field></td>
        </tr>
        <tr>
          <th>인증방법</th>
          <td><ComRadioButton :options="radioConfirm" v-model="selectedConfirm" :isInline="true" /></td>
        </tr>
        <tr>
          <th>휴대전화번호</th>
          <td>
            <div class="input_flex">
              <ComSelectBox groupCode="01" v-model="comboSelectedMobile" :items="itemsMobile" class="s_basics w_100" />
              <v-text-field label="휴대전화번호 중간 자리" v-model="userMobileMiddle" :rules="userMobileMiddleRules" type="number" placeholder="" class="i_basics w_100 ml_5"></v-text-field>
              <v-text-field label="휴대전화번호 마지막 자리" v-model="userMobileLast" :rules="userMobileLastRules" type="number" placeholder="" class="i_basics w_100 ml_5"></v-text-field>
              <v-btn class="vbtn line ml_5" size="small">인증번호 전송</v-btn>
              <v-btn class="vbtn line ml_5" size="small">인증번호 재전송</v-btn>
              <span class="time">05:00</span>
            </div>
            <div class="input_flex mt_10">
              <v-text-field label="code" v-model="userMobilecode" :rules="userMobilecodeRules" placeholder="인증번호 6자리" class="i_basics w_310"></v-text-field>
              <v-btn class="vbtn line ml_5" size="small">확인</v-btn>
              <span class="confirm_txt">인증번호가 확인되었습니다.</span>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>

    <h3>재설정</h3>
    <v-table class="vtable_view">
      <tbody>
         <tr>
          <th>비밀번호</th>
          <td>
            <div class="input_keypad w_300">
              <v-text-field label="비밀번호" v-model="password" :rules="passwordRules" type="password" placeholder="" class="i_basics pwd_chk"></v-text-field>
              <v-btn class="vbtn" size="small">키패드</v-btn>
            </div>
            <p class="txt_pwd">※ 영문/숫자/특수문자 2가지 이상 조합, 동일한 문자/숫자 3가지 이상 연속 사용 불가합니다.</p>
          </td>
        </tr>
        <tr>
          <th>비밀번호 확인</th>
          <td>
            <div class="input_keypad w_300">
              <v-text-field label="비밀번호 확인" v-model="passwordOk" :rules="passwordOkRules" type="password" placeholder="" class="i_basics pwd_chk"></v-text-field>
              <v-btn class="vbtn" size="small">키패드</v-btn>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>

    <div class="btn_btm_wrap">
      <v-btn class="vbtn" size="large">비밀번호 재설정</v-btn>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComRadioButton from '@/components/common/ComRadioButton.vue'
import ComSelectBox from '@/components/common/ComSelectBox.vue'

const userId = ref('')
const userIdRules = [

]

const selectedConfirm = ref('value1')
const radioConfirm = [
  { label: '휴대폰 인증', value: 'value1' },
  { label: '이메일 인증', value: 'value2' },
]

const comboSelectedMobile = ref('001')
const itemsMobile = ref([
  { title: '010', value: '001' },
  { title: '017', value: '002' },
  { title: '018', value: '003' },
])

const userMobileMiddle = ref('')
const userMobileMiddleRules = [

]

const userMobileLast = ref('')
const userMobileLastRules = [

]

const userMobilecode = ref('')
const userMobilecodeRules = [
  (v) => (v && v.length >= 6) || '인증번호를 다시 입력해주세요.',
]

const password = ref('')
const passwordRules = [
  (v) => !!v || '비밀번호 설정 방법이 맞지 않습니다. 다시 입력해주세요.',
  // (v) => (v && v.length >= 16) || '영문, 숫자 대소문자 구분없이 6~16 자리',
]

const passwordOk = ref('')
const passwordOkRules = [
  (v) => !!v || '비밀번호와 비밀번호 확인이 맞지 않습니다. 다시 입력해주세요.',
  // (v) => (v && v.length >= 16) || '영문, 숫자 대소문자 구분없이 6~16 자리',
]

</script> 