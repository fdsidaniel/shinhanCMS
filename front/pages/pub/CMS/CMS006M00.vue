<template>

  <div class="title_box">
    <h2>사용자 가입 신청 내역</h2>
    <ul class="loc">
      <li>시스템 관리</li>
      <li>사용자 관리</li>      
      <li>사용자 가입 신청 이력(조회)</li>
    </ul>
  </div>

  <div class="conbody">

    <!-- 검색 -->
    <!-- <div class="search_table">
        <div class="row">
            <div class="cell">
                <div class="col">
                    <span class="tit">신청일</span>
                    <div class="con">
                        <div class="i_calender">
                            <ComDatePicker v-model="startDate" class="i_date" placeholder="날짜선택" />
                            <span>~</span>
                            <ComDatePicker v-model="endDate" class="i_date" placeholder="날짜선택" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="col">
                    <span class="tit">신청자</span>
                    <div class="con">
                        <v-text-field label="신청자" v-model="appName" :rules="appNameRules" required placeholder="신청자를 입력해주세요." class="i_basics none_details"></v-text-field>                        
                    </div>
                </div>
            </div>
        </div>
        <div class="btn">
            <v-btn class="vbtn line search" size="small">조회</v-btn>
        </div>
    </div> -->
    <!-- //검색 -->

    <!-- 검색 -->
    <div class="search_table">
        <div class="row">
            <div class="cell">
                <div class="col">
                    <span class="tit">신청일</span>
                    <div class="con i_calender">
                        <ComRadioButton :options="calDate" v-model="calDateValue" :isInline="true" class="type_btn" />
                        <div class="i_calender ml_10" :class="[ calDateValue === '05' ? 'active' : 'inactive' ]">
                            <ComDatePicker v-model="startDate" class="i_date" placeholder="날짜선택" />
                            <span>~</span>
                            <ComDatePicker v-model="endDate" class="i_date" placeholder="날짜선택" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="cell">
                <div class="col">
                    <span class="tit">신청자</span>
                    <div class="con">
                        <v-text-field label="신청자" v-model="appName" :rules="appNameRules" required placeholder="신청자를 입력해주세요." class="i_basics none_details"></v-text-field>                        
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
            총 <b>100</b>건
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

    <div class="btn_btm_wrap">
        <v-btn class="vbtn" size="large">신청</v-btn>
    </div>

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

const appName = ref('')
const appNameRules = [
  
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
  { headerName: '신청자', field: 'appName', width: 220 },
  { headerName: '대상자', field: 'subjectName', width: 220 },
  { headerName: '상세내역', field: 'detail', width: 475, cellClass: 'link ellipsis' },
  { headerName: '신청일', field: 'appDate', width: 160 },
])
const rowDataReceive = [
  {
    no: '999999',
    appName: '김몰리몰리',
    subjectName: '박신한신한',
    detail: '상세보기',
    appDate: '2024-03-15',
  },
  {
    no: '2',
    appName: '김몰리',
    subjectName: '박신한',
    detail: '상세보기상세보기상세보기상세보기상세보기상세보기상세보기상세보기상세보기상세보기상세보기상세보기',
    appDate: '2024-03-15',
  },
  {
    no: '3',
    appName: '김몰리',
    subjectName: '박신한',
    detail: '상세보기',
    appDate: '2024-03-15',
  },
  {
    no: '4',
    appName: '김몰리',
    subjectName: '박신한',
    detail: '상세보기',
    appDate: '2024-03-15',
  },
  {
    no: '5',
    appName: '김몰리',
    subjectName: '박신한',
    detail: '상세보기',
    appDate: '2024-03-15',
  },
  {
    no: '6',
    appName: '김몰리',
    subjectName: '박신한',
    detail: '상세보기',
    appDate: '2024-03-15',
  },
  {
    no: '7',
    appName: '김몰리',
    subjectName: '박신한',
    detail: '상세보기',
    appDate: '2024-03-15',
  },
  {
    no: '8',
    appName: '김몰리',
    subjectName: '박신한',
    detail: '상세보기',
    appDate: '2024-03-15',
  },
  {
    no: '9',
    appName: '김몰리',
    subjectName: '박신한',
    detail: '상세보기',
    appDate: '2024-03-15',
  },
  {
    no: '10',
    appName: '김몰리',
    subjectName: '박신한',
    detail: '상세보기',
    appDate: '2024-03-15',
  },
  {
    no: '11',
    appName: '김몰리',
    subjectName: '박신한',
    detail: '상세보기',
    appDate: '2024-03-15',
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