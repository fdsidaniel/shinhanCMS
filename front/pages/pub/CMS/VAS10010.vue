<template>

  <div class="title_box">
    <h2>입금 승인정보</h2>
    <ul class="loc">
      <li>제휴가상계좌</li>
      <li>제휴가상계좌 관리</li>
      <li>입금 승인정보조회</li>
    </ul>
  </div>

  <div class="conbody">

    <!-- 검색 -->
    <div class="search_table">
        <div class="row">
            <div class="cell">
                <div class="col vtop">
                    <span class="tit other">요청일</span>
                    <div class="con">
                        <ComRadioButton :options="calDate" v-model="calDateValue" :isInline="true" class="type_btn" />
                        <div class="i_calender mt_10" :class="[ calDateValue === '05' ? 'active' : 'inactive' ]">
                            <ComDatePicker v-model="callstartDate" class="i_date" placeholder="날짜선택" />
                            <span>~</span>
                            <ComDatePicker v-model="callendDate" class="i_date" placeholder="날짜선택" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="d_flex a_start">
                  <div class="cell">
                    <div class="col">
                        <span class="tit other">출금계좌성명</span>
                        <div class="con">
                            <v-text-field label="출금계좌성명" v-model="withdrawAccName" :rules="withdrawAccNameRules" required placeholder="성명을 입력해주세요." class="i_basics none_details" />
                        </div>
                    </div>
                  </div>
                  <div class="cell">
                    <div class="col">
                        <span class="tit">거래금액</span>
                        <div class="con">
                            <v-text-field label="거래금액" v-model="amount" :rules="amountRules" required placeholder="거래금액을 입력해주세요." class="i_basics none_details" />
                        </div>
                    </div>
                  </div>
                </div>
                <div class="d_flex mt_15">
                  <div class="cell">
                    <div class="col">
                        <span class="tit other">입금계좌번호</span>
                        <div class="con">
                            <v-text-field label="입금계좌번호" v-model="depositAccNum" :rules="depositAccNumRules" required placeholder="입금계좌번호를 입력해주세요." class="i_basics none_details" />
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="cell">
                <div class="col vtop">
                    <span class="tit other">승인기간</span>
                    <div class="con">
                        <ComRadioButton :options="appDate" v-model="appDateValue" :isInline="true" class="type_btn" />
                        <div class="i_calender mt_10" :class="[ appDateValue === '05' ? 'active' : 'inactive' ]">
                            <ComDatePicker v-model="appstartDate" class="i_date" placeholder="날짜선택" />
                            <span>~</span>
                            <ComDatePicker v-model="appendDate" class="i_date" placeholder="날짜선택" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="col">
                    <span class="tit other">입금기관명</span>
                    <div class="con">
                        <v-text-field label="입금기관명" v-model="depositOrg" :rules="depositOrgRules" required placeholder="입금기관명을 입력해주세요." class="i_basics none_details" />
                    </div>
                </div>
                <div class="col">
                    <span class="tit other">처리결과</span>
                    <div class="con">
                        <ComSelectBox groupCode="01" v-model="comboResult" :items="itemsResult" :isAll="true"  class="s_basics none_details" />
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
            총 <b>100</b>건,
            <span class="txt">기준일시 : 2024.02.15 14:12:56 (단위 : 원)</span>
        </p>
        <div>
            <v-btn class="vbtn line" size="small">엑셀 업로드</v-btn>
            <v-btn class="vbtn line" size="small">입력</v-btn>
            <v-btn class="vbtn white line sort new" size="small" :class="{ 'old': sort }" @click="btnSort">{{ message }}</v-btn>
            <ComSelectBox groupCode="01" v-model="comboCnt" :items="itemsCnt" class="s_basics none_details w_120" />
        </div>
    </div>
    <ComAgGrid
        ref="agrid"
        :columnDefs="columnDefsReceive"
        style="height: 570px"
        class="grid none_head_line vline icon_type"
        :rowData="rowDataReceive"
        :defaultColDef="defaultColDefReceive"
        :rowHeight="51"
        :tooltipShowDelay="0"
        :tooltipHideDelay="9000"
    />
    <v-btn class="vbtn btn_grid_more" size="small">더보기(1/10)</v-btn>

    <!-- <div class="btn_btm_wrap">
        <v-btn class="vbtn" size="large">등록</v-btn>
    </div> -->

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComRadioButton from '@/components/common/ComRadioButton.vue'
import ComDatePicker from '@/components/common/ComDatePicker.vue'
import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComAgGrid from '~/components/common/ComAgGrid.vue'

const calDateValue = ref('05')
const calDate = [
  { label: '당일', value: '01' },
  { label: '1개월', value: '02' },
  { label: '3개월', value: '03' },
  { label: '6개월', value: '04' },
  { label: '직접입력', value: '05' },
]

const appDateValue = ref('05')
const appDate = [
  { label: '당일', value: '01' },
  { label: '1개월', value: '02' },
  { label: '3개월', value: '03' },
  { label: '6개월', value: '04' },
  { label: '직접입력', value: '05' },
]


