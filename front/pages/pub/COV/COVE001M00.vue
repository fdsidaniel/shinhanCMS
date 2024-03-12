<template>

  <div class="title_box">
    <h2>사업 신규등록</h2>
    <ul class="loc">
      <li>홈</li>
      <li>협약관리</li>
      <li>TASK 신규등록</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="step_wrap">

      <div class="step_con none_step">

        <div class="row">
          <div class="tit">이 사업을 진행 하십니까?</div>
        </div>
        
        <h3>차세대 이관 작업 대행 선정 공고</h3>
        <div class="row mt_10">
          <div class="con">
            <v-table class="vtable_view bg">
              <colgroup>
                <col style="width:150px;"/>
                <col style="width:235px;"/>
                <col style="width:150px;"/>
                <col style="width:235px;"/>
                <col style="width:150px;"/>
                <col style="width:235px;"/>
              </colgroup>
              <tbody>
                <tr>
                  <th>사업 시작일</th>
                  <td>2023-10-10</td>
                  <th>사업 종료일</th>
                  <td>2023-10-10</td>
                  <th>PMS 관리번호</th>
                  <td>1234567890</td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </div>
        
        <div class="row">
          <div class="tit">TASK명을 입력 해주세요.<span class="right">0/15자</span></div>
          <div class="con">
            <v-text-field label="TASK명" v-model="taskName" :rules="taskNameRules" placeholder="TASK명을 입력 해주세요" class="i_basics"></v-text-field>
          </div>
        </div>

        <div class="row">
          <div class="tit">TASK 기간을 선택 하세요.</div>
          <div class="con">
            <div class="i_calender">
              <ComDatePicker v-model="startDate" class="i_date" placeholder="날짜선택" />
              <ComDatePicker v-model="endDate" class="i_date" placeholder="날짜선택" />
            </div>
          </div>
          <p class="tip_txt mt_10">TASK 시작일과 종료일은 사업 시작, 종료일 내로 작성하시기 바랍니다.</p>
        </div>
        
        <div class="tit_cnt_btn mt_40"><!-- case 5 -->
          <p class="tit_cnt c_black">첨부했던 문서 정보를 확인하세요.</p>
          <div class="a_center">
            <v-btn class="vbtn line" size="small">파일첨부</v-btn>
          </div>
        </div>        
        <v-table class="vtable_list mt_10 scroll h_299"><!-- 5 line h_299 -->
          <colgroup>
            <col style="width:80px;"/>
            <col style="width:;"/>
          </colgroup>
          <thead>
            <tr>
              <th>NO.</th>
              <th>업로드 파일 명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><nuxt-link to="/pub/COV/COVE001M00" class="vlink basic ico_file">수주계약서.pdf</nuxt-link></td>
            </tr>
            <tr>
              <td>2</td>
              <td><nuxt-link to="/pub/COV/COVE001M00" class="vlink basic ico_file">수주계약서.pdf</nuxt-link></td>
            </tr>
            <tr>
              <td>3</td>
              <td><nuxt-link to="/pub/COV/COVE001M00" class="vlink basic ico_file">수주계약서.pdf</nuxt-link></td>
            </tr>
            <tr>
              <td>4</td>
              <td><nuxt-link to="/pub/COV/COVE001M00" class="vlink basic ico_file">수주계약서.pdf</nuxt-link></td>
            </tr>
            <tr>
              <td>5</td>
              <td><nuxt-link to="/pub/COV/COVE001M00" class="vlink basic ico_file">수주계약서.pdf</nuxt-link></td>
            </tr>
          </tbody>
        </v-table>
        
        <div class="btn_btm_wrap">
          <v-btn class="vbtn blue" size="large">취소</v-btn>
          <v-tooltip text="TASK 신규등록 하시면 계좌 계정정보와 계좌번호를 TASK 상세에서 확인하실 수 있습니다." location="top" model-value>
            <template v-slot:activator="{ props }">
              <v-btn class="vbtn" size="large" v-bind="props">TASK 신규 수정</v-btn>
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

import ComDatePicker from '@/components/common/ComDatePicker.vue'

const taskName = ref('')
const taskNameRules = [
  (v) => !!v || 'TASK명을 입력 해주세요.',
  (v) => (v && v.length <= 15) || '15자 이내로 TASK명을 입력하세요.',
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

</script> 