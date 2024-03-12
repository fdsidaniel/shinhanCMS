<template>
  
  <!-- popup size width:1024 height:300 -->
  <div class="popup_body">
    <h2 class="poptit">TASK 찾기 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <v-table class="vtable_list inbtn mt_16 scroll h_545">
      <colgroup>
        <col style="width:50px;"/>
        <col style="width:*;"/>
        <col style="width:*;"/>
        <col style="width:*;"/>
      </colgroup>
      <thead>
        <tr>
          <th></th>
          <th>TASK 명</th>
          <th>수행기관 명</th>
          <th>사업자 번호</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="center"><ComRadioButton :options="radioOptions" v-model="selectedValue"/></td>
          <td>회원관리회원관리회원관리회원관리01</td>
          <td>김수행</td>
          <td>123-45-67890</td>
        </tr>
        <tr>
          <td class="center"><ComRadioButton :options="radioOptions" v-model="selectedValue"/></td>
          <td>회원관리01</td>
          <td>김수행</td>
          <td>123-45-67890</td>
        </tr>
        <tr>
          <td class="center"><ComRadioButton :options="radioOptions" v-model="selectedValue"/></td>
          <td>회원관리01</td>
          <td>김수행</td>
          <td>123-45-67890</td>
        </tr>
        <tr>
          <td class="center"><ComRadioButton :options="radioOptions" v-model="selectedValue"/></td>
          <td>회원관리01</td>
          <td>김수행</td>
          <td>123-45-67890</td>
        </tr>
        <tr>
          <td class="center"><ComRadioButton :options="radioOptions" v-model="selectedValue"/></td>
          <td>회원관리01</td>
          <td>김수행</td>
          <td>123-45-67890</td>
        </tr>
        <tr>
          <td class="center"><ComRadioButton :options="radioOptions" v-model="selectedValue"/></td>
          <td>회원관리01</td>
          <td>김수행</td>
          <td>123-45-67890</td>
        </tr>
        <tr>
          <td class="center"><ComRadioButton :options="radioOptions" v-model="selectedValue"/></td>
          <td>회원관리01</td>
          <td>김수행</td>
          <td>123-45-67890</td>
        </tr>
        <tr>
          <td class="center"><ComRadioButton :options="radioOptions" v-model="selectedValue"/></td>
          <td>회원관리01</td>
          <td>김수행</td>
          <td>123-45-67890</td>
        </tr>
        <tr>
          <td class="center"><ComRadioButton :options="radioOptions" v-model="selectedValue"/></td>
          <td>회원관리01</td>
          <td>김수행</td>
          <td>123-45-67890</td>
        </tr>
        <tr>
          <td class="center"><ComRadioButton :options="radioOptions" v-model="selectedValue"/></td>
          <td>회원관리01</td>
          <td>김수행</td>
          <td>123-45-67890</td>
        </tr>
        <tr>
          <td class="center"><ComRadioButton :options="radioOptions" v-model="selectedValue"/></td>
          <td>회원관리01</td>
          <td>김수행</td>
          <td>123-45-67890</td>
        </tr>
      </tbody>
    </v-table>    

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">등록</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComRadioButton from '@/components/common/ComRadioButton.vue'

const selectedValue = ref(null)
const radioOptions = [
  { label: '', value: 'value1' },
]

</script> 