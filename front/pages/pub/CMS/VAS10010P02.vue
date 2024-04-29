<template>
  
  <!-- popup size width:500 height:632 -->
  <div class="popup_body">
    <h2 class="poptit">엑셀 업로드 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>
    
    <div class="bdr_gray mt_20 pl_20 pr_20">
      <ul class="pop_txt_list">
        <li>XLSX 파일만 업로드 가능합니다.</li>
        <li>엑셀 파일 업데이트 한 정보 중 기존 정보와 동일한 정보가 있는 경우 기존 정보로 덮어쓰기 되어 저장됩니다.</li>
      </ul>
    </div>
    <v-file-input v-show="true" id="fileElement" label="파일 업로드하기" v-model="fileupkoad" :rules="fileupkoadRules" class="file_upload mt_20"></v-file-input>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">저장</v-btn>
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