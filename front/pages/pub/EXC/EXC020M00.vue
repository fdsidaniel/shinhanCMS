<template>

  <div class="title_box">
    <h2>집행 관리</h2>
    <ul class="loc">
      <li>홈</li>
      <li>집행 관리</li>
      <li>정부 계좌 입금 취소</li>
    </ul>
  </div>

  <div class="conbody">

    <ul class="top_step_list active_step_1"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3 -->
      <li class="step1"><span>신청</span></li>
      <li class="step2"><span>승인</span></li>
      <li class="step3"><span>이체 실행</span></li>
    </ul>

    <div class="search_box top other noline mt_40">
      <div class="row">
        <div class="con flex1">

          <div class="input_flex a_center">
            <div class="i_calender a_center flex1 mr_10">
              <span class="tit">TASK명</span>
              <div class="txt tooltip_box flex1">
                <ComSelectBox groupCode="01" v-model="comboTaskName" :items="itemsTaskName" class="s_basics none_details" />
                <p class="tooltip over_slt" @click="layerPopView">TASK 정보</p>
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
            <div class="flex1">
              <span class="tit">수행기관</span>
              <span class="txt" v-if="true">한국가스</span>
              <v-btn class="vbtn line" size="small">수행기관 찾기</v-btn>
            </div>
          </div>

        </div>
      </div>

      <div class="row">
        <div class="con flex1">
          <div class="input_flex a_center">
            <div class="i_calender a_center flex1 mr_20">
              <span class="tit">기간</span>
              <ComSelectBox groupCode="01" v-model="comboDate" :items="itemsDate" class="s_basics w_150 mr_10 none_details" />
              <ComDatePicker v-model="startDate" class="i_date w_145" placeholder="날짜선택" />
              <span>~</span>
              <ComDatePicker v-model="endDate" class="i_date w_145" placeholder="날짜선택" />
            </div>
            <div class="flex1">
              <div class="input_flex a_center">
                <span class="tit">금액</span>
                <v-text-field label="입금금액" v-model="depositAmount" :rules="depositAmountRules" placeholder="금액을 입력하세요." class="i_basics flex1 none_details" />
              </div>
            </div>
            <v-btn class="vbtn line btn_reset ml_20" size="small">초기화</v-btn>
            <v-btn class="vbtn line search ml_5" size="small">조회</v-btn>
          </div>
        </div>
      </div>      
    </div>

    <div class="tit_cnt_btn">
      <p class="tit_cnt">조회 건 수 <b>100</b>건</p>
    </div>
    <ComAgGridBasic
      ref="agrid"
      :columnDefs="columnDefsReceive"
      style="height: 553px"
      class="grid vline"
      :rowData="rowDataReceive"
      :defaultColDef="defaultColDefReceive"
      :rowHeight="51"
    />

    <div class="btn_btm_wrap">
      <v-tooltip text="신청 후 공문을 통해 관리자에게 입금 취소 승인 이체를 요청하세요." location="top" model-value>
        <template v-slot:activator="{ props }">
          <v-btn class="vbtn" size="large" v-bind="props">정부 계좌 입금 취소 신청</v-btn>
        </template>
      </v-tooltip>
    </div>

  </div>
  
</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComDatePicker from '@/components/common/ComDatePicker.vue'
import ComAgGridBasic from '~/components/common/ComAgGridBasic.vue'

// TASK 정보 레이어 팝업
const layerPop = ref(false)
const layerPopView = () => {
  layerPop.value = !layerPop.value
};

const comboTaskName = ref('01')
const itemsTaskName = [
  { title: '회원관리 UI/UX 화면 변경 진행 화면', value: '01' },
  { title: 'TASK 명을 기준으로 민간 계좌가 있는 경우 TASK 노출', value: '02' },
]

const comboDate = ref('01')
const itemsDate = [
  { title: '입금 기간', value: '01' },
  { title: '사업 기간', value: '02' },
]

