<template>

  <div class="title_box">
    <h2>수취인 조회</h2>
    <ul class="loc">
      <li>제휴가상계좌</li>
      <li>제휴가상계좌 관리</li>
      <li>수취인 조회</li>
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
                        <ComRadioButton :options="callDate" v-model="callDateValue" :isInline="true" class="type_btn" />
                        <div class="i_calender mt_10" v-show="callDateValue === '05'">
                            <ComDatePicker v-model="callstartDate" class="i_date" placeholder="날짜선택" />
                            <span>~</span>
                            <ComDatePicker v-model="callendDate" class="i_date" placeholder="날짜선택" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="col">
                    <span class="tit other">취소요청</span>
                    <div class="con">
                        <ComSelectBox groupCode="01" v-model="comboCancel" :items="itemsCancel" :isAll="true"  class="s_basics none_details" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="cell">
                <div class="col">
                    <span class="tit other">입금계좌성명</span>
                    <div class="con">
                        <v-text-field label="입금계좌성명" v-model="depositAccName" :rules="depositAccNameRules" required placeholder="입금계좌성명을 입력해주세요." class="i_basics none_details" />
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="col">
                    <span class="tit other">입금계좌번호</span>
                    <div class="con">
                        <v-text-field label="입금계좌번호" v-model="depositAccNum" :rules="depositAccNumRules" required placeholder="입금계좌번호를 입력해주세요." class="i_basics none_details" />
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

const callDateValue = ref('05')
const callDate = [
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

const dealNum = ref('')
const dealNumRules = [
  
]

const depositAccName = ref('')
const depositAccNameRules = [
  
]

const depositAccNum = ref('')
const depositAccNumRules = [
  
]

const comboCancel = ref('01')
const itemsCancel = ref([
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
  { headerName: '취소여부', field: 'cancel', width: 200 },
  { headerName: '입금계좌번호', field: 'depositAcc', width: 406 },
  { headerName: '입금계좌성명', field: 'depositAccName', width: 230 },
  { headerName: '거래일', field: 'dealDate', width: 240 },
])
const rowDataReceive = [
  {
    no: '999999',
    cancel: '수신',
    depositAcc: '110-401-980908',
    depositAccName: '신한은행',
    dealDate: '2024.02.15',
  },
  {
    no: '2',
    cancel: '수신',
    depositAcc: '110-401-980908',
    depositAccName: '신한은행',
    dealDate: '2024.02.15',
  },
  {
    no: '3',
    cancel: '수신',
    depositAcc: '110-401-980908',
    depositAccName: '신한은행',
    dealDate: '2024.02.15',
  },
  {
    no: '4',
    cancel: '수신',
    depositAcc: '110-401-980908',
    depositAccName: '신한은행',
    dealDate: '2024.02.15',
  },
  {
    no: '5',
    cancel: '수신',
    depositAcc: '110-401-980908',
    depositAccName: '신한은행',
    dealDate: '2024.02.15',
  },
  {
    no: '6',
    cancel: '수신',
    depositAcc: '110-401-980908',
    depositAccName: '신한은행',
    dealDate: '2024.02.15',
  },
  {
    no: '7',
    cancel: '수신',
    depositAcc: '110-401-980908',
    depositAccName: '신한은행',
    dealDate: '2024.02.15',
  },
  {
    no: '8',
    cancel: '수신',
    depositAcc: '110-401-980908',
    depositAccName: '신한은행',
    dealDate: '2024.02.15',
  },
  {
    no: '9',
    cancel: '수신',
    depositAcc: '110-401-980908',
    depositAccName: '신한은행',
    dealDate: '2024.02.15',
  },
  {
    no: '10',
    cancel: '수신',
    depositAcc: '110-401-980908',
    depositAccName: '신한은행',
    dealDate: '2024.02.15',
  },
  {
    no: '11',
    cancel: '수신',
    depositAcc: '110-401-980908',
    depositAccName: '신한은행',
    dealDate: '2024.02.15',
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