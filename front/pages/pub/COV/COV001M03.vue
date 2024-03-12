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
        <ul class="step_list active_step_4"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3, active_step_4, active_step_5 -->
          <li class="step1">사업정보</li>
          <li class="step2">참여기관<br>협약문서정보</li>
          <li class="step3">사업비 계좌 정보</li>
          <li class="step4">비목세목 정보</li>
          <li class="step5">결재선 정보</li>
        </ul>
      </div>

      <div class="step_con">

        <div class="row">
          <div class="tit">비목/세목 정보를 확인 하세요.
            <div class="right">
              <v-btn class="vbtn line" size="small">비목/세목 일괄 추가</v-btn>
            </div>
          </div>
          <div class="con">
            <v-table class="vtable_list inipt none_head_line">
              <colgroup>
                <col style="width:28%;"/>
                <col style="width:30%;"/>
                <col style="width:15%;"/>
                <col style="width:27%;"/>
              </colgroup>
              <thead>
                <tr>
                  <th>비목</th>
                  <th>세목</th>
                  <th>순서</th>
                  <th>추가/삭제</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><v-text-field label="직접비" v-model="direct" :rules="directRules"  class="i_basics" /></td>
                  <td></td>
                  <td><v-text-field label="순서" type="number" v-model="directOrder" :rules="directOrderRules"  class="i_basics t_center" /></td>
                  <td>
                    <v-btn class="vbtn line btn_del" size="small">삭제</v-btn>
                    <v-btn class="vbtn line btn_add ml_5" size="small">세목 추가</v-btn>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td><v-text-field label="세목" v-model="directDetails" :rules="directDetailsRules"  class="i_basics t_center" /></td>
                  <td><v-text-field label="순서" type="number" v-model="directDetailsOrder" :rules="directDetailsOrderRules"  class="i_basics t_center" /></td>
                  <td>
                    <v-btn class="vbtn line btn_del" size="small">삭제</v-btn>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td><v-text-field label="세목" v-model="directDetails2" :rules="directDetailsRules2"  class="i_basics t_center" /></td>
                  <td><v-text-field label="순서" type="number" v-model="directDetailsOrder2" :rules="directDetailsOrderRules2"  class="i_basics t_center" /></td>
                  <td>
                    <v-btn class="vbtn line btn_del" size="small">삭제</v-btn>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td><v-text-field label="세목" v-model="directDetails3" :rules="directDetailsRules3"  class="i_basics t_center" /></td>
                  <td><v-text-field label="순서" type="number" v-model="directDetailsOrder3" :rules="directDetailsOrderRules3"  class="i_basics t_center" /></td>
                  <td>
                    <v-btn class="vbtn line btn_del" size="small">삭제</v-btn>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td><v-text-field label="세목" v-model="directDetails4" :rules="directDetailsRules4"  class="i_basics t_center" /></td>
                  <td><v-text-field label="순서" type="number" v-model="directDetailsOrder4" :rules="directDetailsOrderRules4"  class="i_basics t_center" /></td>
                  <td>
                    <v-btn class="vbtn line btn_del" size="small">삭제</v-btn>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td><v-text-field label="세목" v-model="directDetails5" :rules="directDetailsRules5"  class="i_basics t_center" /></td>
                  <td><v-text-field label="순서" type="number" v-model="directDetailsOrder5" :rules="directDetailsOrderRules5"  class="i_basics t_center" /></td>
                  <td>
                    <v-btn class="vbtn line btn_del" size="small">삭제</v-btn>
                  </td>
                </tr>
                
                <tr>
                  <td><v-text-field label="간접비" v-model="indirect" :rules="indirectRules"  class="i_basics" /></td>
                  <td></td>
                  <td><v-text-field label="순서" type="number" v-model="indirectOrder" :rules="indirectOrderRules"  class="i_basics t_center" /></td>
                  <td>
                    <v-btn class="vbtn line btn_del" size="small">삭제</v-btn>
                    <v-btn class="vbtn line btn_add ml_5" size="small">세목 추가</v-btn>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td><v-text-field label="세목" v-model="indirectDetails" :rules="indirectDetailsRules"  class="i_basics t_center" /></td>
                  <td><v-text-field label="순서" type="number" v-model="indirectDetailsOrder" :rules="indirectDetailsOrderRules"  class="i_basics t_center" /></td>
                  <td>
                    <v-btn class="vbtn line btn_del" size="small">삭제</v-btn>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td><v-text-field label="세목" v-model="indirectDetails2" :rules="indirectDetailsRules2"  class="i_basics t_center" /></td>
                  <td><v-text-field label="순서" type="number" v-model="indirectDetailsOrder2" :rules="indirectDetailsOrderRules2"  class="i_basics t_center" /></td>
                  <td>
                    <v-btn class="vbtn line btn_del" size="small">삭제</v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </div>

        <div class="row mt_40">
          <div class="tit">비목/세목 일괄 신규등록</div>
          <div class="con">
            <v-table class="vtable_list inipt none_head_line">
              <colgroup>
                <col style="width:28%;"/>
                <col style="width:30%;"/>
                <col style="width:15%;"/>
                <col style="width:27%;"/>
              </colgroup>
              <thead>
                <tr>
                  <th>비목</th>
                  <th>세목</th>
                  <th>순서</th>
                  <th>추가/삭제</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><v-text-field label="비목" v-model="unitem" :rules="unitemRules"  class="i_basics" /></td>
                  <td></td>
                  <td><v-text-field label="순서" type="number" v-model="unitemOrder" :rules="unitemOrderRules"  class="i_basics t_center" /></td>
                  <td>
                    <v-btn class="vbtn line btn_add ml_5" size="small">세목 추가</v-btn>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td><v-text-field label="세목" v-model="item" :rules="itemRules"  class="i_basics" /></td>
                  <td><v-text-field label="순서" type="number" v-model="itemOrder" :rules="itemOrderRules"  class="i_basics t_center" /></td>
                  <td>
                    <v-btn class="vbtn line btn_del ml_5" size="small">삭제</v-btn>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td><v-text-field label="세목" v-model="item2" :rules="itemRules2"  class="i_basics" /></td>
                  <td><v-text-field label="순서" type="number" v-model="itemOrder2" :rules="itemOrderRules2"  class="i_basics t_center" /></td>
                  <td>
                    <v-btn class="vbtn line btn_del ml_5" size="small">삭제</v-btn>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td><v-text-field label="세목" v-model="item3" :rules="itemRules3"  class="i_basics" /></td>
                  <td><v-text-field label="순서" type="number" v-model="itemOrder3" :rules="itemOrderRules3"  class="i_basics t_center" /></td>
                  <td>
                    <v-btn class="vbtn line btn_del ml_5" size="small">삭제</v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </div>

        <div class="btn_btm_wrap right">
          <v-btn class="vbtn blue" size="small">초기화</v-btn>
          <v-btn class="vbtn" size="small">등록</v-btn>
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

