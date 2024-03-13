<template>

    <div class="title_box">
        <h2>비밀번호 재설정</h2>
        <p class="sub_txt">회원 계정 생성 시 등록한 정보로 아이디를 찾으실 수 있습니다.</p>
    </div>

    <div class="conbody">

        <h3>비밀번호 재설정</h3>
        <!-- 보안툴 사용 안 할 경우 컴포넌트 사용  -->
        <v-table class="vtable_view">
            <tbody>
                <tr>
                    <th>새 비밀번호</th>
                    <td>
                        <div class="input_keypad w_400">
                            <v-text-field label="비밀번호" v-model="password" :rules="passwordRules" type="password" placeholder="영문자+숫자+특수문자 조합한 8~12자리 입력해주세요" class="i_basics pwd_chk"></v-text-field>
                            <v-btn class="vbtn" size="small">키패드</v-btn>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>새 비밀번호 확인</th>
                    <td>
                        <div class="input_keypad w_400">
                            <v-text-field label="비밀번호 확인" v-model="passwordOk" :rules="passwordOkRules" type="password" placeholder="새로 입력한 비밀번호를 다시 한번 입력해주세요" class="i_basics pwd_chk"></v-text-field>
                            <v-btn class="vbtn" size="small">키패드</v-btn>
                        </div>
                    </td>
                </tr>
            </tbody>
        </v-table>

        <!-- 보안툴 때문에 컴포넌트 말고 iframe 으로 변경 -->
        <!-- <div class="ifm_keysec">
            <iframe src="/keyboard_security_repwd.html" frameborder="0" width="100%" height="100%"></iframe>
        </div> -->

        <div class="btn_btm_wrap">
            <v-btn class="vbtn" size="large">비밀번호 재설정</v-btn>
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