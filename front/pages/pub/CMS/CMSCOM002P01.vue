<template>
  
  <!-- popup size width:500 height:667 -->
  <div class="popup_body">
    
    <h2 class="poptit">파일 업로드 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <v-file-input v-show="true" id="fileElement" label="파일 업로드하기" v-model="fileupkoad" :rules="fileupkoadRules" class="file_upload mt_20"></v-file-input>

    <div class="upload_file">
        <ul class="upload_file_list">
            <li>
                <nuxt-link to="" class="vlink basic">TEST.pdf</nuxt-link>
                <v-btn class="vbtn btn_file_del" size="small">삭제</v-btn>
            </li>
            <li>
                <nuxt-link to="" class="vlink basic">TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST.pdf</nuxt-link>
                <v-btn class="vbtn btn_file_del" size="small">삭제</v-btn>
            </li>
            <li>
                <nuxt-link to="" class="vlink basic">TEST.pdf</nuxt-link>
                <v-btn class="vbtn btn_file_del" size="small">삭제</v-btn>
            </li>
        </ul>
    </div>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">확인</v-btn>
    </div>

    <div class="bdr_gray mt_20 pl_20 pr_20">
      <ul class="pop_txt_list">
        <li>문서 확장자는 doc, pdf, jpg, tft, png, xlsx로 가능합니다.</li>
        <li>최대 10메가까지 파일 첨부가 가능합니다.</li>
        <li>문서명과 업로드한 파일을 일치하여 파일을 업로드 해주세요.</li>
        <li>업로드 된 파일은 2년간 보관됩니다.</li>
      </ul>
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