<template>

  <div class="title_box">
    <h2>사업 담당자 변경 관리</h2>
    <ul class="loc">
      <li>홈</li>
      <li>협약관리</li>
      <li>사업 담당자 변경 관리</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="search_box top other">
      <div class="row">
        <div class="con flex1">
          <div class="input_flex a_center">
            <span class="tit">사업명</span>
            <ComSelectBox groupCode="01" v-model="businessName" :items="itemsbusinessName" class="s_basics none_details flex1" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="con flex1">
          <div class="input_flex a_center">
            <span class="tit">담당자</span>
            <ComSelectBox groupCode="01" v-model="comboSelected" :items="items" class="s_basics none_details w_170" />
            <v-text-field label="검색어" v-model="searchTask" :rules="searchTaskRules" placeholder="담당자 이름을 조회하세요." class="i_basics flex1 none_details ml_5"></v-text-field>
            <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
          </div>
        </div>
      </div>
    </div>

    <div class="tit_cnt_btn">
      <h4>검색 결과</h4>
      <div class="a_center">
        <v-checkbox v-model="checkbox1" class="" :label="`진행 중만 보기`" />
        <ComSelectBox groupCode="01" v-model="comboCnt" :items="itemsCnt" class="s_basics none_details w_120 ml_20" />
      </div>
    </div>
    <ComAgGrid
      ref="agrid"
      :columnDefs="columnDefsReceive"
      style="height: 570px"
      class="grid vline mt_11"
      :rowData="rowDataReceive"
      :defaultColDef="defaultColDefReceive"
      :rowHeight="51"
    />
    <v-btn class="vbtn btn_grid_more" size="small">더보기</v-btn>
    <p class="tip_txt mt_10">담당자 일관 별경 시 TASK가 중지 됩니다.</p>

    <h4 class="mt_40">변경 담당자</h4>
    <v-table class="vtable_view">
      <colgroup>
        <col style="width:;"/>
        <col style="width:;"/>
      </colgroup>
      <tbody>
        <tr>
          <th>TASK 승인 담당자</th>
          <td>
            <div class="input_flex">
              <ComSelectBox groupCode="01" v-model="appOfficer" :items="itemsAppOfficer" class="s_basics w_300" />
              <v-btn class="vbtn ml_5" size="small">일괄 변경</v-btn>
            </div>
          </td>
        </tr>
        <tr>
          <th>정산 담당자</th>
          <td>
            <div class="input_flex">
              <ComSelectBox groupCode="01" v-model="payOfficer" :items="itemsPayOfficer" class="s_basics w_300" />
              <v-btn class="vbtn ml_5" size="small">일괄 변경</v-btn>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>

    <!-- <div class="btn_btm_wrap">
      <v-btn class="vbtn" size="large">정산반납계좌등록</v-btn>
    </div> -->

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

const comboSelected = ref('001')
const items = ref([
    { title: '전체', value: '001' },
    { title: 'TASK 승인 담당자', value: '002' },
    { title: '정산 담당자', value: '003' },
])

const appOfficer = ref('001')
const itemsAppOfficer = ref([
  { title: '김신한', value: '001' },
  { title: '김신한', value: '002' },
])

const payOfficer = ref('001')
const itemsPayOfficer = ref([
  { title: '김신한', value: '001' },
  { title: '김신한', value: '002' },
])

const searchTask = ref('')
const searchTaskRules = [
  //(v) => !!v || '다시 입력해주세요.',
]

const checkbox1 = ref(true)

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
  { headerName: 'TASK 시작일', field: 'startDate', width: 130 },
  { headerName: 'TASK 종료일', field: 'endDate', width: 130 },
  { headerName: 'TASK 상태', field: 'state', width: 130 },
  { headerName: 'TASK 승인 담당자', field: 'appOfficer', width: 160 },
  { headerName: '정산 담당자', field: 'payOfficer', width: 160 },
])
const rowDataReceive = [
  {
    no: '999999',
    taskName: '회원관리회원관리회원관리회원관리',
    orgName: '김수행수행',
    corporateNum: '123-45-68790',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행중',
    appOfficer: '김신한신한(88)',
    payOfficer: '김신한신한(88)',
  },
  {
    no: '2',
    taskName: '회원관리01',
    orgName: '김수행',
    corporateNum: '123-45-68790',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행중',
    appOfficer: '김신한(88)',
    payOfficer: '김신한(88)',
  },
  {
    no: '3',
    taskName: '회원관리01',
    orgName: '김수행',
    corporateNum: '123-45-68790',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행중',
    appOfficer: '김신한(88)',
    payOfficer: '김신한(88)',
  },
  {
    no: '4',
    taskName: '회원관리01',
    orgName: '김수행',
    corporateNum: '123-45-68790',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행중',
    appOfficer: '김신한(88)',
    payOfficer: '김신한(88)',
  },
  {
    no: '5',
    taskName: '회원관리01',
    orgName: '김수행',
    corporateNum: '123-45-68790',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행중',
    appOfficer: '김신한(88)',
    payOfficer: '김신한(88)',
  },
  {
    no: '6',
    taskName: '회원관리01',
    orgName: '김수행',
    corporateNum: '123-45-68790',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행중',
    appOfficer: '김신한(88)',
    payOfficer: '김신한(88)',
  },
  {
    no: '7',
    taskName: '회원관리01',
    orgName: '김수행',
    corporateNum: '123-45-68790',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행중',
    appOfficer: '김신한(88)',
    payOfficer: '김신한(88)',
  },
  {
    no: '8',
    taskName: '회원관리01',
    orgName: '김수행',
    corporateNum: '123-45-68790',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행중',
    appOfficer: '김신한(88)',
    payOfficer: '김신한(88)',
  },
  {
    no: '9',
    taskName: '회원관리01',
    orgName: '김수행',
    corporateNum: '123-45-68790',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행중',
    appOfficer: '김신한(88)',
    payOfficer: '김신한(88)',
  },
  {
    no: '10',
    taskName: '회원관리01',
    orgName: '김수행',
    corporateNum: '123-45-68790',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행중',
    appOfficer: '김신한(88)',
    payOfficer: '김신한(88)',
  },
  {
    no: '11',
    taskName: '회원관리01',
    orgName: '김수행',
    corporateNum: '123-45-68790',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행중',
    appOfficer: '김신한(88)',
    payOfficer: '김신한(88)',
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