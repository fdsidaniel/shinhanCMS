<template>

  <div class="title_box">
    <h2>아이디 찾기</h2>
    <ul class="loc">
      <li>홈</li>
      <li>로그인</li>
      <li>아이디 찾기</li>
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
          <th>성명</th>
          <td><v-text-field label="성명" v-model="userName" :rules="userNameRules" placeholder="" class="i_basics w_160"></v-text-field></td>
        </tr>
        <tr>
          <th>생년월일/성별</th>
          <td>
            <div class="d_flex">
              <v-text-field label="생년월일/성별" v-model="userBirthday" :rules="userBirthdayRules" placeholder="생년월일 6자리" class="i_basics w_160"></v-text-field>
              <ComRadioButton :options="radioSex" v-model="selectedSex" :isInline="true" />
            </div>
          </td>
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

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComRadioButton from '@/components/common/ComRadioButton.vue'
import ComSelectBox from '@/components/common/ComSelectBox.vue'

const userName = ref('')
const userNameRules = [

]

const userBirthday = ref('')
const userBirthdayRules = [

]

const selectedSex = ref(null)
const radioSex = [
  { label: '남', value: 'value1' },
  { label: '여', value: 'value2' },
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

</script> 