<template>
  <div class="pub_bg">
    <div class="pub_top">
      <h2>사용자 퍼블 목록</h2>
      <div >
        <b>총</b>
        <span>{{ cntValue }}</span>
        /
        <strong class="cnt_ok">{{ cntValue }}</strong>
        <b>완료</b>
      </div>
    </div>

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
        <span>CMS 프로젝트 - 퍼블 목록</span>
      </li>

      <li>
        <span>퍼블 가이드</span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span><nuxt-link to="/pub/pub_guide" class="vlink blue line">pub_guide</nuxt-link></span>
        <span></span>
        <span></span>
        <span class="ok">O</span>
        <span></span>
        <span class="etc"></span>
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
        <span class="etc">메뉴코드 확인 필요</span>
        <span class="etc">업무구분 확인 필요</span>
        <span class="etc">파일ID 확인 필요</span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </li>

      <li>
        <span>공통</span>
        <span>본인인증</span>
        <span></span>
        <span></span>
        <span>COM</span>
        <span><nuxt-link to="/pub/CMS/CMSCOM001M01" class="vlink blue line">CMSCOM001M01</nuxt-link></span>
        <span>휴대폰 인증</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2024-03-28</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>COM</span>
        <span><nuxt-link to="/pub/CMS/CMSCOM001M02" class="vlink blue line">CMSCOM001M02</nuxt-link></span>
        <span>이메일 인증</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2024-03-28</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span>첨부파일 업로드</span>
        <span></span>
        <span></span>
        <span>COM</span>
        <span><nuxt-link to="/pub/CMS/CMSCOM002P01" class="vlink blue line">CMSCOM002P01</nuxt-link></span>
        <span>파일 업로드 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2024-03-28</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span>에러 페이지</span>
        <span></span>
        <span></span>
        <span>COM</span>
        <span>
          <!-- <nuxt-link to="../error_page.html" class="vlink blue line">error_page.html</nuxt-link> -->
          <a href="../error_page.html">error_page.html</a>
        </span>
        <span>에러 페이지</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2024-03-28</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>COM</span>
        <span>
          <!-- <nuxt-link to="../error_page.html" class="vlink blue line">error_page.html</nuxt-link> -->
          <a href="../error_page2.html">error_page2.html</a>
        </span>
        <span>서비스 점검</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2024-03-28</span>
        <span class="etc"></span>
      </li>

      <li>
        <span>로그인</span>
        <span>로그인</span>
        <span></span>
        <span></span>
        <span>LOG</span>
        <span><nuxt-link to="/pub/CMS/CMSLOG001M00" class="vlink blue line">CMSLOG001M00</nuxt-link></span>
        <span>로그인</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2024-03-13</span>
        <span class="etc">로그인 페이지는 default.vue 파일 class="container" 에 login class 추가</span>
      </li>
      <li>
        <span></span>
        <span>아이디 찾기</span>
        <span></span>
        <span></span>
        <span>LOG</span>
        <span><nuxt-link to="/pub/CMS/CMSLOG001M01" class="vlink blue line">CMSLOG001M01</nuxt-link></span>
        <span>아이디 찾기</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2024-03-13</span>
        <span class="etc">아이디 찾기, 비밀번호 재설정 페이지는 default.vue 파일 class="container" 에 before class 추가</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>LOG</span>
        <span><nuxt-link to="/pub/CMS/CMSLOG001M02" class="vlink blue line">CMSLOG001M02</nuxt-link></span>
        <span>아이디 찾기 결과</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2024-03-13</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span>비밀번호 재설정</span>
        <span></span>
        <span></span>
        <span>LOG</span>
        <span><nuxt-link to="/pub/CMS/CMSLOG001M03" class="vlink blue line">CMSLOG001M03</nuxt-link></span>
        <span>비밀번호 재설정 인증</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2024-03-13</span>
        <span class="etc"></span>
      </li>      
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>LOG</span>
        <span><nuxt-link to="/pub/CMS/CMSLOG001M04" class="vlink blue line">CMSLOG001M04</nuxt-link></span>
        <span>비밀번호 재설정</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-03-13</span>
        <span class="etc"></span>
      </li>
      <li>
        <span>홈</span>
        <span>메인</span>
        <span></span>
        <span></span>
        <span></span>
        <span><nuxt-link to="/pub/CMS/CMSHOM001M00" class="vlink blue line">CMSHOM001M00</nuxt-link></span>
        <span>메인<br>(시스템 관리자)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2024-03-26</span>
        <span class="etc">메인 페이지는 default.vue 파일 class="container" 에 main class 추가</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span><nuxt-link to="/pub/CMS/CMSHOM002M00" class="vlink blue line">CMSHOM002M00</nuxt-link></span>
        <span>메인<br>(기관 담당자)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2024-03-26</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span><nuxt-link to="/pub/CMS/CMSHOM001P01" class="vlink blue line">CMSHOM001P01</nuxt-link></span>
        <span>기관 설정 선택 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2024-03-26</span>
        <span class="etc"></span>
      </li>
      <li>
        <span>원화(펌뱅킹)</span>
        <span>이체 정보 관리</span>
        <span>당,타행 입금 이체</span>
        <span></span>
        <span></span>
        <span><nuxt-link to="/pub/CMS/CMS001M00" class="vlink blue line">CMS001M00</nuxt-link></span>
        <span>기관 전체<br>(시스템 관리자)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2024-03-14</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span><nuxt-link to="/pub/CMS/CMS001P01" class="vlink blue line">CMS001P01</nuxt-link></span>
        <span>기관 추가 팝업<br>(시스템 관리자)</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2024-03-14</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span><nuxt-link to="/pub/CMS/CMS001M01" class="vlink blue line">CMS001M01</nuxt-link></span>
        <span>기관별<br>(시스템 관리자)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2024-03-14</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span><nuxt-link to="/pub/CMS/CMS001M02" class="vlink blue line">CMS001M02</nuxt-link></span>
        <span>당,타행 입금 이체<br>(기관 담당자)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2024-03-14</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span><nuxt-link to="/pub/CMS/CMS001P02" class="vlink blue line">CMS001P02</nuxt-link></span>
        <span>타행이체결과 불능분 통지 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2024-03-14</span>
        <span class="etc"></span>
      </li>
      <li>
        <span>사용자 관리</span>
        <span>사용자 가입 신청</span>
        <span></span>
        <span></span>
        <span></span>
        <span><nuxt-link to="/pub/CMS/CMS002M00" class="vlink blue line">CMS002M00</nuxt-link></span>
        <span>사용자 가입 신청<br>(기관 담당자)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2024-03-14</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span>사용자 신규/변경</span>
        <span></span>
        <span></span>
        <span></span>
        <span><nuxt-link to="/pub/CMS/CMS002M01" class="vlink blue line">CMS002M01</nuxt-link></span>
        <span>사용자 신규/변경<br>(시스템 관리자)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2024-03-14</span>
        <span class="etc"></span>
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

      <li>
        <span>AICMS 프로젝트 - 참고용 퍼블 목록(삭제 예정)</span>
      </li>
      
      <li>
        <span>공통</span>
        <span>본인인증</span>
        <span></span>
        <span></span>
        <span>COM</span>
        <span><nuxt-link to="/pub/COM/COM001P01" class="vlink blue line">COM001P01</nuxt-link></span>
        <span>휴대폰 인증</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-04</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>COM</span>
        <span><nuxt-link to="/pub/COM/COM001P02" class="vlink blue line">COM001P02</nuxt-link></span>
        <span>이메일 인증</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-04</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>COM</span>
        <span><nuxt-link to="/pub/COM/COM001P03" class="vlink blue line">COM001P03</nuxt-link></span>
        <span>완료안내 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-04</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span>문서관리</span>
        <span></span>
        <span>MCOM001</span>
        <span>COM</span>
        <span><nuxt-link to="/pub/COM/COM002M00" class="vlink blue line">COM002M00</nuxt-link></span>
        <span>문서관리</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-19</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>COM</span>
        <span><nuxt-link to="/pub/COM/COM002P01" class="vlink blue line">COM002P01</nuxt-link></span>
        <span>문서 검증 요청 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-20</span>
        <span class="etc">2023-10-30 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>COM</span>
        <span><nuxt-link to="/pub/COM/COM001P03" class="vlink blue line">COM001P03</nuxt-link></span>
        <span>검증요청 완료 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-04</span>
        <span class="etc">완료안내 팝업</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>COM</span>
        <span><nuxt-link to="/pub/COM/COM002P03" class="vlink blue line">COM002P03</nuxt-link></span>
        <span>문서뷰어 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-08</span>
        <span class="etc">2023-12-26 수정</span>
      </li>
      <li>
        <span></span>
        <span>날짜 선택 안내</span>
        <span></span>
        <span></span>
        <span>COM</span>
        <span><nuxt-link to="/pub/COM/COM002P04" class="vlink blue line">COM002P04</nuxt-link></span>
        <span>지정한 날짜 다시 선택 안내 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-00</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span>약관</span>
        <span></span>
        <span></span>
        <span>COM</span>
        <span><nuxt-link to="/pub/COM/COM002P08" class="vlink blue line">COM002P08</nuxt-link></span>
        <span>약관 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2024-01-02</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>[필수]개인정보 수집·이용·제공 동의서</span>
        <span></span>
        <span></span>
        <span>COM</span>
        <span><nuxt-link to="/pub/COM/COM002P09" class="vlink blue line">COM002P09</nuxt-link></span>
        <span>[필수]개인정보 수집·이용·제공 동의서 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2024-01-02</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>[선택]개인정보 수집·이용·제공 동의서</span>
        <span></span>
        <span></span>
        <span>COM</span>
        <span><nuxt-link to="/pub/COM/COM002P10" class="vlink blue line">COM002P10</nuxt-link></span>
        <span>[선택]개인정보 수집·이용·제공 동의서 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2024-01-02</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>

      <li>
        <span>AICMS 소개</span>
        <span>AICMS 소개</span>
        <span></span>
        <span>MINT000</span>
        <span>INT</span>
        <span><nuxt-link to="/pub/INT/INT001M00" class="vlink blue line">INT001M00</nuxt-link></span>
        <span>AICMS 소개</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-17</span>
        <span class="etc">퍼블 중</span>
      </li>

      <li>
        <span>홈</span>
        <span>메인</span>
        <span></span>
        <span>MHOM000</span>
        <span>HOM</span>
        <span><nuxt-link to="/pub/HOM/HOM001M00" class="vlink blue line">HOM001M00</nuxt-link></span>
        <span>로그인전 홈 화면</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-13</span>
        <span class="etc">2023-11-14 수정</span>
      </li>
      <li>
        <span>홈</span>
        <span>설치안내 화면</span>
        <span></span>
        <span>MHOM001</span>
        <span>HOM</span>
        <span><nuxt-link to="/pub/HOM/HOM001M01" class="vlink blue line">HOM001M01</nuxt-link></span>
        <span>설치안내 화면</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-13</span>
        <span class="etc">2023-11-14 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span><nuxt-link to="/pub/HOM/HOM001M02" class="vlink blue line">HOM001M02</nuxt-link></span>
        <span>로그인후 홈 발주사</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-18</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span><nuxt-link to="/pub/HOM/HOM001M03" class="vlink blue line">HOM001M03</nuxt-link></span>
        <span>로그인후 홈 수행사</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-19</span>
        <span class="etc">2023-11-23 수정<br>2023-11-29 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span><nuxt-link to="/pub/HOM/HOM001M03P" class="vlink blue line">HOM001M03P</nuxt-link></span>
        <span>사업명 선택 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-19</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span>에러페이지</span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span><nuxt-link to="/pub/HOM/HOM006M00" class="vlink blue line">HOM006M00</nuxt-link></span>
        <span>에러페이지</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-14</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span><nuxt-link to="/pub/HOM/HOM001P02" class="vlink blue line">HOM001P02</nuxt-link></span>
        <span>공지팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-27</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>

      <li>
        <span>로그인</span>
        <span>로그인</span>
        <span></span>
        <span>MLOG001</span>
        <span>LOG</span>
        <span><nuxt-link to="/pub/LOG/LOG001M00" class="vlink blue line">LOG001M00</nuxt-link></span>
        <span>로그인</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-13</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>로그인 후</span>
        <span></span>
        <span>LOG</span>
        <span><nuxt-link to="/pub/LOG/LOG001P01" class="vlink blue line">LOG001P01</nuxt-link></span>
        <span>발주사 책임자 최초 로그인 시 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-13</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>로그인 후</span>
        <span></span>
        <span>LOG</span>
        <span><nuxt-link to="/pub/LOG/LOG001P02" class="vlink blue line">LOG001P02</nuxt-link></span>
        <span>자동로그인 연장 안내 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-13</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span>아이디 찾기</span>
        <span></span>
        <span>MLOG002</span>
        <span>LOG</span>
        <span><nuxt-link to="/pub/LOG/LOG001M01" class="vlink blue line">LOG001M01</nuxt-link></span>
        <span>아이디 찾기</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-13</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span>비밀번호 재설정</span>
        <span></span>
        <span></span>
        <span>LOG</span>
        <span><nuxt-link to="/pub/LOG/LOG001M02" class="vlink blue line">LOG001M02</nuxt-link></span>
        <span>비밀번호 재설정</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-13</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>아이디 찾기</span>
        <span></span>
        <span></span>
        <span>LOG</span>
        <span><nuxt-link to="/pub/LOG/LOG001P03" class="vlink blue line">LOG001P03</nuxt-link></span>
        <span>아이디 찾기 후 아이디 제공 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-13</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span>아이디 찾기</span>
        <span></span>
        <span></span>
        <span>LOG</span>
        <span><nuxt-link to="/pub/LOG/LOG001P05" class="vlink blue line">LOG001P05</nuxt-link></span>
        <span>등록된 아이디가 없을때 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-13</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span>SMS 인증</span>
        <span></span>
        <span></span>
        <span>LOG</span>
        <span><nuxt-link to="/pub/LOG/LOG001P09" class="vlink blue line">LOG001P09</nuxt-link></span>
        <span>SMS 인증 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-13</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>

      <li>
        <span>회원관리</span>
        <span>일반회원가입</span>
        <span></span>
        <span>MMEM001</span>
        <span>MEM</span>
        <span><nuxt-link to="/pub/MEM/MEM001M00" class="vlink blue line">MEM001M00</nuxt-link></span>
        <span>일반회원가입</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-09-26</span>
        <span class="etc">2024-01-03 수정<br>2024-01-10 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span><nuxt-link to="/pub/MEM/MEM001P01" class="vlink blue line">MEM001P01</nuxt-link></span>
        <!-- <span><span @click="popup">MEM001P01</span></span> -->
        <span>기관 검색</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-09-26</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span>MMEM002</span>
        <span>MEM</span>
        <span><nuxt-link to="/pub/MEM/MEM001M02" class="vlink blue line">MEM001M02</nuxt-link></span>
        <span>발주기관 책임자 인증</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-09-26</span>
        <span class="etc">2024-01-03 수정</span>
      </li>

      <li>
        <span></span>
        <span>기관회원가입</span>
        <span></span>
        <span>MMEM003</span>
        <span>MEM</span>
        <span><nuxt-link to="/pub/MEM/MEM001M03" class="vlink blue line">MEM001M03</nuxt-link></span>
        <span>수행기관 회원가입</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-09-27</span>
        <span class="etc">2024-01-03 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>정보입력</span>
        <span></span>
        <span></span>
        <span><nuxt-link to="/pub/MEM/MEM001P04" class="vlink blue line">MEM001P04</nuxt-link></span>
        <!-- <span><span @click="popup">MEM001P01</span></span> -->
        <span>사업자등록증 첨부</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-09-27</span>
        <span class="etc"></span>
      </li>

      <li>
        <span></span>
        <span>일반회원정보관리</span>
        <span></span>
        <span>MMEM004</span>
        <span>MEM</span>
        <span><nuxt-link to="/pub/MEM/MEM002M00" class="vlink blue line">MEM002M00</nuxt-link></span>
        <span>회원정보관리</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-09-27</span>
        <span class="etc">2024-01-03 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>회원정보수정</span>
        <span></span>
        <span>MEM</span>
        <span><nuxt-link to="/pub/MEM/MEM002S01" class="vlink blue line">MEM002S01</nuxt-link></span>
        <span>회원정보 변경</span>
        <span>서브</span>
        <span class="ok">O</span>
        <span>2023-09-27</span>
        <span class="etc">2024-01-03 수정<br>2024-01-10 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>회원탈퇴</span>
        <span></span>
        <span>MEM</span>
        <span><nuxt-link to="/pub/MEM/MEM002P01" class="vlink blue line">MEM002P01</nuxt-link></span>
        <span>회원탈퇴</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-09-27</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>회원탈퇴</span>
        <span></span>
        <span>MEM</span>
        <span><nuxt-link to="/pub/MEM/MEM002P02" class="vlink blue line">MEM002P02</nuxt-link></span>
        <span>발주사책임자 회원탈퇴 신청시 안내</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-09-27</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>책임자권한 변경신청</span>
        <span></span>
        <span>MEM</span>
        <span><nuxt-link to="/pub/MEM/MEM002P03" class="vlink blue line">MEM002P03</nuxt-link></span>
        <span>책임자 변경 신청</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-09-27</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>책임자권한 변경신청</span>
        <span></span>
        <span>MEM</span>
        <span><nuxt-link to="/pub/MEM/MEM002P04" class="vlink blue line">MEM002P04</nuxt-link></span>
        <span>인증후 변경안내</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-04</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>비밀번호 변경</span>
        <span></span>
        <span>MEM</span>
        <span><nuxt-link to="/pub/MEM/MEM002S02" class="vlink blue line">MEM002S02</nuxt-link></span>
        <span>비밀번호 변경</span>
        <span>서브</span>
        <span class="ok">O</span>
        <span>2023-10-04</span>
        <span class="etc"></span>
      </li>

      <li>
        <span></span>
        <span>기관회원관리</span>
        <span></span>
        <span>MMEM005</span>
        <span>MEM</span>
        <span><nuxt-link to="/pub/MEM/MEM002M01" class="vlink blue line">MEM002M01</nuxt-link></span>
        <span>기관회원관리</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-04</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>MEM</span>
        <span><nuxt-link to="/pub/MEM/MEM002S03" class="vlink blue line">MEM002S03</nuxt-link></span>
        <span>사업자등록증 변경</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-18</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>

      <li>
        <span></span>
        <span>나의쪽지</span>
        <span></span>
        <span>MMEM006</span>
        <span>MEM</span>
        <span><nuxt-link to="/pub/MEM/MEM003M00" class="vlink blue line">MEM003M00</nuxt-link></span>
        <span>나의쪽지</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-05</span>
        <span class="etc">2023-10-10 수정, 2023-10-11 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>MEM</span>
        <span><nuxt-link to="/pub/MEM/MEM003P01" class="vlink blue line">MEM003P01</nuxt-link></span>
        <span>받은 쪽지 상세</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-05</span>
        <span class="etc">2023-10-10 수정, 2023-10-11 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>MEM</span>
        <span><nuxt-link to="/pub/MEM/MEM003P02" class="vlink blue line">MEM003P02</nuxt-link></span>
        <span>쪽지 쓰기</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-25</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>MEM</span>
        <span><nuxt-link to="/pub/MEM/MEM003P03" class="vlink blue line">MEM003P03</nuxt-link></span>
        <span>회원 선택 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-12-12</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>결재함</span>
        <span></span>
        <span></span>
        <span>MEM</span>
        <span><nuxt-link to="/pub/MEM/MEM004M00" class="vlink blue line">MEM004M00</nuxt-link></span>
        <span>결재함</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-12-12</span>
        <span class="etc">파일ID 확인 필요<br>2024-01-03 수정</span>
      </li>

      <li>
        <span>고객센터</span>
        <span>공지사항</span>
        <span>공지사항 목록</span>
        <span>MNOT000</span>
        <span>NOT</span>
        <span><nuxt-link to="/pub/NOT/NOT001M00" class="vlink blue line">NOT001M00</nuxt-link></span>
        <span>공지사항 목록</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-06</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>공지사항 상세</span>
        <span>MNOT002</span>
        <span>NOT</span>
        <span><nuxt-link to="/pub/NOT/NOT001S01" class="vlink blue line">NOT001S01</nuxt-link></span>
        <span>공지사항 상세</span>
        <span>서브</span>
        <span class="ok">O</span>
        <span>2023-10-06</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>공지사항 등록</span>
        <span>MNOT002</span>
        <span>NOT</span>
        <span><nuxt-link to="/pub/NOT/NOT001S02" class="vlink blue line">NOT001S02</nuxt-link></span>
        <span>공지사항 등록</span>
        <span>서브</span>
        <span class="ok">O</span>
        <span>2023-10-10</span>
        <span class="etc">2023-11-07 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>공지사항 수정/삭제</span>
        <span></span>
        <span>NOT</span>
        <span><nuxt-link to="/pub/NOT/NOT001S03" class="vlink blue line">NOT001S03</nuxt-link></span>
        <span>공지사항 수정/삭제</span>
        <span>서브</span>
        <span class="ok">O</span>
        <span>2023-10-10</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>자주하는 질문</span>
        <span>MNOT004</span>
        <span>NOT</span>
        <span><nuxt-link to="/pub/NOT/NOT002M00" class="vlink blue line">NOT002M00</nuxt-link></span>
        <span>자주하는 질문 목록</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-27</span>
        <span class="etc"></span>
      </li>

      <li>
        <span>계약관리</span>
        <span>공고 조회</span>
        <span>공고 목록</span>
        <span>MCOT001</span>
        <span>COT</span>
        <span><nuxt-link to="/pub/COT/COT001M00" class="vlink blue line">COT001M00</nuxt-link></span>
        <span>공고 조회(수행사)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-11</span>
        <span class="etc">2023-10-17 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>공고 상세</span>
        <span>MCOT002</span>
        <span>COT</span>
        <span><nuxt-link to="/pub/COT/COT001S01" class="vlink blue line">COT001S01</nuxt-link></span>
        <span>공고 상세조회(수행사)</span>
        <span>서브</span>
        <span class="ok">O</span>
        <span>2023-10-11</span>
        <span class="etc">2023-10-17 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>사업 공고 제안 접수</span>
        <span>MCOT003</span>
        <span>COT</span>
        <span><nuxt-link to="/pub/COT/COT001S02" class="vlink blue line">COT001S02</nuxt-link></span>
        <span>사업 공고 제안 접수(수행사)</span>
        <span>서브</span>
        <span class="ok">O</span>
        <span>2023-10-11</span>
        <span class="etc">2023-10-17 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>COT</span>
        <span><nuxt-link to="/pub/COT/COT001P01" class="vlink blue line">COT001P01</nuxt-link></span>
        <span>접수완료</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-11</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>사업 공고 제안 접수 목록</span>
        <span>MCOT004</span>
        <span>COT</span>
        <span><nuxt-link to="/pub/COT/COT001M01" class="vlink blue line">COT001M01</nuxt-link></span>
        <span>사업 공고 제안 접수 목록 조회</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-11</span>
        <span class="etc">2023-10-17 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>사업 공고 제안 접수 상세</span>
        <span>MCOT005</span>
        <span>COT</span>
        <span><nuxt-link to="/pub/COT/COT001S03" class="vlink blue line">COT001S03</nuxt-link></span>
        <span>사업 공고 제안 접수 상세 보기</span>
        <span>서브</span>
        <span class="ok">O</span>
        <span>2023-10-11</span>
        <span class="etc"></span>
      </li>      
      <li>
        <span></span>
        <span></span>
        <span>공고 목록</span>
        <span>MCOT006</span>
        <span>COT</span>
        <span><nuxt-link to="/pub/COT/COT002M00" class="vlink blue line">COT002M00</nuxt-link></span>
        <span>공고 조회(발주사)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-11</span>
        <span class="etc">2023-10-17 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>공고 상세</span>
        <span>MCOT007</span>
        <span>COT</span>
        <span><nuxt-link to="/pub/COT/COT002S01" class="vlink blue line">COT002S01</nuxt-link></span>
        <span>공고 상세조회(발주사)</span>
        <span>서브</span>
        <span class="ok">O</span>
        <span>2023-10-11</span>
        <span class="etc">2023-10-12 수정<br>2023-10-17 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>선정 결과 등록 팝업</span>
        <span></span>
        <span>COT</span>
        <span><nuxt-link to="/pub/COT/COT002P001" class="vlink blue line">COT002P001</nuxt-link></span>
        <span>선정 결과 등록 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-17</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>책임자 정보 팝업</span>
        <span></span>
        <span>COT</span>
        <span><nuxt-link to="/pub/COT/COT002P002" class="vlink blue line">COT002P002</nuxt-link></span>
        <span>책임자 정보 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-17</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>제안 선정 결과 팝업</span>
        <span></span>
        <span>COT</span>
        <span><nuxt-link to="/pub/COT/COT002P003" class="vlink blue line">COT002P003</nuxt-link></span>
        <span>제안 선정 결과 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-17</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>공고 수정/삭제</span>
        <span>MCOT008</span>
        <span>COT</span>
        <span><nuxt-link to="/pub/COT/COT002S02" class="vlink blue line">COT002S02</nuxt-link></span>
        <span>공고 수정/삭제</span>
        <span>서브</span>
        <span class="ok">O</span>
        <span>2023-10-11</span>
        <span class="etc">2023-10-17 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>공고 등록</span>
        <span>MCOT009</span>
        <span>COT</span>
        <span><nuxt-link to="/pub/COT/COT002S03" class="vlink blue line">COT002S03</nuxt-link></span>
        <span>공고 수정/삭제</span>
        <span>서브</span>
        <span class="ok">O</span>
        <span>2023-10-11</span>
        <span class="etc">2023-10-17 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>문서 목록</span>
        <span></span>
        <span>COT</span>
        <span><nuxt-link to="/pub/COT/COT002P01" class="vlink blue line">COT002P01</nuxt-link></span>
        <span>문서목록 선택</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-11</span>
        <span class="etc">2023-10-12 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>공고 제안 접수 조회</span>
        <span></span>
        <span>COT</span>
        <span><nuxt-link to="/pub/COT/COT003M00" class="vlink blue line">COT003M00</nuxt-link></span>
        <span>공고 제안 접수 조회(발주사)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-17</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>

      <li>
        <span>협약관리</span>
        <span>사업신규등록</span>
        <span>1.사업정보</span>
        <span>MCOV001</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV001M00" class="vlink blue line">COV001M00</nuxt-link></span>
        <span>사업신규등록<br>1.사업정보</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-20</span>
        <span class="etc">2023-11-15 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>[팝업]임시저장 안내</span>
        <span></span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV001P01" class="vlink blue line">COV001P01</nuxt-link></span>
        <span>[팝업]임시저장 안내</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-23</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>2.참여기관협약문서정보</span>
        <span>MCOV002</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV001M01" class="vlink blue line">COV001M01</nuxt-link></span>
        <span>사업신규등록<br>2.참여기관협약문서정보</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-23</span>
        <span class="etc">2024-01-10 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>참여기관 일괄 등록</span>
        <span></span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV001P02" class="vlink blue line">COV001P02</nuxt-link></span>
        <span>참여기관 일괄등록 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-23</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>TASK협약문서 선택</span>
        <span></span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV001P03" class="vlink blue line">COV001P03</nuxt-link></span>
        <span>TASK협약문서 선택 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-23</span>
        <span class="etc">2023-11-01 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span>AI-OCR 검증 로직 선택</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV001P23" class="vlink blue line">COV001P23</nuxt-link></span>
        <span>AI-OCR 검증 로직 선택 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2024-01-10</span>
        <span class="etc">파일ID 확인 필요<br>2023-01-10 추가</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>3.사업비 계좌정보</span>
        <span>MCOV003</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV001M02" class="vlink blue line">COV001M02</nuxt-link></span>
        <span>사업신규등록<br>3.사업비 계좌정보</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-23</span>
        <span class="etc">2023-10-27 수정<br>2023-11-01 수정<br>2023-11-22 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>4.비목 세목 정보</span>
        <span>MCOV004</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV001M03" class="vlink blue line">COV001M03</nuxt-link></span>
        <span>사업신규등록<br>4.비목 세목 정보</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-24</span>
        <span class="etc">2023-11-06 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>5.결재선 정보</span>
        <span>MCOV005</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV001M04" class="vlink blue line">COV001M04</nuxt-link></span>
        <span>사업신규등록<br>5.결재선 정보</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-24</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV001P04" class="vlink blue line">COV001P04</nuxt-link></span>
        <span>TASK 결재선 관리</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-24</span>
        <span class="etc">2023-11-06 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>6.사업신규등록 정보확인</span>
        <span>MCOV006</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV001M05" class="vlink blue line">COV001M05</nuxt-link></span>
        <span>사업신규등록<br>6.등록정보확인</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-24</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span>사업 목록 조회</span>
        <span>사업 목록 조회</span>
        <span>MCOV007</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV002M00" class="vlink blue line">COV002M00</nuxt-link></span>
        <span>사업 목록 조회</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-25</span>
        <span class="etc">2023-11-01 수정<br>여기서 부터 수정 반영</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>사업 정보 상세</span>
        <span>MCOV008</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV002S01" class="vlink blue line">COV002S01</nuxt-link></span>
        <span>사업정보 상세보기</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-25</span>
        <span class="etc">2023-10-27 수정<br>2023-11-02 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>사업신규등록 수정</span>
        <span>MCOV009</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV002M01" class="vlink blue line">COV002M01</nuxt-link></span>
        <span>사업신규등록 수정<br>1.사업정보</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-25</span>
        <span class="etc">2023-11-15 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span>MCOV010</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV002M02" class="vlink blue line">COV002M02</nuxt-link></span>
        <span>사업신규등록 수정<br>2.참여기관협약문서정보</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-25</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span>MCOV011</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV002M03" class="vlink blue line">COV002M03</nuxt-link></span>
        <span>사업신규등록 수정<br>3.사업비 계좌정보</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-25</span>
        <span class="etc">2023-10-27 수정<br>2023-11-01 수정<br>2023-11-22 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span>MCOV012</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV002M04" class="vlink blue line">COV002M04</nuxt-link></span>
        <span>사업신규등록 수정<br>4.비목 세목 정보</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-25</span>
        <span class="etc">2023-11-06 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span>MCOV013</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV002M05" class="vlink blue line">COV002M05</nuxt-link></span>
        <span>사업신규등록 수정<br>5.결재선 정보</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-25</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span>MCOV014</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV002M06" class="vlink blue line">COV002M06</nuxt-link></span>
        <span>사업신규등록 수정<br>6.등록정보확인</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-25</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span>TASK 조회</span>
        <span>TASK 목록 조회</span>
        <span>MCOV020</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV003M00" class="vlink blue line">COV003M00</nuxt-link></span>
        <span>TASK 목록 조회</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-25</span>
        <span class="etc">2023-11-01 수정<br>2023-11-14 수정</span>
      </li>
      <li>
        <span></span>
        <span>TASK 조회</span>
        <span>TASK 승인</span>
        <span>MCOV021</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV003M01" class="vlink blue line">COV003M01</nuxt-link></span>
        <span>TASK 승인<br>1.TASK 기본 정보</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-25</span>
        <span class="etc">2023-11-01 수정<br>2023-11-15 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span>MCOV022</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV003M02" class="vlink blue line">COV003M02</nuxt-link></span>
        <span>TASK 승인<br>2.TASK 승인 정보</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-26</span>
        <span class="etc">2023-10-27 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span>MCOV023</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV003M03" class="vlink blue line">COV003M03</nuxt-link></span>
        <span>TASK 승인<br>3.문서 정보</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-26</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV003P01" class="vlink blue line">COV003P01</nuxt-link></span>
        <span>반려사유</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-26</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span>MCOV024</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV003M04" class="vlink blue line">COV003M04</nuxt-link></span>
        <span>TASK 승인<br>4.담당자정보</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-26</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span>MCOV025</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV003M05" class="vlink blue line">COV003M05</nuxt-link></span>
        <span>TASK 승인<br>5.TASK정보확인</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-26</span>
        <span class="etc">2023-11-02 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>TASK 상세</span>
        <span>MCOV026</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV003S01" class="vlink blue line">COV003S01</nuxt-link></span>
        <span>TASK 상세조회</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-26</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV003P02" class="vlink blue line">COV003P02</nuxt-link></span>
        <span>TASK 진행 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-02</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV003P03" class="vlink blue line">COV003P03</nuxt-link></span>
        <span>TASK 중단 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-02</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>사업 계좌 목록 조회</span>
        <span></span>
        <span>MCOV027</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV004M00" class="vlink blue line">COV004M00</nuxt-link></span>
        <span>사업 계좌 목록 조회</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-26</span>
        <span class="etc">2023-11-01 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>반납 계좌 등록</span>
        <span>MCOV028</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV004S01" class="vlink blue line">COV004S01</nuxt-link></span>
        <span>반납 계좌 등록</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-27</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV004P01" class="vlink blue line">COV004P01</nuxt-link></span>
        <span>반납 계좌 업로드</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-27</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span>사업 담당자 변경 관리</span>
        <span></span>
        <span>MCOV030</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV005M00" class="vlink blue line">COV005M00</nuxt-link></span>
        <span>사업 담당자 변경 관리(발주담당자)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-27</span>
        <span class="etc">2023-11-01 수정</span>
      </li>
      <li>
        <span></span>
        <span>사업 조회</span>
        <span>사업 목록 조회</span>
        <span>MCOV040</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV006M00" class="vlink blue line">COV006M00</nuxt-link></span>
        <span>사업 목록 조회(수행사)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-27</span>
        <span class="etc">2023-11-01 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>사업 상세</span>
        <span>MCOV041</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV006S01" class="vlink blue line">COV006S01</nuxt-link></span>
        <span>사업 목록 상세</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-27</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span>TASK 신청</span>
        <span></span>
        <span></span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV007P01" class="vlink blue line">COV007P01</nuxt-link></span>
        <span>TASK신청건있을시 이어서 진행관련확인 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-27</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>1.TASK기업 정보</span>
        <span>MCOV042</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV007M00" class="vlink blue line">COV007M00</nuxt-link></span>
        <span>TASK 신청<br>1.TASK기업 정보</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-31</span>
        <span class="etc">2023-11-01 수정<br>2023-11-15 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV007P02" class="vlink blue line">COV007P02</nuxt-link></span>
        <span>TASK찾기 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-10-31</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>2.사업비 계좌 정보</span>
        <span>MCOV043</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV007M01" class="vlink blue line">COV007M01</nuxt-link></span>
        <span>TASK 신청<br>2.사업비 계좌 정보</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-31</span>
        <span class="etc">2023-11-22 수정<br>2023-12-12 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV007P03" class="vlink blue line">COV007P03</nuxt-link></span>
        <span>정산금 자동반납 동의서 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-12-12</span>
        <span class="etc">2023-12-14 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>3.문서첨부 정보</span>
        <span>MCOV044</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV007M02" class="vlink blue line">COV007M02</nuxt-link></span>
        <span>TASK 신청<br>3.문서첨부 정보</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-31</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>4.입금 계획 정보</span>
        <span>MCOV045</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV007M03" class="vlink blue line">COV007M03</nuxt-link></span>
        <span>TASK 신청<br>4.입금 계획 정보</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-31</span>
        <span class="etc">2023-11-08 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>5.담당자 정보</span>
        <span>MCOV046</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV007M04" class="vlink blue line">COV007M04</nuxt-link></span>
        <span>TASK 신청<br>5.담당자 정보</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-31</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>정보 확인</span>
        <span>MCOV047</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV007M05" class="vlink blue line">COV007M05</nuxt-link></span>
        <span>TASK 신청<br>정보 확인</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-31</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span>사업참여(TASK) 조회</span>
        <span>사업참여(TASK) 목록 조회</span>
        <span>MCOV048</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV008M00" class="vlink blue line">COV008M00</nuxt-link></span>
        <span>사업참여(TASK) 조회(수행사)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-10-31</span>
        <span class="etc">2023-11-14 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV008P01" class="vlink blue line">COV008P01</nuxt-link></span>
        <span>반려사유 안내 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-01</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>사업참여(TASK) 상세</span>
        <span>MCOV049</span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV008S01" class="vlink blue line">COV008S01</nuxt-link></span>
        <span>사업참여(TASK) 상세</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-01</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COV008P02" class="vlink blue line">COV008P02</nuxt-link></span>
        <span>담당자 정보</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-01</span>
        <span class="etc"></span>
      </li>
      <li>
        <span></span>
        <span>EZ+</span>
        <span>TASK 신규등록</span>
        <span></span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COVE001M00" class="vlink blue line">COVE001M00</nuxt-link></span>
        <span>TASK 신규등록</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-12-19</span>
        <span class="etc">EZ+<br>파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>EZ+</span>
        <span>TASK 신규등록 완료</span>
        <span></span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COVE001P01" class="vlink blue line">COVE001P01</nuxt-link></span>
        <span>TASK 신규등록 완료 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-12-20</span>
        <span class="etc">EZ+<br>파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>EZ+</span>
        <span>TASK 상세 조회</span>
        <span></span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COVE003S01" class="vlink blue line">COVE003S01</nuxt-link></span>
        <span>TASK 상세 조회</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-12-20</span>
        <span class="etc">EZ+<br>파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>EZ+</span>
        <span>TASK 신규수정</span>
        <span></span>
        <span>COV</span>
        <span><nuxt-link to="/pub/COV/COVE002M00" class="vlink blue line">COVE002M00</nuxt-link></span>
        <span>TASK 신규수정</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-12-19</span>
        <span class="etc">EZ+<br>파일ID 확인 필요</span>
      </li>

      <li>
        <span>집행관리</span>
        <span>사업비 입금내역조회</span>
        <span>사업비 입금내역조회</span>
        <span>MEXC001</span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC001M00" class="vlink blue line">EXC001M00</nuxt-link></span>
        <span>사업비 입금내역조회 목록<br>(발주기관)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-07</span>
        <span class="etc">파일ID 확인 필요<br>2023-11-14 TASK정보 수정<br>2023-11-23 수정<br>2023-12-04 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>사업 선택</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC001P01" class="vlink blue line">EXC001P01</nuxt-link></span>
        <span>사업 선택 팝업<br>(발주기관)</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-07</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>사업비 입금내역조회</span>
        <span>사업비 입금내역조회</span>
        <span>MEXC002</span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC002M00" class="vlink blue line">EXC002M00</nuxt-link></span>
        <span>사업비 입금내역조회 목록<br>(수행기관)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-10</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>사업 선택</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC002P01" class="vlink blue line">EXC002P01</nuxt-link></span>
        <span>사업 선택 팝업<br>(수행기관)</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-10</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>지급요청</span>
        <span>1.지급요청</span>
        <span>MEXC003</span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC003M00" class="vlink blue line">EXC003M00</nuxt-link></span>
        <span>지급요청 목록<br>(수행기관)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-06</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span>MEXC004</span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC003S01" class="vlink blue line">EXC003S01</nuxt-link></span>
        <span>지급요청 상세<br>(수행기관)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-06</span>
        <span class="etc">파일ID 확인 필요<br>2023-11-14 수정<br>2023-11-22 수정<br>2023-11-23 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>지급요청 자동승인 알립 팝업</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC003P01" class="vlink blue line">EXC003P01</nuxt-link></span>
        <span>지급요청 자동승인 알립 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-22</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>지급요청 승인요청 알립 팝업</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC003P02" class="vlink blue line">EXC003P02</nuxt-link></span>
        <span>지급요청 승인요청 알립 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-22</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>지급 승인</span>
        <span></span>
        <span>MEXC006</span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC006M00" class="vlink blue line">EXC006M00</nuxt-link></span>
        <span>지급 승인<br>(수행기관)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-09</span>
        <span class="etc">파일ID 확인 필요<br>2023-11-14 수정<br>2023-11-23 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>거래 메모</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC006P01" class="vlink blue line">EXC006P01</nuxt-link></span>
        <span>거래 메모 팝업<br>(수행기관)</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-09</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>결재 정보</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC006P02" class="vlink blue line">EXC006P02</nuxt-link></span>
        <span>결재 정보 팝업<br>(수행기관)</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-09</span>
        <span class="etc">파일ID 확인 필요<br>2023-11-23 수정</span>
      </li>
      <li>
        <span></span>
        <span>지급 승인</span>
        <span></span>
        <span>MEXC007</span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC007M00" class="vlink blue line">EXC007M00</nuxt-link></span>
        <span>지급 승인<br>(발주기관)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-09</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>지급 승인 결과 등록</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC007P01" class="vlink blue line">EXC007P01</nuxt-link></span>
        <span>지급 승인 결과 등록 팝업<br>(발주기관)</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-09</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>지급 실행</span>
        <span></span>
        <span>MEXC008</span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC008M00" class="vlink blue line">EXC008M00</nuxt-link></span>
        <span>지급 실행<br>(수행기관)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-09</span>
        <span class="etc">파일ID 확인 필요<br>2023-11-22 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>지급실행 후 한도 초과 팝업</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC008P01" class="vlink blue line">EXC008P01</nuxt-link></span>
        <span>지급실행 후 한도 초과 팝업<br>(수행기관)</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-22</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>지급 취소 버튼 선택</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC008P02" class="vlink blue line">EXC008P02</nuxt-link></span>
        <span>지급 취소 버튼 선택</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-22</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>전자 서명 팝업</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC008P03" class="vlink blue line">EXC008P03</nuxt-link></span>
        <span>전자 서명 팝업<br>(수행기관)</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-22</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>지급 취소</span>
        <span></span>
        <span>MEXC009</span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC009M00" class="vlink blue line">EXC009M00</nuxt-link></span>
        <span>지급 취소<br>(수행기관)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-09</span>
        <span class="etc">파일ID 확인 필요<br>2023-11-14 수정<br>2023-11-22 수정<br>2023-11-23 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>신청완료 팝업</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC009P01" class="vlink blue line">EXC009P01</nuxt-link></span>
        <span>신청완료 팝업<br>(수행기관)</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-09</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>지급 취소 내역</span>
        <span></span>
        <span>MEXC010</span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC010M00" class="vlink blue line">EXC010M00</nuxt-link></span>
        <span>지급 취소 내역</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-09</span>
        <span class="etc">파일ID 확인 필요<br>2023-11-14 수정</span>
      </li>
      <li>
        <span></span>
        <span>일괄 집행 등록</span>
        <span></span>
        <span>MEXC011</span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC011M00" class="vlink blue line">EXC011M00</nuxt-link></span>
        <span>일괄 집행 등록<br>(수행기관)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-09</span>
        <span class="etc">파일ID 확인 필요<br>2023-11-14 수정<br>2023-11-22 수정<br>2023-11-23 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>지급 내역 업로드</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC011P01" class="vlink blue line">EXC011P01</nuxt-link></span>
        <span>지급 내역 업로드 팝업<br>(수행기관)</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-09</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>      
      <li>
        <span></span>
        <span></span>
        <span>일괄 집행 등록 안내</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC011P02" class="vlink blue line">EXC011P02</nuxt-link></span>
        <span>일괄 집행 등록 안내 팝업<br>(수행기관)</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-10</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>세목 정보 보기</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC011P03" class="vlink blue line">EXC011P03</nuxt-link></span>
        <span>세목 정보 보기 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-22</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>은행 코드 보기</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC011P04" class="vlink blue line">EXC011P04</nuxt-link></span>
        <span>은행 코드 보기 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-22</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>집행 내역 조회</span>
        <span></span>
        <span>MEXC015</span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC015M00" class="vlink blue line">EXC015M00</nuxt-link></span>
        <span>집행 내역 조회<br>(발주기관)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-10</span>
        <span class="etc">파일ID 확인 필요<br>2023-11-14 수정</span>
      </li>
      <li>
        <span></span>
        <span>집행 내역 조회</span>
        <span></span>
        <span>MEXC016</span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC016M00" class="vlink blue line">EXC016M00</nuxt-link></span>
        <span>집행 내역 조회<br>(수행기관)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-10</span>
        <span class="etc">파일ID 확인 필요<br>2023-11-14 수정<br>2023-11-22 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>증빙서류를 등록하지 않고 정산 신청한 경우</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC016P01" class="vlink blue line">EXC016P01</nuxt-link></span>
        <span>증빙서류를 등록하지 않고 정산 신청한 경우 팝업<br>(수행기관)</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-10</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>세목 수정</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC016P02" class="vlink blue line">EXC016P02</nuxt-link></span>
        <span>세목 수정 팝업<br>(수행기관)</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-10</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>불인정 사유 안내</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC016P03" class="vlink blue line">EXC016P03</nuxt-link></span>
        <span>불인정 사유 안내 팝업<br>(수행기관)</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-10</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>민간 계좌 입금 취소</span>
        <span></span>
        <span>MEXC017</span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC017M00" class="vlink blue line">EXC017M00</nuxt-link></span>
        <span>민간 계좌 입금 취소 목록<br>(수행기관)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-08</span>
        <span class="etc">파일ID 확인 필요<br>2023-11-22 수정</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>민간 계좌 입금 취소 정보</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC017P01" class="vlink blue line">EXC017P01</nuxt-link></span>
        <span>민간 계좌 입금 취소 정보 팝업<br>(수행기관)</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-08</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>민간 계좌 입금 취소</span>
        <span></span>
        <span>MEXC018</span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC018M00" class="vlink blue line">EXC018M00</nuxt-link></span>
        <span>민간 계좌 입금 취소 상세<br>(발주기관)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-08</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>입금 취소 사유</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC018P01" class="vlink blue line">EXC018P01</nuxt-link></span>
        <span>입금 취소 사유 팝업<br>(발주기관)</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-08</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>입금 취소 승인 완료 안내</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC018P02" class="vlink blue line">EXC018P02</nuxt-link></span>
        <span>입금 취소 승인 완료 안내 팝업<br>(발주기관)</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-08</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>입금 취소 승인 시 오류 안내</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC018P03" class="vlink blue line">EXC018P03</nuxt-link></span>
        <span>입금 취소 승인 시 오류 안내 팝업<br>(발주기관)</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-08</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>민간 계좌 입금 취소</span>
        <span></span>
        <span>MEXC019</span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC019M00" class="vlink blue line">EXC019M00</nuxt-link></span>
        <span>민간 계좌 입금 취소 상세<br>(수행기관)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-08</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>정부 계좌 입금 취소</span>
        <span></span>
        <span>MEXC020</span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC020M00" class="vlink blue line">EXC020M00</nuxt-link></span>
        <span>정부 계좌 입금 취소 목록<br>(발주기관)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-08</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>정부 계좌 입금 취소 정보</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC020P01" class="vlink blue line">EXC020P01</nuxt-link></span>
        <span>정부 계좌 입금 취소 정보 팝업<br>(발주기관)</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-08</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>정부 계좌 입금 취소</span>
        <span></span>
        <span>MEXC021</span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC021M00" class="vlink blue line">EXC021M00</nuxt-link></span>
        <span>정부 계좌 입금 취소 상세<br>(발주기관)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-08</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>TASK 집행 입출금 집계표</span>
        <span></span>
        <span>MEXC022</span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC022M00" class="vlink blue line">EXC022M00</nuxt-link></span>
        <span>TASK 집행 입출금 집계표</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-10</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>TASK별 잔액 목록 조회</span>
        <span></span>
        <span>MEXC023</span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXC023M00" class="vlink blue line">EXC023M00</nuxt-link></span>
        <span>TASK별 잔액 목록 조회<br>(발주기관)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-10</span>
        <span class="etc">파일ID 확인 필요<br>2023-11-23 수정</span>
      </li>
      <li>
        <span></span>
        <span>EZ+</span>
        <span>조회 조건 사업 DATA 없는 케이스 팝업</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXCE0P28" class="vlink blue line">EXCE0P28</nuxt-link></span>
        <span>조회 조건 사업 DATA 없는 케이스 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-12-20</span>
        <span class="etc">EZ+<br>파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>EZ+</span>
        <span>조회 조건 TASK의 DATA 없는 케이스 팝업</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXCE0P29" class="vlink blue line">EXCE0P29</nuxt-link></span>
        <span>조회 조건 TASK의 DATA 없는 케이스 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-12-20</span>
        <span class="etc">EZ+<br>파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>EZ+</span>
        <span>TASK 선택</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXCE0P01" class="vlink blue line">EXCE0P01</nuxt-link></span>
        <span>TASK 선택 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-12-20</span>
        <span class="etc">EZ+<br>파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>EZ+</span>
        <span>지급 요청</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXCE001M00" class="vlink blue line">EXCE001M00</nuxt-link></span>
        <span>지급 요청</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-12-20</span>
        <span class="etc">EZ+<br>파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>EZ+</span>
        <span>지급요청 승인요청 알림 팝업</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXCE0P20" class="vlink blue line">EXCE0P20</nuxt-link></span>
        <span>지급요청 승인요청 알림 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-12-20</span>
        <span class="etc">EZ+<br>파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>EZ+</span>
        <span>지급 승인</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXCE002M00" class="vlink blue line">EXCE002M00</nuxt-link></span>
        <span>지급 승인</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-12-20</span>
        <span class="etc">EZ+<br>파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>EZ+</span>
        <span>지급 승인 결과 등록 팝업</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXCE0P06" class="vlink blue line">EXCE0P06</nuxt-link></span>
        <span>지급 승인 결과 등록 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-12-20</span>
        <span class="etc">EZ+<br>파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>EZ+</span>
        <span>등록 완료 안내 팝업</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXCE0P02" class="vlink blue line">EXCE0P02</nuxt-link></span>
        <span>등록 완료 안내 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-12-20</span>
        <span class="etc">EZ+<br>파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>EZ+</span>
        <span>거래 메모 팝업</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXCE0P03" class="vlink blue line">EXCE0P03</nuxt-link></span>
        <span>거래 메모 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-12-20</span>
        <span class="etc">EZ+<br>파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>EZ+</span>
        <span>결재 정보 팝업</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXCE0P04" class="vlink blue line">EXCE0P04</nuxt-link></span>
        <span>결재 정보 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-12-20</span>
        <span class="etc">EZ+<br>파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>EZ+</span>
        <span>지급승인 팝업</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXCE0P05" class="vlink blue line">EXCE0P05</nuxt-link></span>
        <span>승인 완료 안내 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-12-20</span>
        <span class="etc">EZ+<br>파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>EZ+</span>
        <span>삭제 컨펌창 팝업</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXCE0P07" class="vlink blue line">EXCE0P07</nuxt-link></span>
        <span>삭제 컨펌창 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-12-20</span>
        <span class="etc">EZ+<br>파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>EZ+</span>
        <span>지급취소내역</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXCE003M00" class="vlink blue line">EXCE003M00</nuxt-link></span>
        <span>지급취소내역</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-12-20</span>
        <span class="etc">EZ+<br>파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>EZ+</span>
        <span>집행 내역 조회</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXCE004M00" class="vlink blue line">EXCE004M00</nuxt-link></span>
        <span>집행 내역 조회</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-12-20</span>
        <span class="etc">EZ+<br>파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>EZ+</span>
        <span>거래내역조회</span>
        <span></span>
        <span>EXC</span>
        <span><nuxt-link to="/pub/EXC/EXCE005M00" class="vlink blue line">EXCE005M00</nuxt-link></span>
        <span>거래내역조회</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-12-20</span>
        <span class="etc">EZ+<br>파일ID 확인 필요<br>2024-01-05 수정</span>
      </li>

      <li>
        <span>정산관리</span>
        <span>화면 진입 시 조회 조건에 사업 또는 TASK가 없는 경우</span>
        <span></span>
        <span></span>
        <span>CLR</span>
        <span><nuxt-link to="/pub/CLR/CLR001P28" class="vlink blue line">CLR001P28</nuxt-link></span>
        <span>사업 DATA 없는 케이스 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-27</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>CLR</span>
        <span><nuxt-link to="/pub/CLR/CLR001P29" class="vlink blue line">CLR001P29</nuxt-link></span>
        <span>TASK의 DATA 없는 케이스 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-27</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>온라인정산</span>
        <span></span>
        <span>MCLR001</span>
        <span>CLR</span>
        <span><nuxt-link to="/pub/CLR/CLR001M00" class="vlink blue line">CLR001M00</nuxt-link></span>
        <span>온라인정산</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-21</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span></span>
        <span>정산 결과 등록 팝업</span>
        <span></span>
        <span>CLR</span>
        <span><nuxt-link to="/pub/CLR/CLR001P00" class="vlink blue line">CLR001P00</nuxt-link></span>
        <span>정산 결과 등록 팝업</span>
        <span>팝업</span>
        <span class="ok">O</span>
        <span>2023-11-21</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>비세목별 집행 집계표(TASK완료 후)</span>
        <span></span>
        <span>MCLR002</span>
        <span>CLR</span>
        <span><nuxt-link to="/pub/CLR/CLR002M00" class="vlink blue line">CLR002M00</nuxt-link></span>
        <span>비세목별 집행 집계표(TASK완료 후)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-21</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>비목별 지급내역서(TASK완료 후)</span>
        <span></span>
        <span>MCLR003</span>
        <span>CLR</span>
        <span><nuxt-link to="/pub/CLR/CLR003M00" class="vlink blue line">CLR003M00</nuxt-link></span>
        <span>비목별 지급내역서(TASK완료 후)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-21</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>정산 보고서(정산후)</span>
        <span></span>
        <span>MCLR004</span>
        <span>CLR</span>
        <span><nuxt-link to="/pub/CLR/CLR004M00" class="vlink blue line">CLR004M00</nuxt-link></span>
        <span>정산 보고서(정산후)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-27</span>
        <span class="etc">파일ID 확인 필요</span>
      </li>
      <li>
        <span></span>
        <span>정산반납금 조회(정산후)</span>
        <span></span>
        <span>MCLR005</span>
        <span>CLR</span>
        <span><nuxt-link to="/pub/CLR/CLR005M00" class="vlink blue line">CLR005M00</nuxt-link></span>
        <span>정산반납금 조회(정산후)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-27</span>
        <span class="etc">파일ID 확인 필요<br>2023-12-29 수정</span>
      </li>
      <li>
        <span></span>
        <span>사업정산목록조회(정산후)</span>
        <span></span>
        <span>MCLR006</span>
        <span>CLR</span>
        <span><nuxt-link to="/pub/CLR/CLR006M00" class="vlink blue line">CLR006M00</nuxt-link></span>
        <span>사업정산목록조회(정산후)</span>
        <span>메인</span>
        <span class="ok">O</span>
        <span>2023-11-27</span>
        <span class="etc">파일ID 확인 필요</span>
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
  </div>

