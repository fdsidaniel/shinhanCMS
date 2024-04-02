<template>

  <div class="title_box">
    <h2>서비스 오류 관리</h2>
    <ul class="loc">
      <li>시스템 관리</li>
      <li>서비스 관리</li>      
      <li>서비스 오류 관리(조회)</li>
    </ul>
  </div>

  <div class="conbody">

    <!-- 검색 -->
    <!-- <div class="search_table">
        <div class="row">
            <div class="cell">
                <div class="col">
                    <span class="tit">발생일</span>
                    <div class="con">
                        <div class="i_calender">
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
                    <span class="tit">발생 기관</span>
                    <div class="con">
                        <v-text-field label="발생 기관" v-model="occurOrg" :rules="occurOrgRules" required placeholder="발생 기관을 입력해주세요." class="i_basics none_details" />
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="col">
                    <span class="tit">발생 채널</span>
                    <div class="con">
                        <v-text-field label="발생 채널" v-model="occurChannel" :rules="occurChannelRules" required placeholder="발생 채널을 입력해주세요." class="i_basics none_details" />
                    </div>
                </div>
            </div>
        </div>
        <div class="btn">
            <v-btn class="vbtn line search" size="small">조회</v-btn>
        </div>
    </div> -->
    <!-- //검색 -->

    <!-- 검색 -->
    <div class="search_table">
        <div class="row">
            <div class="cell">
                <div class="col">
                    <span class="tit">발생일</span>
                    <div class="con i_calender">
                        <ComRadioButton :options="calDate" v-model="calDateValue" :isInline="true" class="type_btn" />
                        <div class="i_calender ml_10" :class="[ calDateValue === '05' ? 'active' : 'inactive' ]">
                            <ComDatePicker v-model="startDate" class="i_date" placeholder="날짜선택" />
                            <span>~</span>
                            <ComDatePicker v-model="endDate" class="i_date" placeholder="날짜선택" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="cell">
                <div class="col">
                    <span class="tit">발생 기관</span>
                    <div class="con">
                        <v-text-field label="발생 기관" v-model="occurOrg" :rules="occurOrgRules" required placeholder="발생 기관을 입력해주세요." class="i_basics none_details" />
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="col">
                    <span class="tit">발생 채널</span>
                    <div class="con">
                        <v-text-field label="발생 채널" v-model="occurChannel" :rules="occurChannelRules" required placeholder="발생 채널을 입력해주세요." class="i_basics none_details" />
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
            총 <b>100</b>건
        </p>
        <div>
            <ComSelectBox groupCode="01" v-model="comboCnt" :items="itemsCnt" class="s_basics none_details w_120" />
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

const occurOrg = ref('')
const occurOrgRules = [
  
]

const occurChannel = ref('')
const occurChannelRules = [
  
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
  { headerName: '발생 기관', field: 'org', width: 260 },
  { headerName: '발생 채널', field: 'channel', width: 280 },
  { headerName: '상세내역', field: 'detail', width: 240, cellClass: 'link ellipsis' },
  { headerName: '현황', field: 'report', width: 145 },
  { headerName: '발생일', field: 'date', width: 140 },
])
const rowDataReceive = [
  {
    no: '999999',
    org: '대중소기업농어업혁력',
    channel: '제휴가상계좌 입금 승인내역',
    detail: '상세보기상세보기상세보기상세보기상세보기상세보기',
    report: '조치 완료',
    date: '2024-03-15',
  },
  {
    no: '2',
    org: '대중소기업농어업혁력',
    channel: '제휴가상계좌 입금 승인내역',
    detail: '상세보기',
    report: '미조치',
    date: '2024-03-15',
  },
  {
    no: '3',
    org: '대중소기업농어업혁력',
    channel: '제휴가상계좌 입금 승인내역',
    detail: '상세보기',
    report: '조치 완료',
    date: '2024-03-15',
  },
  {
    no: '4',
    org: '대중소기업농어업혁력',
    channel: '제휴가상계좌 입금 승인내역',
    detail: '상세보기',
    report: '조치 완료',
    date: '2024-03-15',
  },
  {
    no: '5',
    org: '대중소기업농어업혁력',
    channel: '제휴가상계좌 입금 승인내역',
    detail: '상세보기',
    report: '조치 완료',
    date: '2024-03-15',
  },
  {
    no: '6',
    org: '대중소기업농어업혁력',
    channel: '제휴가상계좌 입금 승인내역',
    detail: '상세보기',
    report: '조치 완료',
    date: '2024-03-15',
  },
  {
    no: '7',
    org: '대중소기업농어업혁력',
    channel: '제휴가상계좌 입금 승인내역',
    detail: '상세보기',
    report: '조치 완료',
    date: '2024-03-15',
  },
  {
    no: '8',
    org: '대중소기업농어업혁력',
    channel: '제휴가상계좌 입금 승인내역',
    detail: '상세보기',
    report: '조치 완료',
    date: '2024-03-15',
  },
  {
    no: '9',
    org: '대중소기업농어업혁력',
    channel: '제휴가상계좌 입금 승인내역',
    detail: '상세보기',
    report: '조치 완료',
    date: '2024-03-15',
  },
  {
    no: '10',
    org: '대중소기업농어업혁력',
    channel: '제휴가상계좌 입금 승인내역',
    detail: '상세보기',
    report: '조치 완료',
    date: '2024-03-15',
  },
  {
    no: '11',
    org: '대중소기업농어업혁력',
    channel: '제휴가상계좌 입금 승인내역',
    detail: '상세보기',
    report: '조치 완료',
    date: '2024-03-15',
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