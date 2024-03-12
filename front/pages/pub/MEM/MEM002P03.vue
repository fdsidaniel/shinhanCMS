<template>
  
  <!-- popup size width:500 height:300 -->
  <div class="popup_body">
    <h2 class="poptit">책임자 변경 신청 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <ul class="pop_view_list">
      <li>
        <p class="tit">기존 책임자 정보</p>
        <div class="con">홍길동</div>
      </li>
      <li>
        <p class="tit">변경사유</p>
        <div class="con"><v-textarea class="h_100 mt_10" placeholder="30자 이내로 사유를 직접 입력해주세요."></v-textarea></div>
      </li>
      <li>
        <p class="tit">기존 책임자 권한 변경</p>
        <div class="con"><ComRadioButton :options="radioAuthority" v-model="selectedAuthority" :isInline="true" /></div>
      </li>
    </ul>


    <div class="popup_func_btn"><!-- 화면 확인용 - 팝업 구동시 타이틀 display:none 처리됨 -->      
      <v-btn class="vbtn blue">취소</v-btn>
      <v-btn class="vbtn">확인</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComRadioButton from '@/components/common/ComRadioButton.vue'

const selectedAuthority = ref('value1')
const radioAuthority = [
  { label: '일반회원전환', value: 'value1' },
  { label: '회원탈퇴', value: 'value2' },
]

</script> 