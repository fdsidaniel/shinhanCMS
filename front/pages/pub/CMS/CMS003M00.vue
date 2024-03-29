<template>

  <div class="title_box">
    <h2>당,타행 예금주 성명 조회</h2>
    <ul class="loc">
      <li>홈</li>
      <li>원화(펌뱅킹)</li>
      <li>이체 정보 관리</li>
      <li>당,타행 예금주 성명 조회</li>
    </ul>
  </div>

  <div class="conbody">

    <p class="req_txt mb_10 t_right">표시는 필수 입력 항목 입니다.</p>
    <!-- 검색 -->
    <div class="search_table">
        <div class="row">
            <div class="cell">
                <div class="col vtop">
                    <span class="tit req">요청일</span>
                    <div class="con">
                        <ComRadioButton :options="calDate" v-model="calDateValue" :isInline="true" class="type_btn" />
                        <div class="i_calender mt_10" v-show="calDateValue === '05'">
                            <ComDatePicker v-model="startDate" class="i_date" placeholder="날짜선택" />
                            <span>~</span>
                            <ComDatePicker v-model="endDate" class="i_date" placeholder="날짜선택" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="cell">
                &nbsp;
            </div>
        </div>
        <div class="row">
            <div class="cell">
                <div class="col">
                    <span class="tit req">요청 채널</span>
                    <div class="con">
                        <ComSelectBox groupCode="01" v-model="comboRequestChannel" :items="itemsRequestChannel" :isAll="true"  class="s_basics none_details" />
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="col">
                    <span class="tit req">요청 번호</span>
                    <div class="con">
                        <v-text-field label="요청 번호" v-model="requestNum" :rules="requestNumRules" required placeholder="요청번호 모두를 입력해주세요." class="i_basics none_details"></v-text-field>
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
            <span class="txt">조회 결과 : 2024.02.15 ~ 2024.02.15</span>
        </p>
        <div>
            <span class="txt">기준일시 : 2024.02.15 14:12:56</span>
        </div>
    </div>
    <ComAgGrid
        ref="agrid"
        :columnDefs="columnDefsReceive"
        style="height: 570px"
        class="grid"
        :rowData="rowDataReceive"
        :defaultColDef="defaultColDefReceive"
        :rowHeight="51"
        :tooltipShowDelay="0"
        :tooltipHideDelay="9000"
    />
    <v-btn class="vbtn btn_grid_more" size="small">더보기(1/10)</v-btn>

    <div class="btn_btm_wrap">
        <v-btn class="vbtn" size="large">조회</v-btn>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComRadioButton from '@/components/common/ComRadioButton.vue'
import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComAgGrid from '~/components/common/ComAgGrid.vue'
import ComDatePicker from '@/components/common/ComDatePicker.vue'

