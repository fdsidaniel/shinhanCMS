<template>

  <div class="title_box">
    <h2>사용자 정보 수정</h2>
    <ul class="loc">
      <li>시스템 관리</li>
      <li>사용자 관리</li>      
      <li>사용자 가입 신청 이력(조회)</li>
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
                <th>기관</th>
                <td>군인공제회</td>
            </tr>
            <tr>
                <th class="req">성명</th>
                <td><v-text-field label="성명" v-model="userName" :rules="userNameRules" placeholder="" class="i_basics w_334"></v-text-field></td>
            </tr>
            <tr>
                <th class="req">휴대폰 번호</th>
                <td><v-text-field label="휴대폰 번호" v-model="mobile" :rules="mobileRules" placeholder="" class="i_basics w_334"></v-text-field></td>
            </tr>
            <tr>
                <th class="req">생년월일</th>
                <td><v-text-field label="생년월일" v-model="userBirthday" :rules="userBirthdayRules" placeholder="" class="i_basics w_334"></v-text-field></td>
            </tr>
            <tr>
                <th class="req">이메일</th>
                <td><v-text-field label="이메일" v-model="userEmail" :rules="userEmailRules" placeholder="" class="i_basics w_334"></v-text-field></td>
            </tr>
            <tr>
                <th>신청자</th>
                <td>김몰리</td>
            </tr>
            <tr>
                <th>신청일</th>
                <td>2024-03-15</td>
            </tr>
        </tbody>
    </v-table>

    <div class="btn_btm_wrap">
        <v-btn class="vbtn blue" size="large">취소</v-btn>
        <v-btn class="vbtn" size="large">수정</v-btn>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

const userName = ref('박신한')
const userNameRules = [
  (v) => !!v || '성명을 입력해주세요.',
]

const mobile = ref('010-9010-5078')
const mobileRules = [
  (v) => !!v || '휴대폰 번호를 입력해주세요.',
]

const userBirthday = ref('1990.01.02')
const userBirthdayRules = [
  (v) => !!v || '생년월일을 입력해주세요.',
]

const userEmail = ref('testOtest@test.test')
const userEmailRules = [
    (v) => !!v || '이메일을 입력해주세요.',
]

</script> 