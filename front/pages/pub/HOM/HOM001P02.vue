<template>

  <!-- popup size width:500 height:300 -->
    <div class="popup_body">
      <h2 class="poptit">10분 이후 자동로그인 연장 팝업 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

      <div class="pop_top_txt t_center"><!-- 완료 ico_complete / 주의 ico_caution / 경고 ico_warning -->
        <div class="tit_notice"><strong>서버 점검 중</strong><nuxt-link to="/pub/HOM/HOM001P02" class="vlink file"></nuxt-link></div>
        컨텐츠 내용이 들어갑니다.<br>
        컨텐츠 내용이 들어갑니다.<br>
        컨텐츠 내용이 들어갑니다.<br>
        컨텐츠 내용이 들어갑니다.
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