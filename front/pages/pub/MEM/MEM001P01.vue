<template>
  
  <!-- popup size width:500 height:320 -->
  <div class="popup_body">
    <h2 class="poptit">기관검색 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <div class="bdr_gray">
      <ComRadioButton :options="radioOrg" v-model="selectedOrg" :isInline="true" class="center" />
    </div>

    <!-- <div class="input_del">
      <v-text-field label="Your Org" v-model="userOrg" :rules="nameOrgRules" placeholder="기관명을 입력해주세요." class="i_basics mt_20"></v-text-field>
      <v-btn class="vbtn" size="small">삭제</v-btn>
    </div> -->

    <v-combobox
      label="기관명을 입력해주세요."
      :items="['[123-45-90890]한마정보통신', '[123-45-90812]한마은행', '[123-45-90822]한마생명']"
      v-model="userOrgSearch"
      :rules="nameOrgSearchRules"
      class="v_combo mt_20"
      placeholder="기관명을 입력해주세요."
    ></v-combobox>

    <div class="popup_func_btn"><!-- 화면 확인용 - 팝업 구동시 타이틀 display:none 처리됨 -->
      <v-btn class="vbtn">선택</v-btn>
    </div>

    <div class="bdr_gray2 join">
      가입하실 기관이 없으신가요?<br>
      기관 가입 후 다양한 서비스를 이용하세요.
      <v-btn class="vbtn line" size="small">기관 회원가입</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComRadioButton from '@/components/common/ComRadioButton.vue'

/* 라디오 */
const selectedOrg = ref('value1')

const radioOrg = [
  { label: '기관명', value: 'value1' },
  { label: '사업자번호', value: 'value2' },
]

// const userOrg = ref('')
// const nameOrgRules = [
//   (v) => !!v || '조회된 기관이 없습니다. 다시 입력해주세요.',
//   (v) => (v && v.length >= 2) || '2자 이상 입력 후 검색하세요.',
// ]

const userOrgSearch = ref(null)
const nameOrgSearchRules = [
  (v) => !!v || '조회된 기관이 없습니다. 다시 입력해주세요.',
  (v) => (v && v.length >= 2) || '2자 이상 입력 후 검색하세요.',
]


</script> 