<template>
  
  <!-- popup size width:500 height:632 -->
  <div class="popup_body">
    <h2 class="poptit">수취인 정보 입력 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>
    
    <v-table class="vtable_view inbtn bg">
        <colgroup>
            <col style="width:;"/>
            <col style="width:;"/>
        </colgroup>
        <tbody>
            <tr>
                <th>입금계좌성명</th>
                <td><v-text-field label="입금계좌성명" v-model="depositAccName" :rules="depositAccNameRules" required placeholder="입금계좌성명을 입력해주세요." class="i_basics none_details" /></td>
            </tr>
            <tr>
                <th>입금계좌번호</th>
                <td><v-text-field label="입금계좌번호" v-model="depositAcc" :rules="depositAccRules" required placeholder="입금계좌번호를 입력해주세요." class="i_basics none_details" /></td>
            </tr>
            <tr>
                <th>거래일시</th>
                <td><v-text-field label="거래일시" v-model="dealDate" :rules="dealDateRules" required placeholder="거래일시를 입력해주세요." class="i_basics none_details" /></td>
            </tr>
            <tr>
                <th>취소요청여부</th>
                <td><ComRadioButton :options="radioCancel" v-model="selectedCancel" :isInline="true" /></td>
            </tr>
        </tbody>
    </v-table>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">저장</v-btn>
    </div>
    
  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComRadioButton from '@/components/common/ComRadioButton.vue'

const depositAccName = ref('')
const depositAccNameRules = [
  
]

const dealDate = ref('')
const dealDateRules = [
  
]

const depositAcc = ref('')
const depositAccRules = [
  
]

const selectedCancel = ref('N')
const radioCancel = [
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]



</script> 