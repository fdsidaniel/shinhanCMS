<template>

  <div class="title_box">
    <h2>휴대폰 인증</h2>
    <ul class="loc">
      <li>홈</li>
      <li>휴대폰 인증</li>
    </ul>
  </div>

  <div class="conbody">

    <h3>로그인 후 (인증번호 발송 전)</h3>
    <v-table class="vtable_view">
        <tbody>
            <tr>
                <th>인증방법</th>
                <td><ComRadioButton :options="radioCertify" v-model="selectedCertify" :isInline="true" /></td>
            </tr>
            <tr>
                <th>휴대전화번호</th>
                <td>
                    010-12**-****
                    <v-btn class="vbtn line ml_5" size="small">인증번호 전송</v-btn>
                </td>
            </tr>
        </tbody>
    </v-table>
    <div class="tip_txt mt_10 inbtn">
        등록된 휴대폰 번호, 이메일정보가 다른 경우 회원정보에서 수정 후 재시도 하시기 바랍니다.
        <v-btn class="vbtn line ml_5" size="small">회원정보 수정</v-btn>
    </div>

    <h3>로그인 후 (인증번호 발송 후)</h3>
    <v-table class="vtable_view">
        <tbody>
            <tr>
                <th>인증방법</th>
                <td><ComRadioButton :options="radioCertify" v-model="selectedCertify" :isInline="true" /></td>
            </tr>
            <tr>
                <th>휴대전화번호</th>
                <td>
                    010-12**-****
                    <v-btn class="vbtn line ml_5" size="small">인증번호 재전송</v-btn>
                    <span class="time">05:00</span>

                    <div class="input_flex mt_10">
                        <v-text-field label="code" v-model="userMobilecode" :rules="userMobilecodeRules" type="number" placeholder="인증번호 6자리" class="i_basics w_318 num_chk"></v-text-field>
                        <v-btn class="vbtn line ml_5" size="small">확인</v-btn>
                    </div>
                </td>
            </tr>
        </tbody>
    </v-table>

    <h3>로그인 전 (인증번호 발송 전)</h3>
    <v-table class="vtable_view">
        <tbody>
            <tr>
                <th>인증방법</th>
                <td><ComRadioButton :options="radioCertify" v-model="selectedCertify" :isInline="true" /></td>
            </tr>
            <tr>
                <th>휴대전화번호</th>
                <td>
                    <div class="input_flex">
                        <v-text-field label="휴대전화번호 앞 자리" v-model="userMobileFirst" :rules="userMobileFirstRules" type="number" placeholder="" class="i_basics w_100 none_details"></v-text-field>
                        <span class="bar">-</span>
                        <v-text-field label="휴대전화번호 중간 자리" v-model="userMobileMiddle" :rules="userMobileMiddleRules" type="number" placeholder="" class="i_basics w_100 none_details"></v-text-field>
                        <span class="bar">-</span>
                        <v-text-field label="휴대전화번호 마지막 자리" v-model="userMobileLast" :rules="userMobileLastRules" type="number" placeholder="" class="i_basics w_100 none_details"></v-text-field>
                        <v-btn class="vbtn line ml_5" size="small">인증번호 전송</v-btn>
                    </div>
                </td>
            </tr>
        </tbody>
    </v-table>

    <h3>로그인 전 (인증번호 발송 후)</h3>
    <v-table class="vtable_view">
        <tbody>
            <tr>
                <th>인증방법</th>
                <td><ComRadioButton :options="radioCertify" v-model="selectedCertify" :isInline="true" /></td>
            </tr>
            <tr>
                <th>휴대전화번호</th>
                <td>
                    <div class="input_flex">
                        <v-text-field label="휴대전화번호 앞 자리" v-model="userMobileFirst" :rules="userMobileFirstRules" type="number" placeholder="" class="i_basics w_100 none_details"></v-text-field>
                        <span class="bar">-</span>
                        <v-text-field label="휴대전화번호 중간 자리" v-model="userMobileMiddle" :rules="userMobileMiddleRules" type="number" placeholder="" class="i_basics w_100 none_details"></v-text-field>
                        <span class="bar">-</span>
                        <v-text-field label="휴대전화번호 마지막 자리" v-model="userMobileLast" :rules="userMobileLastRules" type="number" placeholder="" class="i_basics w_100 none_details"></v-text-field>
                        <v-btn class="vbtn line ml_5" size="small">인증번호 재전송</v-btn>
                        <span class="time">05:00</span>
                    </div>
                    <div class="input_flex mt_10">
                        <v-text-field label="code" v-model="userMobilecode" :rules="userMobilecodeRules" type="number" placeholder="인증번호 6자리" class="i_basics w_318 num_chk"></v-text-field>
                        <v-btn class="vbtn line ml_5" size="small">확인</v-btn>
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

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComRadioButton from '@/components/common/ComRadioButton.vue'

const selectedCertify = ref('001')
const radioCertify = [
  { label: '휴대폰 인증', value: '001' },
  { label: '이메일 인증', value: '002' },
]

const userMobilecode = ref('')
const userMobilecodeRules = [  
  (v) => (v && v.length >= 6) || '인증번호를 다시 입력해주세요.',
  //(v) => !!v || '인증 번호 입력 시간이 초과 되었습니다.',
  //(v) => !!v || '인증 번호 5회 이상 잘못 입력 되었습니다. 인증번호 재전송 버튼을 선택하세요.',
  //(v) => !!v || '인증번호가 확인되었습니다.',
]

const userMobileFirst = ref('010')
const userMobileFirstRules = [

]

const userMobileMiddle = ref('')
const userMobileMiddleRules = [

]

const userMobileLast = ref('')
const userMobileLastRules = [

]

</script> 