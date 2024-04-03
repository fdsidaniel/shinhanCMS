<template>

  <div class="title_box">
    <h2>사용자 권한 제어</h2>
    <ul class="loc">
      <li>시스템 관리</li>
      <li>서비스 관리</li>
      <li>사용자 권한 제어</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="tit_cnt_btn mt_40">
        <p class="tit_cnt">
            총 <b>100</b>건
        </p>
        <div>
            <ComSelectBox groupCode="01" v-model="comboCnt" :items="itemsCnt" class="s_basics none_details w_120" />
        </div>
    </div>
    <ComAgGrid
        ref="agrid"
        :columnDefs="columnDefsReceive"
        style="height: 570px"
        class="grid vline"
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

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComAgGrid from '~/components/common/ComAgGrid.vue'

/* 그리드 */
const comboCnt = ref('001')
const itemsCnt = ref([
  { title: '10개씩', value: '001' },
  { title: '50개씩', value: '002' },
  { title: '100개씩', value: '003' },
])

const authorityChange = [ "비활성화", "기관 담당자", "유지보수 담당자" ];
const columnDefsReceive = ref([
  { headerName: '번호', field: 'no', width: 80 },
  { headerName: '사용자 계정 ID', field: 'userId', width: 245 },
  { headerName: '사용자 이름', field: 'userName', width: 150 },
  { headerName: '소속 기관', field: 'org', width: 340 },
  //{ headerName: '권한 변경', field: 'authority', width: 200 },
  {
    headerName: '권한 변경',
    field: 'authority',
    cellRenderer: 'agSelectCellEditor',
    cellRendererParams: { values: authorityChange },
    editable: false,
    cellClass: ['custom-center-align ag_select'],
    width: 200,
  },
  { headerName: '등록일', field: 'regDate', width: 140 },
])
const rowDataReceive = [
  {
    no: '999999',
    userId: 'BigMiddleSmall',
    userName: '대중소중소',
    org: '대중소기업농어업협력',
    authority: '',
    regDate: '2024-03-15',
  },
  {
    no: '2',
    userId: 'BigMiddleSmall',
    userName: '대중소',
    org: '대중소기업농어업협력',
    authority: '',
    regDate: '2024-03-15',
  },
  {
    no: '3',
    userId: 'BigMiddleSmall',
    userName: '대중소',
    org: '대중소기업농어업협력',
    authority: '',
    regDate: '2024-03-15',
  },
  {
    no: '4',
    userId: 'BigMiddleSmall',
    userName: '대중소',
    org: '대중소기업농어업협력',
    authority: '',
    regDate: '2024-03-15',
  },
  {
    no: '5',
    userId: 'BigMiddleSmall',
    userName: '대중소',
    org: '대중소기업농어업협력',
    authority: '',
    regDate: '2024-03-15',
  },
  {
    no: '6',
    userId: 'BigMiddleSmall',
    userName: '대중소',
    org: '대중소기업농어업협력',
    authority: '',
    regDate: '2024-03-15',
  },
  {
    no: '7',
    userId: 'BigMiddleSmall',
    userName: '대중소',
    org: '대중소기업농어업협력',
    authority: '',
    regDate: '2024-03-15',
  },
  {
    no: '8',
    userId: 'BigMiddleSmall',
    userName: '대중소',
    org: '대중소기업농어업협력',
    authority: '',
    regDate: '2024-03-15',
  },
  {
    no: '9',
    userId: 'BigMiddleSmall',
    userName: '대중소',
    org: '대중소기업농어업협력',
    authority: '',
    regDate: '2024-03-15',
  },
  {
    no: '10',
    userId: 'BigMiddleSmall',
    userName: '대중소',
    org: '대중소기업농어업협력',
    authority: '',
    regDate: '2024-03-15',
  },
  {
    no: '11',
    userId: 'BigMiddleSmall',
    userName: '대중소',
    org: '대중소기업농어업협력',
    authority: '',
    regDate: '2024-03-15',
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