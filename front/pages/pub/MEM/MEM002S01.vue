<template>

  <div class="title_box">
    <h2>일반 회원가입</h2>
    <ul class="loc">
      <li>홈</li>
      <li>회원관리</li>
      <li>일반 회원정보관리</li>
    </ul>
  </div>

  <div class="conbody">

    <h3>회원정보 수정</h3>
    <v-table class="vtable_view">
      <tbody>
        <tr>
          <th>기관선택</th>
          <td>123-45-9089 한마정보통신</td>
        </tr>
        <tr>
          <th>아이디</th>
          <td>shinhan01</td>
        </tr>
        <tr>
          <th>성명/내외국인</th>
          <td>김신한 / 내국인</td>
        </tr>
        <tr>
          <th>생년월일/성별</th>
          <td>990909 / 남</td>
        </tr>
        <tr>
          <th>안내 채널</th>
          <td><ComRadioButton :options="radioChannel" v-model="selectedChannel" :isInline="true" /></td>
        </tr>
        <tr>
          <th>이메일</th>
          <td>
            <div class="input_flex a_center">
                <v-text-field label="Your Email" v-model="userEmail" :rules="userEmailRules" placeholder="" value="shinahn" class="i_basics w_200 mr_5"></v-text-field>
                @
                <ComSelectBox groupCode="01" v-model="comboEmail" :items="itemsEmail" class="s_basics w_200 ml_5" />
                <v-text-field label="Your Email" v-model="userEmail2" :rules="userEmailRules2" placeholder="" value="text.com" class="i_basics w_200 ml_5"></v-text-field>
            </div>
          </td>
        </tr>
        <tr>
          <th>휴대전화번호</th>
          <td>
            <div class="input_flex">
                <ComSelectBox groupCode="01" v-model="comboMobile" :items="itemsMobile" class="s_basics w_100" />
                <v-text-field label="휴대전화번호 중간 자리" v-model="userMobileMiddle" :rules="userMobileMiddleRules" type="number" placeholder="" class="i_basics w_100 ml_5"></v-text-field>
                <v-text-field label="휴대전화번호 마지막 자리" v-model="userMobileLast" :rules="userMobileLastRules" type="number" placeholder="" class="i_basics w_100 ml_5"></v-text-field>
                <v-btn class="vbtn line ml_5" size="small">인증번호 재전송</v-btn>
                <span class="time">05:00</span>
            </div>
            <div class="input_flex mt_10">
                <v-text-field label="code" v-model="userMobilecode" :rules="userMobilecodeRules" placeholder="인증번호 6자리" class="i_basics w_310"></v-text-field>
                <v-btn class="vbtn line ml_5" size="small" disabled>확인</v-btn>
                <span class="confirm_txt">인증번호가 확인되었습니다.</span>
            </div>
          </td>
        </tr>
        <!-- <tr>
          <th>선택 약관</th>
          <td>
            <div class="d_flex">
              <v-checkbox v-model="checkbox" class="flexn">
                <template v-slot:label>
                  <span class="c_blue mr_5">[선택]</span>개인정보 수집·이용 동의서
                </template>
              </v-checkbox>
              <nuxt-link to="../MEM/MEM002S01" class="vlink basic line ml_20">보기</nuxt-link>
            </div>
          </td>
        </tr> -->
      </tbody>
    </v-table>

    <div class="terms_box mt_20"><!-- 2024-01-10 추가 -->
      <div class="d_flex">
        <v-checkbox v-model="checkbox1">
          <template v-slot:label>
            <span class="com">[선택]</span>개인정보 수집·이용 동의서
          </template>
        </v-checkbox>
        <nuxt-link to="../MEM/MEM002S01">보기</nuxt-link>
      </div>
      <div class="depth"><!-- 2024-01-10 추가 -->
        <span>안내 매체</span>
        <div class="i_chk">
          <v-checkbox v-model="checkbox2" :label="'SMS'" />
          <v-checkbox v-model="checkbox3" :label="'이메일'" />
        </div>
      </div>
    </div>
    <p class="tip_txt mt_10">회원정보와 개인정보 활용 동의 약관을 수정하시는 경우, 인증절차 진행 후 회원정보수정이 가능합니다.</p> 
    
    <div class="btn_btm_wrap">
      <v-btn class="vbtn" size="large">정보 수정</v-btn>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComRadioButton from '@/components/common/ComRadioButton.vue'

const selectedChannel = ref('value1')
const radioChannel = [
  { label: '미신청', value: 'value1' },
  { label: 'SMS', value: 'value2' },
  { label: '이메일', value: 'value3' },
]

const userEmail = ref('')
const userEmailRules = [

]

const userEmail2 = ref('')
const userEmailRules2 = [

]

const userMobileMiddle = ref('')
const userMobileMiddleRules = [

]

const userMobileLast = ref('')
const userMobileLastRules = [

]

const comboEmail = ref('')
const itemsEmail = ref([
  { title: '직접선택', value: '001' },
  { title: 'NAVER', value: '002' },
  { title: 'NATE', value: '003' },
])

const comboMobile = ref('010')

const itemsMobile = ref([
  { title: '010', value: '010' },
  { title: '017', value: '017' },
  { title: '018', value: '018' },
])

const userMobilecode = ref('')
const userMobilecodeRules = [
  (v) => (v && v.length >= 6) || '인증번호를 다시 입력해주세요.',
]

const checkbox = ref(false)

/* 체크박스 */
const checkbox1 = ref(false)
const checkbox2 = ref(false)
const checkbox3 = ref(false)

</script> 