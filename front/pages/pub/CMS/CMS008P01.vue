<template>
  
  <!-- popup size width:500 height:632 -->
  <div class="popup_body">
    <h2 class="poptit">서비스 시간 관리 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>
    
    <v-table class="vtable_view bg">
        <colgroup>
            <col style="width:;"/>
            <col style="width:;"/>
        </colgroup>
        <tbody>
            <tr>
                <th>기관명</th>
                <td>군인공제회</td>
            </tr>
            <tr>
                <th>서비스 시작 시간</th>
                <td><v-text-field label="서비스 시작 시간" v-model="startTime" :rules="startTimeRules" required placeholder="00:00" class="i_basics minw_80 w_80 none_details" /></td>
            </tr>
            <tr>
                <th>서비스 종료 시간</th>
                <td><v-text-field label="서비스 종료 시간" v-model="endTime" :rules="endTimeRules" required placeholder="00:00" class="i_basics minw_80 w_80 none_details" /></td>
            </tr>
            <tr>
                <th>수정자</th>
                <td>김신한</td>
            </tr>
            <tr>
                <th>수정일</th>
                <td>2024-03-15 16:15:33</td>
            </tr>
        </tbody>
    </v-table>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">수정</v-btn>      
    </div>
    
  </div>

</template>

<style scoped>
  
</style>

<script setup >

const startTime = ref('09:00')
const startTimeRules = [
  
]

const endTime = ref('23:50')
const endTimeRules = [
  
]

</script> 