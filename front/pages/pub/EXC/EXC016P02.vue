<template>
  
  <!-- popup size width:500 height:500 -->
  <div class="popup_body">
    <h2 class="poptit">결재 정보 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <v-table class="vtable_list none_vline scroll h_295"><!-- 5 line h_295 / 10 line h_545 -->
      <colgroup>
        <col style="width:80px;"/>
        <col style="width:*;"/>
      </colgroup>
      <thead>
        <tr>
          <th></th>
          <th>연구 활동비</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="center"><ComRadioButton :options="radioOptions" v-model="selectedValue" /></td>
          <td>연구 활동비 01</td>
        </tr>
        <tr>
          <td class="center"><ComRadioButton :options="radioOptions" v-model="selectedValue" /></td>
          <td>연구 활동비 02</td>
        </tr>
        <tr>
          <td class="center"><ComRadioButton :options="radioOptions" v-model="selectedValue" /></td>
          <td>연구 활동비 03</td>
        </tr>
        <tr>
          <td class="center"><ComRadioButton :options="radioOptions" v-model="selectedValue" /></td>
          <td>연구 활동비 04</td>
        </tr>
        <tr>
          <td class="center"><ComRadioButton :options="radioOptions" v-model="selectedValue" /></td>
          <td>연구 활동비 05</td>
        </tr>
      </tbody>
    </v-table>
    <p class="tip_txt mt_10">수정할 세목 명을 선택하세요.</p>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">수정</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComRadioButton from '@/components/common/ComRadioButton.vue'

const selectedValue = ref(null)
const radioOptions = [
  { label: '', value: 'value1' },
]

</script> 