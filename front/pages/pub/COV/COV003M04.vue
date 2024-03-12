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
        <ul class="step_list task active_step_4"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3, active_step_4 -->
          <li class="step1">TASK 기본정보</li>
          <li class="step2">TASK 승인정보</li>
          <li class="step3">문서정보</li>
          <li class="step4">담당자 정보</li>
        </ul>
      </div>

      <div class="step_con">

        <div class="row">
          <div class="tit">담당자 권한을 선택하세요.</div>
          <div class="con">
            <v-table class="vtable_list inbtn scroll h_295 vchk_center"><!-- 5 line h_295 ,  10 line h_545 -->
              <colgroup>
                <col style="width:300px;"/>
                <col style="width:281x;"/>
                <col style="width:281px;"/>
              </colgroup>
              <thead>
                <tr>
                  <th>회원 정보</th>
                  <th colspan="2">담당자 권한</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>김신한(88)</td>
                  <td><v-checkbox v-model="checkbox1" :label="`TASK 승인 담당자`" /></td>
                  <td><v-checkbox v-model="checkbox2" :label="`정산 담당자`" /></td>
                </tr>
                <tr>
                  <td>김신한(88)</td>
                  <td><v-checkbox v-model="checkbox3" :label="`TASK 승인 담당자`" /></td>
                  <td><v-checkbox v-model="checkbox4" :label="`정산 담당자`" /></td>
                </tr>
                <tr>
                  <td>김신한(88)</td>
                  <td><v-checkbox v-model="checkbox5" :label="`TASK 승인 담당자`" /></td>
                  <td><v-checkbox v-model="checkbox6" :label="`정산 담당자`" /></td>
                </tr>
                <tr>
                  <td>김신한(88)</td>
                  <td><v-checkbox v-model="checkbox7" :label="`TASK 승인 담당자`" /></td>
                  <td><v-checkbox v-model="checkbox8" :label="`정산 담당자`" /></td>
                </tr>
                <tr>
                  <td>김신한(88)</td>
                  <td><v-checkbox v-model="checkbox9" :label="`TASK 승인 담당자`" /></td>
                  <td><v-checkbox v-model="checkbox10" :label="`정산 담당자`" /></td>
                </tr>
                <tr>
                  <td>김신한(88)</td>
                  <td><v-checkbox v-model="checkbox11" :label="`TASK 승인 담당자`" /></td>
                  <td><v-checkbox v-model="checkbox12" :label="`정산 담당자`" /></td>
                </tr>
              </tbody>
            </v-table>
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

const checkbox1 = ref(false)
const checkbox2 = ref(false)
const checkbox3 = ref(false)
const checkbox4 = ref(false)
const checkbox5 = ref(false)
const checkbox6 = ref(false)
const checkbox7 = ref(false)
const checkbox8 = ref(false)
const checkbox9 = ref(false)
const checkbox10 = ref(false)
const checkbox11 = ref(false)
const checkbox12 = ref(false)

</script> 