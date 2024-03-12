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
        <nuxt-link to="../MEM/MEM001M00">보기</nuxt-link>
      </div>
      <div class="d_flex">
        <v-checkbox v-model="checkbox3">
          <template v-slot:label>
            <span class="com">[필수]</span>개인정보 수집·이용·제공 동의서
          </template>          
        </v-checkbox>
        <nuxt-link to="../MEM/MEM001M00">보기</nuxt-link>
      </div>
      <div class="d_flex">
        <v-checkbox v-model="checkbox4">
          <template v-slot:label>
            <span class="com">[선택]</span>개인정보 수집·이용 동의서
          </template>
        </v-checkbox>
        <nuxt-link to="../MEM/MEM001M00">보기</nuxt-link>
      </div>
      <div class="depth"><!-- 2024-01-10 추가 -->
        <span>안내 매체</span>
        <div class="i_chk">
          <v-checkbox v-model="checkbox5" :label="'SMS'" />
          <v-checkbox v-model="checkbox6" :label="'이메일'" />
        </div>
      </div>
    </div>

    <h3>회원정보 입력</h3>
    <v-table class="vtable_view">
      <tbody>
        <tr>
          <th>기관선택</th>
          <td>
            <span class="mr_20">123-45-9089 한마정보통신</span>
            <v-btn class="vbtn line" size="small">기관검색</v-btn>
          </td>
        </tr>
        <tr>
          <th>아이디</th>
          <td>
            <div class="input_flex">
              <v-text-field label="아이디" v-model="userId" :rules="nameRules" placeholder="영문, 숫자 대소문자 구분없이 6~16 자리" class="i_basics w_300"></v-text-field>
              <v-btn class="vbtn line ml_5" size="small">중복확인</v-btn>
            </div>
            <!-- input 보안툴 때문에 컴포넌트 말고 html tag 사용시 , error class v-input--error -->
            <!-- <div class="input_flex">
              <input type="text" class="i_basics w_300" placeholder="영문, 숫자 대소문자 구분없이 6~16 자리">
              <v-btn class="vbtn line ml_5" size="small">중복확인</v-btn>
            </div> -->
          </td>
        </tr>
        <tr>
          <th>비밀번호</th>
          <td>
            <div class="input_keypad w_300">
              <v-text-field label="비밀번호" v-model="password" :rules="passwordRules" type="password" placeholder="" class="i_basics pwd_chk"></v-text-field>
              <v-btn class="vbtn" size="small">키패드</v-btn>
            </div>
            <!-- <div class="input_keypad w_300">
              <input type="password" class="i_basics pwd_chk v-input--error" placeholder="">
              <v-btn class="vbtn" size="small">키패드</v-btn>
            </div> -->
            <p class="txt_pwd">※ 영문/숫자/특수문자 2가지 이상 조합, 동일한 문자/숫자 3가지 이상 연속 사용 불가합니다.</p>
          </td>
        </tr>
        <tr>
          <th>비밀번호 확인</th>
          <td>
            <div class="input_keypad w_300">
              <v-text-field label="비밀번호 확인" v-model="password" :rules="namePasswordRules" type="password" placeholder="" class="i_basics pwd_chk"></v-text-field>
              <v-btn class="vbtn" size="small">키패드</v-btn>
            </div>
            <!-- <div class="input_keypad w_300">              
              <input type="password" class="i_basics pwd_chk" placeholder="">
              <v-btn class="vbtn" size="small">키패드</v-btn>
            </div> -->
          </td>
        </tr>
        <tr>
          <th colspan="2"><!-- 키보드 보안 -->
            <div class="ifm_keysec">
              <iframe src="/keyboard_security.html" frameborder="0" width="100%" height="100%"></iframe>
            </div>
          </th>
        </tr>
        <tr>
          <th>성명/내외국인</th>
          <td>
            <div class="d_flex">
              <v-text-field label="성명/내외국인" v-model="userName" :rules="userNameRules" placeholder="" class="i_basics w_300"></v-text-field>
              <ComRadioButton :options="radioName" v-model="selectedName" :isInline="true" />
            </div>
          </td>
        </tr>
        <tr>
          <th>생년월일/성별</th>
          <td>
            <div class="d_flex">
              <v-text-field label="생년월일/성별" v-model="userBirthday" :rules="userNameRules" placeholder="생년월일 8자리" class="i_basics w_300"></v-text-field>
              <ComRadioButton :options="radioSex" v-model="selectedSex" :isInline="true" />
            </div>
          </td>
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
          <td>
            <div class="input_flex a_center">
              <v-text-field label="Your Email" v-model="userEmail" :rules="userEmailRules" placeholder="" value="shinahn" class="i_basics w_200 mr_5"></v-text-field>
              @
              <ComSelectBox groupCode="01" v-model="comboSelected" :items="items" class="s_basics w_200 ml_5" />
              <v-text-field label="Your Email" v-model="userEmail2" :rules="userEmailRules2" placeholder="" value="text.com" class="i_basics w_200 ml_5"></v-text-field>
            </div>
          </td>
        </tr>
        <tr>
          <th>휴대전화번호</th>
          <td>
            <div class="input_flex">
              <ComSelectBox groupCode="01" v-model="comboSelectedMobile" :items="itemsMobile" class="s_basics w_100" />
              <v-text-field label="휴대전화번호 중간 자리" v-model="userMobileMiddle" :rules="userMobileMiddleRules" type="number" placeholder="" class="i_basics w_100 ml_5 none_details"></v-text-field>
              <v-text-field label="휴대전화번호 마지막 자리" v-model="userMobileLast" :rules="userMobileLastRules" type="number" placeholder="" class="i_basics w_100 ml_5 none_details"></v-text-field>
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
      </tbody>
    </v-table>

    <div class="btn_btm_wrap">
      <v-tooltip text="회원가입 버튼을 누르시면 금융인증서 인증완료 후 최종 가입됩니다." location="top" model-value>
        <template v-slot:activator="{ props }">
          <v-btn class="vbtn" size="large" v-bind="props">회원가입</v-btn>
        </template>
      </v-tooltip>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComRadioButton from '@/components/common/ComRadioButton.vue'

