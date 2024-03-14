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
        <div class="search_table">
            <div class="row">
                <div class="cell">
                    <div class="col">
                        <span class="tit req">거래일시</span>
                        <div class="con">
                            <ComRadioButton :options="calDate" v-model="calDateValue" :isInline="true" class="type_btn" />
                            <div class="i_calender mt_10">
                                <ComDatePicker v-model="startDate" class="i_date" placeholder="날짜선택" />
                                <span>~</span>
                                <ComDatePicker v-model="endDate" class="i_date" placeholder="날짜선택" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cell">
                    <div class="col">
                        <span class="tit">처리결과</span>
                        <div class="con">
                            <ComSelectBox groupCode="01" v-model="comboProcessResult" :items="itemsProcessResult" :isAll="true"  class="s_basics none_details" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="cell">
                    <div class="col">
                        <span class="tit req">요청채널</span>
                        <div class="con">
                            <ComSelectBox groupCode="01" v-model="comboRequestChannel" :items="itemsRequestChannel" :isAll="true"  class="s_basics none_details" />
                        </div>
                    </div>
                </div>
                <div class="cell">
                    <div class="col">
                        <span class="tit req">요청번호</span>
                        <div class="con">
                            <v-text-field label="요청번호" v-model="requestNum" :rules="requestNumRules" required placeholder="요청번호 모두를 입력해주세요." class="i_basics none_details"></v-text-field>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="cell">
                    <div class="col">
                        <span class="tit req">계좌번호</span>
                        <div class="con">
                            <v-text-field label="계좌번호" v-model="accNum" :rules="accNumRules" required placeholder="“-”없이, 계좌번호 모두를 입력해주세요." class="i_basics none_details"></v-text-field>
                        </div>
                    </div>
                </div>
                <div class="cell">
                    <div class="col">
                        <span class="tit req">통장 메모</span>
                        <div class="con">
                            <v-text-field label="통장 메모" v-model="bankBookMemo" :rules="bankBookMemoRules" required placeholder="두 글자 이상 입력해주세요." class="i_basics none_details"></v-text-field>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn">
                <v-btn class="vbtn line search" size="small">조회</v-btn>
            </div>
        </div>

      </v-window-item>
    </v-window>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComRadioButton from '@/components/common/ComRadioButton.vue'
import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComAgGrid from '~/components/common/ComAgGrid.vue'
import ComDatePicker from '@/components/common/ComDatePicker.vue'

const tab = ref('')

const calDateValue = ref(null)
const calDate = [
  { label: '당일', value: '01' },
  { label: '1개월', value: '02' },
  { label: '3개월', value: '03' },
  { label: '6개월', value: '04' },
  { label: '직접입력', value: '05' },
]

/* 달력 */
const today = new Date() // 현재 날짜와 시간을 포함하는 Date 객체 생성
const year = today.getFullYear() // 년도 가져오기
const month = today.getMonth() + 1 // 월 가져오기 (0부터 시작하므로 1 더하기)
const day = today.getDate() // 일 가져오기
const formattedToday = new Date(
  `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
)
const startDate = ref(formattedToday)
const endDate = ref(formattedToday)

const comboProcessResult = ref('01')
const itemsProcessResult = ref([
    { title: '정상', value: '01' },
    { title: '오류', value: '02' },
    { title: '처리 중', value: '03' },
])

const comboRequestChannel = ref('01')
const itemsRequestChannel = ref([
    { title: 'D: DB', value: '01' },
    { title: 'A: API', value: '02' },
    { title: 'R: RESERV', value: '03' },
    { title: 'S: SCHED', value: '04' },
])

const requestNum = ref('')
const requestNumRules = [
  
]

const acctNum = ref('')
const accNumRules = [
  
]

const bankBookMemo = ref('')
const bankBookMemoRules = [
  
]


</script> 