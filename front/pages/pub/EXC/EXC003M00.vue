<template>

  <div class="title_box">
    <h2>집행 관리</h2>
    <ul class="loc">
      <li>홈</li>
      <li>집행 관리</li>
      <li>지급 요청</li>
    </ul>
  </div>

  <div class="conbody">

    <ul class="top_step_list active_step_1"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3 -->
      <li class="step1"><span>지급 요청</span></li>
      <li class="step2"><span>지급 승인</span></li>
      <li class="step3"><span>지급 실행</span></li>
    </ul>

    <h3 class="stit">진행 중인 TASK</h3>
    <ComAgGrid
      ref="agrid"
      :columnDefs="columnDefsReceive"
      style="height: 553px"
      class="grid vline fixed"
      :rowData="rowDataReceive"
      :defaultColDef="defaultColDefReceive"
      :rowHeight="51"
    />

    <div class="btn_btm_wrap">
      <v-btn class="vbtn" size="large">다음</v-btn>
    </div>

  </div>
  
</template>

<style scoped>
  
</style>

<script setup >

import ComAgGrid from '~/components/common/ComAgGrid.vue'

const columnDefsReceive = ref([
  {
    headerName: '',
    field: 'chk',
    cellRenderer: 'agCheckboxCellRenderer',
    editable: false,
    cellRendererParams: {
      disabled: false,
    },
    cellClass: ['custom-center-align ag_radio'],
    width: 60,
  },
  { headerName: '사업명', field: 'title', width: 332, cellClass: 'ellipsis t_left' },
  { headerName: '발주 기관 명', field: 'orgName', width: 260 },
  { headerName: 'TASK명', field: 'taskName', width: 260 },  
  { headerName: '시작일', field: 'startDate', width: 120 },
  { headerName: '종료일', field: 'endDate', width: 120 },
])
const rowDataReceive = [
  {
    chk: false,
    title: '차세대 이관 작업 대행 업체 선정 공고 차세대 이관 작업 대행 업체 선정 공고 차세대 이관 작업 대행 업체 선정 공고 차세대 이관 작업 대행 업체 선정 공고',
    orgName: '발주기관발주기관발주기관발주기관',
    taskName: '회원관리회원관리회원관리회원관리',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
  },
  {
    chk: false,
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마발주사01',
    taskName: 'TASK01',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
  },
  {
    chk: false,
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마발주사01',
    taskName: 'TASK01',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
  },
  {
    chk: false,
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마발주사01',
    taskName: 'TASK01',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
  },
  {
    chk: false,
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마발주사01',
    taskName: 'TASK01',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
  },
  {
    chk: false,
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마발주사01',
    taskName: 'TASK01',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
  },
  {
    chk: false,
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마발주사01',
    taskName: 'TASK01',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
  },
  {
    chk: false,
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마발주사01',
    taskName: 'TASK01',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
  },
  {
    chk: false,
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마발주사01',
    taskName: 'TASK01',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
  },
  {
    chk: false,
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마발주사01',
    taskName: 'TASK01',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
  },
  {
    chk: false,
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마발주사01',
    taskName: 'TASK01',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
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