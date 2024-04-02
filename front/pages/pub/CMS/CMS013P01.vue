<template>
  
  <!-- popup size width:500 height:632 -->
  <div class="popup_body">
    <h2 class="poptit">사용자 신청 내역 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>
    
    <v-table class="vtable_view bg">
        <colgroup>
            <col style="width:;"/>
            <col style="width:;"/>
        </colgroup>
        <tbody>
            <tr>
                <th>신청 기관</th>
                <td>한마정보시스템</td>
            </tr>
            <tr>
                <th>신청자 이름</th>
                <td>오한마</td>
            </tr>
            <tr>
                <th>신청자 휴대폰 번호</th>
                <td>010-1234-5678</td>
            </tr>
            <tr>
                <th>신청자 샌년월일</th>
                <td>1991.05.05</td>
            </tr>
            <tr>
                <th>신청 권한</th>
                <td>유지보수 담당자</td>
            </tr>
            <tr>
                <th>신청 현황</th>
                <td>승인 대기</td>
            </tr>
        </tbody>
    </v-table>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn blue">반려</v-btn>
      <v-btn class="vbtn">승인</v-btn>
      <v-btn class="vbtn">닫기</v-btn>
    </div>
    
  </div>

</template>

<style scoped>
  
</style>

<script setup >



</script> 