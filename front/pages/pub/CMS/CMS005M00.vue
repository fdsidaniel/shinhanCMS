<template>

  <div class="title_box">
    <h2>가상거래 명세통지</h2>
    <ul class="loc">
      <li>홈</li>
      <li>원화(펌뱅킹)</li>
      <li>이체 정보 관리</li>
      <li>가상거래 명세통지</li>
    </ul>
  </div>

  <div class="conbody">

    <p class="req_txt mb_10 t_right">표시는 필수 입력 항목 입니다.</p>
    <!-- 검색 -->
    <div class="search_table">
        <div class="row">
            <div class="cell">
                <div class="col vtop">
                    <span class="tit other">거래일시</span>
                    <div class="con">
                        <ComRadioButton :options="calDate" v-model="calDateValue" :isInline="true" class="type_btn" />
                        <div class="i_calender mt_10" v-show="calDateValue === '05'">
                            <ComDatePicker v-model="startDate" class="i_date" placeholder="날짜선택" />
                            <span>~</span>
                            <ComDatePicker v-model="endDate" class="i_date" placeholder="날짜선택" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="col">
                    <span class="tit other">거래구분</span>
                    <div class="con">
                        <ComSelectBox groupCode="01" v-model="comboClass" :items="itemsClass" :isAll="true"  class="s_basics none_details" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="cell">
                <div class="col">
                    <span class="tit other">모계좌번호</span>
                    <div class="con">
                        <v-text-field label="모계좌번호" v-model="accNum" :rules="accNumRules" required placeholder="모계좌번호 입력해주세요." class="i_basics none_details"></v-text-field>                        
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="col">
                    <span class="tit other">가상계좌번호</span>
                    <div class="con">
                        <v-text-field label="가상계좌번호" v-model="vaccNum" :rules="vaccNumRules" required placeholder="가상계좌번호 입력해주세요." class="i_basics none_details"></v-text-field>                        
                    </div>
                </div>
            </div>            
        </div>
        <div class="btn">
            <v-btn class="vbtn line search" size="small">조회</v-btn>
        </div>
    </div>
    <!-- //검색 -->

    <div class="tit_cnt_btn mt_40">
        <p class="tit_cnt">
            총 <b>100</b>건,
            <span class="txt">조회 결과 : 2024.02.15 ~ 2024.02.15</span>
        </p>
    </div>
    <ComAgGrid
        ref="agrid"
        :columnDefs="columnDefsReceive"
        style="height: 570px"
        class="grid"
        :rowData="rowDataReceive"
        :defaultColDef="defaultColDefReceive"
        :rowHeight="51"
        :tooltipShowDelay="0"
        :tooltipHideDelay="9000"
    />
    <v-btn class="vbtn btn_grid_more" size="small">더보기(1/10)</v-btn>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComRadioButton from '@/components/common/ComRadioButton.vue'
import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComAgGrid from '~/components/common/ComAgGrid.vue'
import ComDatePicker from '@/components/common/ComDatePicker.vue'

const calDateValue = ref('05')
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

const comboClass = ref('01')
const itemsClass = ref([
    { title: '거래구분', value: '01' },
    { title: '거래구분', value: '02' },
])

const accNum = ref('')
const accNumRules = [
  
]

const vaccNum = ref('')
const vaccNumRules = [
  
]

/* 그리드 */
const comboCnt = ref('001')
const itemsCnt = ref([
  { title: '10개씩', value: '001' },
  { title: '50개씩', value: '002' },
  { title: '100개씩', value: '003' },
])

const columnDefsReceive = ref([
  { headerName: '번호', field: 'no', width: 80 },
  { headerName: '성명', field: 'name', width: 120, cellClass: 'link' },
  { headerName: '입지구분', field: 'class', width: 100 },
  { headerName: '거래구분', field: 'transactionClass', width: 160 },
  { headerName: '거래금액', field: 'transactionAmount', width: 150, cellClass: 'cell_right' },
  { headerName: '모계좌번호', field: 'accNum', width: 210 },
  { headerName: '가상계좌번호', field: 'vaccNum', width: 210 },
  { headerName: '거래일시', field: 'transactionDate', width: 120 },
])
const rowDataReceive = [
  {
    no: '999999',
    name: '최몰리',
    class: '입금',
    transactionClass: '보관어음입금',
    transactionAmount: '900,000,000,000',
    accNum: '110-019-876043',
    vaccNum: '110-019-876043',
    transactionDate: '2024.02.15',
  },
  {
    no: '2',
    name: '최몰리최몰리',
    class: '입금',
    transactionClass: '보관어음입금',
    transactionAmount: '5,000,000',
    accNum: '110-019-876043',
    vaccNum: '110-019-876043',
    transactionDate: '2024.02.15',
  },
  {
    no: '3',
    name: '최몰리',
    class: '입금',
    transactionClass: '보관어음입금',
    transactionAmount: '5,000,000',
    accNum: '110-019-876043',
    vaccNum: '110-019-876043',
    transactionDate: '2024.02.15',
  },
  {
    no: '4',
    name: '최몰리',
    class: '입금',
    transactionClass: '보관어음입금',
    transactionAmount: '5,000,000',
    accNum: '110-019-876043',
    vaccNum: '110-019-876043',
    transactionDate: '2024.02.15',
  },
  {
    no: '5',
    name: '최몰리',
    class: '입금',
    transactionClass: '보관어음입금',
    transactionAmount: '5,000,000',
    accNum: '110-019-876043',
    vaccNum: '110-019-876043',
    transactionDate: '2024.02.15',
  },
  {
    no: '6',
    name: '최몰리',
    class: '입금',
    transactionClass: '보관어음입금',
    transactionAmount: '5,000,000',
    accNum: '110-019-876043',
    vaccNum: '110-019-876043',
    transactionDate: '2024.02.15',
  },
  {
    no: '7',
    name: '최몰리',
    class: '입금',
    transactionClass: '보관어음입금',
    transactionAmount: '5,000,000',
    accNum: '110-019-876043',
    vaccNum: '110-019-876043',
    transactionDate: '2024.02.15',
  },
  {
    no: '8',
    name: '최몰리',
    class: '입금',
    transactionClass: '보관어음입금',
    transactionAmount: '5,000,000',
    accNum: '110-019-876043',
    vaccNum: '110-019-876043',
    transactionDate: '2024.02.15',
  },
  {
    no: '9',
    name: '최몰리',
    class: '입금',
    transactionClass: '보관어음입금',
    transactionAmount: '5,000,000',
    accNum: '110-019-876043',
    vaccNum: '110-019-876043',
    transactionDate: '2024.02.15',
  },
  {
    no: '10',
    name: '최몰리',
    class: '입금',
    transactionClass: '보관어음입금',
    transactionAmount: '5,000,000',
    accNum: '110-019-876043',
    vaccNum: '110-019-876043',
    transactionDate: '2024.02.15',
  },
  {
    no: '11',
    name: '최몰리',
    class: '입금',
    transactionClass: '보관어음입금',
    transactionAmount: '5,000,000',
    accNum: '110-019-876043',
    vaccNum: '110-019-876043',
    transactionDate: '2024.02.15',
  },
]
const defaultColDefReceive = {
  sortable: true,
  filter: true,
  editable: false,
  resizable: true,
  cellStyle: { textAlign: 'center' },
  // tooltipComponent: {},
  tooltipComponent: 'CustomTooltip',
  // flex:1, // width auto
}
const agrid = ref(null)

</script> 