<template>

  <div class="title_box">
    <h2>지급 취소</h2>
    <ul class="loc">
      <li>홈</li>
      <li>집행 관리</li>
      <li>지급 취소</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="search_box top other">
      <div class="row">
        <div class="con d_flex flex1">
          <span class="tit other">TASK</span>
          <div class="txt tooltip_box flex1">
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
      </div>

      <div class="row">
        <div class="con flex1">
          <div class="input_flex a_center">
            <div class="i_calender a_center flex1 mr_20">
              <span class="tit other">지급 기간</span>
              <ComDatePicker v-model="startDate" class="i_date w_145" placeholder="날짜선택" />
              <span>~</span>
              <ComDatePicker v-model="endDate" class="i_date w_145" placeholder="날짜선택" />
            </div>
            <div class="flex1">
              <div class="input_flex a_center mr_20">
                <span class="tit">거래처 명</span>
                <v-text-field label="거래처 명" v-model="orgName" :rules="orgNameRules" placeholder="거래처 명 입력하세요." class="i_basics flex1 none_details"></v-text-field>            
              </div>
            </div>
            <div class="flex1">
              <div class="input_flex a_center">
                <span class="tit">지급 금액</span>
                <v-text-field label="지급 금액" v-model="amount" :rules="amountRules" placeholder="지급 금액을 입력하세요." class="i_basics w_187 none_details"></v-text-field>            
                <v-btn class="vbtn line btn_reset ml_20" size="small">초기화</v-btn>
                <v-btn class="vbtn line search ml_5" size="small">조회</v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tit_cnt_btn mt_40">
      <div class="tit_cnt other">
        <div>
        환입계좌번호는 <b>신한은행 123</b> 입니다.
        <v-btn class="vbtn line white ml_10 mmt_5" size="small">계좌복사</v-btn>
        <br>
        지급취소는 전액취소만 가능합니다. 환입계좌로 지급취소 금액을 입금하셔야 합니다.
        </div>
      </div>
      <div class="a_center">
        <span class="unit">(단위:원)</span>
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

    <div class="btn_btm_wrap">
      <v-btn class="vbtn" size="large">지급 취소</v-btn>
    </div>

    <v-table class="vtable_list inbtn mt_40">
      <colgroup>
        <col style="width:200px;"/>
        <col style="width:200px;"/>
        <col style="width:200px;"/>
        <col style="width:278px;"/>
        <col style="width:278px;"/>
      </colgroup>
      <thead>
        <tr>
          <th>세목</th>
          <th>지급 금액</th>
          <th>부가세</th>
          <th>거래 메모</th>
          <th>증빙 자료</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>연구 활동비</td>
          <td class="t_right">115,475,5000</td>
          <td class="t_right">0</td>
          <td>2023년 10월에 연구활동비 보조비</td>
          <td><nuxt-link to="/pub/EXC/EXC006M00" class="vlink basic ico_file">거래처산업협.pdf</nuxt-link></td>
        </tr>
        <tr>
          <td>연구 활동비</td>
          <td class="t_right">115,475,5000</td>
          <td class="t_right">10,000,000</td>
          <td>2023년 10월에 연구활동비 보조비</td>
          <td><nuxt-link to="/pub/EXC/EXC006M00" class="vlink basic ico_file">거래처산업협.pdf</nuxt-link></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>합계</td>
          <td colspan="4" class="tot">
            <div class="sum">              
              <span>115,475,000</span>
            </div>
          </td>
        </tr>
      </tfoot>
    </v-table>

  </div>
  
</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComDatePicker from '@/components/common/ComDatePicker.vue'
import ComAgGridBasic from '~/components/common/ComAgGridBasic.vue'

const comboTaskName = ref('01')
const itemsTaskName = [
  { title: '회원관리 UI/UX 화면 변경 진행 화면', value: '01' },
  { title: 'TASK 명을 기준으로 민간 계좌가 있는 경우 TASK 노출', value: '02' },
]

// TASK 정보 레이어 팝업
const taskName = ref(true) // 화면 확인 용
const taskOpen = () => { // 화면 확인 용
  taskName.value = !taskName.value
};

const layerPop = ref(false)
const layerPopView = () => {
  layerPop.value = !layerPop.value
};

const today = new Date() // 현재 날짜와 시간을 포함하는 Date 객체 생성
const year = today.getFullYear() // 년도 가져오기
const month = today.getMonth() + 1 // 월 가져오기 (0부터 시작하므로 1 더하기)
const day = today.getDate() // 일 가져오기
const formattedToday = new Date(
  `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
)
const startDate = ref(formattedToday)
const endDate = ref(formattedToday)

const orgName = ref('')
const orgNameRules = [
  //(v) => !!v || '다시 입력해주세요.',  
]

const amount = ref('')
const amountRules = [
  //(v) => !!v || '다시 입력해주세요.',  
]

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
  //{ headerName: '세목', field: 'directDetails', width: 200 },
  { headerName: '거래처 은행', field: 'customerBank', width: 209 },
  { headerName: '계좌번호', field: 'accNum', width: 200 },
  { headerName: '거래처 명', field: 'customerName', width: 240 },
  { headerName: '지급 금액', field: 'payment', width: 200, cellClass: 'cell_right' },
  //{ headerName: '부가세', field: 'tax', width: 130, cellClass: 'cell_right' },
  //{ headerName: '증빙 자료', field: 'pds', width: 100, cellRenderer: btnPds },
  //{ headerName: '거래 메모', field: 'memo', width: 100, cellRenderer: btnMemo },
  { headerName: '지급 일자', field: 'paymentDate', width: 130 },
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
    paymentDate: '2023-10-10',
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
    paymentDate: '2023-10-10',
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
    paymentDate: '2023-10-10',
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
    paymentDate: '2023-10-10',
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
    paymentDate: '2023-10-10',
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
    paymentDate: '2023-10-10',
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
    paymentDate: '2023-10-10',
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
    paymentDate: '2023-10-10',
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
    paymentDate: '2023-10-10',
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
    paymentDate: '2023-10-10',
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
    paymentDate: '2023-10-10',
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