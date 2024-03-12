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
        <ul class="step_list task_corp active_step_2"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3, active_step_4, active_step_5, active_step_6 -->
          <li class="step1">TASK 기업 정보</li>
          <li class="step2">사업비 계좌 정보</li>
          <li class="step3">문서 첨부 정보</li>
          <li class="step4">입금 계획 정보</li>
          <li class="step5">담당자 정보</li>
        </ul>
      </div>

      <div class="step_con">
        
        <div class="row">
          <div class="tit">사업비 계좌를 입력 하세요.</div>
          <div class="con p_re">
            <div class="input_flex a_center">
              <v-text-field label="은행명" v-model="nameBank" :rules="nameBankRules" readonly class="i_basics w_150" />
              <v-text-field label="은행명" v-model="accNum" :rules="accNumRules" class="i_basics ml_10 w_200 msg_right" /><!-- error_msg -->
              <v-btn class="vbtn line blue ml_10" size="small">계좌 조회</v-btn><!-- blue class add 2023-11-22 -->
              <div class="right_txt">이 계좌에 예금주는 <strong>김발주</strong> 입니다.</div>
            </div>
            <!-- <p class="success_message">사용 가능한 계좌 입니다.</p> -->
          </div>
        </div>

        <div class="row">
          <div class="tit">예산 금액을 입력 하세요.</div>
          <div class="con">
            <div class="input_flex a_center">
              <v-text-field label="은행명" v-model="price" :rules="priceRules" class="i_basics w_440 t_right msg_right2" />
              <span class="unit">원</span>
              <div class="right_txt">(일천만원)</div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="tit">
            <div>
              정산금 자동반납 동의서를 동의 하세요.
              <div class="tooltip">
                <p class="txt type4">정산 후 반납되는 계좌를 미리 지정하여 종료되는 시점에 자동이체 동의계좌로 입금받을 수 있습니다.</p>
              </div>
            </div>
          </div>
          <div class="con">
            <div class="terms_box">
              <div class="d_flex">
                <v-checkbox v-model="checkbox">
                  <template v-slot:label>
                    정산금 자동반납 동의
                  </template>
                </v-checkbox>
                <nuxt-link to="../COV/COV007M01">보기</nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <div class="btn_btm_wrap">
          <v-btn class="vbtn blue" size="large">이전</v-btn>          
          <v-tooltip text="법인 인증서 인증 후 협약 문서 등록하시면 TASK 신청이 완료됩니다." location="top" model-value>
            <template v-slot:activator="{ props }">
              <v-btn class="vbtn" size="large" v-bind="props">인증 후 문서 업로드</v-btn>
            </template>
          </v-tooltip>
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
  (v) => !!v || '계좌조회 버튼을 통해 계좌 검증해주세요.',
]

const price = ref('10,000,000')
const priceRules = [
  (v) => !!v || '이체금액을 입력하세요.',
]

const checkbox = ref(false)

</script> 