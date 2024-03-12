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
        <ul class="step_list active_step_3"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3, active_step_4, active_step_5 -->
          <li class="step1">사업정보</li>
          <li class="step2">참여기관<br>협약문서정보</li>
          <li class="step3">사업비 계좌 정보</li>
          <li class="step4">비목세목 정보</li>
          <li class="step5">결재선 정보</li>
        </ul>
      </div>

      <div class="step_con">

        <!-- <p class="stit">사업비 계좌 정보</p>
        <h3>차세대 이관 작업 대행 선정 공고 사업을 시작합니다.</h3> -->
        <div class="row">
          <div class="tit">
            <div>
              집금계좌정보를 입력하세요.
              <div class="tooltip">
                <p class="txt type2">집금계좌란 3자이체 시작 계좌(정부·민간가상계좌의 금액이 모이는 계좌)를 의미합니다.</p>
              </div>
            </div>
          </div>
          <div class="con">
            <div class="input_flex a_center">
              <v-text-field label="은행명" v-model="nameBank" :rules="nameBankRules" readonly class="i_basics w_150" />
              <v-text-field label="은행명" v-model="accNum" :rules="accNumRules" class="i_basics ml_10 w_200 msg_right" />
              <v-btn class="vbtn line blue ml_10 " size="small">계좌 조회</v-btn>
              <div class="right_txt">이 계좌에 예금주는 <strong>김발주</strong> 입니다.</div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="tit">
            <div>
              모계좌정보를 입력 하세요.
              <div class="tooltip">
                <p class="txt type3">모계좌란 정부·민간가상계좌를 관리하는 실제 존재하는 계좌를 의미합니다.</p>
              </div>
            </div>
          </div>
          <div class="con">
            <div class="input_flex a_center">
              <v-text-field label="은행명" v-model="nameBank2" :rules="nameBankRules2" readonly class="i_basics w_150" />
              <v-text-field label="은행명" v-model="accNum2" :rules="accNumRules2" class="i_basics ml_10 w_200 msg_right" />
              <v-btn class="vbtn line blue ml_10 " size="small">계좌 조회</v-btn>
              <p class="success_message ml_10 mt_0">사용 가능한 계좌 입니다.</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="tit">1회 승인한도금액을 입력 하세요.</div>
          <div class="con">
            <div class="input_flex a_center">
              <v-text-field label="은행명" v-model="price" :rules="priceRules" class="i_basics w_440 t_right msg_right2" />
              <span class="unit">원</span>
              <div class="right_txt">(일천만원)</div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="tit">1일 승인한도금액을 입력 하세요.</div>
          <div class="con">
            <div class="input_flex a_center">
              <v-text-field label="은행명" v-model="price2" :rules="priceRules2" class="i_basics w_440 t_right msg_right2" />
              <span class="unit">원</span>
              <div class="right_txt">(일천만원)</div>
            </div>
          </div>
        </div>

        <div class="btn_btm_wrap">
          <v-btn class="vbtn blue" size="large">이전</v-btn>
          <v-btn class="vbtn" size="large">다음</v-btn>
        </div>
        
      </div>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

const nameBank = ref('신한은행')
const nameBankRules = [
  
]

const accNum = ref('56291835234702')
const accNumRules = [
  (v) => !!v || '계좌조희 버튼을 통해 계좌 검증해주세요.',
]

const nameBank2 = ref('신한은행')
const nameBankRules2 = [

]

const accNum2 = ref('56291835234702')
const accNumRules2 = [
  (v) => !!v || '계좌조희 버튼을 통해 계좌 검증해주세요.',
]

const price = ref('10,000,000')
const priceRules = [
  (v) => !!v || '1회 승인한도금액을 입력하세요.',
]

const price2 = ref('10,000,000')
const priceRules2 = [
  (v) => !!v || '1일 승인한도금액을 입력하세요.',
]

</script> 