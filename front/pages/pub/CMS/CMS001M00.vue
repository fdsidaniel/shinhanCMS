<template>

  <div class="title_box">
    <h2>당행 입금 이체</h2>
    <ul class="loc">
      <li>홈</li>
      <li>원화(펌뱅킹)</li>
      <li>당행 이체 내역 조회</li>
    </ul>
  </div>

  <div class="conbody">

    <v-tabs v-model="tab" class="tab_basics add_type">
      <v-tab value="orgAll">기관전체</v-tab>

      <v-btn class="vbtn btn_org_add" size="small">기관추가</v-btn>
    </v-tabs>
    

    <v-window v-model="tab" class="tab_con">
      <v-window-item value="orgAll">
        
        <p class="req_txt t_right">표시는 필수 입력 항목 입니다.</p>

      </v-window-item>
    </v-window>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComAgGrid from '~/components/common/ComAgGrid.vue'
import ComDatePicker from '@/components/common/ComDatePicker.vue'

const tab = ref('')


</script> 