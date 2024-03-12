<template>
  
  <!-- popup size width:500 height:300 -->
  <div class="popup_body">
    <h2 class="poptit">회원 선택 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <v-table class="vtable_list inbtn mt_16 scroll h_545"><!-- 10 line h_545 , 5 line h_295-->
      <colgroup>
        <col style="width:60px;"/>
        <col style="width:*;"/>
      </colgroup>
      <thead>
        <tr>
          <th class="center"><v-checkbox v-model="checkboxAll" /></th>
          <th>받는 분 선택</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox1" /></td>
          <td>김수행(1)</td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox2" /></td>
          <td>김수행(2)</td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox3" /></td>
          <td>김수행(3)</td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox4" /></td>
          <td>김수행(4)</td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox5" /></td>
          <td>김수행(5)</td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox6" /></td>
          <td>김수행(6)</td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox7" /></td>
          <td>김수행(7)</td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox8" /></td>
          <td>김수행(8)</td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox9" /></td>
          <td>김수행(9)</td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox10" /></td>
          <td>김수행(10)</td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox11" /></td>
          <td>김수행(11)</td>
        </tr>
      </tbody>
    </v-table>

    <div class="btn_btm_wrap">
      <v-btn class="vbtn" size="">선택</v-btn>
    </div>
    
  </div>

</template>

<style scoped>
  
</style>

<script setup >

const checkboxAll = ref(false)
const checkbox1 = ref(false)
const checkbox2 = ref(false)
const checkbox3 = ref(false)
const checkbox4 = ref(false)
const checkbox5 = ref(false)
const checkbox6 = ref(false)
const checkbox7 = ref(false)
const checkbox8 = ref(false)
const checkbox9 = ref(false)
const checkbox10 = ref(false)
const checkbox11 = ref(false)

</script> 