<template>

  <div class="title_box">
    <h2>정산 반납 계좌 등록</h2>
    <ul class="loc">
      <li>홈</li>
      <li>협약관리</li>
      <li>사업 계좌 목록 조회</li>
      <li>정산 반납 계좌 등록</li>
    </ul>
  </div>

  <div class="conbody">
    
    <h3 class="title_top">
      <span>2023년 차세대 이관 작업 대행 선정 공고 사업</span>
      <v-btn class="vbtn" size="small">정산 반납 계좌 업로드</v-btn>
    </h3>

    <div class="t_center mt_40">
      <v-btn class="vbtn">계좌 검증</v-btn>
    </div>

    <div class="tit_cnt_btn mt_40">
      <p class="tit_cnt">총 <b>5</b>건 <b class="c_red">오류</b><span class="c_black">가 있습니다.</span></p>
      <!-- <p class="tit_cnt">총 <b>105</b>건 <span class="c_black">계좌 검증이 완료되었습니다.</span></p> -->
    </div>
    <ComAgGrid
      ref="agrid"
      :columnDefs="columnDefsReceive"
      style="height: 570px"
      class="grid vline mt_10"
      :rowData="rowDataReceive"
      :defaultColDef="defaultColDefReceive"
      :rowHeight="51"
    />
    <v-btn class="vbtn btn_grid_more" size="small">더보기</v-btn>

    <div class="authority_box other single mt_40">
      <ul>
        <li>엑셀 파일을 등록 후 검증 요청 하시면 계좌 검증 후 사용이 가능합니다.</li>
        <!-- <li class="c_red">반납 계좌 등록을 하시려면 엑셀파일을 다운로드 후 반납계좌 관리를 통해 등록하세요.</li> -->
      </ul>

      <v-btn class="vbtn line search single" size="small">조회</v-btn>
    </div>

    <div class="btn_btm_wrap">
      <v-btn class="vbtn blue" size="large">취소</v-btn>
      <v-btn class="vbtn" size="large">반납 계좌 등록 확인</v-btn>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComAgGrid from '~/components/common/ComAgGrid.vue'

const columnDefsReceive = ref([
  { headerName: 'NO.', field: 'no', width: 80 },
  { headerName: 'TASK명', field: 'taskName', width: 260 },
  { headerName: '수행기관명', field: 'orgName', width: 260 },
  { headerName: '사업자 번호', field: 'corporateNum', width: 160 },
  { headerName: '가상 계좌번호', field: 'virtualAccNum', width: 260 },
  { headerName: '반납금 은행', field: 'returnBank', width: 180 },
  { headerName: '반납금 계좌번호', field: 'returnAccNum', width: 180 },
  { headerName: '반납금 계좌명', field: 'returnAccName', width: 180 },
  { headerName: '업로드 결과', field: 'uploadResult', width: 120, cellClass: params => { return params.value === '정상' ? 'ico_normal' : 'ico_error' }  }, //정상 ico_normal 오류 ico_error
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
    returnAccName: '신한 기관사업부',
    uploadResult: '정상',
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
    uploadResult: '정상',
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
    uploadResult: '정상',
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
    uploadResult: '오류',
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
    uploadResult: '오류',
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
    uploadResult: '정상',
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
    uploadResult: '정상',
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
    uploadResult: '오류',
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
    uploadResult: '정상',
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
    uploadResult: '정상',
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
    uploadResult: '정상',
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