const today = new Date() // 현재 날짜와 시간을 포함하는 Date 객체 생성
const year = today.getFullYear() // 년도 가져오기
const month = today.getMonth() + 1 // 월 가져오기 (0부터 시작하므로 1 더하기)
const day = today.getDate() // 일 가져오기
const formattedToday = new Date(
  `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
)
const startDate = ref(formattedToday)

const depositAmount = ref('')
const depositAmountRules = [
  //(v) => !!v || '다시 입력해주세요.',  
]

const columnDefsReceive = ref([
  {
    headerName: '',
    field: 'chk',
    cellRenderer: 'agCheckboxCellRenderer',
    editable: false,
    cellRendererParams: {
      disabled: false,
    },
    cellClass: ['custom-center-align ag_radio'],
    width: 70,
  },
  { headerName: 'NO.', field: 'no', width: 86 },
  { headerName: 'TASK 명', field: 'taskName', width: 240 },
  { headerName: '수행 기관 명', field: 'orgName', width: 180 },  
  { headerName: '사업자번호', field: 'corporateNum', width: 160 },
  { headerName: '책임자', field: 'director', width: 160 },
  { headerName: '입금 계좌번호', field: 'depositAcc', width: 260 },
  { headerName: '입금 일자', field: 'depositDate', width: 150 },
  { headerName: '입금 금액', field: 'depositAmount', width: 200, cellClass: 'cell_right' },
])
const rowDataReceive = [
  {
    chk: false,
    no: '999999',
    taskName: 'TASK명TASK명TASK명TASK명',
    orgName: '한마정보통신',
    corporateNum: '123-45-67890',
    director: '김수행수행',
    depositAcc: '신한은행 56291835234701',
    depositDate: '2023-10-10',
    depositAmount: '1,000,000,000',
  },
  {
    chk: false,
    no: '2',
    taskName: 'TASK01',
    orgName: '한마생명',
    corporateNum: '123-45-67890',
    director: '김수행',
    depositAcc: '신한은행 56291835234701',
    depositDate: '2023-10-10',
    depositAmount: '10,000,000',
  },
  {
    chk: false,
    no: '3',
    taskName: 'TASK01',
    orgName: '한마생명',
    corporateNum: '123-45-67890',
    director: '김수행',
    depositAcc: '신한은행 56291835234701',
    depositDate: '2023-10-10',
    depositAmount: '10,000,000',
  },
  {
    chk: false,
    no: '4',
    taskName: 'TASK01',
    orgName: '한마생명',
    corporateNum: '123-45-67890',
    director: '김수행',
    depositAcc: '신한은행 56291835234701',
    depositDate: '2023-10-10',
    depositAmount: '10,000,000',
  },
  {
    chk: false,
    no: '5',
    taskName: 'TASK01',
    orgName: '한마생명',
    corporateNum: '123-45-67890',
    director: '김수행',
    depositAcc: '신한은행 56291835234701',
    depositDate: '2023-10-10',
    depositAmount: '10,000,000',
  },
  {
    chk: false,
    no: '6',
    taskName: 'TASK01',
    orgName: '한마생명',
    corporateNum: '123-45-67890',
    director: '김수행',
    depositAcc: '신한은행 56291835234701',
    depositDate: '2023-10-10',
    depositAmount: '10,000,000',
  },
  {
    chk: false,
    no: '7',
    taskName: 'TASK01',
    orgName: '한마생명',
    corporateNum: '123-45-67890',
    director: '김수행',
    depositAcc: '신한은행 56291835234701',
    depositDate: '2023-10-10',
    depositAmount: '10,000,000',
  },
  {
    chk: false,
    no: '8',
    taskName: 'TASK01',
    orgName: '한마생명',
    corporateNum: '123-45-67890',
    director: '김수행',
    depositAcc: '신한은행 56291835234701',
    depositDate: '2023-10-10',
    depositAmount: '10,000,000',
  },
  {
    chk: false,
    no: '9',
    taskName: 'TASK01',
    orgName: '한마생명',
    corporateNum: '123-45-67890',
    director: '김수행',
    depositAcc: '신한은행 56291835234701',
    depositDate: '2023-10-10',
    depositAmount: '10,000,000',
  },
  {
    chk: false,
    no: '10',
    taskName: 'TASK01',
    orgName: '한마생명',
    corporateNum: '123-45-67890',
    director: '김수행',
    depositAcc: '신한은행 56291835234701',
    depositDate: '2023-10-10',
    depositAmount: '10,000,000',
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