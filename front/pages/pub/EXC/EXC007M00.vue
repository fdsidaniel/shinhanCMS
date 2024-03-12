<template>

  <div class="title_box">
    <h2>지급 승인</h2>
    <ul class="loc">
      <li>홈</li>
      <li>집행 관리</li>
      <li>지급 승인</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="task_bdr_box mt_0 a_center">
      <span class="tit">TASK명</span>
      <div class="txt flex1">
        <ComSelectBox groupCode="01" v-model="comboTaskName" :items="itemsTaskName" class="s_basics none_details" />
        <p class="tooltip over_slt" @click="layerPopView">TASK 정보</p>
        <!-- layer pop in conbody -->
        <div class="incon_layer_pop" :class="{ 'open': layerPop }">
          <div class="layer_pop_con">
            <div class="title">
              <span class="ico_progress">진행</span><!-- 진행 ico_progress, 중단 ico_stop, 정산 ico_calculate, 완료 ico_comp -->
              회원관리 UI/UX 화면 변경 진행 화면회원관리 UI/UX 화면 변경 진행 화면
            </div>
            <v-btn class="vbtn btn_close" @click="layerPopView">닫기</v-btn>
            <div class="con">
              <v-table class="vtable_view">
                <colgroup>
                  <col style="width:80px;"/>
                  <col style="width:*;"/>
                </colgroup>
                <tbody>
                  <tr>
                    <th>TASK 기간</th>
                    <td>2023-10-10 ~ 2024-10-10</td>
                  </tr>
                  <tr>
                    <th>TASK 예산</th>
                    <td>10,000,000 원</td>
                  </tr>
                  <tr>
                    <th>발주기관 명</th>
                    <td>한마 생명</td>
                  </tr>
                  <tr>
                    <th>담당자</th>
                    <td>
                      <div class="d_flex">
                        <ul class="flex1">
                          <li class="tag">#발주 기관</li>
                          <li>김발주(책임자)</li>
                          <li>김신한신한(TASK 담당자)</li>
                          <li>김신한(정산 담당자)</li>
                        </ul>
                        <ul class="flex1 ml_10">
                          <li class="tag">#수행 기관</li>
                          <li>김수행(책임자)</li>
                          <li>홍길동길동(지급 담당자)</li>
                          <li>김신한(지급 담당자)</li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </div>
          </div>
        </div>
        <!-- //layer pop -->
      </div>
    </div>
    
    <div class="tit_cnt_btn mt_40">
      <p class="tit_cnt">
        조회 건 수 <b>100</b>건,
        지급 금액 합계 <b>10,000,000</b>원
      </p>
      <div class="a_center">
        <span class="">(단위:원)</span>
      </div>
    </div>
    <ComAgGridBasic
      ref="agrid"
      :columnDefs="columnDefsReceive"
      style="height: 570px"
      class="grid vline"
      :rowData="rowDataReceive"
      :defaultColDef="defaultColDefReceive"
      :rowHeight="51"
    />

    <div class="btn_btm_wrap">
      <v-btn class="vbtn" size="large">지급 승인 결과 등록</v-btn>
    </div>

  </div>
  
</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComAgGridBasic from '~/components/common/ComAgGridBasic.vue'

const comboTaskName = ref('01')
const itemsTaskName = [
  { title: '회원관리 UI/UX 화면 변경 진행 화면', value: '01' },
  { title: 'TASK 명을 기준으로 민간 계좌가 있는 경우 TASK 노출', value: '02' },
]

// TASK 정보 레이어 팝업
const layerPop = ref(false)
const layerPopView = () => {
  layerPop.value = !layerPop.value
};

class btnAppInfo {
  eGui;

  init(params) {
    this.eGui = document.createElement('div');
    this.eGui.classList.add('my-custom-cell-renderer');
    this.eGui.innerHTML =
      /* html */
      `<button type="button" class="btn_vbtn">결재 정보</button>`;
    //var rowDragger = document.createElement('i');
    //rowDragger.classList.add('fas', 'fa-arrows-alt-v');
    //this.eGui.appendChild(rowDragger);

    // registers as a row dragger
    //params.registerRowDragger(rowDragger, 0);
  }

  getGui() {
    return this.eGui;
  }

  refresh(params) {
    return false;
  }
}

class btnPds {
  eGui;

