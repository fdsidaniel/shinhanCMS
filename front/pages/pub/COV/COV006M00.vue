<template>

  <div class="title_box">
    <h2>사업조회</h2>
    <ul class="loc">
      <li>홈</li>
      <li>협약관리</li>
      <li>사업조회</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="search_box top other noline">
      <div class="row">
        <div class="con flex1">
          <div class="input_flex a_center">
            <div class="i_calender a_center flex1">
              <span class="tit">기간</span>
              <ComSelectBox groupCode="01" v-model="comboSelected" :items="items" class="s_basics w_145 mr_10 none_details" />
              <ComDatePicker v-model="startDate" class="i_date w_145" placeholder="날짜선택" />
              <span>~</span>
              <ComDatePicker v-model="endDate" class="i_date w_145" placeholder="날짜선택" />
            </div>
            <div class="flex1">
              <span class="tit">수행기관</span>
              <span class="txt" v-if="true">한국가스</span>
              <v-btn class="vbtn line" size="small">수행기관 찾기</v-btn>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="con flex1">
          <div class="input_flex a_center">
            <span class="tit">사업명</span>
            <v-text-field label="검색어" v-model="searchTxt" :rules="searchTxtRules" placeholder="사업명을 입력하세요." class="i_basics flex1 none_details"></v-text-field>            
            <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
          </div>
        </div>
      </div>
    </div>

    <div class="tit_cnt_btn">
      <p class="tit_cnt">조회 건 수 <b>100</b>건</p>
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

    <!-- <div class="btn_btm_wrap">
      <v-btn class="vbtn" size="large">정산반납계좌등록</v-btn>
    </div> -->

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
  { title: '사업 시작일', value: '001' },
  { title: '사업 종료일', value: '002' },
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

const searchTxt = ref('')
const searchTxtRules = [
  // (v) => !!v || '다시 입력해주세요.',
  //(v) => (v && v.length >= 16) || '영문, 숫자 대소문자 구분없이 6~16 자리',
]

const searchOrg = ref('')
const searchOrgRules = [
  // (v) => !!v || '다시 입력해주세요.',
  //(v) => (v && v.length >= 16) || '영문, 숫자 대소문자 구분없이 6~16 자리',
]

const comboCnt = ref('001')
const itemsCnt = ref([
  { title: '10개씩', value: '001' },
  { title: '50개씩', value: '002' },
  { title: '100개씩', value: '003' },
])

const columnDefsReceive = ref([
  { headerName: 'NO.', field: 'no', width: 70 },
  { headerName: '사업 명', field: 'title', width: 466, cellClass: 'ellipsis t_left' },
  { headerName: '사업 시작일', field: 'startDate', width: 120 },
  { headerName: '사업 종료일', field: 'endDate', width: 120 },
  { headerName: '사업 상태', field: 'state', width: 120 },
  { headerName: '발주 기관 명', field: 'orgName', width: 140 },
  { headerName: '발주 기관 주소', field: 'orgAddress', width: 120 },
])
const rowDataReceive = [
  {
    no: '999999',
    title: '차세대 이관 작업 대행 업체 선정 공고 차세대 이관 작업 대행 업체 선정 공고 차세대 이관 작업 대행 업체 선정 공고 차세대 이관 작업 대행 업체 선정 공고',
    startDate: '2023.10.10',
    endDate: '2023.11.01',
    state: '사업진행',
    orgName: '발주기관9999',
    orgAddress: '서울특별시',
  },
  {
    no: '2',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    startDate: '2023.10.10',
    endDate: '2023.11.01',
    state: '사업진행',
    orgName: '발주기관9999',
    orgAddress: '서울특별시',
  },
  {
    no: '3',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    startDate: '2023.10.10',
    endDate: '2023.11.01',
    state: '사업진행',
    orgName: '발주기관9999',
    orgAddress: '서울특별시',
  },
  {
    no: '4',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    startDate: '2023.10.10',
    endDate: '2023.11.01',
    state: '사업진행',
    orgName: '발주기관9999',
    orgAddress: '서울특별시',
  },
  {
    no: '5',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    startDate: '2023.10.10',
    endDate: '2023.11.01',
    state: '사업진행',
    orgName: '발주기관9999',
    orgAddress: '서울특별시',
  },
  {
    no: '6',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    startDate: '2023.10.10',
    endDate: '2023.11.01',
    state: '사업진행',
    orgName: '발주기관9999',
    orgAddress: '서울특별시',
  },
  {
    no: '7',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    startDate: '2023.10.10',
    endDate: '2023.11.01',
    state: '사업진행',
    orgName: '발주기관9999',
    orgAddress: '서울특별시',
  },
  {
    no: '8',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    startDate: '2023.10.10',
    endDate: '2023.11.01',
    state: '사업진행',
    orgName: '발주기관9999',
    orgAddress: '서울특별시',
  },
  {
    no: '9',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    startDate: '2023.10.10',
    endDate: '2023.11.01',
    state: '사업진행',
    orgName: '발주기관9999',
    orgAddress: '서울특별시',
  },
  {
    no: '10',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    startDate: '2023.10.10',
    endDate: '2023.11.01',
    state: '사업진행',
    orgName: '발주기관9999',
    orgAddress: '서울특별시',
  },
]
const defaultColDefReceive = {
  sortable: true,
  filter: true,
  editable: false,
  resizable: true,
  cellStyle: { textAlign: 'center' },
  // flex:1, // width auto
}
const agrid = ref(null)

</script> 