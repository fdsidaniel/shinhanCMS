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
        <ul class="step_list task_corp active_step_4"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3, active_step_4, active_step_5, active_step_6 -->
          <li class="step1">TASK 기업 정보</li>
          <li class="step2">사업비 계좌 정보</li>
          <li class="step3">문서 첨부 정보</li>
          <li class="step4">입금 계획 정보</li>
          <li class="step5">담당자 정보</li>
        </ul>
      </div>

      <div class="step_con">
        
        <div class="row">
          <div class="tit">민간 가상 계좌 입금 계획을 입력하세요.
            <div class="right">
              <v-btn class="vbtn blue" size="small">행 추가</v-btn>
            </div>
          </div>
          <div class="con">
            <v-table class="vtable_list inipt"><!-- 5 line h_299 ,  10 line h_554 -->
              <colgroup>
                <col style="width:80px;"/>
                <col style="width:;"/>
                <col style="width:;"/>
                <col style="width:;"/>
                <col style="width:100px;"/>
              </colgroup>
              <thead>
                <tr>
                  <th>NO.</th>
                  <th>입금 시작일</th>
                  <th>입금 종료일</th>
                  <th>입금계획금액</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td><div class="i_calender"><ComDatePicker v-model="startDate" class="i_date" placeholder="날짜선택" /></div></td>
                  <td><div class="i_calender"><ComDatePicker v-model="endDate" class="i_date" placeholder="날짜선택" /></div></td>
                  <td>
                    <div class="input_flex a_center">
                      <v-text-field label="입금계획금액" v-model="price" :rules="priceRules" class="i_basics t_right flex1" />
                      <span class="unit">원</span>
                    </div>
                  </td>
                  <td><v-btn class="vbtn line del" size="small">삭제</v-btn></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><div class="i_calender"><ComDatePicker v-model="startDate" class="i_date" placeholder="날짜선택" /></div></td>
                  <td><div class="i_calender"><ComDatePicker v-model="endDate" class="i_date" placeholder="날짜선택" /></div></td>
                  <td>
                    <div class="input_flex a_center">
                      <v-text-field label="입금계획금액" v-model="price" :rules="priceRules" class="i_basics t_right flex1" />
                      <span class="unit">원</span>
                    </div>
                  </td>
                  <td><v-btn class="vbtn line del" size="small">삭제</v-btn></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><div class="i_calender"><ComDatePicker v-model="startDate" class="i_date" placeholder="날짜선택" /></div></td>
                  <td><div class="i_calender"><ComDatePicker v-model="endDate" class="i_date" placeholder="날짜선택" /></div></td>
                  <td>
                    <div class="input_flex a_center">
                      <v-text-field label="입금계획금액" v-model="price" :rules="priceRules" class="i_basics t_right flex1" />
                      <span class="unit">원</span>
                    </div>
                  </td>
                  <td><v-btn class="vbtn line del" size="small">삭제</v-btn></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><div class="i_calender"><ComDatePicker v-model="startDate" class="i_date" placeholder="날짜선택" /></div></td>
                  <td><div class="i_calender"><ComDatePicker v-model="endDate" class="i_date" placeholder="날짜선택" /></div></td>
                  <td>
                    <div class="input_flex a_center">
                      <v-text-field label="입금계획금액" v-model="price" :rules="priceRules" class="i_basics t_right flex1" />
                      <span class="unit">원</span>
                    </div>
                  </td>
                  <td><v-btn class="vbtn line del" size="small">삭제</v-btn></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td><div class="i_calender"><ComDatePicker v-model="startDate" class="i_date" placeholder="날짜선택" /></div></td>
                  <td><div class="i_calender"><ComDatePicker v-model="endDate" class="i_date" placeholder="날짜선택" /></div></td>
                  <td>
                    <div class="input_flex a_center">
                      <v-text-field label="입금계획금액" v-model="price" :rules="priceRules" class="i_basics t_right flex1" />
                      <span class="unit">원</span>
                    </div>
                  </td>
                  <td><v-btn class="vbtn line del" size="small">삭제</v-btn></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td><div class="i_calender"><ComDatePicker v-model="startDate" class="i_date" placeholder="날짜선택" /></div></td>
                  <td><div class="i_calender"><ComDatePicker v-model="endDate" class="i_date" placeholder="날짜선택" /></div></td>
                  <td>
                    <div class="input_flex a_center">
                      <v-text-field label="입금계획금액" v-model="price" :rules="priceRules" class="i_basics t_right flex1" />
                      <span class="unit">원</span>
                    </div>
                  </td>
                  <td><v-btn class="vbtn line del" size="small">삭제</v-btn></td>
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

import ComDatePicker from '@/components/common/ComDatePicker.vue'

const today = new Date() // 현재 날짜와 시간을 포함하는 Date 객체 생성
const year = today.getFullYear() // 년도 가져오기
const month = today.getMonth() + 1 // 월 가져오기 (0부터 시작하므로 1 더하기)
const day = today.getDate() // 일 가져오기
const formattedToday = new Date(
    `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
)
const startDate = ref(formattedToday)
const endDate = ref(formattedToday)

const price = ref('10,000,000')
const priceRules = [
  //(v) => !!v || '1회 승인한도금액을 입력하세요.',
]

</script> 