<template>
  
  <!-- popup size width:500 height:632 -->
  <div class="popup_body">
    <h2 class="poptit">사용자 계정 내역 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>
    
    <v-table class="vtable_view bg">
        <colgroup>
            <col style="width:;"/>
            <col style="width:;"/>
        </colgroup>
        <tbody>
            <tr>
                <th>ID</th>
                <td><v-text-field label="ID" v-model="userId" :rules="userIdRules" required placeholder="" class="i_basics none_details" /></td>
            </tr>
             <tr>
                <th>PW</th>
                <td><v-text-field label="PW" v-model="password" :rules="passwordRules" type="password" placeholder="" class="i_basics" /></td>
            </tr>
        </tbody>
    </v-table>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">저장</v-btn>
    </div>
    
  </div>

</template>

<style scoped>
  
</style>

<script setup >

const userId = ref('')
const userIdRules = [
  
]

const password = ref('')
const passwordRules = [
  
]

</script> 