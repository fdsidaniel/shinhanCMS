<template>

  <div class="title_box">
    <h2>일반 회원가입</h2>
    <ul class="loc">
      <li>홈</li>
      <li>회원관리</li>
      <li>일반 회원가입</li>
    </ul>
  </div>

  <div class="conbody">
    <h3>약관 동의</h3>
    <div class="terms_box">
      <div class="top">
        <v-checkbox v-model="checkbox1" :label="'전체 동의'"/>
      </div>
      <div class="d_flex">
        <v-checkbox v-model="checkbox2">
          <template v-slot:label>
            <span class="com">[필수]</span>이용약관
          </template>
        </v-checkbox>
        <nuxt-link to="../MEM/MEM001M02">보기</nuxt-link>
      </div>
      <div class="d_flex">
        <v-checkbox v-model="checkbox3">
          <template v-slot:label>
            <span class="com">[필수]</span>개인정보 수집·이용·제공 동의서
          </template>          
        </v-checkbox>
        <nuxt-link to="../MEM/MEM001M02">보기</nuxt-link>
      </div>
      <div class="d_flex">
        <v-checkbox v-model="checkbox4">
          <template v-slot:label>
            <span class="com">[선택]</span>개인정보 수집·이용 동의서
          </template>
        </v-checkbox>
        <nuxt-link to="../MEM/MEM001M02">보기</nuxt-link>
      </div>
    </div>

    <h3>회원정보 입력</h3>
    <v-table class="vtable_view">
      <tbody>
        <tr>
          <th>기관선택</th>
          <td>
            <span class="mr_20">123-45-9089 한마정보통신</span>
          </td>
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
          <td>
            <ComRadioButton :options="radioChannel" v-model="selectedChannel" :isInline="true" />
            <p class="tip_txt mt_10">선택한 안내 채널 정보를 반드시 입력 후 인증 받으셔야 합니다.<br>미사용 시 이메일 또는 휴대폰 인증 처리하셔야만 가입이 가능합니다.</p>
          </td>
        </tr>
        <tr>
          <th>이메일</th>
          <td>Shinhan@Test.com</td>
        </tr>
        <tr>
          <th>휴대전화번호</th>
          <td>
            <div class="input_flex">
              <ComSelectBox groupCode="01" v-model="comboSelectedMobile" :items="itemsMobile" class="s_basics w_100" />
              <v-text-field label="휴대전화번호 중간 자리" v-model="userMobileMiddle" :rules="userMobileMiddleRules" placeholder="" class="i_basics w_100 ml_5"></v-text-field>
              <v-text-field label="휴대전화번호 마지막 자리" v-model="userMobileLast" :rules="userMobileLastRules" placeholder="" class="i_basics w_100 ml_5"></v-text-field>
              <v-btn class="vbtn line ml_5" size="small" @click="test">인증번호 재전송</v-btn>
              <span class="time">05:00</span>
            </div>
            <div class="input_flex mt_10" v-if="temp">
              <v-text-field label="code" v-model="userMobilecode" :rules="userMobilecodeRules" placeholder="인증번호 6자리" class="i_basics w_310"></v-text-field>
              <v-btn class="vbtn line ml_5" size="small" disabled>확인</v-btn>
              <span class="confirm_txt">인증번호가 확인되었습니다.</span>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>

    <div class="btn_btm_wrap">
      <v-tooltip text="회원가입 버튼을 누르시면 금융인증서 인증완료 후 최종 가입됩니다." location="top" model-value :class="{ 'active': temp }">
        <template v-slot:activator="{ props }">
          <v-btn class="vbtn" size="large" v-bind="props">회원가입</v-btn>
        </template>
      </v-tooltip>
    </div>

    <div class="caution_box mt_40">
      <p class="tit">안내 및 유의사항</p>
      <ul>
        <li>발주기관 책임자님 이메일, 휴대전화번호 인증 및 안내 채널 입력 후 확인 버튼을 누르시면 SOAP 이용이 가능합니다.</li>
      </ul>
    </div>
    
  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComRadioButton from '@/components/common/ComRadioButton.vue'

const userMobileMiddle = ref('')
const userMobileLast = ref('')

const userMobilecode = ref('')

const userMobileMiddleRules = [
  
]

const userMobilecodeRules = [
  (v) => (v && v.length >= 6) || '인증번호를 다시 입력해주세요.',
]
const userMobileLastRules = [

]

/* 체크박스 */
const checkbox1 = ref(false)
const checkbox2 = ref(false)
const checkbox3 = ref(false)
const checkbox4 = ref(false)

/* 라디오 */
const selectedChannel = ref('value1')

const radioChannel = [
  { label: '미신청', value: 'value1' },
  { label: 'SMS', value: 'value2' },
  { label: '이메일', value: 'value3' },
]

/* 콤보 박스 */
const comboSelectedMobile = ref('001')

const itemsMobile = ref([
  { title: '010', value: '001' },
  { title: '017', value: '002' },
  { title: '018', value: '003' },
])

const temp = ref(false)
const test = () => {
  temp.value = !temp.value
};

</script> 