<template>

  <div class="title_box">
    <h2>일괄 집행 등록</h2>
    <ul class="loc">
      <li>홈</li>
      <li>집행 관리</li>
      <li>일괄 집행 등록</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="search_box top other noline">
      <div class="row">
        <div class="con d_flex">
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
          <v-btn class="vbtn line" size="small">지급 내역 업로드</v-btn>
          <p class="tip_txt ml_10">버튼을 선택 하시면 엑셀업로드하는 화면이 노출됩니다.</p>
        </div>
      </div>
    </div>    

    <div class="authority_box other single multi_btn mt_40">
      <ul>
        <li>엑셀 파일을 등록 후 계좌 검증이 완료되면 일괄집행등록이 가능합니다. 업로드 하시려면 엑셀 파일을 다운로드 후 등록하세요.</li>
      </ul>

      <v-btn class="vbtn blue line" size="">세목정보보기</v-btn>
      <v-btn class="vbtn blue line" size="">은행 코드 보기</v-btn>
      <v-btn class="vbtn blue line btn_excel" size="">엑셀파일받기</v-btn>
    </div>

    <!-- <p class="t_right mt_40 mb_10">(단위:원)</p> -->
    <div class="tit_cnt_btn mt_40">
      <p class="tit_cnt">조회 건 수 <b>100</b>건</p>
      <div class="a_center">
        <v-btn class="vbtn line" size="small">행 추가</v-btn>
        <v-btn class="vbtn line" size="small">행 수정</v-btn>
        <v-btn class="vbtn line" size="small">행 삭제</v-btn>        
        <span class="unit">(단위:원)</span>
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
    />

    <div class="btn_btm_wrap">
      <v-btn class="vbtn" size="large">계좌 검증</v-btn>
    </div>

  </div>
  
</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComAgGrid from '~/components/common/ComAgGrid.vue'

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
    width: 50,
  },
  { headerName: 'NO.', field: 'no', width: 80 },
  { headerName: '세목', field: 'directDetails', width: 200 },
  { headerName: '거래처 은행', field: 'customerBank', width: 146 },
  { headerName: '계좌번호', field: 'accNum', width: 150 },
  { headerName: '거래처 명', field: 'customerName', width: 170 },
  { headerName: '지급 금액', field: 'payment', width: 130, cellClass: 'cell_right' },
  { headerName: '부가세', field: 'tax', width: 130, cellClass: 'cell_right' },
  { headerName: '수취 계좌 명', field: 'accName', width: 140 },
  { headerName: '검증 결과', field: 'result', width: 120, cellClass: params => { return params.value === '중지 계좌' ? 'c_red' : null } },
])
const rowDataReceive = [
  {
    chk: false,
    no: '999999',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신한은행 기관사업부',
    payment: '10,000,000,000',
    tax: '10,000,000,000',
    accName: '김신한',
    result: '정상',
  },
  {
    chk: false,
    no: '2',
    directDetails: '연구 활동비..외 2건',
    customerBank: '한국시티은행',
    accNum: '5691835234701',
    customerName: '신거래처산업협회',
    payment: '100,000,000',
    tax: '100,000,000',
    accName: '이한마',
    result: '중지 계좌',
  },
  {
    chk: false,
    no: '3',
    directDetails: '연구 활동비..외 2건',
    customerBank: '한국시티은행',
    accNum: '5691835234701',
    customerName: '신한은행',
    payment: '100,000,000',
    tax: '100,000,000',
    accName: '김신한',
    result: '정상',
  },
  {
    chk: false,
    no: '4',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신한은행 기관사업부',
    payment: '100,000,000',
    tax: '100,000,000',
    accName: '김신한',
    result: '정상',
  },
  {
    chk: false,
    no: '5',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신한은행 기관사업부',
    payment: '100,000,000',
    tax: '100,000,000',
    accName: '김신한',
    result: '정상',
  },
  {
    chk: false,
    no: '6',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신한은행 기관사업부',
    payment: '100,000,000',
    tax: '100,000,000',
    accName: '이한마',
    result: '중지 계좌',
  },
  {
    chk: false,
    no: '7',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신한은행 기관사업부',
    payment: '100,000,000',
    tax: '100,000,000',
    accName: '김신한',
    result: '정상',
  },
  {
    chk: false,
    no: '8',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신한은행 기관사업부',
    payment: '100,000,000',
    tax: '100,000,000',
    accName: '김신한',
    result: '정상',
  },
  {
    chk: false,
    no: '9',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신한은행 기관사업부',
    payment: '100,000,000',
    tax: '100,000,000',
    accName: '이한마',
    result: '중지 계좌',
  },
  {
    chk: false,
    no: '10',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신한은행 기관사업부',
    payment: '100,000,000',
    tax: '100,000,000',
    accName: '김신한',
    result: '정상',
  },
  {
    chk: false,
    no: '11',
    directDetails: '연구 활동비..외 2건',
    customerBank: '신한은행',
    accNum: '5691835234701',
    customerName: '신한은행 기관사업부',
    payment: '100,000,000',
    tax: '100,000,000',
    accName: '김신한',
    result: '정상',
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