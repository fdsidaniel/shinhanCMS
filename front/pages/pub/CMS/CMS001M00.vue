<template>

  <div class="title_box">
    <h2>
      당행 입금 이체
      <v-btn class="btn_bookmark" size="small" :class="{ 'on': bookMark }" @click="btnBookmark">즐겨찾기 설정</v-btn>
      <span class="msg">{{ bookMarkMsg }}</span>
    </h2>
    <ul class="loc">
      <li>홈</li>
      <li>원화(펌뱅킹)</li>
      <li>당행 이체 내역 조회</li>
    </ul>
  </div>

  <div class="conbody">

    <v-tabs v-model="tab" class="tab_basics add_type">
      <v-tab value="orgAll">기관전체</v-tab>

      <v-btn class="vbtn btn_org_add" size="small">기관추가</v-btn>
    </v-tabs>
    

    <v-window v-model="tab" class="tab_con">
      <v-window-item value="orgAll">
        
        <p class="req_txt mb_10 t_right">표시는 필수 입력 항목 입니다.</p>
        <!-- 검색 -->
        <div class="search_table">
            <div class="row">
                <div class="cell">
                    <div class="col vtop">
                        <span class="tit req">거래일시</span>
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
                    <div class="col">
                        <span class="tit">처리 결과</span>
                        <div class="con">
                            <ComSelectBox groupCode="01" v-model="comboProcessResult" :items="itemsProcessResult" :isAll="true"  class="s_basics none_details" />
                        </div>
                    </div>
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
            <div class="row">
                <div class="cell">
                    <div class="col">
                        <span class="tit">계좌번호</span>
                        <div class="con">
                            <v-text-field label="계좌번호" v-model="accNum" :rules="accNumRules" required placeholder="“-”없이, 계좌번호 모두를 입력해주세요." class="i_basics none_details"></v-text-field>
                        </div>
                    </div>
                </div>
                <div class="cell">
                    <div class="col">
                        <span class="tit">통장 메모</span>
                        <div class="con">
                            <v-text-field label="통장 메모" v-model="bankBookMemo" :rules="bankBookMemoRules" required placeholder="두 글자 이상 입력해주세요." class="i_basics none_details"></v-text-field>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn">
                <v-btn class="vbtn line search" size="small">조회</v-btn>
            </div>
        </div>
        <!-- //검색 -->

        <div class="table_top">
            <div>
                <ComSelectBox groupCode="01" v-model="ogrSelect" :items="itemsOgrSelect" :isAll="true"  class="s_basics none_details" />
            </div>
            <div>
                <p class="txt">기준일시 : 2024.02.15 14:12:56 (단위:원)</p>
            </div>
        </div>
        <v-table class="vtable_list">
            <colgroup>
            <col style="width:25%;"/>
            <col style="width:25%;"/>
            <col style="width:25%;"/>
            <col style="width:25%;"/>
            </colgroup>
            <thead>
            <tr>
                <th>총 정상이체건수</th>
                <th>총 이체금액</th>
                <th>총 오류금액</th>
                <th>총 수수료</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>159건</td>
                <td>1,590,000,000원</td>
                <td>0원</td>
                <td>0원</td>
            </tr>
            </tbody>
        </v-table>

        <div class="tit_cnt_btn mt_40">
            <p class="tit_cnt">총 <b>100</b>건</p>
            <div>
                <v-btn class="vbtn white line sort new" size="small" :class="{ 'old': sort }" @click="btnSort">{{ message }}</v-btn>
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

      </v-window-item>
    </v-window>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComRadioButton from '@/components/common/ComRadioButton.vue'
import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComAgGrid from '~/components/common/ComAgGrid.vue'
import ComDatePicker from '@/components/common/ComDatePicker.vue'

// 즐겨찾기
const bookMark = ref(false)
const bookMarkMsg = ref('즐겨찾기 설정')
const btnBookmark = () => {
    if(!bookMark.value){
    bookMark.value = true
    bookMarkMsg.value = '즐겨찾기 추가'
  }else{
    bookMark.value = false
    bookMarkMsg.value = '즐겨찾기 해제'
  }
}

const tab = ref('')

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

const comboProcessResult = ref('01')
const itemsProcessResult = ref([
    { title: '정상', value: '01' },
    { title: '오류', value: '02' },
    { title: '처리 중', value: '03' },
])

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

const accNum = ref('')
const accNumRules = [
  
]

const bankBookMemo = ref('')
const bankBookMemoRules = [
  
]

const ogrSelect = ref('01')
const itemsOgrSelect = ref([
    { title: '기관 전체', value: '01' },
    { title: '기관명 가다나라마바사', value: '02' },
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
  { headerName: '기관 명', field: 'orgName', width: 200 },
  {
    headerName: '결과', field: 'result', width: 100, cellClass: params => {      
      if (params.value === '정상') {
          return 'ico_success'
      }else if (params.value === '오류') {
          return 'ico_err'
      }
    }
  },
  { headerName: '요청 채널', field: 'requestChannel', width: 110 },
  { headerName: '요청 번호', field: 'requestNum', width: 160 },
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
    result: '오류',
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
    result: '오류',
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
    result: '오류',
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
    result: '오류',
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
    result: '오류',
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
    result: '오류',
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
    result: '오류',
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
    result: '오류',
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
    result: '오류',
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
    result: '오류',
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