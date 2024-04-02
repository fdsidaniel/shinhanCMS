<template>

  <div class="title_box">
    <h2>사용자 신청 내역</h2>
    <ul class="loc">
      <li>시스템 관리</li>
      <li>서비스 관리</li>
      <li>사용자 신청 내역(조회)</li>
    </ul>
  </div>

  <div class="conbody">

    <!-- 검색 -->
    <!-- <div class="search_table">
        <div class="row">
            <div class="cell">
                <div class="col">
                    <span class="tit">신청일</span>
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
                    <span class="tit">신청 결과</span>
                    <div class="con">
                        <ComSelectBox groupCode="01" v-model="comboClass" :items="itemsClass" :isAll="true"  class="s_basics none_details" />
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="col">
                    <span class="tit">신청 기관</span>
                    <div class="con">
                        <v-text-field label="신청 기관" v-model="search" :rules="searchRules" required placeholder="신청 기관을 입력해주세요." class="i_basics none_details" />
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
                    <span class="tit">신청일</span>
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
                    <span class="tit">신청 결과</span>
                    <div class="con">
                        <ComSelectBox groupCode="01" v-model="comboClass" :items="itemsClass" :isAll="true"  class="s_basics none_details" />
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="col">
                    <span class="tit">신청 기관</span>
                    <div class="con">
                        <v-text-field label="신청 기관" v-model="search" :rules="searchRules" required placeholder="신청 기관을 입력해주세요." class="i_basics none_details" />
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
        class="grid icon_type"
        :rowData="rowDataReceive"
        :defaultColDef="defaultColDefReceive"
        :rowHeight="51"
        :tooltipShowDelay="0"
        :tooltipHideDelay="9000"
    />
    <v-btn class="vbtn btn_grid_more" size="small">더보기(1/10)</v-btn>

    <div class="btn_btm_wrap">
        <v-btn class="vbtn" size="large">등록</v-btn>
    </div>

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

const comboClass = ref('01')
const itemsClass = ref([
    { title: '전체', value: '01' },
    { title: '승인', value: '02' },
    { title: '승인 대기', value: '03' },
    { title: '반려', value: '04' },
])

const search = ref('')
const searchRules = [
  
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
  { headerName: '신청 기관', field: 'org', width: 350, cellClass: 'ellipsis' },
  { headerName: '신청 권한', field: 'authority', width: 200 },
  { headerName: '신청 정보', field: 'info', width: 200, cellClass: 'link ellipsis' },
  { headerName: '신청 결과', field: 'result', width: 175 },
//   {
//     headerName: '신청 결과', field: 'result', width: 175, cellClass: params => {
//       if (params.value === '승인 완료') {
//           return 'ico_success'
//       }else if(params.value === '승인 대기'){
//         return 'ico_request'
//       }else if(params.value === '반려'){
//         return 'ico_fail'
//       }
//     }
//   },
  { headerName: '신청일', field: 'date', width: 140 },
])
const rowDataReceive = [
  {
    no: '999999',
    org: '대중소기업농어업협력',
    authority: '유지보수 담당자',
    info: '상세보기',
    result: '승인 대기',
    date: '2024-03-15',
  },
  {
    no: '2',
    org: '대중소기업농어업협력 대중소기업농어업협력 대중소기업농어업협력',
    authority: '기관 담당자',
    info: '상세보기 상세보기 상세보기 상세보기 상세보기 상세보기 상세보기',
    result: '승인 완료',
    date: '2024-03-15',
  },
  {
    no: '3',
    org: '대중소기업농어업협력',
    authority: '유지보수 담당자',
    info: '상세보기',
    result: '반려',
    date: '2024-03-15',
  },
  {
    no: '4',
    org: '대중소기업농어업협력',
    authority: '유지보수 담당자',
    info: '상세보기',
    result: '승인 완료',
    date: '2024-03-15',
  },
  {
    no: '5',
    org: '대중소기업농어업협력',
    authority: '유지보수 담당자',
    info: '상세보기',
    result: '반려',
    date: '2024-03-15',
  },
  {
    no: '6',
    org: '대중소기업농어업협력',
    authority: '유지보수 담당자',
    info: '상세보기',
    result: '승인 대기',
    date: '2024-03-15',
  },
  {
    no: '7',
    org: '대중소기업농어업협력',
    authority: '유지보수 담당자',
    info: '상세보기',
    result: '승인 대기',
    date: '2024-03-15',
  },
  {
    no: '8',
    org: '대중소기업농어업협력',
    authority: '유지보수 담당자',
    info: '상세보기',
    result: '승인 대기',
    date: '2024-03-15',
  },
  {
    no: '9',
    org: '대중소기업농어업협력',
    authority: '유지보수 담당자',
    info: '상세보기',
    result: '승인 대기',
    date: '2024-03-15',
  },
  {
    no: '10',
    org: '대중소기업농어업협력',
    authority: '유지보수 담당자',
    info: '상세보기',
    result: '승인 대기',
    date: '2024-03-15',
  },
  {
    no: '11',
    org: '대중소기업농어업협력',
    authority: '유지보수 담당자',
    info: '상세보기',
    result: '승인 대기',
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