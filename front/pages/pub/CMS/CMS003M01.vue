<template>

  <div class="title_box">
    <h2>당,타행 예금주 성명 조회</h2>
    <ul class="loc">
      <li>홈</li>
      <li>원화(펌뱅킹)</li>
      <li>이체 정보 관리</li>
      <li>당,타행 예금주 성명 조회</li>
    </ul>
  </div>

  <div class="conbody">

    <p class="req_txt mb_10 t_right">표시는 필수 입력 항목 입니다.</p>
    <!-- 검색 -->
    <div class="search_table">
        <div class="row">
            <div class="cell">
                <div class="col vtop">
                    <span class="tit req">은행</span>
                    <div class="con">
                        <ComSelectBox groupCode="01" v-model="comboBank" :items="itemsBank" :isAll="true"  class="s_basics none_details" />
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="col">
                    <span class="tit req">계좌번호</span>
                    <div class="con">
                        <v-text-field label="계좌번호" v-model="accNum" :rules="accNumRules" required placeholder="계좌번호를 입력해주세요." class="i_basics none_details"></v-text-field>
                    </div>
                </div>
            </div>
            <div class="cell btn">
                <v-btn class="vbtn line search" size="small">조회</v-btn>
            </div>
        </div>        
    </div>
    <!-- //검색 -->

    <h3 class="stit">예금주 정보</h3>
    <v-table class="vtable_view bg">
        <colgroup>
            <col style="width:;"/>
            <col style="width:;"/>
        </colgroup>
        <tbody>
            <tr>
                <th>예금주</th>
                <td>김몰리</td>
            </tr>
            <tr>
                <th>은행</th>
                <td>신한은행</td>
            </tr>
            <tr>
                <th>조회계좌번호</th>
                <td>110-401-980908</td>
            </tr>
            <tr>
                <th>조회일</th>
                <td>2024-03-15</td>
            </tr>
        </tbody>
    </v-table>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'

const comboBank = ref('01')
const itemsBank = ref([
    { title: '신한은행', value: '01' },
    { title: '국민은행', value: '02' },
    { title: '기업은행', value: '03' },
])

const accNum = ref('')
const accNumRules = [
  
]

</script> 