</template>

<style scoped>
  h2{margin:20px 0 10px;}

  .pub_bg{padding:10px;background: #fff;border-radius: 10px;}
  .pub_top{display:flex;align-items: center;justify-content: space-between;color:#000;}
  .pub_top b{margin:0 10px;}
  .pub_top strong{color:#fc0000;}
  .pub_list li{display:flex;}
  .pub_list li:hover{background-color:#000;}
  .pub_list li:hover a,
  .pub_list li:hover span{color:#fff;}
  .pub_list li:hover span .vlink{color:#fff;}
  .pub_list li span{min-width:120px;min-height:30px;padding:5px;flex:1;font-size:14px;text-align:center;border:1px solid #000;border-top:0;}
  .pub_list li:first-child span{border-top:1px solid #000;}
  .pub_list li span+span{border-left:0;}
  .pub_list li .etc{color:#fc0000}
</style>

<script>

// const popup = () => {
//   $fx
//     .throwDialog('common/ComSwiper', { data: {}, close: true, closeLabel: '확인' })
//     .then((result) => {
//       if (result) {
//         console.log('throwDialog result', result)
//       }
//     })
// }


const cnt = document.getElementsByClassName('ok').length
export default {
  name: 'App',
  components: {},
  data() {
    return {
      cntValue: cnt,
    };
  },
};

console.log(cnt)

</script> 