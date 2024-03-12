<template>

  <div class="title_box">
    <h2>일반 회원가입</h2>
    <ul class="loc">
      <li>홈</li>
      <li>회원관리</li>
      <li>일반 회원정보관리</li>
      <li>비밀번호변경</li>
    </ul>
  </div>

  <div class="conbody">

    <h3>비밀번호 변경</h3>
    <v-table class="vtable_view">
      <tbody>
        <tr>
          <th>아이디</th>
          <td>shinhan01</td>
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
      </tbody>
    </v-table>
    
    <div class="btn_btm_wrap">
      <v-btn class="vbtn" size="large">비밀번호 변경</v-btn>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

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

</script> 