<template>

  <div class="title_box">
    <h2>사용자 계정 신규 등록</h2>
    <ul class="loc">
      <li>시스템 관리</li>
      <li>서비스 관리</li>
      <li>사용자 등록(조회)</li>
    </ul>
  </div>

  <div class="conbody">

    <v-table class="vtable_view">
        <colgroup>
            <col style="width:140px;"/>
            <col style="width:*;"/>
        </colgroup>
        <tbody>
            <tr>
                <th>기관명</th>
                <td><v-text-field label="기관명" v-model="orgName" :rules="orgNameRules" placeholder="" class="i_basics w_334" /></td>
            </tr>
            <tr>
                <th>사용자 이름</th>
                <td><v-text-field label="사용자 이름" v-model="userName" :rules="userNameRules" placeholder="" class="i_basics w_334" /></td>
            </tr>
            <tr>
                <th>사용자 휴대폰 번호</th>
                <td><v-text-field label="사용자 휴대폰 번호" v-model="mobile" :rules="mobileRules" placeholder="" class="i_basics w_334" /></td>
            </tr>
            <tr>
                <th>사용자 생년월일</th>
                <td><v-text-field label="사용자 생년월일" v-model="userBirthday" :rules="userBirthdayRules" placeholder="" class="i_basics w_334" /></td>
            </tr>
            <tr>
                <th>사용자 권한</th>
                <td><ComRadioButton :options="authority" v-model="selectedAuthority" :isInline="true" /></td>
            </tr>
            <tr>
                <th>발급 ID</th>
                <td><v-text-field label="발급 ID" v-model="userId" :rules="userIdRules" placeholder="" class="i_basics w_334" /></td>
            </tr>
            <tr>
                <th>발급 PW</th>
                <td><v-text-field label="발급 PW" v-model="userPw" :rules="userPwRules" placeholder="" class="i_basics w_334" /></td>
            </tr>
            <tr>
                <th>등록자</th>
                <td>김신한</td>
            </tr>
            <tr>
                <th>등록일</th>
                <td>2024-02-20</td>
            </tr>
        </tbody>
    </v-table>    

    <div class="btn_btm_wrap">
        <v-btn class="vbtn blue" size="large">목록</v-btn>
        <v-btn class="vbtn" size="large">등록</v-btn>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComRadioButton from '@/components/common/ComRadioButton.vue'

const selectedAuthority = ref('01')
const authority = [
  { label: '시스템 관리자', value: '01' },
  { label: '유지보수 담당자', value: '02' },
  { label: '기관 담당자', value: '03' },
]

const orgName = ref('')
const orgNameRules = [
]

const userName = ref('')
const userNameRules = [
]

const mobile = ref('')
const mobileRules = [
]

const userBirthday = ref('')
const userBirthdayRules = [
]

const userId = ref('')
const userIdRules = [
]

const userPw = ref('')
const userPwRules = [
]

</script> 