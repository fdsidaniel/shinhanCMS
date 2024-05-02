<template>
  
  <!-- popup size width:500 height:632 -->
  <div class="popup_body">
    <h2 class="poptit">입금 승인정보 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>
    
    <v-table class="vtable_view inbtn bg none_scroll">
        <colgroup>
            <col style="width:;"/>
            <col style="width:;"/>
        </colgroup>
        <tbody>
            <tr>
                <th>출금계좌성명</th>
                <td><v-text-field label="출금계좌성명" v-model="withdrawAccName" :rules="withdrawAccNameRules" required placeholder="출금계좌성명을 입력해주세요." class="i_basics none_details" /></td>
            </tr>
            <tr>
                <th>거래금액</th>
                <td><v-text-field label="거래금액" v-model="amount" :rules="amountRules" required placeholder="거래금액을 입력해주세요." class="i_basics none_details" /></td>
            </tr>
            <tr>
                <th>승인시작일시</th>
                <td>
                    <div class="i_calender">
                        <ComDatePicker v-model="callstartDate" class="i_date" placeholder="날짜선택" />
                    </div>
                </td>
            </tr>
            <tr>
                <th>승인종료일시</th>
                <td>
                    <div class="i_calender">
                        <ComDatePicker v-model="endstartDate" class="i_date" placeholder="날짜선택" />
                    </div>
                </td>
            </tr>
            <tr>
                <th>입금계좌번호</th>
                <td><v-text-field label="입금계좌번호" v-model="depositAcc" :rules="depositAccRules" required placeholder="입금계좌번호를 입력해주세요." class="i_basics none_details" /></td>
            </tr>
            <tr>
                <th>입금기관명</th>
                <td><v-text-field label="입금기관명" v-model="depositOrg" :rules="depositOrgRules" required placeholder="입금기관명을 입력해주세요." class="i_basics none_details" /></td>
            </tr>
            <tr>
                <th>결과</th>
                <td>미사용</td>
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

import ComDatePicker from '@/components/common/ComDatePicker.vue'

/* 달력 */
const today = new Date() // 현재 날짜와 시간을 포함하는 Date 객체 생성
const year = today.getFullYear() // 년도 가져오기
const month = today.getMonth() + 1 // 월 가져오기 (0부터 시작하므로 1 더하기)
const day = today.getDate() // 일 가져오기
const formattedToday = new Date(
  `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
)
const callstartDate = ref(formattedToday)
const endstartDate = ref(formattedToday)

const withdrawAccName = ref('')
const withdrawAccNameRules = [
  
]

const amount = ref('')
const amountRules = [
  
]

const startDate = ref('')
const startDateRules = [
  
]

const endDate = ref('')
const endDateRules = [
  
]

const depositAcc = ref('')
const depositAccRules = [
  
]

const depositOrg = ref('')
const depositOrgRules = [
  
]

</script> 