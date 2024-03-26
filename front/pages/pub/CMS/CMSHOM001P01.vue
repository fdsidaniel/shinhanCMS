<template>
  
  <!-- popup size width:1000 height:924 -->
  <div class="popup_body">
    <h2 class="poptit">기관 설정 선택 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>
    
    <!-- 검색 -->
    <div class="search_table">       
        <div class="row">
            <div class="cell">
                <div class="col">
                    <span class="tit">기관</span>
                    <div class="con">
                        <ComSelectBox groupCode="01" v-model="comboOrg" :items="itemsOrg" :isAll="true"  class="s_basics none_details" />
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="col">
                    <span class="tit">기관 명</span>
                    <div class="con">
                        <v-text-field label="기관 명" v-model="orgName" :rules="orgNameRules" required placeholder="" class="i_basics none_details"></v-text-field>
                    </div>
                </div>
            </div>
            <div class="cell btn">
                <v-btn class="vbtn line search" size="small">조회</v-btn>
            </div>
        </div>
    </div>
    <!-- //검색 -->

    <ComAgGrid
        ref="agrid"
        :columnDefs="columnDefsReceive"
        style="height: 553px"
        class="grid vline"
        :rowData="rowDataReceive"
        :defaultColDef="defaultColDefReceive"
        :rowHeight="51"
    />        
    <v-btn class="vbtn btn_grid_more" size="small">더보기(1/10)</v-btn>

    <p class="tip_txt mt_10">최대 10개까지 다 건 선택이 가능합니다.</p>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">선택</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComAgGrid from '~/components/common/ComAgGrid.vue'

const comboOrg = ref('001')
const itemsOrg = ref([
    { title: '최근 오류 발생 순', value: '001' },
    { title: '검색조건', value: '002' },
])

const orgName = ref('')
const orgNameRules = [
  
]

class checkCel {
  eGui;
  init(params) {
    this.eGui = document.createElement('input');
    this.eGui.type = 'checkbox'
    this.eGui.addEventListener('change', () => {

    });
  }
  getGui() {
    return this.eGui;
  }
}
const columnDefsReceive = ref([
  {
    headerName: '',
    field: 'chk',
    cellRenderer: 'agCheckboxCellRenderer',
    headerComponent: checkCel,
    editable: false,
    cellRendererParams: {
      disabled: false,
    },
    cellClass: ['custom-center-align'],
    width: 80,
  },
  { headerName: '기관 명', field: 'orgName', width: 420 },
  { headerName: '오류 발생일', field: 'errorDate', width: 420 },
])
const rowDataReceive = [
  {
    chk: false,
    orgName: '신한은행',
    errorDate: '2024.02.15 14:12:56',
  },
  {
    chk: false,
    orgName: '신한은행',
    errorDate: '2024.02.15 14:12:56',
  },
  {
    chk: false,
    orgName: '신한은행',
    errorDate: '2024.02.15 14:12:56',
  },
  {
    chk: false,
    orgName: '신한은행',
    errorDate: '2024.02.15 14:12:56',
  },
  {
    chk: false,
    orgName: '신한은행',
    errorDate: '2024.02.15 14:12:56',
  },
  {
    chk: false,
    orgName: '신한은행',
    errorDate: '2024.02.15 14:12:56',
  },
  {
    chk: false,
    orgName: '신한은행',
    errorDate: '2024.02.15 14:12:56',
  },
  {
    chk: false,
    orgName: '신한은행',
    errorDate: '2024.02.15 14:12:56',
  },
  {
    chk: false,
    orgName: '신한은행',
    errorDate: '2024.02.15 14:12:56',
  },
  {
    chk: false,
    orgName: '신한은행',
    errorDate: '2024.02.15 14:12:56',
  },
  {
    chk: false,
    orgName: '신한은행',
    errorDate: '2024.02.15 14:12:56',
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