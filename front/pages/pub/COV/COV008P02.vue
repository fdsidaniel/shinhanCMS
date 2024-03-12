<template>
  
  <!-- popup size width:1024 height:300 -->
  <div class="popup_body">
    <h2 class="poptit">담당자 정보 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <v-table class="vtable_list inbtn mt_16 scroll h_299">
      <colgroup>
        <col style="width:*;"/>
        <col style="width:*;"/>
        <col style="width:*;"/>
      </colgroup>
      <thead>
        <tr>
          <th>담당 구분</th>
          <th>담당자</th>
          <th>기관 명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>수행 책임자</td>
          <td>김수행<v-btn class="vbtn btn_msg ml_10" size="small">쪽지보내기</v-btn></td>
          <td>일 수행 기관</td>
        </tr>
        <tr>
          <td>수행 책임자</td>
          <td>김수행<v-btn class="vbtn btn_msg ml_10" size="small">쪽지보내기</v-btn></td>
          <td>일 수행 기관</td>
        </tr>
        <tr>
          <td>수행 책임자</td>
          <td>김수행<v-btn class="vbtn btn_msg ml_10" size="small">쪽지보내기</v-btn></td>
          <td>일 수행 기관</td>
        </tr>
        <tr>
          <td>수행 책임자</td>
          <td>김수행<v-btn class="vbtn btn_msg ml_10" size="small">쪽지보내기</v-btn></td>
          <td>일 수행 기관</td>
        </tr>
        <tr>
          <td>수행 책임자</td>
          <td>김수행<v-btn class="vbtn btn_msg ml_10" size="small">쪽지보내기</v-btn></td>
          <td>일 수행 기관</td>
        </tr>
      </tbody>
    </v-table>    

    <!-- <div class="btm_btn_wrap">
      <v-btn class="vbtn">등록</v-btn>
    </div> -->
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