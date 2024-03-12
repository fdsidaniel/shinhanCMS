<template>

  <div class="title_box">
    <h2>집행 관리</h2>
    <ul class="loc">
      <li>홈</li>
      <li>집행 관리</li>
      <li>지급 요청</li>
    </ul>
  </div>

  <div class="conbody">
    
    <div class="task_bdr_box a_center mt_0">
      <span class="tit">TASK명</span>
      <div class="txt tooltip_box flex1">
        <ComSelectBox groupCode="01" v-model="comboTaskName" :items="itemsTaskName" class="s_basics none_details" />
        <!-- <p>TASK명 출력 영역 TASK명 출력 영역</p> -->
        <p class="tooltip over_slt" @click="layerPopView">TASK 정보</p><!-- 셀렉트 박스 없을 경우 over_slt 삭제 -->
        <!-- layer pop in conbody -->
        <div class="incon_layer_pop" :class="{ 'open': layerPop }">
          <div class="layer_pop_con">
            <div class="title">
              <span class="ico_progress">진행</span><!-- 진행 ico_progress, 중단 ico_stop, 정산 ico_calculate, 완료 ico_comp -->
              회원관리 UI/UX 화면 변경 진행 화면회원관리 UI/UX 화면 변경 진행 화면
            </div>
            <v-btn class="vbtn btn_close" @click="layerPopView">닫기</v-btn>
            <div class="con">
              <v-table class="vtable_view">
                <colgroup>
                  <col style="width:80px;"/>
                  <col style="width:*;"/>
                </colgroup>
                <tbody>
                  <tr>
                    <th>TASK 기간</th>
                    <td>2023-10-10 ~ 2024-10-10</td>
                  </tr>
                  <tr>
                    <th>TASK 예산</th>
                    <td>10,000,000 원</td>
                  </tr>
                  <tr>
                    <th>발주기관 명</th>
                    <td>한마 생명</td>
                  </tr>
                  <tr>
                    <th>담당자</th>
                    <td>
                      <div class="d_flex">
                        <ul class="flex1">
                          <li class="tag">#발주 기관</li>
                          <li>김발주(책임자)</li>
                          <li>김신한신한(TASK 담당자)</li>
                          <li>김신한(정산 담당자)</li>
                        </ul>
                        <ul class="flex1 ml_10">
                          <li class="tag">#수행 기관</li>
                          <li>김수행(책임자)</li>
                          <li>홍길동길동(지급 담당자)</li>
                          <li>김신한(지급 담당자)</li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </div>
          </div>
        </div>
        <!-- //layer pop -->
      </div>
    </div>

    <h3>지급 요청 정보<div class="unit">(단위:원)</div></h3>
    <v-table class="vtable_view">
      <colgroup>
        <col style="width:;"/>
        <col style="width:;"/>
      </colgroup>
      <tbody>
        <!-- <tr>
          <th>지급가능금액</th>
          <td>10,000,000</td>
        </tr> -->
        <tr>
          <th>거래처 계좌 정보</th>
          <td>
            <div class="input_flex a_center">
              <ComSelectBox groupCode="01" v-model="comboBank" :items="itemsBank" class="s_basics w_150" />
              <v-text-field label="은행명" v-model="accNum" :rules="accNumRules" class="i_basics ml_10 w_200 msg_right" />
              <v-btn class="vbtn line blue ml_10 " size="small">계좌 조회</v-btn>
              <div class="right_txt">이 계좌에 예금주는 <strong>김발주</strong> 입니다.</div>
            </div>
          </td>
        </tr>
        <tr>
          <th>지급 금액</th>
          <td>
            <div class="input_flex a_center">
              <v-text-field label="은행명" v-model="price" :rules="priceRules" class="i_basics w_360 t_right msg_right3" />
              <span class="unit">원</span>
              <div class="right_txt">(일천만오백사십칠만오천백)</div>
            </div> 
          </td>
        </tr>
      </tbody>
    </v-table>

    <h3 class="tit_btn">
      <span>지급 정보</span>
      <div>
        <v-btn class="vbtn line" size="small">행 삭제</v-btn>
        <v-btn class="vbtn line" size="small">행 추가</v-btn>
        <span class="unit">(단위:원)</span>
      </div>
    </h3>
    <v-table class="vtable_list inipt">
      <colgroup>
        <col style="width:80px;"/>
        <col style="width:80px;"/>
        <col style="width:200px;"/>
        <col style="width:200px;"/>
        <col style="width:200px;"/>
        <col style="width:288px;"/>
        <col style="width:108px;"/>
      </colgroup>
      <thead>
        <tr>
          <th></th>
          <th>NO</th>
          <th>세목</th>
          <th>세목별 금액</th>
          <th>부가세</th>
          <th>거래 메모(50자까지 작성)</th>
          <th>증빙 자료</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><ComRadioButton :options="radioOptions" v-model="radioValue" class="center" /></td>
          <td>1</td>
          <td><ComSelectBox groupCode="01" v-model="comboDetials" :items="itemsDetials" class="s_basics" /></td>
          <td><v-text-field label="지급 금액" v-model="payment" :rules="paymentRules" class="i_basics t_right" /></td>
          <td><v-text-field label="부가세" v-model="tax" :rules="taxRules" class="i_basics t_right" /></td>
          <td><v-text-field label="거래 메모" v-model="memo" :rules="memoRules" class="i_basics" /></td>
          <td><v-btn class="vbtn line" size="small">문서 업로드</v-btn></td>
        </tr>
        <tr>
          <td><ComRadioButton :options="radioOptions2" v-model="radioValue2" class="center" /></td>
          <td>999</td>
          <td><ComSelectBox groupCode="01" v-model="comboDetials2" :items="itemsDetials2" class="s_basics" /></td>
          <td><v-text-field label="지급 금액" v-model="payment2" :rules="paymentRules2" class="i_basics t_right" /></td>
          <td><v-text-field label="부가세" v-model="tax2" :rules="taxRules2" class="i_basics t_right" /></td>
          <td><v-text-field label="거래 메모" v-model="memo2" :rules="memoRules2" class="i_basics" /></td>
          <td><v-btn class="vbtn line" size="small">문서 업로드</v-btn></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">합계</td>
          <td colspan="4" class="tot">
            <div class="sum">
              <p class="error_message">지급가능금액보다 큽니다. 다시 입력해주세요.</p>
              <span>0</span>
            </div>
          </td>
        </tr>
      </tfoot>
    </v-table>
    <p class="tip_txt mt_10">실제 이체 금액 = 지급 금액 (부가세는 이체되지 않습니다.)</p>

    <div class="btn_btm_wrap">
      <!-- <v-btn class="vbtn blue" size="large">취소</v-btn> -->
      <v-btn class="vbtn blue" size="large">초기화</v-btn>
      <!-- <v-btn class="vbtn blue" size="large">삭제</v-btn> -->
      <!-- <v-btn class="vbtn" size="large">수정</v-btn> -->
      <v-btn class="vbtn" size="large">지급 승인 요청</v-btn>
    </div>

  </div>
  
