<template>

  <div class="title_box">
    <h2>공고 조회</h2>
    <ul class="loc">
      <li>홈</li>
      <li>계약관리</li>
      <li>공고조회</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="search_box top">
      <div class="row">
        <!-- <span class="tit">기간검색</span> -->
        <div class="con">
          <div class="i_calender">
            <ComSelectBox groupCode="01" v-model="comboSelected" :items="items" class="s_basics w_130 mr_10 none_details" />
            <ComDatePicker v-model="startDate" class="i_date w_150" placeholder="날짜선택" />
            <span>~</span>
            <ComDatePicker v-model="endDate" class="i_date w_150" placeholder="날짜선택" />

            <ComSelectBox groupCode="01" v-model="comboStatus" :items="itemsStatus" class="s_basics w_160 ml_20 none_details" />
            <!-- <ComSelectBox groupCode="01" v-model="comboOrg" :items="itemsOrg" class="s_basics w_110 ml_20 none_details" /> -->
            <span class="tit">공고 제목</span>
            <v-text-field label="검색어" v-model="searchTxt" :rules="searchTxtRules" placeholder="검색어를 입력하세요" class="i_basics w_268 none_details ml_5"></v-text-field>
            <v-btn class="vbtn line search ml_5" size="small">조회</v-btn>
          </div>
        </div>
      </div>
    </div>

    <div class="tit_cnt_btn">
      <p class="tit_cnt">총 <b>100</b>건</p>
      <div>
        <ComSelectBox groupCode="01" v-model="comboCnt" :items="itemsCnt" class="s_basics none_details w_120" />
      </div>
    </div>
    <ComAgGrid
      ref="agrid"
      :columnDefs="columnDefsReceive"
      style="height: 553px"
      class="grid fixed"
      :rowData="rowDataReceive"
      :defaultColDef="defaultColDefReceive"
      :rowHeight="51"
    />
    <v-btn class="vbtn btn_grid_more" size="small">더보기</v-btn>

    <div class="btn_btm_wrap right">
      <v-btn class="vbtn" size="small">공고 등록</v-btn>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComAgGrid from '~/components/common/ComAgGrid.vue'
import ComDatePicker from '@/components/common/ComDatePicker.vue'

const comboSelected = ref('001')
const items = ref([
  { title: '게시 시작일', value: '001' },
  { title: '종료일', value: '002' },
])

const searchTxt = ref('')
const searchTxtRules = [
  // (v) => !!v || '다시 입력해주세요.',
  //(v) => (v && v.length >= 16) || '영문, 숫자 대소문자 구분없이 6~16 자리',
]

const comboStatus = ref('001')
const itemsStatus = ref([
  { title: '공고 상태 전체', value: '001' },
  { title: '공고 상태 진행중', value: '002' },
  { title: '사업자선정', value: '003' },
  { title: '종료', value: '004' },
])

const comboOrg = ref('001')
const itemsOrg = ref([
  { title: '전체', value: '001' },
  { title: '공고 제목', value: '002' },
])

const today = new Date() // 현재 날짜와 시간을 포함하는 Date 객체 생성
const year = today.getFullYear() // 년도 가져오기
const month = today.getMonth() + 1 // 월 가져오기 (0부터 시작하므로 1 더하기)
const day = today.getDate() // 일 가져오기
const formattedToday = new Date(
  `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
)
const startDate = ref(formattedToday)
const endDate = ref(formattedToday)

const comboCnt = ref('001')
const itemsCnt = ref([
  { title: '10개씩', value: '001' },
  { title: '50개씩', value: '002' },
  { title: '100개씩', value: '003' },
])

const columnDefsReceive = ref([
  { headerName: 'NO.', field: 'no', width: 80 },
  { headerName: '공고 상태', field: 'state', width: 130 },
  { headerName: '공고 제목', field: 'title', width: 706, cellClass: 'ellipsis t_left' },
  { headerName: '시작일', field: 'startDate', width: 120 },
  { headerName: '종료일', field: 'endDate', width: 120 },
])
const rowDataReceive = [
  {
    no: '999999',
    state: '사업자선정',
    title: '차세대 이관 작업 대행 업체 선정 공고 차세대 이관 작업 대행 업체 선정 공고 차세대 이관 작업 대행 업체 선정 공고 차세대 이관 작업 대행 업체 선정 공고',
    startDate: '2023.10.10',
    endDate: '2023.11.01',
  },
  {
    no: '2',
    state: '진행중',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    startDate: '2023.10.10',
    endDate: '2023.11.01',
  },
  {
    no: '3',
    state: '사업자선정',
    title: '차세대 이관 작업 대행 업체 선정 공고 차세대 이관 작업 대행 업체 선정 공고 차세대 이관 작업 대행 업체 선정 공고 차세대 이관 작업 대행 업체 선정 공고',
    startDate: '2023.10.10',
    endDate: '2023.11.01',
  },
  {
    no: '4',
    state: '진행중',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    startDate: '2023.10.10',
    endDate: '2023.11.01',
  },
  {
    no: '5',
    state: '진행중',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    startDate: '2023.10.10',
    endDate: '2023.11.01',
  },
  {
    no: '6',
    state: '진행중',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    startDate: '2023.10.10',
    endDate: '2023.11.01',
  },
  {
    no: '7',
    state: '진행중',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    startDate: '2023.10.10',
    endDate: '2023.11.01',
  },
  {
    no: '8',
    state: '진행중',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    startDate: '2023.10.10',
    endDate: '2023.11.01',
  },
  {
    no: '9',
    state: '진행중',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    startDate: '2023.10.10',
    endDate: '2023.11.01',
  },
  {
    no: '10',
    state: '진행중',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    startDate: '2023.10.10',
    endDate: '2023.11.01',
  },
]
const defaultColDefReceive = {
  sortable: true,
  filter: true,
  editable: true,
  resizable: true,
  cellStyle: { textAlign: 'center' },
  // flex:1, // width auto
}
const agrid = ref(null)

</script> 