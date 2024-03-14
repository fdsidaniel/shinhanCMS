<template>
  
  <!-- popup size width:500 height:500 -->
  <div class="popup_body">
    <h2 class="poptit">기관 추가 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>
    
    <v-text-field label="기관명" v-model="orgName" :rules="orgNameRules" required placeholder="기관명을 입력해주세요." class="i_basics none_details"></v-text-field>

    <v-table class="vtable_list none_vline inipt scroll mt_10 h_295">
        <colgroup>
            <col style="width:60px;"/>
            <col style=""/>
        </colgroup>
        <thead>
            <tr>
                <th></th>
                <th>기관명</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="center"><v-checkbox v-model="checkbox1" /></td>
                <td>신한은행</td>
            </tr>
            <tr>
                <td class="center"><v-checkbox v-model="checkbox2" /></td>
                <td>한마정보통신</td>
            </tr>
            <tr>
                <td class="center"><v-checkbox v-model="checkbox3" /></td>
                <td>신한기관정부</td>
            </tr>
            <tr>
                <td class="center"><v-checkbox v-model="checkbox4" /></td>
                <td>그린모아</td>
            </tr>
            <tr>
                <td class="center"><v-checkbox v-model="checkbox5" /></td>
                <td>신한은행</td>
            </tr>
            <tr>
                <td class="center"><v-checkbox v-model="checkbox6" /></td>
                <td>한마정보통신</td>
            </tr>
        </tbody>
    </v-table>

    <p class="tip_txt mt_10">3개 기관까지 동시 선택이 가능합니다.</p>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">선택</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >

const orgName = ref('')
const orgNameRules = [
  
]

/* 체크박스 */
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

</script> 