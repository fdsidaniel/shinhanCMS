<template>
  
  <!-- popup size width:500 height:632 -->
  <div class="popup_body">
    <h2 class="poptit">서비스 오류 관리 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>
    
    <v-table class="vtable_view inbtn bg">
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
                <th>발생 채널</th>
                <td>당,타행 입금 이체</td>
            </tr>
            <tr>
                <th>상세 오류 내역</th>
                <td>
                    <div class="scroll_detail">
                        오류 로그 오류 로그 오류 로그 오류 로그 오류 로그 오류 로그
                    </div>
                </td>
            </tr>
            <tr>
                <th>현황</th>
                <td>
                    <div>
                        미조치
                        <v-btn class="vbtn line ml_20" size="small">조치 완료</v-btn>
                    </div>
                </td>
            </tr>
            <tr>
                <th>발생일</th>
                <td>2024-03-15 16:15:33</td>
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

const startTime = ref('09:00')
const startTimeRules = [
  
]

const endTime = ref('23:50')
const endTimeRules = [
  
]

</script> 