<template>
  
  <!-- popup size width:500 height:490 -->
  <div class="popup_body">
    <h2 class="poptit">사업자등록증 첨부 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <p class="pop_top_txt t_left">
        입력하신 사업자등록번호와 일치하는 사업자등록증 업로드를 완료 하셔야 기관 회원가입이 완료 됩니다.
    </p>
    <div class="bdr_gray mt_20 pl_20 pr_20">
      <ul class="pop_txt_list">
        <li>문서 확장자는 doc, pdf, jpg, tft, png 로 가능합니다.</li>
        <li>최대 10메가까지 파일 첨부가 가능합니다.</li>
        <li>업로드 된 파일은 5년간 보관됩니다.</li>
      </ul>
    </div>
    <v-file-input v-show="true" id="fileElement" label="파일 업로드하기" v-model="fileupkoad" :rules="fileupkoadRules" class="file_upload mt_20"></v-file-input>

    <div class="popup_func_btn"><!-- 화면 확인용 - 팝업 구동시 타이틀 display:none 처리됨 -->
      <v-btn class="vbtn">사업자등록증 첨부</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >

const fileupkoad = ref('')

const fileupkoadRules = [
    (v) => !!v || '업로드된 파일을 다시 확인해주세요.',
    //(v) => (v && v.length >= 3) || 'Name must be at least 3 characters',
]


</script> 