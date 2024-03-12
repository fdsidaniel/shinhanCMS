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

    <ul class="top_step_list active_step_2"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3 -->
      <li class="step1"><span>지급 요청</span></li>
      <li class="step2"><span>지급 승인</span></li>
      <li class="step3"><span>지급 실행</span></li>
      <li class="tip_txt">요청 상태만 확인가능</li>
    </ul>

    <div class="task_bdr_box a_center">
      <span class="tit">TASK명</span>
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

    <h3>지급 요청 정보<div class="unit">(단위:원)</div></h3>
    <v-table class="vtable_view bg">
      <colgroup>
        <col style="width:150px;"/>
        <col style="width:428;"/>
        <col style="width:150px;"/>
        <col style="width:428;"/>
      </colgroup>
      <tbody>        
        <tr>
          <th>정부 사업비 잔액</th>
          <td>10,000,000</td>
          <th>민간 사업비 잔액</th>
          <td>10,000,000</td>
        </tr>
      </tbody>
    </v-table>

    <div class="tit_cnt_btn">
      <p class="tit_cnt">
        조회 건 수 <b>100</b>건,
        지급 금액 합계 <b>10,000,000</b>원
      </p>
    </div>
    <ComAgGridBasic
      ref="agrid"
      :columnDefs="columnDefsReceive"
      style="height: 298px"
      class="grid vline fixed"
      :rowData="rowDataReceive"
      :defaultColDef="defaultColDefReceive"
      :rowHeight="51"
    />
    
    <p class="tip_txt mt_10">거래처 명 또는 지급 금액을 선택하시면 자세한 내용을 확인하실 수 있습니다.</p>

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
          <td class="ellipsis">2023년 10월에 연구활동비 보조비 2023년 10월에 연구활동비 보조비</td>
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

    <div class="btn_btm_wrap">
      <v-btn class="vbtn blue" size="large">삭제</v-btn>
      <v-btn class="vbtn" size="large">수정</v-btn>
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

class CustomCellRendererBtn {
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

const columnDefsReceive = ref([
  { headerName: 'NO.', field: 'no', width: 80 },
  // { headerName: '세목', field: 'directDetails', width: 200 },
  { headerName: '거래처 은행', field: 'customerBank', width: 180 },
  { headerName: '계좌번호', field: 'accNum', width: 160 },
  { headerName: '거래처 명', field: 'customerName', width: 210 },
  { headerName: '지급 금액', field: 'payment', width: 160, cellClass: 'cell_right' },
  { headerName: '지급 요청 일자', field: 'paymentDate', width: 130 },
  { headerName: '지급 상태', field: 'state', width: 119 },
  { headerName: '결재 정보', field: 'appInfo', width: 116, cellRenderer: CustomCellRendererBtn },
])
const rowDataReceive = [
  {
    no: '999999',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000,000',
    paymentDate: '2023-10-10',
    state: '',
    appInfo: '',
  },
  {
    no: '2',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '100,000,000',
    paymentDate: '2023-10-10',
    state: '지급거절',
    appInfo: '',
  },
  {
    no: '3',
    directDetails: '연구 활동비..외 2건',
    customerBank: '한국시티은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000',
    paymentDate: '2023-10-10',
    state: '지급요청',
    appInfo: '',
  },
  {
    no: '4',
    directDetails: '연구 활동비..외 2건',
    customerBank: '한국시티은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000',
    paymentDate: '2023-10-10',
    state: '지급요청',
    appInfo: '',
  },
  {
    no: '5',
    directDetails: '연구 활동비..외 2건',
    customerBank: '한국시티은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '10,000,000',
    paymentDate: '2023-10-10',
    state: '지급요청',
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