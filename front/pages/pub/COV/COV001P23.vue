<template>

  <!-- popup size width:1000 height:820 -->
  <div class="popup_body">
    <h2 class="poptit">TASK 협약 문서 선택 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <h3>AI-OCR 검증 로직 선택</h3>
    <div class="d_flex">
      <div class="w_560">
        <v-table class="vtable_list other none_vline scroll h_580">
          <colgroup>
            <col style="width:60px;"/>
            <col style="width:*"/>
          </colgroup>
          <thead>
            <tr>
              <th></th>
              <th>검증 로직</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><ComRadioButton :options="radio" v-model="radioValue" :isInline="true" class="center" /></td>
              <td class="t_left">
                  [사업자 번호 검증]<br>
                  사업자번호와 사업자명에 대한 데이터 검증사업자번호와 사업자명에 대한 데이터 검증사업자번호와 사업자명에 대한 데이터 검증사업자번호와 사업자명에 대한 데이터 검증사업자번호와 사업자명에 대한 데이터 검증사업자번호와 사업자명에 대한 데이터 검증사업자번호와 사업자명에 대한 데이터 검증사업자번호와 사업자명에 대한 데이터 검증사업자번호와 사업자명에 대한 데이터 검증사업자번호와 사업자명에 대한 데이터 검증사업자번호와 사업자명에 대한 데이터 검증사업자번호와 사업자명에 대한 데이터 검증한 데이터 검증사업자번호와 사업자명에 대한 데이터 검증데이터 검증한 데이터 검증사업자번호와 사업자명에 대한 데이터 검증
              </td>
            </tr>
            <tr>
              <td><ComRadioButton :options="radio" v-model="radioValue" :isInline="true" class="center" /></td>
              <td class="t_left">
                [통장사본 검증]<br>
                통장 계좌번호와 예금주명에 대한 데이터 일치여부 검증
              </td>
            </tr>
            <tr>
              <td><ComRadioButton :options="radio" v-model="radioValue" :isInline="true" class="center" /></td>
              <td class="t_left">
                [사업자번호 검증]<br>
                사업자번호와 사업자명에대한 데이터 검증
              </td>
            </tr>
            <tr>
              <td><ComRadioButton :options="radio" v-model="radioValue" :isInline="true" class="center" /></td>
              <td class="t_left">
                [사업자번호 검증]<br>
                사업자번호와 사업자명에대한 데이터 검증
              </td>
            </tr>
            <tr>
              <td><ComRadioButton :options="radio" v-model="radioValue" :isInline="true" class="center" /></td>
              <td class="t_left">
                [사업자번호 검증]<br>
                사업자번호와 사업자명에대한 데이터 검증
              </td>
            </tr>
            <tr>
              <td><ComRadioButton :options="radio" v-model="radioValue" :isInline="true" class="center" /></td>
              <td class="t_left">
                [사업자번호 검증]<br>
                사업자번호와 사업자명에대한 데이터 검증
              </td>
            </tr>
            <tr>
              <td><ComRadioButton :options="radio" v-model="radioValue" :isInline="true" class="center" /></td>
              <td class="t_left">
                [사업자번호 검증]<br>
                사업자번호와 사업자명에대한 데이터 검증
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <div class="w_340 ml_20">
        <v-table class="vtable_list other none_vline scroll h_580">
          <colgroup>
            <col style="width:100%"/>
          </colgroup>
          <thead>
            <tr>
              <th>문서명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>검증 로직을 선택하세요.</td>
            </tr>
            <tr>
              <td>재무재표</td>
            </tr>
            <tr>
              <td>수행 계획서</td>
            </tr>
            <tr>
              <td>보증보험 확인서</td>
            </tr>
            <tr>
              <td>보증보험 확인서</td>
            </tr>
            <tr>
              <td>제안서</td>
            </tr>
            <tr>
              <td>보증보험 확인서</td>
            </tr>
            <tr>
              <td>인력 확인서</td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">등록</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComRadioButton from '@/components/common/ComRadioButton.vue'

const radioValue = ref(null)
const radio = [
  { label: '', value: 'value1' },
]

</script> 