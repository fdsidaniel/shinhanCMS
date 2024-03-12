<template>
  
  <!-- popup size width:500 height:600 -->
  <div class="popup_body">
    <h2 class="poptit">지급 승인 결과 등록 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <ul class="pop_view_list">
      <li>
        <p class="tit">요청 건수</p>
        <div class="con">1 건</div>
      </li>
      <li>
        <p class="tit">요청 합계 금액</p>
        <div class="con">10,000,000 원</div>
      </li>
      <li>
        <p class="tit">결과 사유</p>
        <div class="con">
          <v-textarea class="h_100" placeholder="결과 사유를 입력해 주세요."></v-textarea>
          <p class="txt_limit">0/50 자</p>
        </div>
      </li>
    </ul>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn blue">반려</v-btn>
      <v-btn class="vbtn">승인</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >



</script> 