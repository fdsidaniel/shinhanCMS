<template>

  <div class="title_box">
    <h2>전문 송/수신 이력 관리</h2>
    <ul class="loc">
      <li>시스템 관리</li>
      <li>서비스 관리</li>
      <li>전문 송/소신 관리(조회)</li>
    </ul>
  </div>

  <div class="conbody">

    <!-- 검색 -->
    <!-- <div class="search_table">
        <div class="row">
            <div class="cell">
                <div class="col">
                    <span class="tit other">등록일</span>
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
                    <span class="tit other">송/수신 여부</span>
                    <div class="con">
                        <ComSelectBox groupCode="01" v-model="comboClass" :items="itemsClass" :isAll="true"  class="s_basics none_details" />
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="col">
                    <span class="tit">검색어</span>
                    <div class="con">
                        <v-text-field label="검색어" v-model="search" :rules="searchRules" required placeholder="검색어를 입력해주세요." class="i_basics none_details" />
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
                <div class="col vtop">
                    <span class="tit other">등록일</span>
                    <div class="con">
                        <ComRadioButton :options="calDate" v-model="calDateValue" :isInline="true" class="type_btn" />
                        <div class="i_calender mt_10" :class="[ calDateValue === '05' ? 'active' : 'inactive' ]">
                            <ComDatePicker v-model="startDate" class="i_date" placeholder="날짜선택" />
                            <span>~</span>
                            <ComDatePicker v-model="endDate" class="i_date" placeholder="날짜선택" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="cell">
              <div class="d_flex a_a_start">
                <div class="cell">
                    <div class="col">
                        <span class="tit other">송/수신 여부</span>
                        <div class="con">
                            <ComSelectBox groupCode="01" v-model="comboClass" :items="itemsClass" :isAll="true"  class="s_basics none_details" />
                        </div>
                    </div>
                    <div class="col">
                        <span class="tit other">검색어</span>
                        <div class="con">
                            <v-text-field label="검색어" v-model="search" :rules="searchRules" required placeholder="검색어를 입력해주세요." class="i_basics none_details" />
                        </div>
                    </div>
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
        class="grid none_head_line vline"
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

const comboClass = ref('01')
const itemsClass = ref([
    { title: '전체', value: '01' },
    { title: '송신', value: '02' },
    { title: '수신', value: '03' },
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
  { headerName: '송/수신', field: 'tranAndrec', width: 100 },
  { headerName: '서비스명', field: 'serviceTitle', width: 485, cellClass: 'ellipsis' },
  { headerName: '생성일시', field: 'creDate', width: 140 },  
  { headerName: '등록일', field: 'regDate', width: 150 },
  { headerName: '전문내용', field: 'detail', width: 201, cellRenderer: CustomCellRendererBtn },
])
const rowDataReceive = [
  {
    no: '999999',
    tranAndrec: '송신',
    serviceTitle: '타행이체결과 불능분 통지',
    creDate: '2024-03-15',
    detail: '상세보기',
    regDate: '2024-03-15',
  },
  {
    no: '2',
    tranAndrec: '송신',
    serviceTitle: '타행이체결과 불능분 통지 타행이체결과 불능분 통지타행이체결과 불능분 통지타행이체결과 불능분 통지',
    creDate: '2024-03-15',
    detail: '상세보기 상세보기 상세보기 상세보기 상세보기 상세보기 상세보기 상세보기 상세보기',
    regDate: '2024-03-15',
  },
  {
    no: '3',
    tranAndrec: '송신',
    serviceTitle: '타행이체결과 불능분 통지',
    creDate: '2024-03-15',
    detail: '상세보기',
    regDate: '2024-03-15',
  },
  {
    no: '4',
    tranAndrec: '송신',
    serviceTitle: '타행이체결과 불능분 통지',
    creDate: '2024-03-15',
    detail: '상세보기',
    regDate: '2024-03-15',
  },
  {
    no: '5',
    tranAndrec: '송신',
    serviceTitle: '타행이체결과 불능분 통지',
    creDate: '2024-03-15',
    detail: '상세보기',
    regDate: '2024-03-15',
  },
  {
    no: '6',
    tranAndrec: '송신',
    serviceTitle: '타행이체결과 불능분 통지',
    creDate: '2024-03-15',
    detail: '상세보기',
    regDate: '2024-03-15',
  },
  {
    no: '7',
    tranAndrec: '송신',
    serviceTitle: '타행이체결과 불능분 통지',
    creDate: '2024-03-15',
    detail: '상세보기',
    regDate: '2024-03-15',
  },
  {
    no: '8',
    tranAndrec: '송신',
    serviceTitle: '타행이체결과 불능분 통지',
    creDate: '2024-03-15',
    detail: '상세보기',
    regDate: '2024-03-15',
  },
  {
    no: '9',
    tranAndrec: '송신',
    serviceTitle: '타행이체결과 불능분 통지',
    creDate: '2024-03-15',
    detail: '상세보기',
    regDate: '2024-03-15',
  },
  {
    no: '10',
    tranAndrec: '송신',
    serviceTitle: '타행이체결과 불능분 통지',
    creDate: '2024-03-15',
    detail: '상세보기',
    regDate: '2024-03-15',
  },
  {
    no: '11',
    tranAndrec: '송신',
    serviceTitle: '타행이체결과 불능분 통지',
    creDate: '2024-03-15',
    detail: '상세보기',
    regDate: '2024-03-15',
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