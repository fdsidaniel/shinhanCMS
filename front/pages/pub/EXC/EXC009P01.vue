<template>
  
  <!-- popup size width:500 height:300 -->
  <div class="popup_body">
    <h2 class="poptit">완료안내 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <div class="pop_top_txt t_center ico_complete"><!-- 완료 ico_complete / 주의 ico_caution / 경고 ico_warning -->
        환입 계좌 <b>신한은행 123456789</b>로<br>
        지급 취소 금액 10,000을 입금하셔야<br>
        지금 취소가 완료 됩니다.
        <v-btn class="vbtn line ml_10 small" size="small">계좌복사</v-btn>
    </div>

    <div class="popup_func_btn">
      <v-btn class="vbtn">확인</v-btn>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >



</script> 