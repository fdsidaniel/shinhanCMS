<template>

  <!-- popup size width:500 height:428 -->
  <div class="popup_body">
    <h2 class="poptit">결제선 선택 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <ul class="pop_view_list none_btm_bd">
      <li>
        <p class="tit">몇 단계 결재로 진행하시나요?</p>
        <div class="con">
          <ComSelectBox groupCode="01" v-model="selectStep" :items="itemsStep" class="s_basics none_details mb_20" />
          <div class="bdr_gray2 mt_10 inline">
            <p class="tit">1차 승인자</p>
            <ComSelectBox groupCode="01" v-model="selectApprover1" :items="itemsApprover1" class="s_basics none_details" />
          </div>
          <div class="bdr_gray2 mt_10 inline">
            <p class="tit">2차 승인자</p>
            <ComSelectBox groupCode="01" v-model="selectApprover2" :items="itemsApprover2" class="s_basics none_details" />
          </div>
          <div class="bdr_gray2 mt_10 inline">
            <p class="tit">3차 승인자</p>
            <ComSelectBox groupCode="01" v-model="selectApprover3" :items="itemsApprover3" class="s_basics none_details" />
          </div>
          <div class="bdr_gray2 mt_10 inline">
            <p class="tit">4차 승인자</p>
            <ComSelectBox groupCode="01" v-model="selectApprover4" :items="itemsApprover4" class="s_basics none_details" />
          </div>
          <div class="bdr_gray2 mt_10 inline">
            <p class="tit">5차 승인자</p>
            <ComSelectBox groupCode="01" v-model="selectApprover5" :items="itemsApprover5" class="s_basics none_details" />
          </div>
        </div>
      </li>
    </ul>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">확인</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'

const selectStep = ref('01')
const itemsStep = ref([
    { title: '1차', value: '01' },
    { title: '2차', value: '02' },
    { title: '3차', value: '03' },
    { title: '4차', value: '04' },
    { title: '5차', value: '05' },
])

const selectApprover1 = ref('01')
const itemsApprover1 = ref([
    { title: '김신한', value: '01' },
])

const selectApprover2 = ref('01')
const itemsApprover2 = ref([
  { title: '김신한', value: '01' },
])

const selectApprover3 = ref('01')
const itemsApprover3 = ref([
  { title: '김신한', value: '01' },
])

const selectApprover4 = ref('01')
const itemsApprover4 = ref([
  { title: '김신한', value: '01' },
])

const selectApprover5 = ref('01')
const itemsApprover5 = ref([
  { title: '김신한', value: '01' },
])


</script> 