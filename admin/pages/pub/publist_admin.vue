<template>

  <h2>관리자 퍼블 목록</h2>

  <ul class="pub_list">
    <li>
      <span>메뉴 1 Depth</span>
      <span>메뉴 2 Depth</span>
      <span>메뉴 3 Depth</span>
      <span>메뉴코드</span>
      <span>업무구분</span>
      <span>퍼블파일ID</span>
      <span>화면명</span>
      <span>화면유형</span>
      <span>완료</span>
      <span>날짜</span>
      <span>기타</span>
    </li>
    <li>
      <span>SOAP 관리자</span>
      <span>관리자 인트로</span>
      <span>로그인</span>
      <span>LOG001</span>
      <span>ADM</span>
      <span><nuxt-link to="/pub/admin/LOG001M00" class="vlink blue line">LOG001M00</nuxt-link></span>
      <span>로그인 화면</span>
      <span>메인</span>
      <span>O</span>
      <span>2023-09-19</span>
      <span></span>
    </li>
    <li>
      <span>SOAP 관리자</span>
      <span>에러페이지</span>
      <span></span>
      <span></span>
      <span>ADM</span>
      <span><nuxt-link to="/pub/admin/error" class="vlink blue line">error</nuxt-link></span>
      <span></span>
      <span>메인</span>
      <span>O</span>
      <span>2024-01-11</span>
      <span></span>
    </li>
    <li>
      <span>SOAP 관리자</span>
      <span>설치페이지</span>
      <span></span>
      <span></span>
      <span>ADM</span>
      <span><nuxt-link to="/pub/admin/HOM001M01" class="vlink blue line">HOM001M01</nuxt-link></span>
      <span></span>
      <span>메인</span>
      <span>O</span>
      <span>2024-01-30</span>
      <span></span>
    </li>
    <li>
      <span>SOAP 관리자</span>
      <span>OTP 인증 팝업</span>
      <span></span>
      <span></span>
      <span>ADM</span>
      <span><nuxt-link to="/pub/admin/LOG001P09" class="vlink blue line">LOG001P09</nuxt-link></span>
      <span></span>
      <span>팝업</span>
      <span>O</span>
      <span>2024-01-12</span>
      <span></span>
    </li>
    <li>
      <span>SOAP 관리자</span>
      <span>메인</span>
      <span></span>
      <span></span>
      <span></span>
      <span><nuxt-link to="/pub/admin/LOG002M00" class="vlink blue line">LOG002M00</nuxt-link></span>
      <span></span>
      <span>메인</span>
      <span></span>
      <span></span>
      <span></span>
    </li>
    <li>
      <span>SOAP 관리자</span>
      <span>회원관리</span>
      <span>일반 회원 조회</span>
      <span>MEM001</span>
      <span>MEM</span>
      <span><nuxt-link to="/pub/admin/MEM/MEM001M00" class="vlink blue line">MEM001M00</nuxt-link></span>
      <span>일반 회원 목록 조회</span>
      <span>메인</span>
      <span></span>
      <span></span>
      <span></span>
    </li>
    <li>
      <span>SOAP 관리자</span>
      <span>발주기관 회원가입</span>
      <span></span>
      <span></span>
      <span>MEM</span>
      <span><nuxt-link to="/pub/admin/MEM/MEM201M03" class="vlink blue line">MEM201M03</nuxt-link></span>
      <span>발주기관 회원가입</span>
      <span>메인</span>
      <span></span>
      <span></span>
      <span></span>
    </li> 
    <li>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </li>
    <li>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </li>
    <li>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </li>
  </ul>

</template>

<style scoped>
  h2{margin:20px 0 10px;}
  .pub_list li{display:flex;}
  .pub_list li:hover{background-color:#000;}
  .pub_list li:hover span{color:#fff;}
  .pub_list li:hover span .vlink{color:#fff;}
  .pub_list li span{min-width:120px;min-height:30px;padding:5px;flex:1;font-size:14px;text-align:center;border:1px solid #000;border-top:0;}
  .pub_list li:first-child span{border-top:1px solid #000;}
  .pub_list li span+span{border-left:0;}
</style>

<script setup >



</script> 