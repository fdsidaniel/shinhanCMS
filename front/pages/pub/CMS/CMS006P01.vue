<template>
  
  <!-- popup size width:500 height:632 -->
  <div class="popup_body">
    <h2 class="poptit">사용자 가입 신청 현황 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>
    
    <v-table class="vtable_view bg">
        <colgroup>
            <col style="width:;"/>
            <col style="width:;"/>
        </colgroup>
        <tbody>
            <tr>
                <th>기관</th>
                <td>군인공제회</td>
            </tr>
            <tr>
                <th>성명</th>
                <td>박신한</td>
            </tr>
            <tr>
                <th>휴대폰 번호</th>
                <td>010-9010-5078</td>
            </tr>
            <tr>
                <th>생년월일</th>
                <td>1990.01.02</td>
            </tr>
            <tr>
                <th>이메일</th>
                <td>testOtest@test.test</td>
            </tr>
            <tr>
                <th>신청상태</th>
                <td>승인 대기 중</td>
            </tr>
            <tr>
                <th>신청자</th>
                <td>김몰리</td>
            </tr>
            <tr>
                <th>신청일</th>
                <td>2023-03-15</td>
            </tr>            
        </tbody>
    </v-table>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn blue">취소</v-btn>
      <v-btn class="vbtn">수정</v-btn>      
    </div>
    
  </div>

</template>

<style scoped>
  
</style>

<script setup >


</script> 