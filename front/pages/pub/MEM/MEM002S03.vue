<template>

  <div class="title_box">
    <h2>사업자등록증 변경</h2>
    <ul class="loc">
      <li>홈</li>
      <li>회원관리</li>
      <li>기관 회원정보관리</li>
      <li>사업자등록증 변경</li>
    </ul>
  </div>

  <div class="conbody">

    <h3>사업자등록증 변경</h3>
    <v-table class="vtable_view">
      <tbody>
        <tr>
          <th>기관 명</th>
          <td><v-text-field label="기관 명" v-model="nameOrg" :rules="nameOrgRules" placeholder="" class="i_basics w_265"></v-text-field></td>
        </tr>
        <tr>
          <th>사업자 명</th>
          <td><v-text-field label="사업자 명" v-model="nameBusiness" :rules="nameBusinessRules" placeholder="" class="i_basics w_265"></v-text-field></td>
        </tr>
        <tr>
          <th>사업자등록번호</th>
          <td><v-text-field label="사업자 명" v-model="numBusiness" :rules="numBusinessRules" placeholder="" class="i_basics w_265"></v-text-field></td>
        </tr>
        <tr>
          <th>사업자 등록증</th>
          <td>
            <v-file-input v-show="true" id="fileElement" label="파일 업로드하기" v-model="fileupkoad" :rules="fileupkoadRules" class="file_upload w_350"></v-file-input>
            <p class="tip_txt mt_10">입력하신 사업자등록번호와 일치하는 사업자 등록증 업로드 하셔야 합니다.</p> 
          </td>
        </tr>
      </tbody>
    </v-table>

    <div class="caution_box mt_40">
      <p class="tit">안내 및 유의사항</p>
      <ul>
        <li>문서 확장자는 doc, pdf, jpg, tft, png 로 가능합니다.</li>
          <li>최대 10메가까지 파일 첨부가 가능합니다.</li>
          <li>업로드 된 파일은 5년간 보관됩니다.</li>
      </ul>
    </div>
    
    <div class="btn_btm_wrap">
      <v-tooltip text="버튼을 누르시면 법인 인증서 인증 후 사업자등록증 변경처리됩니다." location="top" model-value>
        <template v-slot:activator="{ props }">
          <v-btn class="vbtn" size="large" v-bind="props">사업자등록증 변경</v-btn>
        </template>
      </v-tooltip>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

const nameOrg = ref('')
const nameOrgRules = [

]

const nameBusiness = ref('')
const nameBusinessRules = [

]

const numBusiness = ref('')
const numBusinessRules = [

]

const fileupkoad = ref('')

const fileupkoadRules = [
  (v) => !!v || '업로드된 파일을 다시 확인해주세요.',
  //(v) => (v && v.length >= 3) || 'Name must be at least 3 characters',
]

</script> 