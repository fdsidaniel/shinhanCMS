<template>

  <!-- popup size width:400 height:500 -->
    <div class="popup_body">
      <h2 class="poptit">문서 목록 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>
      
      <v-table class="vtable_list inbtn mt_16 scroll w_400 w_358 h_337">
        <colgroup>
          <col style="width:60px;"/>
          <col style="width:*;"/>
        </colgroup>
        <thead>
          <tr>
            <th></th>
            <th>문서명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="center"><v-checkbox v-model="checkbox1" /></td>
            <td>재무 재표</td>
          </tr>
          <tr>
            <td class="center"><v-checkbox v-model="checkbox2" /></td>
            <td>수행 계획서</td>
          </tr>
          <tr>
            <td class="center"><v-checkbox v-model="checkbox3" /></td>
            <td>보증보험 확인서</td>
          </tr>
          <tr>
            <td class="center"><v-checkbox v-model="checkbox4" /></td>
            <td>인력 확인서</td>
          </tr>
          <tr>
            <td class="center"><v-checkbox v-model="checkbox5" /></td>
            <td>제안서</td>
          </tr>
          <tr>
            <td class="center"><v-checkbox v-model="checkbox6" /></td>
            <td>제안서</td>
          </tr>
          <tr>
            <td class="center"><v-checkbox v-model="checkbox7" /></td>
            <td>제안서</td>
          </tr>
        </tbody>
      </v-table>

      <div class="btm_btn_wrap">
          <v-btn class="vbtn">문서 등록</v-btn>
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