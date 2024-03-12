<template>

  <div class="title_box">
    <h2>사업 계좌 목록 조회</h2>
    <ul class="loc">
      <li>홈</li>
      <li>협약관리</li>
      <li>사업 계좌 목록 조회</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="search_box top other noline">
      <!-- <div class="row">
        <div class="con flex1">
          <div class="input_flex a_center">
            <span class="tit">사업명</span>
            <ComSelectBox groupCode="01" v-model="businessName" :items="itemsbusinessName" class="s_basics none_details flex1" />
          </div>
        </div>
      </div> -->

      <div class="row">
        <div class="con flex1">
          <div class="input_flex a_center">
            <div class="flex1">
              <!-- <span class="tit">수행기관</span>
              <span class="txt" v-if="true">한국가스</span>
              <v-btn class="vbtn line" size="small">수행기관 찾기</v-btn> -->
              <div class="input_flex a_center mr_20">
                <span class="tit">사업명</span>
                <ComSelectBox groupCode="01" v-model="businessName" :items="itemsbusinessName" class="s_basics none_details flex1" />
              </div>
            </div>
            <div class="flex1">
              <div class="input_flex a_center">
                <span class="tit">TASK명</span>
                <v-text-field label="검색어" v-model="searchTask" :rules="searchTaskRules" placeholder="TASK명을 입력하세요" class="i_basics flex1 none_details"></v-text-field>
                <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tit_cnt_btn">
      <p class="tit_cnt">총 <b>100</b>건</p>
      <div class="a_center">
        <v-checkbox v-model="checkbox1" class="mr_10" :label="`정산 반납금 계좌 미 등록건`" />
        <ComSelectBox groupCode="01" v-model="comboCnt" :items="itemsCnt" class="s_basics none_details w_120" />
      </div>
    </div>
    <ComAgGrid
      ref="agrid"
      :columnDefs="columnDefsReceive"
      style="height: 570px"
      class="grid vline"
      :rowData="rowDataReceive"
      :defaultColDef="defaultColDefReceive"
      :rowHeight="51"
    />
    <v-btn class="vbtn btn_grid_more" size="small">더보기</v-btn>

    <div class="authority_box other mt_40">
      <ul>
        <li>엑셀 파일을 등록 후 검증 요청 하시면 계좌 검증 후 사용이 가능합니다.</li>
        <li>반납 계좌 등록을 하시려면 엑셀파일을 다운로드 후 반납계좌 관리를 통해 등록하세요.</li>
      </ul>

      <v-btn class="vbtn line search" size="small">조회</v-btn>
      <v-btn class="vbtn blue line btn_excel" size="">엑셀파일받기</v-btn>
    </div>

    <div class="btn_btm_wrap">
      <v-btn class="vbtn" size="large">정산반납계좌등록</v-btn>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComAgGrid from '~/components/common/ComAgGrid.vue'

const businessName = ref('001')
const itemsbusinessName = ref([
  { title: '[1234567890]2023 차세대 이관 작업 대행 업체 선정 공고', value: '001' },
  { title: '[1234567891]2023 차세대 이관 작업 대행 업체 선정 공고', value: '002' },
  { title: '[1234567892]2023 차세대 이관 작업 대행 업체 선정 공고', value: '003' },
])

const checkbox1 = ref(false)

const searchTask = ref('')
const searchTaskRules = [
  //(v) => !!v || '다시 입력해주세요.',
]

const comboCnt = ref('001')
const itemsCnt = ref([
  { title: '10개씩', value: '001' },
  { title: '50개씩', value: '002' },
  { title: '100개씩', value: '003' },
])

