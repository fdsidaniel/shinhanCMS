<template>
    <!-- popup size width:500 height:auto -->
    <div class="popup_body">
      <h2 class="poptit">사업 명 선택 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

      <ul class="pop_view_list">
        <li>
          <p class="tit">사업 명 선택</p>
          <div class="con">
            <ComRadioButton :options="radioComp" v-model="selectedComp" />
          </div>
        </li>
      </ul>

      <div class="btm_btn_wrap">
          <v-btn class="vbtn blue">취소</v-btn>
          <v-btn class="vbtn">선택</v-btn>
      </div>
    </div>
</template>

<style scoped></style>

<script setup >

import ComRadioButton from '@/components/common/ComRadioButton.vue'

const selectedComp = ref('value1')
const radioComp = [
    { label: '차세대 DB 교체 사업', value: 'value1' },
    { label: '마이그레이션 사업', value: 'value2' },
]

</script> 