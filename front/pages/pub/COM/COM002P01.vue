<template>
  
  <!-- popup size width:500 height:300 -->
  <div class="popup_body">
    <h2 class="poptit">첨부문서등록 팝업 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <h3>검증 요청 건</h3>
    <v-table class="vtable_list inbtn scroll h_213">
      <colgroup>
        <col style="width:80px;"/>
        <col style="width:40%;"/>
        <col style="width:60%;"/>
      </colgroup>
      <thead>
        <tr>
          <th>No.</th>
          <th>문서명</th>
          <th>파일명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>사업자등록증</td>
          <td><nuxt-link to="/pub/COM/COM002M00" class="vlink basic">계약서.pdf</nuxt-link></td>
        </tr>
        <tr>
          <td>2</td>
          <td><ComSelectBox groupCode="01" label="항목 선택" v-model="comboSelected1" :items="items1" class="s_basics" /></td>
          <td>
            <nuxt-link to="/pub/COM/COM002M00" class="vlink basic v_mid">계약서.pdf</nuxt-link>
            <v-btn class="vbtn btn_file_del ml_10" size="small">파일삭제</v-btn>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td><ComSelectBox groupCode="01" label="항목 선택" v-model="comboSelected2" :items="items2" class="s_basics" /></td>
          <td></td>
        </tr>
      </tbody>
    </v-table>
        
    <h3>파일 업로드</h3>    
    <div class="drag_file_upload_box">
      <v-file-input
        accept="image/*"
        v-model="fileupkoad"
        :rules="fileupkoadRules"
        show-size
        @change="fileChange"
        :onClick:clear="clear"
        label="파일 업로드"
        class="file_upload"
      />
      <div class="tip_tit" :class="{ 'hide': tipTxt }">
        <p>드래그 & 드랍을 통해 파일을 업로드 해주세요.</p>
      </div>
    </div>
    <!-- <p class="error_message">업로드된 파일을 다시 확인해주세요.</p> -->

    <div class="caution_box mt_20">
      <p class="tit">안내 및 유의사항</p>
      <ul>
        <li>문서 확장자는 doc, pdf, jpg, tft, png 로 가능합니다.</li>
        <li>최대 10메가까지 파일 첨부가 가능합니다.</li>
        <li>문서명과 업로드한 파일을 일치하여 파일을 업로드 해주세요.</li>
        <li>업로드 된 파일은 5년간 보관됩니다.</li>
      </ul>
    </div>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">문서 검증요청</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'

const comboSelected1 = ref('001')
const items1 = ref([
  { title: '계약서', value: '001' },
  { title: '사업자등록증', value: '002' },
])

const comboSelected2 = ref('')
const items2 = ref([
  { title: '계약서', value: '001' },
  { title: '사업자등록증', value: '002' },
])

const fileupkoad = ref('')
const fileupkoadRules = [
  (v) => !!v || '업로드된 파일을 다시 확인해주세요.',
  //(v) => (v && v.length >= 3) || 'Name must be at least 3 characters',
]

const tipTxt = ref(false)
const fileChange = () => {
  if (fileupkoad.value.length > 0) {
    tipTxt.value = true
  } else { 
    tipTxt.value = false
  } 
};
const clear = () => {
  tipTxt.value = false
};



</script> 