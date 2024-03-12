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
        <ul class="step_list task_corp active_step_1"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3, active_step_4, active_step_5, active_step_6 -->
          <li class="step1">TASK 기업 정보</li>
          <li class="step2">사업비 계좌 정보</li>
          <li class="step3">문서 첨부 정보</li>
          <li class="step4">입금 계획 정보</li>
          <li class="step5">담당자 정보</li>
        </ul>
      </div>

      <div class="step_con">
        
        <div class="reject_box"> <!-- 반려 사유 추가 2023-11-15 -->
          <b>반려사유 안내</b> TASK 기간을 재설정해주세요.
        </div>

        <div class="row">
          <div class="tit">이 사업을 진행 하십니까?</div>
          <div class="con" v-if="true">
            <div class="input_flex">
              <ComSelectBox groupCode="01" v-model="businessName" :items="itemsBusinessName" class="s_basics none_details flex1" />
              <v-btn class="vbtn line ml_10" size="small">선택</v-btn>
            </div>
          </div>
        </div>

        <div v-if="true">

          <h3>신규 사업을 시작 합니다.</h3>
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
                    <th>PMS 관리번호</th>
                    <td>1234567890</td>
                    <th>발주 기관 명</th>
                    <td>발주기관 99</td>
                  </tr>
                </tbody>
              </v-table>
            </div>
          </div>
          <div class="row">
            <div class="tit">TASK명을 입력 해주세요.<span class="right">0/15자</span></div>
            <div class="con">
              <v-text-field label="사업 내용" v-model="taskName" :rules="taskNameRules" placeholder="15자 이내로 TASK명을 입력 해주세요." class="i_basics"></v-text-field>
            </div>
          </div>

          <div class="row">
            <div class="tit">TASK 기간을 선택 하세요.</div>
            <div class="con">
              <div class="i_calender">
                <ComDatePicker v-model="startDate" class="i_date" placeholder="날짜선택" />
                <ComDatePicker v-model="endDate" class="i_date" placeholder="날짜선택" />
              </div>
              <p class="tip_txt mt_10">TASK 시작일과 종료일은 사업 시작, 종료일 내로 작성하시기 바랍니다.</p>
            </div>
          </div>

          <div class="row">
            <div class="tit">이 TASK를 컨소시엄으로 진행 하십니까? (예:주간/참여 TASK가 있음)</div>
            <div class="con">
              <ComRadioButton :options="radioOptions" v-model="selectedValue" :isInline="true" class="type_chk_big" />
            </div>
          </div>

          <div class="row">
            <div class="tit">주관 기업으로 참여 하십니까?</div>
            <div class="con">
              <ComRadioButton :options="radioOptions2" v-model="selectedValue2" :isInline="true" class="type_chk_big" />
            </div>
          </div>

          <div class="row">
            <div class="tit">주관 기업 TASK를 선택 해주세요.
              <div class="right">
                <v-btn class="vbtn blue" size="small">TASK 찾기</v-btn>
              </div>
            </div>
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
                    <th>TASK 번호</th>
                    <td>231234B0-000</td>
                    <th>수행기관 명</th>
                    <td>김수행</td>
                  </tr>
                  <tr>
                    <th>사업자 번호</th>
                    <td colspan="3">123-55-67890</td>
                  </tr>
                </tbody>
              </v-table>
            </div>
          </div>

        </div>

        <div class="btn_btm_wrap">
          <v-btn class="vbtn blue" size="large">취소</v-btn>
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
import ComRadioButton from '@/components/common/ComRadioButton.vue'

const businessName = ref('001')
const itemsBusinessName = ref([
  { title: '[1234567890]차세대 이관 작업 대행 업체 선정 공고', value: '001' },
  { title: '[1234567112] DB 이관 작업 대행 업체 선정 공고', value: '002' },
  { title: '[1234567898] 정보통신부 이관 업체 선정 공고', value: '003' },
])

const taskName = ref('')
const taskNameRules = [
  (v) => !!v || 'TASK명을 입력 해주세요.',
  (v) => (v && v.length <= 15) || '15자 이내로 TASK명을 입력 해주세요.',
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

const selectedValue = ref(null)
const radioOptions = [
  { label: '예', value: 'value1' },
  { label: '아니오', value: 'value2' },
]

const selectedValue2 = ref(null)
const radioOptions2 = [
  { label: '예', value: 'value1' },
  { label: '아니오', value: 'value2' },
]

</script> 