const calDateValue = ref('05')
const calDate = [
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
const startDate = ref(formattedToday)
const endDate = ref(formattedToday)

const comboRequestChannel = ref('01')
const itemsRequestChannel = ref([
    { title: 'D: DB', value: '01' },
    { title: 'A: API', value: '02' },
    { title: 'R: RESERV', value: '03' },
    { title: 'S: SCHED', value: '04' },
])

const requestNum = ref('')
const requestNumRules = [
  
]

/* 그리드 */
const comboCnt = ref('001')
const itemsCnt = ref([
  { title: '10개씩', value: '001' },
  { title: '50개씩', value: '002' },
  { title: '100개씩', value: '003' },
])

const columnDefsReceive = ref([
  { headerName: '번호', field: 'no', width: 80 },
//   { headerName: '기관 명', field: 'orgName', width: 200 },
  {
    headerName: '결과', field: 'result', width: 100, cellClass: params => {      
      if (params.value === '정상') {
          return 'ico_success'
      }else if (params.value === '불능') {
          return 'ico_err'
      }
    }
  },
//   { headerName: '요청 채널', field: 'requestChannel', width: 110 },
//   { headerName: '요청 번호', field: 'requestNum', width: 160 },
  { headerName: '거래일시', field: 'transactionDate', width: 120 },
  { headerName: '출금계좌', field: 'withdrawAcc', width: 200 },
  { headerName: '입금계좌', field: 'depositAcc', width: 200 },
  { headerName: '받는분', field: 'receiver', width: 120 },  
  { headerName: '이체금액', field: 'transferAmount', width: 180, cellClass: 'cell_right' },  
  { headerName: '수수료', field: 'commision', width: 120, cellClass: 'cell_right' },  
  { headerName: '받는 분 통장 메모', field: 'receiverAccMemo', width: 200, cellClass: 'ellipsis' },  
  { headerName: '내통장 메모', field: 'myAccMemo', width: 200, cellClass: 'ellipsis' },  
])
const rowDataReceive = [
  {
    no: '999999',
    orgName: '한마정보통신',
    result: '정상',
    requestChannel: 'API',
    requestNum: '12345678900',
    transactionDate: '2024.02.15',
    withdrawAcc: '110-401-876043',
    depositAcc: '111111-01-222222',
    receiver: '박아름드리',
    transferAmount: '100,000,000,000',
    commision: '100,000,000',
    receiverAccMemo: '받는 분 통장 메모 받는 분 통장 메모',
    myAccMemo: '내통장 메모 내통장 메모 내통장 메모',
  },
  {
    no: '2',
    orgName: '한마정보통신',
    result: '불능',
    requestChannel: 'RESERV',
    requestNum: '12345678900',
    transactionDate: '2024.02.15',
    withdrawAcc: '110-401-876043',
    depositAcc: '111111-01-222222',
    receiver: '홍길동',
    transferAmount: '100,000,000',
    commision: '0',
    receiverAccMemo: '받는 분 통장 메모',
    myAccMemo: '내통장 메모',
  },
  {
    no: '3',
    orgName: '한마정보통신',
    result: '불능',
    requestChannel: 'RESERV',
    requestNum: '12345678900',
    transactionDate: '2024.02.15',
    withdrawAcc: '110-401-876043',
    depositAcc: '111111-01-222222',
    receiver: '홍길동',
    transferAmount: '100,000,000',
    commision: '0',
    receiverAccMemo: '받는 분 통장 메모',
    myAccMemo: '내통장 메모',
  },
  {
    no: '4',
    orgName: '한마정보통신',
    result: '불능',
    requestChannel: 'RESERV',
    requestNum: '12345678900',
    transactionDate: '2024.02.15',
    withdrawAcc: '110-401-876043',
    depositAcc: '111111-01-222222',
    receiver: '홍길동',
    transferAmount: '100,000,000',
    commision: '0',
    receiverAccMemo: '받는 분 통장 메모',
    myAccMemo: '내통장 메모',
  },
  {
    no: '5',
    orgName: '한마정보통신',
    result: '불능',
    requestChannel: 'RESERV',
    requestNum: '12345678900',
    transactionDate: '2024.02.15',
    withdrawAcc: '110-401-876043',
    depositAcc: '111111-01-222222',
    receiver: '홍길동',
    transferAmount: '100,000,000',
    commision: '0',
    receiverAccMemo: '받는 분 통장 메모',
    myAccMemo: '내통장 메모',
  },
  {
    no: '6',
    orgName: '한마정보통신',
    result: '불능',
    requestChannel: 'RESERV',
    requestNum: '12345678900',
    transactionDate: '2024.02.15',
    withdrawAcc: '110-401-876043',
    depositAcc: '111111-01-222222',
    receiver: '홍길동',
    transferAmount: '100,000,000',
    commision: '0',
    receiverAccMemo: '받는 분 통장 메모',
    myAccMemo: '내통장 메모',
  },
  {
    no: '7',
    orgName: '한마정보통신',
    result: '불능',
    requestChannel: 'RESERV',
    requestNum: '12345678900',
    transactionDate: '2024.02.15',
    withdrawAcc: '110-401-876043',
    depositAcc: '111111-01-222222',
    receiver: '홍길동',
    transferAmount: '100,000,000',
    commision: '0',
    receiverAccMemo: '받는 분 통장 메모',
    myAccMemo: '내통장 메모',
  },
  {
    no: '8',
    orgName: '한마정보통신',
    result: '불능',
    requestChannel: 'RESERV',
    requestNum: '12345678900',
    transactionDate: '2024.02.15',
    withdrawAcc: '110-401-876043',
    depositAcc: '111111-01-222222',
    receiver: '홍길동',
    transferAmount: '100,000,000',
    commision: '0',
    receiverAccMemo: '받는 분 통장 메모',
    myAccMemo: '내통장 메모',
  },
  {
    no: '9',
    orgName: '한마정보통신',
    result: '불능',
    requestChannel: 'RESERV',
    requestNum: '12345678900',
    transactionDate: '2024.02.15',
    withdrawAcc: '110-401-876043',
    depositAcc: '111111-01-222222',
    receiver: '홍길동',
    transferAmount: '100,000,000',
    commision: '0',
    receiverAccMemo: '받는 분 통장 메모',
    myAccMemo: '내통장 메모',
  },
  {
    no: '10',
    orgName: '한마정보통신',
    result: '불능',
    requestChannel: 'RESERV',
    requestNum: '12345678900',
    transactionDate: '2024.02.15',
    withdrawAcc: '110-401-876043',
    depositAcc: '111111-01-222222',
    receiver: '홍길동',
    transferAmount: '100,000,000',
    commision: '0',
    receiverAccMemo: '받는 분 통장 메모',
    myAccMemo: '내통장 메모',
  },
  {
    no: '11',
    orgName: '한마정보통신',
    result: '불능',
    requestChannel: 'RESERV',
    requestNum: '12345678900',
    transactionDate: '2024.02.15',
    withdrawAcc: '110-401-876043',
    depositAcc: '111111-01-222222',
    receiver: '홍길동',
    transferAmount: '100,000,000',
    commision: '0',
    receiverAccMemo: '받는 분 통장 메모',
    myAccMemo: '내통장 메모',
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