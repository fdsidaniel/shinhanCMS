<template>

    <div class="title_box">
        <h2>아이디 찾기</h2>
        <p class="sub_txt">회원 계정 생성 시 등록한 정보로 아이디를 찾으실 수 있습니다.</p>
    </div>

    <div class="conbody">

        <div class="msg_com t_center ico_complete"><!-- 완료 ico_complete / 주의 ico_caution / 경고 ico_warning -->
            회원님에 아이디는 <strong>shinhan01**</strong> 입니다.
        </div>

        <div class="btn_btm_wrap">
            <v-btn class="vbtn blue " size="large">비밀번호 재설정</v-btn>
            <v-btn class="vbtn " size="large">로그인</v-btn>
        </div>

        <div class="caution_box mt_40">
            <p class="tit">안내 및 유의사항</p>
            <ul>
                <li>아이디/패스워드 관련 문의사항은 02-2151-8519 연락 바랍니다.</li>
            </ul>
        </div>

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