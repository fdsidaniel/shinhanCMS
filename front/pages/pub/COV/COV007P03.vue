<template>
  
  <!-- popup size width:1000 height:652 -->
  <div class="popup_body">
    
    <!-- <div class="popup_title center"> 팝업 타이틀 중앙 정렬 class center add -->

    <h2 class="poptit">정산금 자동반납 신청서(「AICMS」 用) <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <div class="auto_app_form">
      <p class="tit">신한은행 귀중</p>
      <div class="txt">
        본 수행기관은 본건 지능형 대금관리 시스템 「AICMS」 서비스를 이용함에 따라 「AICMS」 이용약관 제3조(서비스의 제공)에 의거<br> 
        서비스 이용 후 반납하여야 할 <strong>정산금 등을 아래의 정산금 반납계좌로 수납 처리하여 줄 것을 동의</strong>하며,
        정산금 등 반납과 관련한 제반사항에 대하여는 지능형 대금관리 시스템 「AICMS」구축 · 운영 업무 협약에서 정한 방법에 따르도록 합니다.
      </div>
      <div class="box">
        <div>
          <span class="tit">TASK 명</span>
          <span class="tit">정산 반납 계좌번호</span>
          <span class="tit">수행 기관 명</span>
          <span class="tit">사업자등록번호</span>
          <span class="tit">동의일자</span>
        </div>
        <div>
          <span class="txt">전산이관작업에 따른 차세대 전산이관작업에 따른 차세대</span>
          <span class="txt">56291835234702</span>
          <span class="txt">한마정보통신</span>
          <span class="txt">123-456-7890</span>
          <span class="txt">2023-12-12</span>
        </div>
      </div>
      <p class="agree_txt">상기 내용을 확인했으며 정산금 자동반납 서비스 이용을 동의함</p>
    </div>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">동의</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >


</script> 