<template>

  <div class="title_box">
    <h2>당,타행 예금주 성명 조회</h2>
    <ul class="loc">
      <li>홈</li>
      <li>원화(펌뱅킹)</li>
      <li>이체 정보 관리</li>
      <li>당,타행 예금주 성명 조회</li>
    </ul>
  </div>

  <div class="conbody">

    <p class="req_txt mb_10 t_right">표시는 필수 입력 항목 입니다.</p>
    <!-- 검색 -->
    <div class="search_table">
        <div class="row">
            <div class="cell">
                <div class="col vtop">
                    <span class="tit req">요청일</span>
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
        <div class="btn">
            <v-btn class="vbtn line search" size="small">조회</v-btn>
        </div>
    </div>
    <!-- //검색 -->

    <div class="tit_cnt_btn mt_40">
        <p class="tit_cnt">
            총 <b>100</b>건,
            <span class="txt">조회 결과 : 2024.02.15 ~ 2024.02.15</span>
        </p>
        <div>
            <span class="txt">기준일시 : 2024.02.15 14:12:56</span>
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

    <div class="btn_btm_wrap">
        <v-btn class="vbtn" size="large">조회</v-btn>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComRadioButton from '@/components/common/ComRadioButton.vue'
import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComAgGrid from '~/components/common/ComAgGrid.vue'
import ComDatePicker from '@/components/common/ComDatePicker.vue'

const calDateValue = ref('05')
const calDate = [
  { label: '당일', value: '01' },
  { label: '1개월', value: '02' },
  { label: '3개월', value: '03' },
  { label: '6개월', value: '04' },
  { label: '직접입력', value: '05' },
]

const isActive = ref(true);

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

/* 그리드 */
const comboCnt = ref('001')
const itemsCnt = ref([
  { title: '10개씩', value: '001' },
  { title: '50개씩', value: '002' },
  { title: '100개씩', value: '003' },
])

