<template>

  <!-- popup size width:500 height:424 -->
  <div class="popup_body">
    <h2 class="poptit">TASK 협약 문서 선택 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <v-table class="vtable_list inbtn mt_16 scroll h_295">
      <colgroup>
        <col style="width:60px;"/>
        <col style="width:50%"/>
        <col style="width:40%*;"/>
      </colgroup>
      <thead>
        <tr>
          <th></th>
          <th>구분</th>
          <th>문서명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox1" /></td>
          <td>TASK AI-OCR 문서</td>
          <td>재무 재표</td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox2" /></td>
          <td>TASK 지급 증빙 문서</td>
          <td>수행 계획서</td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox3" /></td>
          <td>TASK AI-OCR 문서</td>
          <td>보증보험 확인서</td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox4" /></td>
          <td>TASK AI-OCR 문서</td>
          <td>인력 확인서</td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox5" /></td>
          <td>TASK AI-OCR 문서</td>
          <td>제안서</td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox6" /></td>
          <td>TASK AI-OCR 문서</td>
          <td>제안서</td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox7" /></td>
          <td>TASK AI-OCR 문서</td>
          <td>제안서</td>
        </tr>
      </tbody>
    </v-table>
    
    <p class="tip_txt mt_20">항목 상제 시 앞에 체크 항목을 해제 후 등록 버튼을 선택하세요.</p>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">등록</v-btn>
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

</script> 