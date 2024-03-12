<template>
  
  <!-- popup size width:500 height:300 -->
  <div class="popup_body">
    <h2 class="poptit">선정 결과 등록 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <ul class="pop_view_list">
      <li>
        <p class="tit">선택 업체</p>
        <div class="con"><ComRadioButton :options="radioComp" v-model="selectedComp" :isInline="true" /></div>
      </li>
      <li>
        <p class="tit">제안 선정 결과 사유</p>
        <div class="con"><v-textarea class="h_100 mt_10" placeholder="30자 이내로 사유를 직접 입력해주세요."></v-textarea></div>
        <p class="txt_limit">0/50 자</p>        
      </li>      
    </ul>
    <p class="tip_txt mt_10">업체 선정 후 재선정이 불가합니다.</p>


    <div class="btm_btn_wrap">
      <v-btn class="vbtn">등록</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComRadioButton from '@/components/common/ComRadioButton.vue'

const selectedComp = ref('value1')
const radioComp = [
  { label: '선정', value: 'value1' },
  { label: '미선정', value: 'value2' },
]

</script> 