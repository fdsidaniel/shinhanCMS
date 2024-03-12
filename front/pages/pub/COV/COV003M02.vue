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
        <ul class="step_list task active_step_2"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3, active_step_4 -->
          <li class="step1">TASK 기본정보</li>
          <li class="step2">TASK 승인정보</li>
          <li class="step3">문서정보</li>
          <li class="step4">담당자 정보</li>
        </ul>
      </div>

      <div class="step_con">

        <div class="row">
          <div class="tit">사업비 계좌 정보를 확인하세요.</div>
          <div class="con">
            <div class="input_flex">
              <v-text-field label="은행명" v-model="nameBank" :rules="nameBankRules" class="i_basics w_150" />
              <v-text-field label="은행명" v-model="accNum" :rules="accNumRules" class="i_basics ml_10 w_200" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="tit">예산 금액을 확인하세요.</div>
          <div class="con">
            <div class="input_flex a_center">
              <v-text-field label="예산 금액" v-model="budget" :rules="budgetRules" class="i_basics w_360 t_right msg_right3" />
              <span class="unit">원</span>
              <div class="right_txt">일천만원</div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="tit">1회 승인한도금액을 확인하세요.</div>
          <div class="con">
            <div class="input_flex a_center">
              <v-text-field label="은행명" v-model="price" :rules="priceRules" class="i_basics w_360 t_right msg_right3" />
              <span class="unit">원</span>
              <div class="right_txt">일천만원</div>
            </div>            
          </div>
        </div>

        <div class="row">
          <div class="tit">1일 승인한도금액을 확인하세요.</div>
          <div class="con">
            <div class="input_flex a_center">
              <v-text-field label="은행명" v-model="price2" :rules="priceRules2" class="i_basics w_360 t_right msg_right3" />
              <span class="unit">원</span>
              <div class="right_txt">일천만원</div>
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

]

const budget = ref('10,000,000')
const budgetRules = [
  (v) => !!v || '예산 금액을 입력하세요.',
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