<template>

  <div class="title_box">
    <h2>서비스 시간 관리</h2>
    <ul class="loc">
      <li>시스템 관리</li>
      <li>서비스 관리</li>      
      <li>서비스 시간 관리(조회)</li>
    </ul>
  </div>

  <div class="conbody">

    <!-- 검색 -->
    <div class="search_table">
        <div class="row">
            <div class="cell">
                <div class="col">
                    <span class="tit">기관명</span>
                    <div class="con">
                        <v-text-field label="기관명" v-model="orgName" :rules="orgNameRules" required placeholder="기관명을 입력해주세요." class="i_basics none_details" />
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
        <div>
            <ComSelectBox groupCode="01" v-model="comboCnt" :items="itemsCnt" class="s_basics none_details w_120" />
        </div>
    </div>
    <ComAgGrid
        ref="agrid"
        :columnDefs="columnDefsReceive"
        style="height: 570px"
        class="grid none_head_line vline"
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

const orgName = ref('')
const orgNameRules = [
  
]

/* 그리드 */
const comboCnt = ref('001')
const itemsCnt = ref([
  { title: '10개씩', value: '001' },
  { title: '50개씩', value: '002' },
  { title: '100개씩', value: '003' },
])

class CustomCellRendererBtn {
  eGui;
  init(params) {
    this.eGui = document.createElement('div');
    this.eGui.classList.add('my-custom-cell-renderer');
    this.eGui.innerHTML =
      /* html */
      `<button type="button" class="btn_vbtn btn_modify">서비스 시간 수정</button>`;
  }
  getGui() {
    return this.eGui;
  }
  refresh(params) {
    return false;
  }
}
const columnDefsReceive = ref([
  { headerName: '번호', field: 'no', width: 80 },
  { headerName: '기관명', field: 'orgName', width: 269},
  { headerName: '서비스 시작 시간', field: 'startTime', width: 269 },
  { headerName: '서비스 종료 시간', field: 'endTime', width: 269 },
  { headerName: '시간 변경', field: 'timeMod', width: 269, cellRenderer: CustomCellRendererBtn },
])
const rowDataReceive = [
  {
    no: '999999',
    orgName: '대중소기업농어업혁력',
    startTime: '08:00',
    endTime: '23:00',
    timeMod: '서비스 시간 수정',
  },
  {
    no: '2',
    orgName: '대중소기업농어업혁력',
    startTime: '08:00',
    endTime: '23:00',
    timeMod: '서비스 시간 수정',
  },
  {
    no: '3',
    orgName: '대중소기업농어업혁력',
    startTime: '08:00',
    endTime: '23:00',
    timeMod: '서비스 시간 수정',
  },
  {
    no: '4',
    orgName: '대중소기업농어업혁력',
    startTime: '08:00',
    endTime: '23:00',
    timeMod: '서비스 시간 수정',
  },
  {
    no: '5',
    orgName: '대중소기업농어업혁력',
    startTime: '08:00',
    endTime: '23:00',
    timeMod: '서비스 시간 수정',
  },
  {
    no: '6',
    orgName: '대중소기업농어업혁력',
    startTime: '08:00',
    endTime: '23:00',
    timeMod: '서비스 시간 수정',
  },
  {
    no: '7',
    orgName: '대중소기업농어업혁력',
    startTime: '08:00',
    endTime: '23:00',
    timeMod: '서비스 시간 수정',
  },
  {
    no: '8',
    orgName: '대중소기업농어업혁력',
    startTime: '08:00',
    endTime: '23:00',
    timeMod: '서비스 시간 수정',
  },
  {
    no: '9',
    orgName: '대중소기업농어업혁력',
    startTime: '08:00',
    endTime: '23:00',
    timeMod: '서비스 시간 수정',
  },
  {
    no: '10',
    orgName: '대중소기업농어업혁력',
    startTime: '08:00',
    endTime: '23:00',
    timeMod: '서비스 시간 수정',
  },
  {
    no: '11',
    orgName: '대중소기업농어업혁력',
    startTime: '08:00',
    endTime: '23:00',
    timeMod: '서비스 시간 수정',
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