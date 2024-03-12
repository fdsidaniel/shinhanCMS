<template>

  <div class="title_box">
    <h2>집행 내역 조회</h2>
    <ul class="loc">
      <li>홈</li>
      <li>집행 관리</li>
      <li>집행 내역 조회</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="search_box top other">
      <div class="row">
        <div class="con d_flex">
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
          <v-btn class="vbtn line btn_reset ml_5" size="small">초기화</v-btn>
        </div>
      </div>

      <div class="row">
        <div class="con flex1">
          <div class="input_flex a_center">
            <div class="i_calender a_center flex1">
              <span class="tit other">이체 기간</span>
              <ComSelectBox groupCode="01" v-model="comboDate" :items="itemsDate" :isAll="true"  class="s_basics w_145 mr_10 none_details" />
              <ComDatePicker v-model="startDate" class="i_date" placeholder="날짜선택" />
              <span>~</span>
              <ComDatePicker v-model="endDate" class="i_date" placeholder="날짜선택" />              
              <v-btn class="vbtn line search ml_5" size="small">조회</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tit_cnt_btn mt_40">
      <p class="tit_cnt">조회 건 수 <b>100</b>건</p>
      <div class="a_center">
        <v-btn class="vbtn line" size="small">엑셀 다운로드</v-btn>        
        <ComSelectBox groupCode="01" v-model="comboCnt" :items="itemsCnt" class="s_basics none_details w_120 ml_5" />
        <span class="unit">(단위:원)</span>
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
    <v-btn class="vbtn btn_grid_more" size="small">더보기</v-btn>

    <!-- <div class="btn_btm_wrap">
      <v-btn class="vbtn" size="large">지급 취소</v-btn>
    </div> -->

  </div>
  
</template>

<style scoped>
  
</style>

<script setup >

import ComDatePicker from '@/components/common/ComDatePicker.vue'
import ComSelectBox from '@/components/common/ComSelectBox.vue'
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

const comboDate = ref('001')
const itemsDate = ref([
  { title: '이체 기간', value: '001' },
  { title: '사업 기간', value: '002' },
])

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

const columnDefsReceive = ref([
  { headerName: 'NO.', field: 'no', width: 80 },
  { headerName: '세목', field: 'directDetails', width: 200 },  
  { headerName: '거래처 은행', field: 'customerBank', width: 150 },
  { headerName: '계좌번호', field: 'accNum', width: 160 },
  { headerName: '거래처 명', field: 'customerName', width: 180 },
  { headerName: '지급 금액', field: 'payment', width: 140, cellClass: 'cell_right' },
  { headerName: '부가세', field: 'tax', width: 130, cellClass: 'cell_right' },
  { headerName: '증빙 자료', field: 'pds', width: 100, cellRenderer: btnPds },
  { headerName: '지급 일자', field: 'date', width: 120},
])
const rowDataReceive = [
  {    
    no: '999999',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000,000',
    tax: '10,000,000,000',
    pds: '',
    date: '2023-10-10',
  },
  {    
    no: '2',
    directDetails: '연구 활동비',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000',
    tax: '1,000,000',
    pds: '',
    date: '2023-10-10',
  },
  {
    no: '3',
    directDetails: '연구 활동비',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000',
    tax: '1,000,000',
    pds: '',
    date: '2023-10-10',
  },
  {
    no: '4',
    directDetails: '연구 활동비',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000',
    tax: '1,000,000',
    pds: '',
    date: '2023-10-10',
  },
  {
    no: '5',
    directDetails: '연구 활동비',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000',
    tax: '1,000,000',
    pds: '',
    date: '2023-10-10',
  },
  {
    no: '6',
    directDetails: '연구 활동비',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000',
    tax: '1,000,000',
    pds: '',
    date: '2023-10-10',
  },
  {
    no: '7',
    directDetails: '연구 활동비',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000,000',
    tax: '10,000,000,000',
    pds: '',
    date: '2023-10-10',
  },
  {
    no: '8',
    directDetails: '연구 활동비',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000,000',
    tax: '10,000,000,000',
    pds: '',
    date: '2023-10-10',
  },
  {
    no: '9',
    directDetails: '연구 활동비',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000,000',
    tax: '10,000,000,000',
    pds: '',
    date: '2023-10-10',
  },
  {
    no: '10',
    directDetails: '연구 활동비',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000,000',
    tax: '10,000,000,000',
    pds: '',
    date: '2023-10-10',
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