/* 달력 */
const today = new Date() // 현재 날짜와 시간을 포함하는 Date 객체 생성
const year = today.getFullYear() // 년도 가져오기
const month = today.getMonth() + 1 // 월 가져오기 (0부터 시작하므로 1 더하기)
const day = today.getDate() // 일 가져오기
const formattedToday = new Date(
  `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
)
const callstartDate = ref(formattedToday)
const callendDate = ref(formattedToday)
const appstartDate = ref(formattedToday)
const appendDate = ref(formattedToday)

const withdrawAccName = ref('')
const withdrawAccNameRules = [
  
]
const amount = ref('')
const amountRules = [
  
]

const depositAccNum = ref('')
const depositAccNumRules = [
  
]

const depositOrg = ref('')
const depositOrgRules = [
  
]

const comboResult = ref('01')
const itemsResult = ref([
    { title: '처리결과', value: '01' },
    { title: '처리결과', value: '02' },
    { title: '처리결과', value: '03' },
])

/* 그리드 */
const comboCnt = ref('001')
const itemsCnt = ref([
  { title: '10개씩', value: '001' },
  { title: '50개씩', value: '002' },
  { title: '100개씩', value: '003' },
])

const sort = ref(false)
const message = ref('최신순');
const btnSort = () => {
  if(!sort.value){
    sort.value = true
    message.value = '과거순';
  }else{
    sort.value = false
    message.value = '최신순';
  }
};

class CustomCellRendererBtn {
  eGui;
  init(params) {
    this.eGui = document.createElement('div');
    this.eGui.classList.add('my-custom-cell-renderer');
    this.eGui.innerHTML =
      /* html */
      `<button type="button" class="btn_vbtn btn_detail">상세보기</button>`;
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
  {
    headerName: '결과', field: 'result', width: 100, cellClass: params => {      
      if (params.value === '사용') {
          return 'ico_success'
      }else if (params.value === '미사용') {
          return 'ico_err'
      }
    }
  },
  { headerName: '승인시작일시', field: 'startDate', width: 110 },
  { headerName: '승인종료일시', field: 'endDate', width: 110 },
  { headerName: '입금계좌', field: 'depositAcc', width: 170 },
  { headerName: '출금계좌성명', field: 'withdrawAccName', width: 130 },
  { headerName: '거래금액', field: 'transactionAmount', width: 150, cellClass: 'cell_right' },
  { headerName: '입금기관명', field: 'depositOrg', width: 120 },
  { headerName: '승인번호처리내역', field: 'appNumHistory', width: 186 },
])
const rowDataReceive = [
  {
    no: '999999',
    result: '사용',
    startDate: '2024.02.15',
    endDate: '2024.03.31',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    depositOrg : 'MMAA',
    appNumHistory: '202402171111101111',
  },
  {
    no: '2',
    result: '미사용',
    startDate: '2024.02.15',
    endDate: '2024.03.31',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    depositOrg : 'MMAA',
    appNumHistory: '202402171111101111',
  },
  {
    no: '3',
    result: '사용',
    startDate: '2024.02.15',
    endDate: '2024.03.31',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    depositOrg : 'MMAA',
    appNumHistory: '202402171111101111',
  },
  {
    no: '4',
    result: '미사용',
    startDate: '2024.02.15',
    endDate: '2024.03.31',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    depositOrg : 'MMAA',
    appNumHistory: '202402171111101111',
  },
  {
    no: '5',
    result: '미사용',
    startDate: '2024.02.15',
    endDate: '2024.03.31',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    depositOrg : 'MMAA',
    appNumHistory: '202402171111101111',
  },
  {
    no: '6',
    result: '미사용',
    startDate: '2024.02.15',
    endDate: '2024.03.31',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    depositOrg : 'MMAA',
    appNumHistory: '202402171111101111',
  },
  {
    no: '7',
    result: '미사용',
    startDate: '2024.02.15',
    endDate: '2024.03.31',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    depositOrg : 'MMAA',
    appNumHistory: '202402171111101111',
  },
  {
    no: '8',
    result: '미사용',
    startDate: '2024.02.15',
    endDate: '2024.03.31',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    depositOrg : 'MMAA',
    appNumHistory: '202402171111101111',
  },
  {
    no: '9',
    result: '미사용',
    startDate: '2024.02.15',
    endDate: '2024.03.31',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    depositOrg : 'MMAA',
    appNumHistory: '202402171111101111',
  },
  {
    no: '10',
    result: '미사용',
    startDate: '2024.02.15',
    endDate: '2024.03.31',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    depositOrg : 'MMAA',
    appNumHistory: '202402171111101111',
  },
  {
    no: '11',
    result: '미사용',
    startDate: '2024.02.15',
    endDate: '2024.03.31',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    depositOrg : 'MMAA',
    appNumHistory: '202402171111101111',
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