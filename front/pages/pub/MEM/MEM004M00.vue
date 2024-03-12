<template>
<div>
  
  <div class="title_box">
    <h2>결재함</h2>
    <ul class="loc">
      <li>홈</li>
      <li>결재함</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="payment_box">
      <div class="app">
        <p class="tit">회원 가입 승인</p>
        <nuxt-link to="/pub/MEM/MEM004M00" class="vlink basic">10건</nuxt-link>
      </div>
      <div class="cancel">
        <p class="tit">민간 입금 취소</p>
        <nuxt-link to="/pub/MEM/MEM004M00" class="vlink basic">10건</nuxt-link>
      </div>
    </div>

    <!-- <div class="search_box top other noline mt_40">
      <div class="row">
        <div class="con flex1">
          <div class="input_flex a_center">
            <div class="flex1">
              <div class="input_flex a_center">
                <span class="tit other">회계연도</span>
                <ComSelectBox groupCode="01" v-model="yearName" :items="itemsYear" class="s_basics none_details flex1" />
              </div>
            </div>
            <div class="flex1 ml_20">
              <div class="input_flex a_center">
                <span class="tit other">사업</span>
                <ComSelectBox groupCode="01" v-model="businessName" :items="itemsBusiness" class="s_basics none_details flex1" />
              </div>
            </div>
            <div class="flex1 ml_20">
              <div class="input_flex a_center">
                <span class="tit other">결재 종류</span>
                <ComSelectBox groupCode="01" v-model="typeName" :items="itemsType" class="s_basics none_details flex1" />
              </div>
            </div>
            <div class="flex1 ml_20">
              <div class="input_flex a_center">
                <span class="tit other">TASK 명</span>
                <v-text-field label="검색어" v-model="searchTxt" :rules="searchTxtRules" placeholder="검색어를 입력하세요." class="i_basics flex1 none_details"></v-text-field>
              </div>
            </div>
            <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
          </div>          
        </div>
      </div>
    </div> -->

    <div class="tit_cnt_btn mt_40">
      <p class="tit_cnt">총 <b>100</b>건</p>
      <div>
        <ComSelectBox groupCode="01" v-model="comboList" :items="itemsList" class="s_basics none_details w_160" />
        <ComSelectBox groupCode="01" v-model="comboCnt" :items="itemsCnt" class="s_basics none_details w_120" />
      </div>
    </div>
    <ComAgGridBasic
      ref="agrid"
      :columnDefs="columnDefsReceive"
      style="height: 553px"
      class="grid vline"
      :rowData="rowDataReceive"
      :defaultColDef="defaultColDefReceive"
      :rowHeight="51"
    />
    <v-btn class="vbtn btn_grid_more" size="small">더보기</v-btn>

  </div>

</div>
</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComAgGridBasic from '~/components/common/ComAgGridBasic.vue'

const yearName = ref('001')
const itemsYear = ref([
  { title: '2023년', value: '001' },
  { title: '2022년', value: '002' },
  { title: '2021년', value: '003' },
])

const businessName = ref('001')
const itemsBusiness = ref([
  { title: '사업명', value: '001' },
  { title: '사업명', value: '002' },
  { title: '사업명', value: '003' },
])

const comboList = ref('001')
const itemsList = ref([
  { title: '결재 종류 선택', value: '001' },
  { title: '결재 종류 선택', value: '002' },
])

const typeName = ref('001')
const itemsType = ref([
  { title: '전체', value: '001' },
])

const searchTxt = ref('')
const searchTxtRules = [
  //(v) => !!v || '다시 입력해주세요.',
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
  { headerName: '사업명', field: 'title', width: 359, cellClass: 'ellipsis t_left' },
  { headerName: 'TASK 명', field: 'taskName', width: 240 },
  { headerName: '수행기관 명', field: 'orgName', width: 160 },
  { headerName: '책임자', field: 'director', width: 140, cellClass: 'ico_msg' },
  { headerName: '결재 종류', field: 'appType', width: 160 },
  { headerName: '요청 일자', field: 'date', width: 160 },

])
const rowDataReceive = [
  {
    no: '999999',
    title: '차세대 이관 작업 대행 업체 선정 공고 차세대 이관 작업 대행 업체 선정 공고 차세대 이관 작업 대행 업체 선정 공고 차세대 이관 작업 대행 업체 선정 공고',
    taskName: '회원관리회원관리회원관리회원관리',
    orgName: '한마정보통신',    
    director: '김수행수행',
    appType: 'TASK 신규',
    date: '2024-01-03',
  },
  {
    no: '2',
    title: '이관사업명01',
    taskName: '회원관리01',
    orgName: '한마정보통신',    
    director: '김수행',
    appType: 'TASK 정산 확정',
    date: '2024-01-03',
  },
  {
    no: '3',
    title: '이관사업명01',
    taskName: '회원관리01',
    orgName: '한마정보통신',    
    director: '김수행',
    appType: 'TASK 정산 확정',
    date: '2024-01-03',
  },
  {
    no: '4',
    title: '이관사업명01',
    taskName: '회원관리01',
    orgName: '한마정보통신',    
    director: '김수행',
    appType: 'TASK 정산 확정',
    date: '2024-01-03',
  },
  {
    no: '5',
    title: '이관사업명01',
    taskName: '회원관리01',
    orgName: '한마정보통신',    
    director: '김수행',
    appType: 'TASK 정산 확정',
    date: '2024-01-03',
  },
  {
    no: '6',
    title: '이관사업명01',
    taskName: '회원관리01',
    orgName: '한마정보통신',    
    director: '김수행',
    appType: 'TASK 정산 확정',
    date: '2024-01-03',
  },
  {
    no: '7',
    title: '이관사업명01',
    taskName: '회원관리01',
    orgName: '한마정보통신',    
    director: '김수행',
    appType: 'TASK 정산 확정',
    date: '2024-01-03',
  },
  {
    no: '8',
    title: '이관사업명01',
    taskName: '회원관리01',
    orgName: '한마정보통신',    
    director: '김수행',
    appType: 'TASK 정산 확정',
    date: '2024-01-03',
  },
  {
    no: '9',
    title: '이관사업명01',
    taskName: '회원관리01',
    orgName: '한마정보통신',    
    director: '김수행',
    appType: 'TASK 정산 확정',
    date: '2024-01-03',
  },
  {
    no: '10',
    title: '이관사업명01',
    taskName: '회원관리01',
    orgName: '한마정보통신',    
    director: '김수행',
    appType: 'TASK 정산 확정',
    date: '2024-01-03',
  },
  {
    no: '11',
    title: '이관사업명01',
    taskName: '회원관리01',
    orgName: '한마정보통신',    
    director: '김수행',
    appType: 'TASK 정산 확정',
    date: '2024-01-03',
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