class bankLogo {
  eGui;
  init(params) {
    this.eGui = document.createElement('div');
    this.eGui.classList.add('my-custom-cell-renderer');   
    if(params.value === '신한은행'){
      this.eGui.innerHTML =        
        `<img src="/_nuxt/assets/images/bank/logo_shinhan.svg" alt="신한은행" class="bank_logo">${params.value}`;
    }else if (params.value === '제주은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_jejubank.svg" alt="제주은행" class="bank_logo">${params.value}`;
    }else if (params.value === '국민은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_kb.svg" alt="국민은행" class="bank_logo">${params.value}`;
    }else if (params.value === '농협'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_nh.svg" alt="농협" class="bank_logo">${params.value}`;
    }else if (params.value === '지역농협'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_nonghyup.svg" alt="지역농협" class="bank_logo">${params.value}`;
    }else if (params.value === '기업은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_ibk.svg" alt="기업은행" class="bank_logo">${params.value}`;
    }else if (params.value === '하나은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_kebhana.svg" alt="하나은행" class="bank_logo">${params.value}`;
    }else if (params.value === '우리은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_wooribank.svg" alt="우리은행" class="bank_logo">${params.value}`;
    }else if (params.value === '새마을금고'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_kfcc.svg" alt="새마을금고" class="bank_logo">${params.value}`;
    }else if (params.value === '씨티은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_citibank.svg" alt="씨티은행" class="bank_logo">${params.value}`;
    }else if (params.value === 'SC제일은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_sc.svg" alt="SC제일은행" class="bank_logo">${params.value}`;
    }else if (params.value === '우체국'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_epost.svg" alt="우체국" class="bank_logo">${params.value}`;
    }else if (params.value === '신협'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_cu.svg" alt="신협" class="bank_logo">${params.value}`;
    }else if (params.value === '산업은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_kdb.svg" alt="산업은행" class="bank_logo">${params.value}`;
    }else if (params.value === '카카오뱅크'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_kko.svg" alt="카카오뱅크" class="bank_logo">${params.value}`;
    }else if (params.value === '토스뱅크'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_toss.svg" alt="토스뱅크" class="bank_logo">${params.value}`;
    }else if (params.value === '광주은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_kjbank.svg" alt="광주은행" class="bank_logo">${params.value}`;
    }else if (params.value === '전북은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_jbbank.svg" alt="전북은행" class="bank_logo">${params.value}`;
    }else if (params.value === '부산은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_busanbank.svg" alt="부산은행" class="bank_logo">${params.value}`;
    }else if (params.value === '경남은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_knbank.svg" alt="경남은행" class="bank_logo">${params.value}`;
    }else if (params.value === '대구은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_dgb.svg" alt="대구은행" class="bank_logo">${params.value}`;
    }else if (params.value === '수협'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_shbank.svg" alt="수협" class="bank_logo">${params.value}`;
    }else if (params.value === '산림조합'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_nfcf.svg" alt="산림조합" class="bank_logo">${params.value}`;
    }else if (params.value === '케이뱅크'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_kbanknow.svg" alt="케이뱅크" class="bank_logo">${params.value}`;
    }else if (params.value === 'OK저축은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_oksavings.svg" alt="OK저축은행" class="bank_logo">${params.value}`;
    }else if (params.value === 'KB저축은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_kbsavings.svg" alt="KB저축은행" class="bank_logo">${params.value}`;
    }else if (params.value === '미래에셋생명보험'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_miraeasset.svg" alt="미래에셋생명보험" class="bank_logo">${params.value}`;
    }else if (params.value === 'DB저축은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_idbsb.svg" alt="DB저축은행" class="bank_logo">${params.value}`;
    }else if (params.value === 'SBI저축은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_sbisb.svg" alt="SBI저축은행" class="bank_logo">${params.value}`;
    }else if (params.value === '하나저축은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_hanasavings.svg" alt="하나저축은행" class="bank_logo">${params.value}`;
    }else if (params.value === '신한저축은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_shinhansavings.svg" alt="신한저축은행" class="bank_logo">${params.value}`;
    }else if (params.value === '상상인저축은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_sangsanginsb.svg" alt="상상인저축은행" class="bank_logo">${params.value}`;
    }else if (params.value === '수산업협동조합중앙회'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_suhyup.svg" alt="수산업협동조합중앙회" class="bank_logo">${params.value}`;
    }else if (params.value === '저축은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_fsb.svg" alt="저축은행" class="bank_logo">${params.value}`;
    }else if (params.value === '중국건설'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_ccb.svg" alt="중국건설" class="bank_logo">${params.value}`;
    }else if (params.value === '중국공상'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_icbc.svg" alt="중국공상" class="bank_logo">${params.value}`;
    }else if (params.value === 'BOA'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_boa.svg" alt="BOA" class="bank_logo">${params.value}`;
    }else if (params.value === '도이치뱅크'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_db.svg" alt="도이치뱅크" class="bank_logo">${params.value}`;
    }else if (params.value === 'HSBC'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_hsbc.svg" alt="HSBC" class="bank_logo">${params.value}`;
    }else if (params.value === 'JP모간'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_jpmorgan.svg" alt="JP모간" class="bank_logo">${params.value}`;
    }else if (params.value === '중국은행'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_bankofchina.svg" alt="중국은행" class="bank_logo">${params.value}`;
    }else if (params.value === 'BNP파리바'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_bnpp.svg" alt="BNP파리바" class="bank_logo">${params.value}`;
    }else if (params.value === '국세'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_nts.svg" alt="국세" class="bank_logo">${params.value}`;
    }else if (params.value === '지방세입'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_lr.svg" alt="지방세입" class="bank_logo">${params.value}`;
    }else if (params.value === '국고금'){
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_cf.svg" alt="국고금" class="bank_logo">${params.value}`;
    }else{
      this.eGui.innerHTML =
        `<img src="/_nuxt/assets/images/bank/logo_error.svg" alt="통신오류" class="bank_logo">${params.value}`;
    }
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
  { headerName: '조회일시', field: 'searchDate', width: 220 },
  // { headerName: '조회 계좌은행', field: 'searchAccBank', width: 245, cellClass: 'cell_left', cellRenderer: bankLogo },
  { headerName: '조회 계좌은행', field: 'searchAccBank', width: 245, cellRenderer: bankLogo },
  { headerName: '조회 계좌번호', field: 'searchAccNum', width: 400 },
  { headerName: '조회 예금주명', field: 'searchAccName', width: 211 },  
])
const rowDataReceive = [
  {
    no: '999999',
    searchDate: '2024.02.15',
    searchAccBank: '통신오류111',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '2',
    searchDate: '2024.02.15',
    searchAccBank: '신한은행',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '3',
    searchDate: '2024.02.15',
    searchAccBank: '제주은행',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '4',
    searchDate: '2024.02.15',
    searchAccBank: '국민은행',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '5',
    searchDate: '2024.02.15',
    searchAccBank: '농협',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '6',
    searchDate: '2024.02.15',
    searchAccBank: '지역농협',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '7',
    searchDate: '2024.02.15',
    searchAccBank: '기업은행',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '8',
    searchDate: '2024.02.15',
    searchAccBank: '하나은행',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '9',
    searchDate: '2024.02.15',
    searchAccBank: '우리은행',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '10',
    searchDate: '2024.02.15',
    searchAccBank: '새마을금고',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '씨티은행',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: 'SC제일은행',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '우체국',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '신협',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '산업은행',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '카카오뱅크',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '토스뱅크',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '광주은행',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '전북은행',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '부산은행',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '경남은행',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '대구은행',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '수협',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '산림조합',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '케이뱅크',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: 'KB저축은행',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '미래에셋생명보험',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: 'SBI저축은행',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '하나저축은행',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '신한저축은행',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '상상인저축은행',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '수산업협동보합중앙회',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '저축은행',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '중국건설',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '중국공상',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: 'BOA',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '도이치뱅크',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: 'HSBC',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: 'JP모간',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '중국은행',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: 'BNP파리바',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '국세',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '지방세입',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
  },
  {
    no: '11',
    searchDate: '2024.02.15',
    searchAccBank: '국고금',
    searchAccNum: '391-910019-24008',
    searchAccName: '홀리몰리',
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