const userId = ref('')
const password = ref('')
const userName = ref('')
const userEmail = ref('')
const userEmail2 = ref('')
const userMobileMiddle = ref('')
const userMobileLast = ref('')

const userMobilecode = ref('')

const userMobileMiddleRules = [
  (v) => !!v || '번호를 다시 입력해주세요.',
]

const userMobilecodeRules = [
  (v) => (v && v.length >= 6) || '인증번호를 다시 입력해주세요.',
]
const userMobileLastRules = [
  (v) => !!v || '번호를 다시 입력해주세요.',
]

const userEmailRules = [

]

const userEmailRules2 = [

]

const userNameRules = [
  
]

const namePasswordRules = [
  (v) => !!v || '비밀번호와 비밀번호 확인이 맞지 않습니다. 다시 입력해주세요.',
  // (v) => (v && v.length >= 16) || '영문, 숫자 대소문자 구분없이 6~16 자리',
]

const nameRules = [
  // (v) => !!v || '다시 입력해주세요.',
  (v) => (v && v.length >= 16) || '영문, 숫자 대소문자 구분없이 6~16 자리',
]

const passwordRules = [
  (v) => !!v || '비밀번호 설정 방법이 맞지 않습니다. 다시 입력해주세요.',
  // (v) => (v && v.length >= 3) || '3자리 수 이상 입력하세요',
]

/* 체크박스 */
const checkbox1 = ref(false)
const checkbox2 = ref(false)
const checkbox3 = ref(false)
const checkbox4 = ref(false)
const checkbox5 = ref(false)
const checkbox6 = ref(false)

/* 라디오 */
const selectedName = ref('value1')
const selectedSex = ref(null)
const selectedChannel = ref(null)

const radioName = [
  { label: '내국인', value: 'value1' },
  { label: '외국인', value: 'value2' },
]

const radioSex = [
  { label: '남', value: 'value1' },
  { label: '여', value: 'value2' },
]

const radioChannel = [
  { label: '미신청', value: 'value1' },
  { label: 'SMS', value: 'value2' },
  { label: '이메일', value: 'value3' },
]

/* 콤보 박스 */
const comboSelected = ref('')

const items = ref([
  { title: '직접선택', value: '001' },
  { title: 'NAVER', value: '002' },
  { title: 'NATE', value: '003' },
])

const comboSelectedMobile = ref('001')

const itemsMobile = ref([
  { title: '010', value: '001' },
  { title: '017', value: '002' },
  { title: '018', value: '003' },
])

</script> 