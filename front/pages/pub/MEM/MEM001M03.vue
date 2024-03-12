<template>

  <div class="title_box">
    <h2>일반 회원가입</h2>
    <ul class="loc">
      <li>홈</li>
      <li>회원관리</li>
      <li>기관 회원가입</li>
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
      <div class="depth"><!-- 2024-01-10 추가 -->
        <span>안내 매체</span>
        <div class="i_chk">
          <v-checkbox v-model="checkbox5" :label="'SMS'" />
          <v-checkbox v-model="checkbox6" :label="'이메일'" />
        </div>
      </div>
    </div>

    <h3>기관 정보입력</h3>
    <v-table class="vtable_view">
      <tbody>
        <tr>
          <th>기관 명</th>
          <td>
            <div class="input_flex">
              <v-text-field label="기관 명" v-model="userOrgName" :rules="userOrgNameRules" placeholder="기관명 입력 후 중복확인" class="i_basics w_300"></v-text-field>
              <v-btn class="vbtn line ml_5" size="small">중복확인</v-btn>
            </div>
          </td>
        </tr>
        <tr>
          <th>기업 구분</th>
          <td>
            <ComRadioButton :options="radioOrgChannel" v-model="selectedOrgChannel" :isInline="true" />
          </td>
        </tr>
        <tr>
          <th>사업자등록번호</th>
          <td>
            <v-text-field label="사업자등록번호" v-model="userOrgNum" :rules="userOrgNumRules" type="number" placeholder="숫자만 입력" class="i_basics w_300"></v-text-field>
            <p class="tip_txt mt_10">가입완료 후 작성하신 사업자등록증을 업로드 하셔야 합니다.</p>
          </td>
        </tr>
        <tr>
          <th class="w_140">회사 이메일 용 도메인</th>
          <td>
            <v-text-field label="회사 이메일 용 도메인" v-model="userOrgEmail" :rules="userOrgEmailRules" placeholder="" class="i_basics w_300"></v-text-field>
            <p class="tip_txt mt_10">회원가입 시 회사 이메일 정보로 추가 하시려면 일반회원 가입 시 이메일 정보 가입(예시. Shinhan.com)</p>
          </td>
        </tr>
      </tbody>
    </v-table>

    <h3>책임자 정보입력</h3>
    <v-table class="vtable_view">
      <tbody>
        <tr>
          <th>아이디</th>
          <td>
            <div class="input_flex">
              <v-text-field label="아이디" v-model="userId" :rules="userIdRules" placeholder="영문, 숫자 대소문자 구분없이 6~16 자리" class="i_basics w_300"></v-text-field>
              <v-btn class="vbtn line ml_5" size="small">중복확인</v-btn>
            </div>
          </td>
        </tr>
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
              <v-text-field label="생년월일/성별" v-model="userBirthday" :rules="userBirthdayRules" placeholder="생년월일 8자리" class="i_basics w_300"></v-text-field>
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
      <v-tooltip text="회원가입 버튼을 누르시면 법인 인증서 인증 후 가입이 완료됩니다." location="top" model-value>
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

/* 체크박스 */
const checkbox1 = ref(false)
const checkbox2 = ref(false)
const checkbox3 = ref(false)
const checkbox4 = ref(false)
const checkbox5 = ref(false)
const checkbox6 = ref(false)

/* input */
const userOrgName = ref('')
const userOrgNameRules = [
  (v) => !!v || '사용이 불가능합니다. 다시 입력해주세요.',
  // (v) => (v && v.length >= 16) || '영문, 숫자 대소문자 구분없이 6~16 자리',
]

const userOrgNum = ref('')
const userOrgNumRules = [
  //(v) => !!v || '최소 8자~15자리까지 입력해주세요.',
  (v) => (v && v.length >= 15) || '최소 8자~15자리까지 입력해주세요.',
]

const userOrgEmail = ref('')
const userOrgEmailRules = [
  // (v) => !!v || '회사 이메일 용 도메인을 입력해주세요.',
  // (v) => (v && v.length >= 15) || '최소 8자~15자리까지 입력해주세요.',
]

const userId = ref('')
const userIdRules = [
  // (v) => !!v || '다시 입력해주세요.',
  (v) => (v && v.length >= 16) || '영문, 숫자 대소문자 구분없이 6~16 자리',
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
const userName = ref('')
const userNameRules = [

]

const userBirthday = ref('')
const userBirthdayRules = [

]

const userEmail = ref('')
const userEmailRules = [

]

const userEmail2 = ref('')
const userEmailRules2 = [

]

const userMobileMiddle = ref('')
const userMobileMiddleRules = [
  (v) => !!v || '번호를 다시 입력해주세요.',
]

const userMobileLast = ref('')
const userMobileLastRules = [
  (v) => !!v || '번호를 다시 입력해주세요.',
]

const userMobilecode = ref('')
const userMobilecodeRules = [
  (v) => (v && v.length >= 6) || '인증번호를 다시 입력해주세요.',
]

/* 셀렉트 */
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


/* 라디오 */
const selectedOrgChannel = ref(null)
const radioOrgChannel = [
  { label: '공공기관', value: 'value1' },
  { label: '일반기업', value: 'value2' },
  { label: '개인사업자', value: 'value3' },
  { label: '외국기업', value: 'value4' },
]

const selectedName = ref('value1')
const radioName = [
  { label: '내국인', value: 'value1' },
  { label: '외국인', value: 'value2' },
]

const selectedSex = ref('value1')
const radioSex = [
  { label: '남', value: 'value1' },
  { label: '여', value: 'value2' },
]

const selectedChannel = ref(null)
const radioChannel = [
  { label: '미신청', value: 'value1' },
  { label: 'SMS', value: 'value2' },
  { label: '이메일', value: 'value3' },
]


</script> 