<template>

  <div class="title_box">
    <h2>사업참여(TASK) 조회</h2>
    <ul class="loc">
      <li>홈</li>
      <li>협약관리</li>
      <li>사업참여(TASK) 조회</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="search_box top other noline">
      <div class="row">
        <div class="con flex1">
          <div class="input_flex a_center">
            <div class="i_calender a_center flex1">
                <span class="tit">기간</span>
                <ComSelectBox groupCode="01" v-model="comboDate" :items="itemsDate" class="s_basics w_145 mr_10 none_details" />
                <ComDatePicker v-model="startDate" class="i_date w_145" placeholder="날짜선택" />
                <span>~</span>
                <ComDatePicker v-model="endDate" class="i_date w_145" placeholder="날짜선택" />
            </div>
            <div class="flex1">
              <div class="input_flex a_center">
                <ComSelectBox groupCode="01" v-model="comboState" :items="itemsState" class="s_basics w_145 mr_20 none_details" />
                <span class="tit">수행기관</span>
                <span class="txt" v-if="true">한국가스</span>
                <v-btn class="vbtn line" size="small">발주기관 찾기</v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="con flex1">
          <div class="input_flex a_center">
            <span class="tit">사업명</span>
            <ComSelectBox groupCode="01" v-model="searchSlt" :items="itemssearchSlt" class="s_basics w_145 mr_10 none_details" />
            <v-text-field label="검색어" v-model="searchTxt" :rules="searchTxtRules" placeholder="사업명을 입력하세요." class="i_basics flex1 none_details"></v-text-field>            
            <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
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
      style="height: 570px"
      class="grid"
      :rowData="rowDataReceive"
      :defaultColDef="defaultColDefReceive"
      :rowHeight="51"
    />
    <v-btn class="vbtn btn_grid_more" size="small">더보기</v-btn>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComAgGrid from '~/components/common/ComAgGrid.vue'
import ComDatePicker from '@/components/common/ComDatePicker.vue'

const today = new Date() // 현재 날짜와 시간을 포함하는 Date 객체 생성
const year = today.getFullYear() // 년도 가져오기
const month = today.getMonth() + 1 // 월 가져오기 (0부터 시작하므로 1 더하기)
const day = today.getDate() // 일 가져오기
const formattedToday = new Date(
  `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
)
const startDate = ref(formattedToday)
const endDate = ref(formattedToday)

const comboDate = ref('001')
const itemsDate = ref([
    { title: 'TASK 시작일', value: '001' },
    { title: 'TASK 종료일', value: '002' },
])

const searchSlt = ref('001')
const itemssearchSlt = ref([
  { title: '전체', value: '001' },
  { title: 'TASK 명', value: '002' },
  { title: '사업 명', value: '003' },
  { title: '발주 기관 명', value: '004' },
  { title: 'PMS 관리번호', value: '005' },
])


const comboState = ref('진행상태')
const itemsState = ref([
  { title: '신청', value: '001' },
  { title: '진행', value: '002' },
  { title: '종료', value: '003' },
  { title: '정산', value: '004' },
  { title: '중단', value: '005' },
])

const searchTxt = ref('')
const searchTxtRules = [
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
  { headerName: 'NO.', field: 'no', width: 80 },
  { headerName: '사업명', field: 'title', width: 356, cellClass: 'ellipsis t_left' },
  { headerName: 'TASK명', field: 'taskName', width: 260 },
  { headerName: '진행상태', field: 'state', width: 100 },
  { headerName: 'TASK 시작일', field: 'startDate', width: 120 },
  { headerName: 'TASK 종료일', field: 'endDate', width: 120 },
  { headerName: '발주 기관 명', field: 'orgName', width: 260 },
  { headerName: '발주 기관 주소', field: 'orgAddress', width: 160 },
  { headerName: '건 별/일괄 구분', field: 'class', width: 120 },
])
const rowDataReceive = [
    {
    no: '999999',
    title: '차세대 이관 작업 대행 업체 선정 공고 차세대 이관 작업 대행 업체 선정 공고 차세대 이관 작업 대행 업체 선정 공고 차세대 이관 작업 대행 업체 선정 공고',
    taskName: '회원관리회원관리회원관리회원관리',
    state: '신청',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    orgName: '발주기관발주기관발주기관발주기관',
    orgAddress: '서울특별시',
    class: '건 별',
    },
    {
    no: '2',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    taskName: '회원관리01',
    state: '승인',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    orgName: '발주기관01',
    orgAddress: '서울특별시',
    class: '일괄',
    },
    {
    no: '3',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    taskName: '회원관리01',
    state: '승인',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    orgName: '발주기관01',
    orgAddress: '서울특별시',
    class: '건 별',
    },
    {
    no: '4',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    taskName: '회원관리01',
    state: '승인',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    orgName: '발주기관01',
    orgAddress: '서울특별시',
    class: '건 별',
    },
    {
    no: '5',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    taskName: '회원관리01',
    state: '승인',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    orgName: '발주기관01',
    orgAddress: '서울특별시',
    class: '건 별',
    },
    {
    no: '6',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    taskName: '회원관리01',
    state: '승인',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    orgName: '발주기관01',
    orgAddress: '서울특별시',
    class: '건 별',
    },
    {
    no: '7',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    taskName: '회원관리01',
    state: '승인',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    orgName: '발주기관01',
    orgAddress: '서울특별시',
    class: '건 별',
    },
    {
    no: '8',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    taskName: '회원관리01',
    state: '승인',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    orgName: '발주기관01',
    orgAddress: '서울특별시',
    class: '건 별',
    },
    {
    no: '9',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    taskName: '회원관리01',
    state: '승인',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    orgName: '발주기관01',
    orgAddress: '서울특별시',
    class: '건 별',
    },
    {
    no: '10',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    taskName: '회원관리01',
    state: '승인',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    orgName: '발주기관01',
    orgAddress: '서울특별시',
    class: '건 별',
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