const direct = ref('직접비')
const directRules = [
]

const directOrder = ref('1')
const directOrderRules = [
]

const directDetailsOrder = ref('1')
const directDetailsOrderRules = [
]

const directDetailsOrder2 = ref('2')
const directDetailsOrderRules2 = [
]

const directDetailsOrder3 = ref('3')
const directDetailsOrderRules3 = [
]

const directDetailsOrder4 = ref('4')
const directDetailsOrderRules4 = [
]

const directDetailsOrder5 = ref('')
const directDetailsOrderRules5 = [
]

const directDetails = ref('내부 인건비')
const directDetailsRules = [
]

const directDetails2 = ref('연구장비, 재료비')
const directDetailsRules2 = [
]

const directDetails3 = ref('연구활동비')
const directDetailsRules3 = [
]

const directDetails4 = ref('연구과제추진비')
const directDetailsRules4 = [
]

const directDetails5 = ref('')
const directDetailsRules5 = [
]

const indirect = ref('간접비')
const indirectRules = [
]

const indirectDetails = ref('간접비')
const indirectDetailsRules = [
]

const indirectDetails2 = ref('미등록카드건')
const indirectDetailsRules2 = [
]

const indirectOrder = ref('2')
const indirectOrderRules = [
]

const indirectDetailsOrder = ref('1')
const indirectDetailsOrderRules = [
]

const indirectDetailsOrder2 = ref('2')
const indirectDetailsOrderRules2 = [
]

const unitem = ref('')
const unitemRules = [
]

const unitemOrder = ref('3')
const unitemOrderRules = [
]

const item = ref('')
const itemRules = [
]

const itemOrder = ref('')
const itemOrderRules = [
]

const item2 = ref('')
const itemRules2 = [
]

const itemOrder2 = ref('')
const itemOrderRules2 = [
]

const item3 = ref('')
const itemRules3 = [
]

const itemOrder3 = ref('')
const itemOrderRules3 = [
]

</script> 