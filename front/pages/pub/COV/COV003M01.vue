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
        <ul class="step_list task active_step_1"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3, active_step_4 -->
          <li class="step1">TASK 기본정보</li>
          <li class="step2">TASK 승인정보</li>
          <li class="step3">문서정보</li>
          <li class="step4">담당자 정보</li>
        </ul>
      </div>

      <div class="step_con">

        <!-- <p class="stit">사업정보</p>
        <h3>신규 사업을 시작합니다.</h3> -->
        <h3>”2023년 차세대 이관 작업 대행 업체선정 공고” TASK 승인을 시작하세요.</h3>
        
        <div class="row mt_10">
          <div class="con">
            <v-table class="vtable_view bg">
              <colgroup>
                <col style="width:150px;"/>
                <col style="width:281px;"/>
                <col style="width:150px;"/>
                <col style="width:281px;"/>
              </colgroup>
              <tbody>
                <tr>
                  <th>사업 시작일</th>
                  <td>2023-10-10</td>
                  <th>사업 종료일</th>
                  <td>2023-10-10</td>
                </tr>
                <tr>
                  <th>TASK 시작일</th>
                  <td>2023-10-10</td>
                  <th>TASK 종료일</th>
                  <td>2023-10-10</td>
                </tr>
                <tr>
                  <th>수행기관 명</th>
                  <td>한마생명</td>
                  <th>사업자등록 번호</th>
                  <td>123-45-67890</td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </div>
        <div class="row">
          <div class="tit">집행을 이체 방식으로 진행하시겠습니까?</div>
          <div class="con">
            <ComRadioButton :options="transfer" v-model="transferValue" :isInline="true" class="type_chk_big" />
          </div>
        </div>

        <div class="row">
          <div class="tit">지급 방법을 선택하세요.</div>
          <div class="con">
            <ComRadioButton :options="payment" v-model="paymentValue" :isInline="true" class="type_chk_big" />
          </div>
        </div>

        <!-- <div class="row"> checkbox type
          <div class="tit">가상계좌 종류를 선택하세요.</div>
          <div class="con d_flex">
            <div class="mng_type private">
              <v-checkbox v-model="checkbox1">
                <p class="tit">정부<br>민간<br>환입</p>
              </v-checkbox>
            </div>
            <div class="mng_type region">
              <v-checkbox v-model="checkbox2">
                <p class="tit">정부<br>지방비<br>환입</p>
              </v-checkbox>
            </div>
          </div>
        </div> -->

        <div class="row">
          <div class="tit">가상계좌 종류를 선택하세요.</div>
          <div class="con">
            <div class="mng_type vacc">
              <ComRadioButton :options="radioOptions" v-model="selectedValue" :rules="selectedRules" :isInline="true" />
            </div>
          </div>
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

import ComRadioButton from '@/components/common/ComRadioButton.vue'

const transferValue = ref(null)
const transfer = [
  { label: '예', value: '01' },
  { label: '아니오', value: '02' },
]

const paymentValue = ref(null)
const payment = [
  { label: '계좌이체', value: '01' },
  { label: '계정이체', value: '02' },
]

const checkbox1 = ref(false)
const checkbox2 = ref(false)

const selectedValue = ref(null)
const radioOptions = [
  { label: '정부.민간.환입', value: 'value1' },
  { label: '정부.지방비.환입', value: 'value2' },
]
const selectedRules = [
  (v) => !!v || '가상계좌 종류를 선택하세요.',
]

</script> 