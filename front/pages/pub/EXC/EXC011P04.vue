<template>
  <!-- popup size width:500 height:500 -->
  <div class="popup_body">
    <h2 class="poptit">은행 코드 보기 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <div class="search_box top other noline">
      <div class="row">
        <div class="con flex1">
          <div class="input_flex">
            <span class="tit mt_9">은행/코드</span>
            <v-text-field label="은행/코드" v-model="bankCode" :rules="bankCodeRules" placeholder="은행/코드를 입력하세요." class="i_basics flex1"></v-text-field>            
            <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
          </div>
        </div>
      </div>
    </div>

    <v-table class="vtable_list scroll h_295"><!-- 5 line h_295 / 10 line h_545 -->
      <colgroup>
        <col style="width:120px;" />
        <col style="width:*;" />
      </colgroup>
      <thead>
        <tr>
          <th>은행 코드</th>
          <th>은행 명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td>신한은행</td>
        </tr>
        <tr>
          <td>02</td>
          <td>국민은행</td>
        </tr>
        <tr>
          <td>03</td>
          <td>하나은행</td>
        </tr>
        <tr>
          <td>04</td>
          <td>IBK기업은행</td>
        </tr>
        <tr>
          <td>05</td>
          <td>한국시티은행</td>
        </tr>
      </tbody>
    </v-table>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">엑셀 다운로드</v-btn>
    </div>
  </div>
</template>

<style scoped></style>

<script setup >

const bankCode = ref('')
const bankCodeRules = [
  (v) => !!v || '다시 입력해주세요.',
]

</script> 