</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComRadioButton from '@/components/common/ComRadioButton.vue'

const comboTaskName = ref('01')
const itemsTaskName = [
  { title: '회원관리 UI/UX 화면 변경 진행 화면', value: '01' },
  { title: 'TASK 명을 기준으로 민간 계좌가 있는 경우 TASK 노출', value: '02' },
]

const comboBank = ref('001')
const itemsBank = ref([
  { title: '신한은행', value: '001' },
  { title: '국민은행', value: '002' },
  { title: '하나은행', value: '003' },
  { title: '한국시티은행', value: '004' },
])

const accNum = ref('56291835234702')
const accNumRules = [
  (v) => !!v || '계좌조희 버튼을 통해 계좌 검증해주세요.',
]

const price = ref('10,000,000')
const priceRules = [
  (v) => !!v || '지급금액을 입력하세요.',
  (v) => (v && v.length > price) || '지급가능금액 보다 큽니다. 다시 입력해주세요.',
]

const radioValue = ref(null)
const radioOptions = [
  { label: '', value: 'value1' },
]

const comboDetials = ref('001')
const itemsDetials = ref([
  { title: '연구 활동비', value: '001' },
])

const payment = ref('115,475,000')
const paymentRules = [
  (v) => !!v || '금액을 입력하세요.',
]

const tax = ref('5,475,000')
const taxRules = [
  (v) => !!v || '금액을 입력하세요.',
]

const memo = ref('2023년 10월에 연구활동비 보조비')
const memoRules = [
  //(v) => !!v || '',
]

const radioValue2 = ref(null)
const radioOptions2 = [
  { label: '', value: 'value1' },
]

const comboDetials2 = ref('001')
const itemsDetials2 = ref([
  { title: '연구 활동비', value: '001' },
])

const payment2 = ref('0')
const paymentRules2 = [
  //(v) => !!v || '',
]

const tax2 = ref('0')
const taxRules2 = [
  //(v) => !!v || '',
]

const memo2 = ref('조율항목비')
const memoRules2 = [
  //(v) => !!v || '',
]

// TASK 정보 레이어 팝업
const layerPop = ref(false)
const layerPopView = () => {
  layerPop.value = !layerPop.value
};
</script> 