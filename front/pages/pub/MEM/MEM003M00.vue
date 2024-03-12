<template>

  <div class="title_box">
    <h2>나의 쪽지</h2>
    <ul class="loc">
      <li>홈</li>
      <li>회원관리</li>
      <li>나의 쪽지</li>
    </ul>
  </div>

  <div class="conbody">

    <v-tabs v-model="tab" class="tab_basics">
      <v-tab value="one">받은 쪽지</v-tab>
      <v-tab value="two">보낸 쪽지</v-tab>
    </v-tabs>

    <v-window v-model="tab" class="tab_con">
      <v-window-item value="one">
        <!-- <h3>쪽지 목록</h3> -->

        <div class="search_box incon">
          <div class="row">
            <span class="tit">기간검색</span>
            <div class="con">
              <div class="i_calender">
                <ComDatePicker v-model="startDate" class="i_date w_160" placeholder="날짜선택" />
                <span>~</span>
                <ComDatePicker v-model="endDate" class="i_date w_160" placeholder="날짜선택" />

                <ComSelectBox groupCode="01" v-model="comboMemo" :items="itemsMemo" class="s_basics w_120 ml_20 none_details" />

                <ComSelectBox groupCode="01" v-model="comboMemoType" :items="itemsMemoType" class="s_basics w_160 ml_5 none_details" />
                <v-text-field label="검색어" v-model="searchTxt" :rules="searchTxtRules" placeholder="검색어를 입력하세요" class="i_basics w_200 none_details ml_5"></v-text-field>
                <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
              </div>
            </div>
          </div>
        </div>
        
        <div class="tit_cnt_btn">
          <p class="tit_cnt">총 <b>100</b>건</p>
          <div>
            <ComSelectBox groupCode="01" v-model="comboCnt" :items="itemsCnt" class="s_basics none_details w_120" />
          </div>
        </div>
        <ComAgGrid
          ref="agrid"
          :columnDefs="columnDefsReceive"
          style="height: 553px"
          class="grid"
          :rowData="rowDataReceive"
          :defaultColDef="defaultColDefReceive"
          :rowHeight="51"
        />
        <v-btn class="vbtn btn_grid_more" size="small">더보기</v-btn>

        <div class="btn_btm_wrap left">
          <v-btn class="vbtn line" size="small">삭제</v-btn>          
        </div>

      </v-window-item>
      <v-window-item value="two">
        
        <!-- 쪽지 목록 -->
        <div v-if="true">
          <!-- <h3>쪽지 목록</h3> -->

          <div class="search_box incon">
            <div class="row">
              <span class="tit">기간검색</span>
              <div class="con">
                <div class="i_calender">
                  <ComDatePicker v-model="startDate" class="i_date w_160" placeholder="날짜선택" />
                  <span>~</span>
                  <ComDatePicker v-model="endDate" class="i_date w_160" placeholder="날짜선택" />

                  <ComSelectBox groupCode="01" v-model="comboMemo" :items="itemsMemo" class="s_basics w_120 ml_20 none_details" />

                  <ComSelectBox groupCode="01" v-model="comboMemoType" :items="itemsMemoType" class="s_basics w_160 ml_5 none_details" />
                  <v-text-field label="검색어" v-model="searchTxt" :rules="searchTxtRules" placeholder="검색어를 입력하세요" class="i_basics w_200 none_details ml_5"></v-text-field>
                  <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
                </div>
              </div>
            </div>
          </div>

          <div class="tit_cnt_btn">
            <p class="tit_cnt">총 <b>100</b>건</p>
            <div>
              <ComSelectBox groupCode="01" v-model="comboCnt" :items="itemsCnt" class="s_basics none_details w_120" />
            </div>
          </div>
          <ComAgGrid
            ref="agrid2"
            :columnDefs="columnDefsSend"
            style="height: 553px"
            class="grid"
            :rowData="rowDataSend"
            :defaultColDef="defaultColDefSend"
            :rowHeight="51"
          />
          <v-btn class="vbtn btn_grid_more" size="small">더보기</v-btn>

          <div class="btn_btm_wrap left">
            <v-btn class="vbtn line" size="small">삭제</v-btn>
          </div>
          <div class="btn_btm_wrap">
            <v-btn class="vbtn" size="large">쪽지쓰기</v-btn>
          </div>
        </div>
        <!-- //쪽지 목록 -->

        <!-- 쪽지 등록 -->
        <div v-if="true">
          <h3>쪽지 등록</h3>
          <v-table class="vtable_view">
            <tbody>
              <tr>
                <th>제목</th>
                <td>
                  <ComSelectBox groupCode="01" v-model="comboMemoType" :items="itemsMemoType" class="s_basics w_180 ml_5 none_details" />
                </td>
              </tr>
              <tr>
                <th>받는 분</th>
                <td>
                  <div class="input_flex">
                    <v-combobox
                      label="받는 분"
                      :items="['전체', '아이디4', '아이디3', '아이디2', '아이디1']"
                      v-model="userOrgSearch"
                      :rules="nameOrgSearchRules"
                      class="v_combo none_details flex1"
                      placeholder="선택 버튼을 선택해서 받는 분을 선택해주세요."
                      multiple
                    ></v-combobox>
                    <v-btn class="vbtn line ml_5" size="small">선택</v-btn>
                  </div>                  
                </td>
              </tr>
              <tr>
                <th>내용</th>
                <td>
                  <v-textarea placeholder="내용을 입력하세요." class="h_300"></v-textarea>
                  <p class="txt_limit">0/1,000 자</p>
                </td>
              </tr>
            </tbody>
          </v-table>

          <div class="btn_btm_wrap">
            <v-btn class="vbtn blue" size="large">목록</v-btn>
            <v-btn class="vbtn" size="large">쪽지 보내기</v-btn>
          </div>
        </div>
        <!-- //쪽지 등록 -->

      </v-window-item>
    </v-window>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComAgGrid from '~/components/common/ComAgGrid.vue'
