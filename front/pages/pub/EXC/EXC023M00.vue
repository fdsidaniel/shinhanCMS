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

    <div class="search_box top other noline">
      <div class="row">
        <div class="con flex1">
          <div class="input_flex a_center">
            <div class="i_calender a_center flex1 mr_10">
              <span class="tit other">TASK 명</span>
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
          </div>
        </div>
      </div>
    </div>

    <h3 class="stit">합계<span class="date">(사업기간:2023-10-10 ~ 2023-10-10)</span><div class="unit">(단위:원)</div></h3>
    <v-table class="vtable_list">
      <colgroup>
      <col style="width:25%;"/>
      <col style="width:25%;"/>
      <col style="width:25%;"/>
      <col style="width:25%;"/>
      </colgroup>
      <thead>
        <tr>
          <th>총 사업비 입금 금액</th>
          <th>이자 금액</th>
          <th>계좌 잔액</th>
          <th>지급(이체)잔액</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="t_right">4,700,000</td>
          <td class="t_right">1,580</td>
          <td class="t_right">382,500</td>
          <td class="t_right">4,317,500</td>
        </tr>
      </tbody>
    </v-table>

    <div class="tit_cnt_btn mt_40">
      <div class="tit_cnt a_center">
        <p class="title">TASK별 정산 전 작액조회</p>
        <span class="ml_10 mt_2">총 <b>100</b>건</span>
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

    

    <!-- <div class="btn_btm_wrap">
      <v-btn class="vbtn" size="large">정산 신청</v-btn>
    </div> -->

  </div>
  
</template>

<style scoped>
  
</style>

<script setup >

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

const columnDefsReceive = ref([
  { headerName: 'NO.', field: 'no', width: 80 },
  { headerName: 'TASK 명', field: 'taskName', width: 240 },
  { headerName: '수행 기관 명', field: 'orgName', width: 180 },
  { headerName: '사업자번호', field: 'corporateNum', width: 160 },  
  { headerName: '책임자', field: 'director', width: 160 },
  { headerName: '계좌 구분', field: 'classAcc', width: 140 },
  { headerName: '계좌번호', field: 'accNum', width: 180 },
  { headerName: '사업비 입금 금액', field: 'depositAmount', width: 150, cellClass: 'cell_right' },
  { headerName: '이자 금액', field: 'interestAmount', width: 150, cellClass: 'cell_right' },
  { headerName: '잔액', field: 'balance', width: 150, cellClass: 'cell_right' },
])
const rowDataReceive = [
  {
    no: '999999',
    taskName: 'TASK명TASK명TASK명TASK명',
    orgName: '한마정보통신',
    corporateNum: '123-45-67890',
    director: '김수행수행',
    classAcc: '모계좌번호',
    accNum: '56291835234701',
    depositAmount: '10,000,000,000',
    interestAmount: '1,000,000,000',
    balance: '10,000,000,000',
  },
  {
    no: '2',
    taskName: 'TASK01',
    orgName: '한마정보통신',
    corporateNum: '123-45-67890',
    director: '김수행',
    classAcc: '정부사업비',
    accNum: '56291835234701',
    depositAmount: '470,000',
    interestAmount: '580',
    balance: '380,000',
  },
  {
    no: '3',
    taskName: 'TASK01',
    orgName: '한마정보통신',
    corporateNum: '123-45-67890',
    director: '김수행',
    classAcc: '민간사업비',
    accNum: '56291835234701',
    depositAmount: '470,000',
    interestAmount: '580',
    balance: '380,000',
  },
  {
    no: '4',
    taskName: 'TASK01',
    orgName: '한마정보통신',
    corporateNum: '123-45-67890',
    director: '김수행',
    classAcc: '지방비',
    accNum: '56291835234701',
    depositAmount: '470,000',
    interestAmount: '580',
    balance: '380,000',
  },
  {
    no: '5',
    taskName: 'TASK01',
    orgName: '한마정보통신',
    corporateNum: '123-45-67890',
    director: '김수행',
    classAcc: '환입계좌',
    accNum: '56291835234701',
    depositAmount: '470,000',
    interestAmount: '580',
    balance: '380,000',
  },
  {
    no: '6',
    taskName: 'TASK01',
    orgName: '한마정보통신',
    corporateNum: '123-45-67890',
    director: '김수행',
    classAcc: '모계좌번호',
    accNum: '56291835234701',
    depositAmount: '470,000',
    interestAmount: '580',
    balance: '380,000',
  },
  {
    no: '7',
    taskName: 'TASK01',
    orgName: '한마정보통신',
    corporateNum: '123-45-67890',
    director: '김수행',
    classAcc: '정부사업비',
    accNum: '56291835234701',
    depositAmount: '470,000',
    interestAmount: '580',
    balance: '380,000',
  },
  {
    no: '8',
    taskName: 'TASK01',
    orgName: '한마정보통신',
    corporateNum: '123-45-67890',
    director: '김수행',
    classAcc: '민간사업비',
    accNum: '56291835234701',
    depositAmount: '470,000',
    interestAmount: '580',
    balance: '380,000',
  },
  {
    no: '9',
    taskName: 'TASK01',
    orgName: '한마정보통신',
    corporateNum: '123-45-67890',
    director: '김수행',
    classAcc: '지방비',
    accNum: '56291835234701',
    depositAmount: '470,000',
    interestAmount: '580',
    balance: '380,000',
  },
  {
    no: '10',
    taskName: 'TASK01',
    orgName: '한마정보통신',
    corporateNum: '123-45-67890',
    director: '김수행',
    classAcc: '환입계좌',
    accNum: '56291835234701',
    depositAmount: '470,000',
    interestAmount: '580',
    balance: '380,000',
  },
  {
    no: '11',
    taskName: 'TASK01',
    orgName: '한마정보통신',
    corporateNum: '123-45-67890',
    director: '김수행',
    classAcc: '모계좌번호',
    accNum: '56291835234701',
    depositAmount: '470,000',
    interestAmount: '580',
    balance: '380,000',
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