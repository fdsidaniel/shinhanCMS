<template>

  <!-- popup size width:500 height:300 -->
    <div class="popup_body">
      <h2 class="poptit">10분 이후 자동로그인 연장 팝업 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

      <div class="pop_top_txt t_center ico_caution"><!-- 완료 ico_complete / 주의 ico_caution / 경고 ico_warning -->
        60초 후 자동 로그아웃 입니다.<br>
        안전한 사이트 이용을 위해 10분 경과 후 자동으로 접속이<br>
        종료됩니다.<br>
        로그인 시간을 연장하시겠습니까?
      </div>

      <div class="btm_btn_wrap">
        <v-btn class="vbtn blue" size="small">로그아웃</v-btn>
        <v-btn class="vbtn" size="small">연장</v-btn>
      </div>
    </div>

</template>

<style scoped>
  
</style>

<script setup >



</script> 