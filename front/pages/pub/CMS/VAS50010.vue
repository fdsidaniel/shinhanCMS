<template>

  <div class="title_box">
    <h2>제휴가상계좌 집계대사</h2>
    <ul class="loc">
      <li>제휴가상계좌</li>
      <li>제휴가상계좌 관리</li>
      <li>제휴가상계좌 집계대사</li>
    </ul>
  </div>

  <div class="conbody">

    <!-- 검색 -->
    <div class="search_table">
        <div class="row">
            <div class="cell">
                <div class="col">
                    <span class="tit other">요청일</span>
                    <div class="con i_calender">
                        <ComRadioButton :options="calDate" v-model="calDateValue" :isInline="true" class="type_btn" />
                        <div class="i_calender ml_10" :class="[ calDateValue === '05' ? 'active' : 'inactive' ]">
                            <ComDatePicker v-model="callstartDate" class="i_date" placeholder="날짜선택" />
                            <span>~</span>
                            <ComDatePicker v-model="callendDate" class="i_date" placeholder="날짜선택" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="cell">
                <div class="col vtop">
                    <span class="tit other">거래일</span>
                    <div class="con i_calender">
                        <ComRadioButton :options="dealDate" v-model="dealDateValue" :isInline="true" class="type_btn" />
                        <div class="i_calender ml_10" :class="[ dealDateValue === '05' ? 'active' : 'inactive' ]">
                            <ComDatePicker v-model="dealstartDate" class="i_date" placeholder="날짜선택" />
                            <span>~</span>
                            <ComDatePicker v-model="dealendDate" class="i_date" placeholder="날짜선택" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="cell">
                <div class="col">
                    <span class="tit other">거래일련번호</span>
                    <div class="con">
                        <v-text-field label="거래일련번호" v-model="dealNum" :rules="dealNumRules" required placeholder="거래일련번호 10자리를 입력해주세요." class="i_basics none_details" />
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="col">
                    <span class="tit other">요청채널</span>
                    <div class="con">
                        <ComSelectBox groupCode="01" v-model="comboChannel" :items="itemsChannel" :isAll="true"  class="s_basics none_details" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="cell">
                <div class="col">
                    <span class="tit other">기관코드</span>
                    <div class="con">
                        <ComSelectBox groupCode="01" v-model="comboOrgCode" :items="itemsOrgCode" :isAll="true"  class="s_basics none_details" />
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
        style="height: 247px"
        class="grid none_head_line vline icon_type"
        :rowData="rowDataReceive"
        :defaultColDef="defaultColDefReceive"
        :rowHeight="51"
        :tooltipShowDelay="0"
        :tooltipHideDelay="9000"
    />
    <v-btn class="vbtn btn_grid_more" size="small">더보기(1/10)</v-btn>

    <ComAgGrid
        ref="agrid2"
        :columnDefs="columnDefsReceive2"
        style="height: 247px"
        class="grid none_head_line vline icon_type mt_40"
        :rowData="rowDataReceive2"
        :defaultColDef="defaultColDefReceive2"
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

const dealDateValue = ref('05')
const dealDate = [
  { label: '당일', value: '01' },
  { label: '1개월', value: '02' },
  { label: '3개월', value: '03' },
  { label: '6개월', value: '04' },
  { label: '직접입력', value: '05' },
]

const dealNum = ref('')
const dealNumRules = [
  
]

const comboChannel = ref('01')
const itemsChannel = ref([
    { title: '요청채널', value: '01' },
    { title: '요청채널', value: '02' },
])