import ComDatePicker from '@/components/common/ComDatePicker.vue'

const tab = ref('')

const today = new Date() // 현재 날짜와 시간을 포함하는 Date 객체 생성
const year = today.getFullYear() // 년도 가져오기
const month = today.getMonth() + 1 // 월 가져오기 (0부터 시작하므로 1 더하기)
const day = today.getDate() // 일 가져오기
const formattedToday = new Date(
  `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
)
const startDate = ref(formattedToday)
const endDate = ref(formattedToday)

const comboMemo = ref('001')
const itemsMemo = ref([
  { title: '전체', value: '001' },
  { title: '쪽지 종류', value: '002' },
  { title: '쪽지 내용', value: '003' },
])

const comboMemoType = ref('001')
const itemsMemoType = ref([
  { title: '전체', value: '001' },
  { title: 'TASK제안접수', value: '002' },
  { title: 'TASK제안선정', value: '003' },
  { title: 'TASK신규', value: '004' },
  { title: 'TASK승인', value: '005' },
  { title: '건별지급요청', value: '006' },
  { title: '건별지급승인', value: '007' },
  { title: '정산신청', value: '008' },
  { title: '정산완료', value: '009' },
  { title: '정산확정알림', value: '010' },
  { title: '보낸쪽지', value: '011' },
  { title: '관리자문의', value: '012' },
])

const searchTxt = ref('')
const searchTxtRules = [
  // (v) => !!v || '다시 입력해주세요.',
  //(v) => (v && v.length >= 16) || '영문, 숫자 대소문자 구분없이 6~16 자리',
]

const comboCnt = ref('001')
const itemsCnt = ref([
  { title: '10개씩', value: '001' },
  { title: '50개씩', value: '002' },
  { title: '100개씩', value: '003' },
])

class checkCel {
  eGui;

  init(params) {
    this.eGui = document.createElement('input');
    this.eGui.type = 'checkbox'
    this.eGui.addEventListener('change', () => {

    });
  }

  getGui() {
    return this.eGui;
  }
}

const columnDefsReceive = ref([
  {
    headerName: '',
    field: 'chk',
    cellRenderer: 'agCheckboxCellRenderer',
    headerComponent: checkCel,
    editable: false,
    cellRendererParams: {
      disabled: false,
    },
    cellClass: ['custom-center-align'],
    width: 76,
  },
  { headerName: 'NO.', field: 'no', width: 75 },
  { headerName: '쪽지 종류', field: 'memoType', width: 130 },
  { headerName: '쪽지 내용', field: 'title', width: 670 , cellClass:'cell_left ico_new ellipsis'},
  { headerName: '받은 날짜', field: 'date', width: 100 },
  { headerName: '보낸 분', field: 'sender', width: 105 },
])
const rowDataReceive = [
  {
    chk: false,
    no: 999999,
    memoType: 'TASK제안접수',
    title: '승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항',
    date: '2023.09.01',
    sender: '홍길동길동',
  },
  {
    chk: false,
    no: 2,
    memoType: '정산완료',
    title: '[관리자 답변] 승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항 승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항',
    date: '2023.09.01',
    sender: '홍길동',
  },
  {
    chk: false,
    no: 3,
    memoType: '건별지금승인',
    title: '승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항',
    date: '2023.09.01',
    sender: '홍길동',
  },
  {
    chk: false,
    no: 4,
    memoType: '건별지금승인',
    title: '승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항',
    date: '2023.09.01',
    sender: '홍길동',
  },
  {
    chk: false,
    no: 5,
    memoType: '건별지금승인',
    title: '승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항',
    date: '2023.09.01',
    sender: '홍길동',
  },
  {
    chk: false,
    no: 6,
    memoType: '건별지금승인',
    title: '승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항',
    date: '2023.09.01',
    sender: '홍길동',
  },
  {
    chk: false,
    no: 7,
    memoType: '건별지금승인',
    title: '승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항',
    date: '2023.09.01',
    sender: '홍길동',
  },
  {
    chk: false,
    no: 8,
    memoType: '건별지금승인',
    title: '승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항',
    date: '2023.09.01',
    sender: '홍길동',
  },
  {
    chk: false,
    no: 9,
    memoType: '건별지금승인',
    title: '승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항',
    date: '2023.09.01',
    sender: '홍길동',
  },
  {
    chk: false,
    no: 10,
    memoType: '건별지금승인',
    title: '승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항',
    date: '2023.09.01',
    sender: '홍길동',
  },
]
const defaultColDefReceive = {
  sortable: true,
  filter: true,
  editable: true,
  resizable: true,
  cellStyle: { textAlign: 'center' },
  // flex:1, // width auto
}
const agrid = ref(null)

const agrid2 = ref(null)

const columnDefsSend = ref([
  {
    headerName: '선택',
    field: 'chk',
    cellRenderer: 'agCheckboxCellRenderer',
    editable: false,
    cellRendererParams: {
      disabled: false,
    },
    cellClass: ['custom-center-align'],
    width: 76,
  },
  { headerName: 'NO.', field: 'no', width: 75 },
  { headerName: '쪽지 종류', field: 'memoType', width: 130 },
  { headerName: '쪽지 내용', field: 'title', width: 670, cellClass: 'cell_left ico_new ellipsis' },
  { headerName: '받은 날짜', field: 'date', width: 100 },
  { headerName: '보낸 분', field: 'sender', width: 105 },
])
const rowDataSend = [
  {
    chk: false,
    no: 999999,
    memoType: 'TASK제안접수',
    title: '승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항',
    date: '2023.09.01',
    sender: '홍길동길동',
  },
  {
    chk: false,
    no: 2,
    memoType: '정산완료',
    title: '[관리자 답변] 승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항 승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항',
    date: '2023.09.01',
    sender: '홍길동',
  },
  {
    chk: false,
    no: 3,
    memoType: '건별지금승인',
    title: '승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항',
    date: '2023.09.01',
    sender: '홍길동',
  },
  {
    chk: false,
    no: 4,
    memoType: '건별지금승인',
    title: '승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항',
    date: '2023.09.01',
    sender: '홍길동',
  },
  {
    chk: false,
    no: 5,
    memoType: '건별지금승인',
    title: '승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항',
    date: '2023.09.01',
    sender: '홍길동',
  },
  {
    chk: false,
    no: 6,
    memoType: '건별지금승인',
    title: '승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항',
    date: '2023.09.01',
    sender: '홍길동',
  },
  {
    chk: false,
    no: 7,
    memoType: '건별지금승인',
    title: '승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항',
    date: '2023.09.01',
    sender: '홍길동',
  },
  {
    chk: false,
    no: 8,
    memoType: '건별지금승인',
    title: '승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항',
    date: '2023.09.01',
    sender: '홍길동',
  },
  {
    chk: false,
    no: 9,
    memoType: '건별지금승인',
    title: '승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항',
    date: '2023.09.01',
    sender: '홍길동',
  },
  {
    chk: false,
    no: 10,
    memoType: '건별지금승인',
    title: '승인 요정 건이 있습니다. 12/31일까지 승인 해주세요 안내사항',
    date: '2023.09.01',
    sender: '홍길동',
  },
]
const defaultColDefSend = {
  sortable: true,
  filter: true,
  editable: true,
  resizable: true,
  cellStyle: { textAlign: 'center' },
  // flex:1, // width auto
}

const userOrgSearch = ref(null)
const nameOrgSearchRules = [
  
]

</script> 