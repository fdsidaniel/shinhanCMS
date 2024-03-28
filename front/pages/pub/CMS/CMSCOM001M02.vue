<template>

  <div class="title_box">
    <h2>이메일 인증</h2>
    <ul class="loc">
      <li>홈</li>
      <li>이메일 인증</li>
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
                <th>이메일</th>
                <td>
                    <span>ab********@gmail.com</span>
                    <v-btn class="vbtn line ml_10" size="small">인증번호 전송</v-btn>
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
                <th>이메일</th>
                <td>
                    <span>ab********@gmail.com</span>
                    <v-btn class="vbtn line ml_10" size="small">인증번호 재전송</v-btn>
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
                <th>이메일</th>
                <td>
                    <div class="input_flex">
                        <v-text-field label="Your Email" v-model="userEmail" :rules="userEmailRules" placeholder="" class="i_basics w_200 none_details"></v-text-field>
                        <ComSelectBox groupCode="01" v-model="comboEmail" :items="itemsEmail" class="s_basics w_200 ml_5 none_details" />
                        <v-text-field label="Your Email" v-model="userEmail2" :rules="userEmailRules2" placeholder="" value="text.com" class="i_basics w_200 ml_5 none_details"></v-text-field>
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
                <th>이메일</th>
                <td>
                    <div class="input_flex">
                        <v-text-field label="Your Email" v-model="userEmail" :rules="userEmailRules" placeholder="" class="i_basics w_200 none_details"></v-text-field>
                        <ComSelectBox groupCode="01" v-model="comboEmail" :items="itemsEmail" class="s_basics w_200 ml_5 none_details" />
                        <v-text-field label="Your Email" v-model="userEmail2" :rules="userEmailRules2" placeholder="" value="text.com" class="i_basics w_200 ml_5 none_details"></v-text-field>
                        <v-btn class="vbtn line ml_5" size="small">인증번호 전송</v-btn>
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

const selectedCertify = ref('002')
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

const userEmail = ref('shinahn')
const userEmailRules = [

]

const userEmail2 = ref('')
const userEmailRules2 = [

]

const comboEmail = ref('000')
const itemsEmail = ref([
  { title: '선택해주세요.', value: '000' },
  { title: '직접선택', value: '001' },
  { title: 'NAVER', value: '002' },
  { title: 'NATE', value: '003' },
])

</script> 