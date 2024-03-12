<template>

  <div class="title_box">
    <h2>정산반납금 조회(정산후)</h2>
    <ul class="loc">
      <li>홈</li>
      <li>정산관리</li>
      <li>정산반납금 조회(정산후)</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="search_box top other noline">
      <div class="row">
        <div class="con flex1">
          <div class="input_flex a_center">
            <span class="tit">사업명</span>
            <ComSelectBox groupCode="01" v-model="businessName" :items="itemsbusinessName" class="s_basics none_details flex1" />
          </div>
        </div>
      </div>
    </div>

    <h3 class="stit">합계표<span class="date">(사업기간:2023-10-10 ~ 2023-10-10)</span><div class="unit">(단위:원)</div></h3>
    <v-table class="vtable_list">
      <colgroup>
        <col style="width:16%;"/>
        <col style="width:14%;"/>
        <col style="width:14%;"/>
        <col style="width:14%;"/>
        <col style="width:14%;"/>
        <col style="width:14%;"/>
        <col style="width:14%;"/>
      </colgroup>
      <thead>
        <tr>
          <th>사업비 입금 금액</th>
          <th>이자 금액</th>
          <th>지급 금액</th>
          <th>인정 금액</th>
          <th>불인정 금액</th>
          <th>정부반납 금액</th>
          <th>민간반납 금액</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="t_right">4,700,000</td>
          <td class="t_right">4,700,000</td>
          <td class="t_right">4,659,000</td>
          <td class="t_right">41,000</td>
          <td class="t_right">3,610</td>
          <td class="t_right">900</td>
          <td class="t_right">-</td>
        </tr>
      </tbody>
    </v-table>

    <div class="tit_cnt_btn mt_40">
      <div class="tit_cnt a_center">
        <p class="title">계좌 별 정산 후 금액 8건</p>
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
    <!-- <v-btn class="vbtn btn_grid_more" size="small">더보기</v-btn> -->

    <!-- <div class="btn_btm_wrap">
      <v-btn class="vbtn" size="large">정산 반납금 확정</v-btn>
    </div> -->

  </div>
  
</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComAgGridBasic from '~/components/common/ComAgGridBasic.vue'

const businessName = ref('001')
const itemsbusinessName = ref([
  { title: '이관 사업', value: '001' },
  { title: '차세대 이관 작업 대행 업체 이관 신청', value: '002' },
])

const columnDefsReceive = ref([
  { headerName: 'NO.', field: 'no', width: 70 },
  { headerName: 'TASK 번호', field: 'taskNum', width: 200 },
  { headerName: 'TASK 명', field: 'taskName', width: 260 },
  { headerName: '수행기관 명', field: 'orgName', width: 160 },
  { headerName: '입금금액', field: 'deposit', width: 150, cellClass: 'cell_right' },
  { headerName: '이자 금액', field: 'interest', width: 150, cellClass: 'cell_right' },
  { headerName: '지급 금액', field: 'payment', width: 150, cellClass: 'cell_right' },
  { headerName: '인정 금액', field: 'admitPay', width: 150, cellClass: 'cell_right' },
  { headerName: '불인정 금액', field: 'disapproval', width: 150, cellClass: 'cell_right' },
  { headerName: '정부반납금액', field: 'govermentReturn', width: 150, cellClass: 'cell_right' },
  { headerName: '민간반납금액', field: 'privateReturn', width: 150, cellClass: 'cell_right' },
])
const rowDataReceive = [
  {
    no: '999999',
    taskNum: 'TASK001',
    taskName: 'TASK명1',
    orgName: 'A기관',
    deposit: '1,000,000',
    interest: '2,000',
    payment: '1,000,000',
    admitPay: '1,000,000',
    disapproval: '-',
    govermentReturn: '1,200',
    privateReturn: '800',
  },
  {
    no: '2',
    taskNum: 'TASK001',
    taskName: 'TASK명1',
    orgName: 'A기관',
    deposit: '1,000,000',
    interest: '2,000',
    payment: '1,000,000',
    admitPay: '1,000,000',
    disapproval: '-',
    govermentReturn: '1,200',
    privateReturn: '800',
  },
  {
    no: '3',
    taskNum: 'TASK001',
    taskName: 'TASK명1',
    orgName: 'A기관',
    deposit: '1,000,000',
    interest: '2,000',
    payment: '1,000,000',
    admitPay: '1,000,000',
    disapproval: '-',
    govermentReturn: '1,200',
    privateReturn: '800',
  },
  {
    no: '4',
    taskNum: 'TASK001',
    taskName: 'TASK명1',
    orgName: 'A기관',
    deposit: '1,000,000',
    interest: '2,000',
    payment: '1,000,000',
    admitPay: '1,000,000',
    disapproval: '-',
    govermentReturn: '1,200',
    privateReturn: '800',
  },
  {
    no: '5',
    taskNum: 'TASK001',
    taskName: 'TASK명1',
    orgName: 'A기관',
    deposit: '1,000,000',
    interest: '2,000',
    payment: '1,000,000',
    admitPay: '1,000,000',
    disapproval: '-',
    govermentReturn: '1,200',
    privateReturn: '800',
  },
  {
    no: '6',
    taskNum: 'TASK001',
    taskName: 'TASK명1',
    orgName: 'A기관',
    deposit: '1,000,000',
    interest: '2,000',
    payment: '1,000,000',
    admitPay: '1,000,000',
    disapproval: '-',
    govermentReturn: '1,200',
    privateReturn: '800',
  },
  {
    no: '7',
    taskNum: 'TASK001',
    taskName: 'TASK명1',
    orgName: 'A기관',
    deposit: '1,000,000',
    interest: '2,000',
    payment: '1,000,000',
    admitPay: '1,000,000',
    disapproval: '-',
    govermentReturn: '1,200',
    privateReturn: '800',
  },
  {
    no: '8',
    taskNum: 'TASK001',
    taskName: 'TASK명1',
    orgName: 'A기관',
    deposit: '1,000,000',
    interest: '2,000',
    payment: '1,000,000',
    admitPay: '1,000,000',
    disapproval: '-',
    govermentReturn: '1,200',
    privateReturn: '800',
  },
  {
    no: '9',
    taskNum: 'TASK001',
    taskName: 'TASK명1',
    orgName: 'A기관',
    deposit: '1,000,000',
    interest: '2,000',
    payment: '1,000,000',
    admitPay: '1,000,000',
    disapproval: '-',
    govermentReturn: '1,200',
    privateReturn: '800',
  },
  {
    no: '10',
    taskNum: 'TASK001',
    taskName: 'TASK명1',
    orgName: 'A기관',
    deposit: '1,000,000',
    interest: '2,000',
    payment: '1,000,000',
    admitPay: '1,000,000',
    disapproval: '-',
    govermentReturn: '1,200',
    privateReturn: '800',
  },
  {
    no: '11',
    taskNum: 'TASK001',
    taskName: 'TASK명1',
    orgName: 'A기관',
    deposit: '1,000,000',
    interest: '2,000',
    payment: '1,000,000',
    admitPay: '1,000,000',
    disapproval: '-',
    govermentReturn: '1,200',
    privateReturn: '800',
  },
]
const defaultColDefReceive = {
  sortable: true,
  filter: true,
  editable: true,
  resizable: true,
  cellStyle: { textAlign: 'center' },
  // flex:1, // width auto
}
const agrid = ref(null)

</script> 