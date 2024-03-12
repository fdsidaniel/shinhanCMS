<template>

  <div class="title_box">
    <h2>일반 회원가입</h2>
    <ul class="loc">
      <li>홈</li>
      <li>회원관리</li>
      <li>일반 회원정보관리</li>
    </ul>
  </div>

  <div class="conbody">

    <h3>회원정보</h3>
    <v-table class="vtable_view">
      <tbody>
        <tr>
          <th>기관선택</th>
          <td>123-45-9089 한마정보통신</td>
        </tr>
        <tr>
          <th>아이디</th>
          <td>shinhan01</td>
        </tr>
        <tr>
          <th>성명/내외국인</th>
          <td>김신한 / 내국인</td>
        </tr>
        <tr>
          <th>생년월일/성별</th>
          <td>990909 / 남</td>
        </tr>
        <tr>
          <th>안내 채널</th>
          <td><ComRadioButton :options="radioChannel" v-model="selectedChannel" :isInline="true" /></td>
        </tr>
        <tr>
          <th>이메일</th>
          <td>shinhan@test.com</td>
        </tr>
        <tr>
          <th>휴대전화번호</th>
          <td>01012345678</td>
        </tr>
        <tr>
          <th>선택 약관</th>
          <td>
            <div class="d_flex between">
              <div class="d_flex">
                <v-checkbox v-model="checkbox" class="flexn">
                  <template v-slot:label>
                    <span class="c_blue mr_5">[선택]</span>개인정보 수집·이용 동의서
                  </template>
                </v-checkbox>
                <nuxt-link to="../MEM/MEM002M00" class="vlink basic line ml_20">보기</nuxt-link>
              </div>
              <div><v-checkbox v-model="checkbox2" disabled :label="'동의(SMS, 이메일)'" /></div>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>

    <div class="terms_box mt_20" v-if="false"><!-- 2024-01-10 추가 -->
      <div class="d_flex">
        <v-checkbox v-model="checkbox1">
          <template v-slot:label>
            <span class="com">[선택]</span>개인정보 수집·이용 동의서
          </template>
        </v-checkbox>
        <nuxt-link to="../MEM/MEM002S01">보기</nuxt-link>
      </div>
      <div class="depth"><!-- 2024-01-10 추가 -->
        <span>안내 매체</span>
        <div class="i_chk">
          <v-checkbox v-model="checkbox2" :label="'SMS'" />
          <v-checkbox v-model="checkbox3" :label="'이메일'" />
        </div>
      </div>
    </div>

    <div class="authority_box mt_40">
      회원님, 일반회원에서 책임자 권한으로 변경 하시려면 법인인증서를 통해 인증 검증 후 사용이 가능합니다.

      <v-btn class="vbtn blue line" size="m">책임자 권한 변경 신청</v-btn>
    </div>

    <div class="btn_btm_wrap">
      <v-btn class="vbtn blue" size="large">회원 탈퇴</v-btn>
      <v-btn class="vbtn blue" size="large">비밀번호 변경</v-btn>
      <v-btn class="vbtn" size="large">회원 정보 수정</v-btn>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComRadioButton from '@/components/common/ComRadioButton.vue'

const selectedChannel = ref('value1')
const radioChannel = [
  { label: '미신청', value: 'value1' },
  { label: 'SMS', value: 'value2' },
  { label: '이메일', value: 'value3' },
]

const checkbox = ref(false)

/* 체크박스 */
const checkbox1 = ref(false)
const checkbox2 = ref(false)
const checkbox3 = ref(false)

</script> 