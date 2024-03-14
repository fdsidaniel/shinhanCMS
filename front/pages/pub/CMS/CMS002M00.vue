<template>

  <div class="title_box">
    <h2>사용자 가입 신청</h2>
    <ul class="loc">
      <li>홈</li>
      <li>사용자 관리</li>
      <li>사용자 가입 신청</li>
    </ul>
  </div>

  <div class="conbody">

    <p class="req_txt mb_10 t_right">표시는 필수 입력 항목 입니다.</p>
    <v-table class="vtable_view">
        <colgroup>
        <col style="width:;"/>
        <col style="width:;"/>
        </colgroup>
        <tbody>
        <tr>
            <th>기관 명</th>
            <td>신한은행</td>
        </tr>
        <tr>
            <th class="req">아이디</th>
            <td>
                <div class="input_flex">
                    <v-text-field label="아이디" v-model="userId" :rules="userIdRules" placeholder="영문 대문자, 숫자 6~16자리" class="i_basics w_334"></v-text-field>
                    <v-btn class="vbtn line ml_5" size="small">중복확인</v-btn>
                </div>
            </td>
        </tr>
        <tr><!-- 보안툴 사용 안 할 경우 컴포넌트 사용  -->
            <th class="req">비밀번호</th>
            <td>
                <div class="input_keypad w_334">
                    <v-text-field label="비밀번호" v-model="password" :rules="passwordRules" type="password" placeholder="" class="i_basics pwd_chk"></v-text-field>
                    <v-btn class="vbtn" size="small">키패드</v-btn>
                </div>
                <p class="txt_pwd">※ 영문/숫자/특수문자 2가지 이상 조합, 동일한 문자/숫자 3가지 이상 연속 사용 불가합니다.</p>
            </td>
        </tr>
        <tr>
            <th class="req">비밀번호 확인</th>
            <td>
                <div class="input_keypad w_334">
                    <v-text-field label="비밀번호 확인" v-model="passwordRe" :rules="passwordReRules" type="password" placeholder="" class="i_basics pwd_chk"></v-text-field>
                    <v-btn class="vbtn" size="small">키패드</v-btn>
                </div>
            </td>
        </tr>
        <tr><!-- 보안툴 때문에 컴포넌트 말고 iframe 으로 변경 -->
          <th colspan="2">
            <div class="ifm_keysec">
              <iframe src="/keyboard_security.html" frameborder="0" width="100%" height="100%"></iframe>
            </div>
          </th>
        </tr>
        <tr>
            <th class="req">성명</th>
            <td><v-text-field label="성명" v-model="userName" :rules="userNameRules" placeholder="" class="i_basics w_334"></v-text-field></td>
        </tr>
        <tr>
            <th class="req">생년월일</th>
            <td><v-text-field label="생년월일" v-model="userBirthday" :rules="userBirthdayRules" placeholder="생년월일 8자리" class="i_basics w_334"></v-text-field></td>
        </tr>
        <tr>
            <th class="req">휴대폰 번호</th>
            <td>
                <div class="input_flex">
                    <v-text-field label="휴대전화번호 앞 자리" v-model="userMobileFirst" :rules="userMobileFirstRules" type="number" placeholder="" class="i_basics w_100 none_details"></v-text-field>
                    <span class="bar">-</span>
                    <v-text-field label="휴대전화번호 중간 자리" v-model="userMobileMiddle" :rules="userMobileMiddleRules" type="number" placeholder="" class="i_basics w_100 none_details"></v-text-field>
                    <span class="bar">-</span>
                    <v-text-field label="휴대전화번호 마지막 자리" v-model="userMobileLast" :rules="userMobileLastRules" type="number" placeholder="" class="i_basics w_100 none_details"></v-text-field>
                </div>
            </td>
        </tr>
        <tr>
            <th>이메일</th>
            <td>
                 <div class="input_flex a_center">
                    <v-text-field label="Your Email" v-model="userEmail" :rules="userEmailRules" placeholder=""  class="i_basics w_200"></v-text-field>
                    <span class="ml_5 mr_5">@</span>
                    <ComSelectBox groupCode="01" v-model="comboEmail" :items="itemsEmail" class="s_basics w_200" />
                    <v-text-field label="Your Email" v-model="userEmail2" :rules="userEmailRules2" placeholder="" class="i_basics w_200 ml_5"></v-text-field>
                </div>
            </td>
        </tr>
        </tbody>
    </v-table>

    <div class="btn_btm_wrap">
        <v-btn class="vbtn" size="large">가입 신청</v-btn>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'

const userId = ref('')
const userIdRules = [
  (v) => !!v || '사용이 불가능합니다. 다시 입력해주세요.',
  (v) => (v && v.length >= 16) || '아이디 설정 방법이 맞지 않습니다. 다시 입력해주세요.',
]

const password = ref('')
const passwordRules = [
  (v) => !!v || '비밀번호 설정 방법이 맞지 않습니다. 다시 입력해주세요.',
  // (v) => (v && v.length >= 3) || '3자리 수 이상 입력하세요',
]

const passwordRe = ref('')
const passwordReRules = [
  (v) => !!v || '비밀번호와 비밀번호 확인 값이 불일치 합니다. 다시 입력해주세요.',
  // (v) => (v && v.length >= 16) || '영문, 숫자 대소문자 구분없이 6~16 자리',
]


const userName = ref('')
const userNameRules = [
  (v) => !!v || '성명을 입력해주세요.',
]

const userBirthday = ref('')
const userBirthdayRules = [
  (v) => !!v || '생년월일을 정확히 입력해주세요.',
]

const userMobileFirst = ref('')
const userMobileFirstRules = [
    (v) => !!v || '번호를 다시 입력해주세요.',
]

const userMobileMiddle = ref('')
const userMobileMiddleRules = [
    (v) => !!v || '번호를 다시 입력해주세요.',
]

const userMobileLast = ref('')
const userMobileLastRules = [
    (v) => !!v || '번호를 다시 입력해주세요.',
]

const userEmail = ref('')
const userEmailRules = [

]

const userEmail2 = ref('')
const userEmailRules2 = [

]

const comboEmail = ref('01')
const itemsEmail = ref([
    { title: '직접입력', value: '01' },
    { title: 'Naver.com', value: '02' },
    { title: 'Daum.net', value: '03' },
])


</script> 