const columnDefsReceive = ref([
  { headerName: 'NO.', field: 'no', width: 80 },
  { headerName: 'TASK명', field: 'taskName', width: 260 },
  { headerName: '수행기관명', field: 'orgName', width: 260 },
  { headerName: '사업자 번호', field: 'corporateNum', width: 160 },
  { headerName: '가상 계좌번호', field: 'virtualAccNum', width: 260 },
  { headerName: '반납금 은행', field: 'returnBank', width: 180 },
  { headerName: '반납금 계좌번호', field: 'returnAccNum', width: 180 },
  { headerName: '반납금 계좌명', field: 'returnAccName', width: 180 },
])
const rowDataReceive = [
  {
    no: '999999',
    taskName: '회원관리회원관리회원관리회원관리',
    orgName: '김수행수행',
    corporateNum: '123-45-68790',
    virtualAccNum: '신한은행 5629103825527',
    returnBank: '신한은행',
    returnAccNum: '5629103825527',
    returnAccName: '신한은행',
  },
  {
    no: '2',
    taskName: '회원관리01',
    orgName: '김수행수행',
    corporateNum: '123-45-68790',
    virtualAccNum: 'KB국민은행 5629103825527',
    returnBank: 'KB국민은행',
    returnAccNum: '5629103825527',
    returnAccName: 'KB국민은행',
  },
  {
    no: '3',
    taskName: '회원관리01',
    orgName: '김수행수행',
    corporateNum: '123-45-68790',
    virtualAccNum: 'SC제일은행 5629103825527',
    returnBank: 'SC제일은행',
    returnAccNum: '5629103825527',
    returnAccName: 'SC제일은행',
  },
  {
    no: '4',
    taskName: '회원관리01',
    orgName: '김수행수행',
    corporateNum: '123-45-68790',
    virtualAccNum: '한국씨티은행 5629103825527',
    returnBank: '한국씨티은행',
    returnAccNum: '5629103825527',
    returnAccName: '한국씨티은행',
  },
  {
    no: '5',
    taskName: '회원관리01',
    orgName: '김수행수행',
    corporateNum: '123-45-68790',
    virtualAccNum: '한국수출입은행 5629103825527',
    returnBank: '한국수출입은행',
    returnAccNum: '5629103825527',
    returnAccName: '한국수출입은행',
  },
  {
    no: '6',
    taskName: '회원관리01',
    orgName: '김수행수행',
    corporateNum: '123-45-68790',
    virtualAccNum: '신한은행 5629103825527',
    returnBank: '신한은행',
    returnAccNum: '5629103825527',
    returnAccName: '신한은행',
  },
  {
    no: '7',
    taskName: '회원관리01',
    orgName: '김수행수행',
    corporateNum: '123-45-68790',
    virtualAccNum: '신한은행 5629103825527',
    returnBank: '신한은행',
    returnAccNum: '5629103825527',
    returnAccName: '신한은행',
  },
  {
    no: '8',
    taskName: '회원관리01',
    orgName: '김수행수행',
    corporateNum: '123-45-68790',
    virtualAccNum: '신한은행 5629103825527',
    returnBank: '신한은행',
    returnAccNum: '5629103825527',
    returnAccName: '신한은행',
  },
  {
    no: '9',
    taskName: '회원관리01',
    orgName: '김수행수행',
    corporateNum: '123-45-68790',
    virtualAccNum: '신한은행 5629103825527',
    returnBank: '신한은행',
    returnAccNum: '5629103825527',
    returnAccName: '신한은행',
  },
  {
    no: '10',
    taskName: '회원관리01',
    orgName: '김수행수행',
    corporateNum: '123-45-68790',
    virtualAccNum: '신한은행 5629103825527',
    returnBank: '신한은행',
    returnAccNum: '5629103825527',
    returnAccName: '신한은행',
  },
  {
    no: '11',
    taskName: '회원관리01',
    orgName: '김수행수행',
    corporateNum: '123-45-68790',
    virtualAccNum: '신한은행 5629103825527',
    returnBank: '신한은행',
    returnAccNum: '5629103825527',
    returnAccName: '신한은행',
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

</script> 