  init(params) {
    this.eGui = document.createElement('div');
    this.eGui.classList.add('my-custom-cell-renderer');
    this.eGui.innerHTML =
      /* html */
      `<button type="button" class="btn_vbtn btn_viewer">증빙 자료</button>`;
    //var rowDragger = document.createElement('i');
    //rowDragger.classList.add('fas', 'fa-arrows-alt-v');
    //this.eGui.appendChild(rowDragger);

    // registers as a row dragger
    //params.registerRowDragger(rowDragger, 0);
  }

  getGui() {
    return this.eGui;
  }

  refresh(params) {
    return false;
  }
}

class btnMemo {
  eGui;

  init(params) {
    this.eGui = document.createElement('div');
    this.eGui.classList.add('my-custom-cell-renderer');
    this.eGui.innerHTML =
      /* html */
      `<button type="button" class="btn_vbtn btn_memo">메모 내용 보기</button>`;
    //var rowDragger = document.createElement('i');
    //rowDragger.classList.add('fas', 'fa-arrows-alt-v');
    //this.eGui.appendChild(rowDragger);

    // registers as a row dragger
    //params.registerRowDragger(rowDragger, 0);
  }

  getGui() {
    return this.eGui;
  }

  refresh(params) {
    return false;
  }
}

const columnDefsReceive = ref([
  {
    headerName: '',
    field: 'chk',
    cellRenderer: 'agCheckboxCellRenderer',
    editable: false,
    cellRendererParams: {
      disabled: false,
    },
    cellClass: ['custom-center-align'],
    width: 80,
  },
  { headerName: 'NO.', field: 'no', width: 80 },
  { headerName: '세목', field: 'directDetails', width: 200 },
  { headerName: '거래처 은행', field: 'customerBank', width: 150 },
  { headerName: '계좌번호', field: 'accNum', width: 160 },
  { headerName: '거래처 명', field: 'customerName', width: 180 },
  { headerName: '지급 금액', field: 'payment', width: 140, cellClass: 'cell_right' },
  { headerName: '부가세', field: 'tax', width: 130, cellClass: 'cell_right' },
  { headerName: '증빙 자료', field: 'pds', width: 100, cellRenderer: btnPds },
  { headerName: '거래 메모', field: 'memo', width: 100, cellRenderer: btnMemo },
  { headerName: '승인 요청 일자', field: 'appDate', width: 116 },
  { headerName: '결재 정보', field: 'appInfo', width: 116, cellRenderer: btnAppInfo },
])
const rowDataReceive = [
  {
    chk: false,
    no: '999999',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000,000',
    tax: '10,000,000,000',
    pds: '',
    memo: '',
    appDate: '2023-10-10',
    appInfo: '',
  },
  {
    chk: false,
    no: '2',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000',
    tax: '100,000',
    pds: '',
    memo: '',
    appDate: '2023-10-10',
    appInfo: '',
  },
  {
    chk: false,
    no: '3',
    directDetails: '연구 활동비..외 2건',
    customerBank: '한국시티은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000',
    tax: '100,000',
    pds: '',
    memo: '',
    appDate: '2023-10-10',
    appInfo: '',
  },
  {
    chk: false,
    no: '4',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000',
    tax: '100,000',
    pds: '',
    memo: '',
    appDate: '2023-10-10',
    appInfo: '',
  },
  {
    chk: false,
    no: '5',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000',
    tax: '100,000',
    pds: '',
    memo: '',
    appDate: '2023-10-10',
    appInfo: '',
  },
  {
    chk: false,
    no: '6',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000',
    tax: '100,000',
    pds: '',
    memo: '',
    appDate: '2023-10-10',
    appInfo: '',
  },
  {
    chk: false,
    no: '7',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000',
    tax: '100,000',
    pds: '',
    memo: '',
    appDate: '2023-10-10',
    appInfo: '',
  },
  {
    chk: false,
    no: '8',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000',
    tax: '100,000',
    pds: '',
    memo: '',
    appDate: '2023-10-10',
    appInfo: '',
  },
  {
    chk: false,
    no: '9',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000',
    tax: '100,000',
    pds: '',
    memo: '',
    appDate: '2023-10-10',
    appInfo: '',
  },
  {
    chk: false,
    no: '10',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000',
    tax: '100,000',
    pds: '',
    memo: '',
    appDate: '2023-10-10',
    appInfo: '',
  },
  {
    chk: false,
    no: '11',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000',
    tax: '100,000',
    pds: '',
    memo: '',
    appDate: '2023-10-10',
    appInfo: '',
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