<template>

  <div class="title_box">
    <h2>입금 승인처리내역</h2>
    <ul class="loc">
      <li>제휴가상계좌</li>
      <li>제휴가상계좌 관리</li>
      <li>입금 승인처리내역</li>
    </ul>
  </div>

  <div class="conbody">

    <!-- 검색 -->
    <div class="search_table">
        <div class="row">
            <div class="cell">
                <div class="col vtop">
                    <span class="tit other">거래일</span>
                    <div class="con">
                        <ComRadioButton :options="dealDate" v-model="dealDateValue" :isInline="true" class="type_btn" />
                        <div class="i_calender mt_10" v-show="dealDateValue === '05'">
                            <ComDatePicker v-model="dealstartDate" class="i_date" placeholder="날짜선택" />
                            <span>~</span>
                            <ComDatePicker v-model="dealendDate" class="i_date" placeholder="날짜선택" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="col">
                    <span class="tit other">거래일련번호</span>
                    <div class="con">
                        <v-text-field label="거래일련번호" v-model="dealNum" :rules="dealNumRules" required placeholder="거래일련번호 10자리를 입력해주세요." class="i_basics none_details" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="cell">
                <div class="col">
                    <span class="tit other">출금계좌성명</span>
                    <div class="con">
                        <v-text-field label="출금계좌성명" v-model="withdrawAccName" :rules="withdrawAccNameRules" required placeholder="출금계좌성명을 입력해주세요." class="i_basics none_details" />
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="col">
                    <span class="tit other">거래금액</span>
                    <div class="con">
                        <v-text-field label="거래금액" v-model="amount" :rules="amountRules" required placeholder="거래금액을 입력해주세요." class="i_basics none_details" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="cell">
                <div class="col">
                    <span class="tit other">입금계좌번호</span>
                    <div class="con">
                        <v-text-field label="입금계좌번호" v-model="depositAccNum" :rules="depositAccNumRules" required placeholder="입금계좌번호를 입력해주세요." class="i_basics none_details" />
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
            </div>
        </div>
        <div class="row">
            <div class="cell">
                <div class="col">
                    <span class="tit other">송/수신</span>
                    <div class="con">
                        <ComSelectBox groupCode="01" v-model="comboTar" :items="itemsTar" :isAll="true"  class="s_basics none_details" />
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="col">
                    <span class="tit other">요청구분</span>
                    <div class="con">
                        <ComSelectBox groupCode="01" v-model="comboRequest" :items="itemsRequest" :isAll="true"  class="s_basics none_details" />
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

const dealDateValue = ref('05')
const dealDate = [
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
const dealstartDate = ref(formattedToday)
const dealendDate = ref(formattedToday)

const dealNum = ref('')
const dealNumRules = [
  
]

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

const comboTar = ref('01')
const itemsTar = ref([
    { title: '처리결과', value: '01' },
    { title: '처리결과', value: '02' },
    { title: '처리결과', value: '03' },
])

const comboRequest = ref('01')
const itemsRequest = ref([
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

const columnDefsReceive = ref([
  { headerName: '번호', field: 'no', width: 80 },
  { headerName: '송/수신', field: 'tar', width: 100 },
  { headerName: '거래일', field: 'dealDate', width: 140 },
  { headerName: '거래일련번호', field: 'dealNum', width: 140 },
  { headerName: '입금계좌번호', field: 'depositAcc', width: 170 },
  { headerName: '출금계좌성명', field: 'withdrawAccName', width: 130 },
  { headerName: '거래금액', field: 'transactionAmount', width: 150, cellClass: 'cell_right' },
  { headerName: '요청구분', field: 'request', width: 110 },
  { headerName: '응답코드', field: 'responseCode', width: 110 },
  { headerName: '취소코드', field: 'cancelCode', width: 110 },
  { headerName: '메세지', field: 'msg', width: 200 },
])
const rowDataReceive = [
  {
    no: '999999',
    tar: '수신',
    dealDate: '2024021502955',
    dealNum: '1111011111',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    request: '취소 응답',
    responseCode: '0000',
    cancelCode: '9999',
    msg: '메세지',
  },
  {
    no: '2',
    tar: '수신',
    dealDate: '2024021502955',
    dealNum: '1111011111',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    request: '취소 응답',
    responseCode: '0000',
    cancelCode: '9999',
    msg: '메세지',
  },
  {
    no: '3',
    tar: '수신',
    dealDate: '2024021502955',
    dealNum: '1111011111',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    request: '취소 응답',
    responseCode: '0000',
    cancelCode: '9999',
    msg: '메세지',
  },
  {
    no: '4',
    tar: '수신',
    dealDate: '2024021502955',
    dealNum: '1111011111',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    request: '취소 응답',
    responseCode: '0000',
    cancelCode: '9999',
    msg: '메세지',
  },
  {
    no: '5',
    tar: '수신',
    dealDate: '2024021502955',
    dealNum: '1111011111',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    request: '취소 응답',
    responseCode: '0000',
    cancelCode: '9999',
    msg: '메세지',
  },
  {
    no: '6',
    tar: '수신',
    dealDate: '2024021502955',
    dealNum: '1111011111',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    request: '취소 응답',
    responseCode: '0000',
    cancelCode: '9999',
    msg: '메세지',
  },
  {
    no: '7',
    tar: '수신',
    dealDate: '2024021502955',
    dealNum: '1111011111',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    request: '취소 응답',
    responseCode: '0000',
    cancelCode: '9999',
    msg: '메세지',
  },
  {
    no: '8',
    tar: '수신',
    dealDate: '2024021502955',
    dealNum: '1111011111',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    request: '취소 응답',
    responseCode: '0000',
    cancelCode: '9999',
    msg: '메세지',
  },
  {
    no: '9',
    tar: '수신',
    dealDate: '2024021502955',
    dealNum: '1111011111',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    request: '취소 응답',
    responseCode: '0000',
    cancelCode: '9999',
    msg: '메세지',
  },
  {
    no: '10',
    tar: '수신',
    dealDate: '2024021502955',
    dealNum: '1111011111',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    request: '취소 응답',
    responseCode: '0000',
    cancelCode: '9999',
    msg: '메세지',
  },
  {
    no: '11',
    tar: '수신',
    dealDate: '2024021502955',
    dealNum: '1111011111',
    depositAcc: '110-401-980908',
    withdrawAccName: '신한은행',
    transactionAmount: '10,000,000,000',
    request: '취소 응답',
    responseCode: '0000',
    cancelCode: '9999',
    msg: '메세지',
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