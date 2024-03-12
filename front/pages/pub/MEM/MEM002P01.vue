<template>
  
  <!-- popup size width:500 height:300 -->
  <div class="popup_body">
    <!-- <h2 class="poptit">사업자등록증 첨부 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2> -->

    <p class="pop_top_txt">
        정말로 회원을 탈퇴 하시겠습니까?
    </p>

    <v-textarea class="h_100 mt_10" placeholder="30자 이내로 사유를 직접 입력해주세요."></v-textarea>
    

    <div class="popup_func_btn"><!-- 화면 확인용 - 팝업 구동시 타이틀 display:none 처리됨 -->
      <v-btn class="vbtn blue">취소</v-btn>
      <v-btn class="vbtn">확인</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >



</script> 