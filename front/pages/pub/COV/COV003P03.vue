<template>

  <!-- popup size width:500 height:424 -->
  <div class="popup_body">
    <h2 class="poptit">TASK 중단 팝업 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <div class="pop_top_txt t_center ico_caution"><!-- 완료 ico_complete / 주의 ico_caution / 경고 ico_warning -->
      TASK 진행을 중단 하시겠습니까?
    </div>

    <ul class="pop_view_list mt_20">
      <li>
        <p class="tit">중단사유</p>
        <div class="con"><v-textarea class="h_100" placeholder="30자 이내로 사유를 직접 입력해주세요."></v-textarea></div>
      </li>
    </ul>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">확인</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >



</script> 