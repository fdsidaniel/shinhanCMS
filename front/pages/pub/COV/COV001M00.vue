<template>

  <div class="title_box">
    <h2>사업 신규등록</h2>
    <ul class="loc">
      <li>홈</li>
      <li>협약관리</li>
      <li>사업 신규등록</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="step_wrap">
      <div class="step_box">
        <ul class="step_list active_step_1"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3, active_step_4, active_step_5 -->
          <li class="step1">사업정보</li>
          <li class="step2">참여기관<br>협약문서정보</li>
          <li class="step3">사업비 계좌 정보</li>
          <li class="step4">비목세목 정보</li>
          <li class="step5">결재선 정보</li>
        </ul>
      </div>

      <div class="step_con">

        <!-- <p class="stit">사업정보</p>
        <h3>신규 사업을 시작합니다.</h3> -->
        <h3>신규 사업을 시작 합니다.</h3>
        <div class="row">
          <div class="tit">사업 명을 입력 하세요.<span class="right">0/15자</span></div>
          <div class="con">
            <div class="input_flex">
              <ComSelectBox groupCode="01" v-model="comboYear" :items="itemsYear" class="s_basics w_200 none_details" />
              <v-text-field label="사업명" v-model="businessName" :rules="businessNameRules" placeholder="15자 이내로 사업 명을 입력하세요." class="i_basics flex1"></v-text-field>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="tit">사업 내용을 간단히 설명 해주세요.<span class="right">0/30자</span></div>
          <div class="con">
            <v-text-field label="사업 내용" v-model="businessInfo" :rules="businessInfoRules" placeholder="30자 이내로 사업 내용을 입력하세요." class="i_basics"></v-text-field>
          </div>
        </div>

        <div class="row">
          <div class="tit">사업 기간을 선택 하세요.</div>
          <div class="con">
            <div class="i_calender">
              <ComDatePicker v-model="startDate" class="i_date" placeholder="날짜선택" />
              <ComDatePicker v-model="endDate" class="i_date" placeholder="날짜선택" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="tit">관리 유형을 선택 하세요.</div>
          <div class="con d_flex a_start">
            <div class="mng_type ocr">
              <v-checkbox v-model="checkbox1" :rules="checkbox1Rules">
                <p class="tit">AI-OCR</p>
                <div class="txt">사업별 문서 관리를 통한<br>문서검증 자동화</div>
              </v-checkbox>
            </div>
            <div class="mng_type acc">
              <v-checkbox v-model="checkbox2">
                <p class="tit">계좌이체</p>
                <div class="txt">사업비계좌를 통한<br>일반적인 이체 방식</div>
              </v-checkbox>
            </div>
            <div class="mng_type ez">
              <v-checkbox v-model="checkbox3">
                <p class="tit">신한은행 EZ+</p>
                <div class="txt">채권신탁 연계<br>계정이체 방식</div>
              </v-checkbox>
            </div>
          </div>
          <p class="error_message">관리 유형을 선택 하세요.</p>
        </div>

        <div class="row">
          <div class="tit">
            <div>
              <b>[선택사항]</b> PMS 관리번호를 입력 하세요.
              <div class="tooltip">
                <p class="txt">PMS관리번호란 발주기관 내부 관리번호를 의미 합니다.</p>
              </div>
            </div>
          </div>
          <div class="con">
            <v-text-field label="관리번호" v-model="mngNum" :rules="mngNumRules" placeholder="0000000000" class="i_basics"></v-text-field>
          </div>
        </div>

        <div class="btn_btm_wrap">
          <v-btn class="vbtn" size="large">다음</v-btn>
        </div>
        
      </div>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComDatePicker from '@/components/common/ComDatePicker.vue'

const comboYear = ref('001')
const itemsYear = ref([
  { title: '2023년', value: '001' },
  { title: '2022년', value: '002' },
  { title: '2024년', value: '003' },
])

const businessName = ref('')
const businessNameRules = [
  (v) => !!v || '사업명을 입력하세요.',
  (v) => (v && v.length <= 15) || '15자 이내로 사업명을 입력하세요.',
]

const businessInfo = ref('')
const businessInfoRules = [
  (v) => !!v || '사업 내용을 입력하세요.',
  (v) => (v && v.length <= 30) || '30자 이내로 사업 내용을 입력하세요.',
]

const mngNum = ref('')
const mngNumRules = [
  
]

const today = new Date() // 현재 날짜와 시간을 포함하는 Date 객체 생성
const year = today.getFullYear() // 년도 가져오기
const month = today.getMonth() + 1 // 월 가져오기 (0부터 시작하므로 1 더하기)
const day = today.getDate() // 일 가져오기
const formattedToday = new Date(
  `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
)
const startDate = ref(formattedToday)
const endDate = ref(formattedToday)

const checkbox1 = ref(false)
const checkbox2 = ref(false)
const checkbox3 = ref(false)

const checkbox1Rules = [
  //(v) => !!v || '관리 유형을 선택 하세요.',
]

</script> 