const comboOrgCode = ref('01')
const itemsOrgCode = ref([
    { title: 'MMAA', value: '01' },
    { title: 'MMAA', value: '02' },
])

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
const dealstartDate = ref(formattedToday)
const dealendDate = ref(formattedToday)

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
  { headerName: '요청채널', field: 'channel', width: 100 },
  { headerName: '기관코드', field: 'orgCode', width: 110 },
  { headerName: '요청일', field: 'requestDate', width: 110 },
  { headerName: '거래일', field: 'dealDate', width: 110 },
  { headerName: '거래일련번호', field: 'dealNum', width: 120 },
  { headerName: '입금총건수', field: 'depositCnt', width: 100 },
  { headerName: '입금총금액', field: 'depositAmount', width: 158, cellClass: 'cell_right' },
  { headerName: '입금취소건수', field: 'depositCancelCnt', width: 110 },
  { headerName: '입금취소금액', field: 'depositCancelAmount', width: 158, cellClass: 'cell_right pr_20' },
])
const rowDataReceive = [
  {
    no: '999999',
    channel: 'DB',
    orgCode: 'MMAA',
    requestDate: '2024.03.31',
    dealDate: '2024.03.31',
    dealNum: '1110122222',
    depositCnt: '100',
    depositAmount : '10,000,000,000',
    depositCancelCnt: '0',
    depositCancelAmount: '10,000,000,000',
  },
  {
    no: '2',
    channel: 'DB',
    orgCode: 'MMAA',
    requestDate: '2024.03.31',
    dealDate: '2024.03.31',
    dealNum: '1110122222',
    depositCnt: '100',
    depositAmount : '10,000,000',
    depositCancelCnt: '0',
    depositCancelAmount: '10,000,000',
  },
  {
    no: '3',
    channel: 'DB',
    orgCode: 'MMAA',
    requestDate: '2024.03.31',
    dealDate: '2024.03.31',
    dealNum: '1110122222',
    depositCnt: '100',
    depositAmount : '10,000,000',
    depositCancelCnt: '0',
    depositCancelAmount: '10,000,000',
  },
  {
    no: '4',
    channel: 'DB',
    orgCode: 'MMAA',
    requestDate: '2024.03.31',
    dealDate: '2024.03.31',
    dealNum: '1110122222',
    depositCnt: '100',
    depositAmount : '10,000,000',
    depositCancelCnt: '0',
    depositCancelAmount: '10,000,000',
  },
  {
    no: '5',
    channel: 'DB',
    orgCode: 'MMAA',
    requestDate: '2024.03.31',
    dealDate: '2024.03.31',
    dealNum: '1110122222',
    depositCnt: '100',
    depositAmount : '10,000,000',
    depositCancelCnt: '0',
    depositCancelAmount: '10,000,000',
  },
  {
    no: '6',
    channel: 'DB',
    orgCode: 'MMAA',
    requestDate: '2024.03.31',
    dealDate: '2024.03.31',
    dealNum: '1110122222',
    depositCnt: '100',
    depositAmount : '10,000,000',
    depositCancelCnt: '0',
    depositCancelAmount: '10,000,000',
  },
  {
    no: '7',
    channel: 'DB',
    orgCode: 'MMAA',
    requestDate: '2024.03.31',
    dealDate: '2024.03.31',
    dealNum: '1110122222',
    depositCnt: '100',
    depositAmount : '10,000,000',
    depositCancelCnt: '0',
    depositCancelAmount: '10,000,000',
  },
  {
    no: '8',
    channel: 'DB',
    orgCode: 'MMAA',
    requestDate: '2024.03.31',
    dealDate: '2024.03.31',
    dealNum: '1110122222',
    depositCnt: '100',
    depositAmount : '10,000,000',
    depositCancelCnt: '0',
    depositCancelAmount: '10,000,000',
  },
  {
    no: '9',
    channel: 'DB',
    orgCode: 'MMAA',
    requestDate: '2024.03.31',
    dealDate: '2024.03.31',
    dealNum: '1110122222',
    depositCnt: '100',
    depositAmount : '10,000,000',
    depositCancelCnt: '0',
    depositCancelAmount: '10,000,000',
  },
  {
    no: '10',
    channel: 'DB',
    orgCode: 'MMAA',
    requestDate: '2024.03.31',
    dealDate: '2024.03.31',
    dealNum: '1110122222',
    depositCnt: '100',
    depositAmount : '10,000,000',
    depositCancelCnt: '0',
    depositCancelAmount: '10,000,000',
  },
  {
    no: '11',
    channel: 'DB',
    orgCode: 'MMAA',
    requestDate: '2024.03.31',
    dealDate: '2024.03.31',
    dealNum: '1110122222',
    depositCnt: '100',
    depositAmount : '10,000,000',
    depositCancelCnt: '0',
    depositCancelAmount: '10,000,000',
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

const columnDefsReceive2 = ref([
  { headerName: '번호', field: 'no', width: 80 },
  { headerName: '출금총건수', field: 'withdrawCnt', width: 100 },
  { headerName: '출금총금액', field: 'withdrawAmount', width: 160, cellClass: 'cell_right' },
  { headerName: '출금취소건수', field: 'withdrawCancelCnt', width: 110 },
  { headerName: '출금취소금액', field: 'withdrawCancelAmount', width: 160, cellClass: 'cell_right pr_20' },
  { headerName: '수수료건수', field: 'comissionCnt', width: 100 },
  { headerName: '집계수수료금액', field: 'comissionAmount', width: 150 },
  { headerName: '응답코드', field: 'requestCode', width: 100 },
  { headerName: '응답메세지', field: 'requestMsg', width: 196, cellClass: 'ellipsis' },
])
const rowDataReceive2 = [
  {
    no: '999999',
    withdrawCnt: '999',
    withdrawAmount: '10,000,000,000',
    withdrawCancelCnt: '0',
    withdrawCancelAmount: '10,000,000,000',
    comissionCnt: '2',
    comissionAmount: '200,000,000',
    requestCode : '0000',
    requestMsg: '정상거래',
  },
  {
    no: '2',
    withdrawCnt: '999',
    withdrawAmount: '10,000,000,000',
    withdrawCancelCnt: '0',
    withdrawCancelAmount: '10,000,000,000',
    comissionCnt: '2',
    comissionAmount: '200,000,000',
    requestCode : '0000',
    requestMsg: '정상거래 정상거래 정상거래 정상거래 정상거래',
  },
  {
    no: '3',
    withdrawCnt: '999',
    withdrawAmount: '10,000,000,000',
    withdrawCancelCnt: '0',
    withdrawCancelAmount: '10,000,000,000',
    comissionCnt: '2',
    comissionAmount: '200,000,000',
    requestCode : '0000',
    requestMsg: '정상거래',
  },
  {
    no: '4',
    withdrawCnt: '999',
    withdrawAmount: '10,000,000,000',
    withdrawCancelCnt: '0',
    withdrawCancelAmount: '10,000,000,000',
    comissionCnt: '2',
    comissionAmount: '200,000,000',
    requestCode : '0000',
    requestMsg: '정상거래',
  },
  {
    no: '5',
    withdrawCnt: '999',
    withdrawAmount: '10,000,000,000',
    withdrawCancelCnt: '0',
    withdrawCancelAmount: '10,000,000,000',
    comissionCnt: '2',
    comissionAmount: '200,000,000',
    requestCode : '0000',
    requestMsg: '정상거래',
  },
  {
    no: '6',
    withdrawCnt: '999',
    withdrawAmount: '10,000,000,000',
    withdrawCancelCnt: '0',
    withdrawCancelAmount: '10,000,000,000',
    comissionCnt: '2',
    comissionAmount: '200,000,000',
    requestCode : '0000',
    requestMsg: '정상거래',
  },
  {
    no: '7',
    withdrawCnt: '999',
    withdrawAmount: '10,000,000,000',
    withdrawCancelCnt: '0',
    withdrawCancelAmount: '10,000,000,000',
    comissionCnt: '2',
    comissionAmount: '200,000,000',
    requestCode : '0000',
    requestMsg: '정상거래',
  },
  {
    no: '8',
    withdrawCnt: '999',
    withdrawAmount: '10,000,000,000',
    withdrawCancelCnt: '0',
    withdrawCancelAmount: '10,000,000,000',
    comissionCnt: '2',
    comissionAmount: '200,000,000',
    requestCode : '0000',
    requestMsg: '정상거래',
  },
  {
    no: '9',
    withdrawCnt: '999',
    withdrawAmount: '10,000,000,000',
    withdrawCancelCnt: '0',
    withdrawCancelAmount: '10,000,000,000',
    comissionCnt: '2',
    comissionAmount: '200,000,000',
    requestCode : '0000',
    requestMsg: '정상거래',
  },
  {
    no: '10',
    withdrawCnt: '999',
    withdrawAmount: '10,000,000,000',
    withdrawCancelCnt: '0',
    withdrawCancelAmount: '10,000,000,000',
    comissionCnt: '2',
    comissionAmount: '200,000,000',
    requestCode : '0000',
    requestMsg: '정상거래',
  },
  {
    no: '11',
    withdrawCnt: '999',
    withdrawAmount: '10,000,000,000',
    withdrawCancelCnt: '0',
    withdrawCancelAmount: '10,000,000,000',
    comissionCnt: '2',
    comissionAmount: '200,000,000',
    requestCode : '0000',
    requestMsg: '정상거래',
  },
]
const defaultColDefReceive2 = {
  sortable: true,
  filter: true,
  editable: false,
  resizable: true,
  cellStyle: { textAlign: 'center' },
  // tooltipComponent: {},
  tooltipComponent: 'CustomTooltip',
  // flex:1, // width auto
}
const agrid2 = ref(null)

</script> 