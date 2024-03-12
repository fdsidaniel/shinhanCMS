<template>

  <div class="title_box">
    <h2>사업비 입금내역조회</h2>
    <ul class="loc">
      <li>홈</li>
      <li>집행 관리</li>
      <li>사업비 입금내역조회</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="search_box top other noline">
      <div class="row">
       <div class="con flex1">
          <div class="input_flex a_center">
            <div class="input_flex a_center flex1 mr_20">
              <span class="tit">TASK</span>
              <div class="txt tooltip_box">
                <p v-if="!taskName">선택하세요.</p> <!-- TASK 선택 전 -->
                <div v-else><!-- TASK 선택 후 활성 -->
                  <p>TASK명 출력 영역 TASK명 출력 영역</p>            
                  <p class="tooltip" @click="layerPopView">TASK 정보</p>
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
                                    <li>김신한(정산 담당자)</li>
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
              <v-btn class="vbtn line" size="small" @click="taskOpen">선택</v-btn>
            </div>

            <div class="input_flex a_center flex1">
              <span class="tit">세목명</span>
              <ComSelectBox groupCode="01" v-model="comboDetail" :items="itemsDetail" class="s_basics flex1 none_details" />
            </div>
            <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
          </div>
        </div>
      </div>
    </div>

    <h3 class="stit">금액 정보<div class="unit">(단위:원)</div></h3>
    <v-table class="vtable_view bg">
      <colgroup>
        <col style="width:150px;"/>
        <col style="width:*;"/>
        <col style="width:150px;"/>
        <col style="width:*;"/>
        <col style="width:150px;"/>
        <col style="width:*;"/>
      </colgroup>
      <tbody>
        <tr>
          <th>사업비 입금 합계</th>
          <td>10,000,000</td>
          <th>계좌 잔액</th>
          <td colspan="3">10,000,000</td>          
        </tr>
        <tr>
          <th>지급 인정 합계</th>
          <td>10,000,000</td>
          <th>지급 불인정 합계</th>
          <td>10,000,000</td>          
          <th>지급 금액 합계</th>
          <td>10,000,000</td>
        </tr>
      </tbody>
    </v-table>

    <div class="tit_cnt_btn mt_40">
      <div class="tit_cnt a_center">
        <p class="title">정산신청내역</p>
      </div>
      <div class="a_center">
        <v-checkbox v-model="checkbox1" :label="`미 등록건`" />
        <ComSelectBox groupCode="01" v-model="comboCnt" :items="itemsCnt" class="s_basics none_details w_120 ml_20" />
        <span class="unit">(단위:원)</span>
      </div>
    </div>
    <ComAgGridBasic
      ref="agrid"
      :columnDefs="columnDefsReceive"
      style="height: 570px"
      class="grid"
      :rowData="rowDataReceive"
      :defaultColDef="defaultColDefReceive"
      :rowHeight="51"
    />
    <v-btn class="vbtn btn_grid_more" size="small">더보기</v-btn>

    <div class="btn_btm_wrap">
      <v-btn class="vbtn" size="large">정산완료 결과 등록</v-btn>
    </div>

  </div>
  
</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComAgGridBasic from '~/components/common/ComAgGridBasic.vue'

// TASK 정보 레이어 팝업
const taskName = ref(true) // 화면 확인 용
const taskOpen = () => { // 화면 확인 용
  taskName.value = !taskName.value
};

const layerPop = ref(false)
const layerPopView = () => {
  layerPop.value = !layerPop.value
};

const comboDetail = ref('01')
const itemsDetail = [
  { title: '세목명', value: '01' },
  { title: '세목명', value: '02' },
]

const checkbox1 = ref(true)

const comboCnt = ref('001')
const itemsCnt = ref([
  { title: '10개씩', value: '001' },
  { title: '50개씩', value: '002' },
  { title: '100개씩', value: '003' },
])

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
  { headerName: '지급 일자', field: 'date', width: 120 },
  {
    headerName: '정산 결과', field: 'result', width: 120, cellClass: params => {
      //return params.value === '불인정' ? 'c_blue' : 'c_red'
      if (params.value === '불인정') {
        return 'c_blue'
      } else if (params.value === '재요청') {
        return 'c_red'
      }
    }
  }, // 불인정 class c_blue 재요청 class c_red 추가
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
    date: '2023-10-10',
    result: '재요청',
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
    date: '2023-10-10',
    result: '불인정',
  },
  {
    chk: false,
    no: '3',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000',
    tax: '100,000',
    pds: '',
    memo: '',
    date: '2023-10-10',
    result: '인정',
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
    date: '2023-10-10',
    result: '',
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
    date: '2023-10-10',
    result: '재요청',
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
    date: '2023-10-10',
    result: '불인정',
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
    date: '2023-10-10',
    result: '인정',
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
    date: '2023-10-10',
    result: '',
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
    date: '2023-10-10',
    result: '',
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
    date: '2023-10-10',
    result: '',
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
    date: '2023-10-10',
    result: '',
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