<template>
  
  <!-- popup size width:500 height:400 -->
  <div class="popup_body">
    <h2 class="poptit">정산 반납 계좌 업로드 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <div class="bdr_gray mt_20 pl_20 pr_20">
      <ul class="pop_txt_list">
        <li>엑셀 파일을 등록 후 검증이 완료되면 일괄집행 등록이 가능합니다.<br>업로드 하시려면 엑셀파일을 다운로드 후 등록하세요.</li>
      </ul>
    </div>

    <v-btn class="vbtn line btn_excel white mt_20 w100" size="small">엑셀파일받기</v-btn>

    <v-file-input v-show="true" id="fileElement" label="파일 업로드하기" v-model="fileupkoad" :rules="fileupkoadRules" class="file_upload mt_20"></v-file-input>

    <div class="popup_func_btn"><!-- 화면 확인용 - 팝업 구동시 타이틀 display:none 처리됨 -->
      <v-btn class="vbtn">확인</v-btn>
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