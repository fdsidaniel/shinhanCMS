<template>

    <div class="title_box">
        <h2>아이디 찾기</h2>
        <p class="sub_txt">회원 계정 생성 시 등록한 정보로 아이디를 찾으실 수 있습니다.</p>
    </div>

    <div class="conbody">

        <h3>회원정보 입력</h3>
        <v-table class="vtable_view">
            <tbody>
                <tr>
                    <th>성명</th>
                    <td><v-text-field label="성명" v-model="userName" :rules="userNameRules" placeholder="성명을 입력해주세요." class="i_basics w_334"></v-text-field></td>
                    </tr>
                <tr>
                    <th>휴대전화번호</th>
                    <td>
                        <div class="input_flex">
                            <ComSelectBox groupCode="01" v-model="comboSelectedMobile" :items="itemsMobile" class="s_basics w_100" />
                            <span class="bar">-</span>
                            <v-text-field label="휴대전화번호 중간 자리" v-model="userMobileMiddle" :rules="userMobileMiddleRules" type="number" placeholder="" class="i_basics w_100"></v-text-field>
                            <span class="bar">-</span>
                            <v-text-field label="휴대전화번호 마지막 자리" v-model="userMobileLast" :rules="userMobileLastRules" type="number" placeholder="" class="i_basics w_100"></v-text-field>
                            <v-btn class="vbtn line ml_5" size="small">인증번호 전송</v-btn>
                            <v-btn class="vbtn line ml_5" size="small">인증번호 재전송</v-btn>
                            <span class="time">05:00</span>
                        </div>
                        <div class="input_flex mt_10">
                            <v-text-field label="code" type="number" v-model="userMobilecode" :rules="userMobilecodeRules"  placeholder="인증번호 6자리" class="i_basics w_334"></v-text-field>
                            <v-btn class="vbtn line ml_5" size="small">확인</v-btn>
                            <span class="confirm_txt">인증번호가 확인되었습니다.</span>
                        </div>
                        <p class="tip_txt mt_10">회원님의 휴대폰으로 수신된 인증번호 6자리 입력 후 휴대폰 인증 버튼을 눌러주세요.</p>
                        <p class="tip_txt">휴대폰으로 수신된 인증번호는 <span class="c_red">5분 이내</span> 입력해주셔야 합니다.</p>
                    </td>
                </tr>
            </tbody>
        </v-table>

        <div class="btn_btm_wrap">
            <v-btn class="vbtn" size="large">아이디 찾기</v-btn>
        </div>

    </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'

const userName = ref('')
const userNameRules = [

]

const userBirthday = ref('')
const userBirthdayRules = [

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