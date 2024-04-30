<template>
  
  <!-- popup size width:500 height:500 -->
  <div class="popup_body">
    <h2 class="poptit">기관 추가 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>
    
    <v-text-field label="기관명" v-model="orgName" :rules="orgNameRules" required placeholder="기관명을 입력해주세요." class="i_basics none_details"></v-text-field>

    <v-table class="vtable_list none_vline inipt scroll mt_10 h_295">
        <colgroup>
            <col style="width:60px;"/>
            <col style=""/>
        </colgroup>
        <thead>
            <tr>
                <th></th>
                <th>기관명</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="center"><ComRadioButton :options="radio1" v-model="radioValue" :isInline="true" class="center" /></td>
                <td>신한은행</td>
            </tr>
            <tr>
                <td class="center"><ComRadioButton :options="radio2" v-model="radioValue" :isInline="true" class="center" /></td>
                <td>한마정보통신</td>
            </tr>
            <tr>
                <td class="center"><ComRadioButton :options="radio3" v-model="radioValue" :isInline="true" class="center" /></td>
                <td>신한기관정부</td>
            </tr>
            <tr>
                <td class="center"><ComRadioButton :options="radio4" v-model="radioValue" :isInline="true" class="center" /></td>
                <td>그린모아</td>
            </tr>
            <tr>
                <td class="center"><ComRadioButton :options="radio5" v-model="radioValue" :isInline="true" class="center" /></td>
                <td>신한은행</td>
            </tr>
            <tr>
                <td class="center"><ComRadioButton :options="radio6" v-model="radioValue" :isInline="true" class="center" /></td>
                <td>한마정보통신</td>
            </tr>
        </tbody>
    </v-table>

    <p class="tip_txt mt_10">3개 기관까지 동시 선택이 가능합니다.</p>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">선택</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComRadioButton from '@/components/common/ComRadioButton.vue'

const orgName = ref('')
const orgNameRules = [
  
]

const radioValue = ref(null)
const radio1 = [
  { label: '', value: 'value1' },
]
const radio2 = [
  { label: '', value: 'value2' },
]
const radio3 = [
  { label: '', value: 'value3' },
]
const radio4 = [
  { label: '', value: 'value4' },
]
const radio5 = [
  { label: '', value: 'value5' },
]
const radio6 = [
  { label: '', value: 'value6' },
]
</script> 