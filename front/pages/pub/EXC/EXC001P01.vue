<template>
  
  <!-- popup size width:1024 height:900 -->
  <div class="popup_body">
    <h2 class="poptit">사업 선택 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <div class="search_box top other mb_20">
      <div class="row">
        <div class="con flex1">
          <div class="input_flex a_center">
            <span class="tit">사업명</span>
            <ComSelectBox groupCode="01" v-model="businessName" :items="itemsbusinessName" class="s_basics none_details flex1" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="con flex1">
          <div class="d_flex">
            <div class="flex1">
              <div class="input_flex a_center">
                <span class="tit">TASK</span>
                <ComSelectBox groupCode="01" v-model="taskState" :items="itemsTaskState" class="s_basics none_details flex1" />
              </div>
            </div>
            <div class="flex1 ml_20">
              <div class="input_flex a_center">
                <span class="tit">TASK명</span>
                <v-text-field label="검색어" v-model="taskName" :rules="taskNameRules" placeholder="TASK명을 입력하세요" class="i_basics flex1 none_details"></v-text-field>                
              </div>
            </div>
            <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
          </div>
        </div>
      </div>
    </div>

    <ComAgGridBasic
      ref="agrid"
      :columnDefs="columnDefsReceive"
      style="height: 604px"
      class="grid vline mt_20"
      :rowData="rowDataReceive"
      :defaultColDef="defaultColDefReceive"
      :rowHeight="51"
    />

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">선택</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComAgGridBasic from '~/components/common/ComAgGridBasic.vue'

const businessName = ref('001')
const itemsbusinessName = ref([
  { title: '[1234567890]2023 차세대 이관 작업 대행 업체 선정 공고', value: '001' },
  { title: '[1234567891]2023 차세대 이관 작업 대행 업체 선정 공고', value: '002' },
  { title: '[1234567892]2023 차세대 이관 작업 대행 업체 선정 공고', value: '003' },
])

const taskState = ref('001')
const itemsTaskState = ref([
  { title: '상태 전체', value: '001' },
  { title: '진행 중', value: '002' },
  { title: '종료', value: '003' },
])

const taskName = ref('')
const taskNameRules = [
  //(v) => !!v || '다시 입력해주세요.',  
]

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
  {
    headerName: 'TASK 명', field: 'taskName', width: 260,
    colSpan: params => params.data.taskName === 'TASK 전체' ? 7 : 1,
  },
  { headerName: '수행기관 명', field: 'orgName', width: 160 },
  { headerName: '사업자등록번호', field: 'corporateNum', width: 160 },
  { headerName: '책임자', field: 'director', width: 120 },
  { headerName: 'TASK 시작일', field: 'startDate', width: 120 },
  { headerName: 'TASK 종료일', field: 'endDate', width: 120 },
  { headerName: 'TASK 상태', field: 'state', width: 120 },
])
const rowDataReceive = [
  {
    chk: false,
    taskName: 'TASK 전체',
  },
  {
    chk: false,
    taskName: 'TASK명TASK명TASK명TASK명',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    director: '김수행수행',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행 중',
  },
  {
    chk: false,
    taskName: 'TASK명TASK명TASK명TASK명',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    director: '김수행수행',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '종료',
  },
  {
    chk: false,
    taskName: 'TASK명TASK명TASK명TASK명',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    director: '김수행수행',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행 중',
  },
  {
    chk: false,
    taskName: 'TASK명TASK명TASK명TASK명',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    director: '김수행수행',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '종료',
  },
  {
    chk: false,
    taskName: 'TASK명TASK명TASK명TASK명',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    director: '김수행수행',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행 중',
  },
  {
    chk: false,
    taskName: 'TASK명TASK명TASK명TASK명',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    director: '김수행수행',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '종료',
  },
  {
    chk: false,
    taskName: 'TASK명TASK명TASK명TASK명',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    director: '김수행수행',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행 중',
  },
  {
    chk: false,
    taskName: 'TASK명TASK명TASK명TASK명',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    director: '김수행수행',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '종료',
  },
  {
    chk: false,
    taskName: 'TASK명TASK명TASK명TASK명',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    director: '김수행수행',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행 중',
  },
  {
    chk: false,
    taskName: 'TASK명TASK명TASK명TASK명',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    director: '김수행수행',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '종료',
  },
  {
    chk: false,
    taskName: 'TASK명TASK명TASK명TASK명',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    director: '김수행수행',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행 중',
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