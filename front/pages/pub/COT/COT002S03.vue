<template>

  <div class="title_box">
    <h2>공고 조회</h2>
    <ul class="loc">
      <li>홈</li>
      <li>계약관리</li>
      <li>공고조회</li>
    </ul>
  </div>

  <div class="conbody">

    <v-table class="vtable_view">
      <tbody>
        <tr>
          <th>공고 제목</th>
          <td><v-text-field label="공고 제목" v-model="annTitle" :rules="annTitleRules" placeholder="" class="i_basics"></v-text-field></td>
        </tr>
        <tr>
          <th>게시 기간</th>
          <td>
            <div class="i_calender">
              <ComDatePicker v-model="startDate" class="i_date w_180" placeholder="날짜선택" />
              <span>~</span>
              <ComDatePicker v-model="endDate" class="i_date w_180" placeholder="날짜선택" />
            </div>
          </td>
        </tr>       
        <tr>
          <th>공고 내용</th>
          <td>
            <v-textarea placeholder="" class="h_300" :rules="textareaRules"></v-textarea>
            <p class="txt_limit">0/1,000 자</p>
          </td>
        </tr>
        <tr>
          <th>공고 파일 첨부</th>
          <td>
            <div class="file_list link mb_10" v-if="false">
              <ul>
                <li><nuxt-link to="/pub/COT/COT002S02" class="vlink basic">공고문.pdf</nuxt-link></li>
                <li><nuxt-link to="/pub/COT/COT002S02" class="vlink basic">주요구축내용.doc</nuxt-link></li>
              </ul>              
            </div>
            <v-btn class="vbtn line" size="small">파일 첨부</v-btn>
          </td>
        </tr>
        <tr>
          <th>제출 문서 목록</th>
          <td>
            <div class="file_list mb_10" v-if="false">
              <ul>
                <li>재무재표</li>
                <li>보증보험 정보</li>
              </ul>
            </div>
            <v-btn class="vbtn line" size="small">파일 목록</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>

    <div class="btn_btm_wrap">
      <v-btn class="vbtn" size="large">공고 등록</v-btn>
    </div>


  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComDatePicker from '@/components/common/ComDatePicker.vue'

const annTitle = ref('')
const annTitleRules = [

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

const textareaRules = [
  (v) => !!v || '공고 내용을 입력하세요.',
]

</script> 