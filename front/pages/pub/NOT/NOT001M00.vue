<template>

  <div class="title_box">
    <h2>공지사항</h2>
    <ul class="loc">
      <li>홈</li>
      <li>고객센터</li>
      <li>공지사항</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="tit_cnt_btn">
      <p class="tit_cnt">총 <b>100</b>건</p>
      <div>
        <v-text-field label="공지사항" v-model="notice" :rules="noticeRules" placeholder="2자리 이상 입력해주세요" class="i_basics w_300 none_details"></v-text-field>
        <v-btn class="vbtn line search white ml_5" size="small">검색</v-btn>
        <ComSelectBox groupCode="01" v-model="comboCnt" :items="itemsCnt" class="s_basics none_details w_120 ml_5" />
      </div>
    </div>
    <ComAgGrid
      ref="agrid"
      :columnDefs="columnDefsReceive"
      style="height: 553px"
      class="grid fixed"
      :rowData="rowDataReceive"
      :defaultColDef="defaultColDefReceive"
      :rowHeight="51"
    />
    <v-btn class="vbtn btn_grid_more" size="small">더보기</v-btn>

    <div class="btn_btm_wrap right">
        <v-btn class="vbtn" size="small">신규등록</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComAgGrid from '~/components/common/ComAgGrid.vue'

const notice = ref('')
const noticeRules = [
  //(v) => !!v || '사용이 불가능합니다. 다시 입력해주세요.',
  //(v) => (v && v.length >= 16) || '영문, 숫자 대소문자 구분없이 6~16 자리',
]


const comboCnt = ref('001')
const itemsCnt = ref([
  { title: '10개씩', value: '001' },
  { title: '50개씩', value: '002' },
  { title: '100개씩', value: '003' },
])

const columnDefsReceive = ref([
  { headerName: 'NO.', field: 'no', width: 100 },
  { headerName: '제목', field: 'title', width: 706, cellClass: 'cell_left ico_tit ico_new ellipsis' },
  { headerName: '첨부파일', field: 'date', width: 350, cellClass: 'ico_file' },
])
const rowDataReceive = [
  {
    no: '[공지]',
    title: '시스템 점검 안내',
    date: '파일명.pdf',
  },
  {
    no: 2,
    title: '시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내',
    date: '파일명파일명.pdf',
  },
  {
    no: 3,
    title: '시스템 점검 안내',
    date: '파일명.pdf',
  },
  {
    no: 4,
    title: '시스템 점검 안내',
    date: '파일명.pdf',
  },
  {
    no: 5,
    title: '시스템 점검 안내',
    date: '파일명.pdf',
  },
  {
    no: 6,
    title: '시스템 점검 안내',
    date: '파일명.pdf',
  },
  {
    no: 7,
    title: '시스템 점검 안내',
    date: '파일명.pdf',
  },
  {
    no: 8,
    title: '시스템 점검 안내',
    date: '파일명.pdf',
  },
  {
    no: 9,
    title: '시스템 점검 안내',
    date: '파일명.pdf',
  },
  {
    no: 10,
    title: '시스템 점검 안내',
    date: '파일명.pdf',
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