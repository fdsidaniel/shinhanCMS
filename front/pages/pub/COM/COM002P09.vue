<template>
  
  <!-- popup size width:1000 height:800 -->
  <div class="popup_body">
    <h2 class="poptit">[필수] 개인정보 수집·이용·제공 동의서 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <div class="agree_box">
      <p class="tit">개인정보 수집·이용·제공 동의서</p>
      <div class="agree_txt">
        <p class="stit">(주) 신한은행 귀중</p>
        <dl class="list">
          <dt>귀 행과의 AICMS 서비스와 관련하여 귀 행이 본인의 개인정보를 수집·이용·제공하는 경우에는 「개인정보 보호법」 등 관계 법령에 따라 본인의 동의가 필요합니다.</dt>
        </dl>

        <p class="stit">1. 수집·이용에 관한 사항</p>
        <dl class="list type2">
          <dt>수집·이용 목적</dt>
          <dd>
            <ul>
              <li>회원가입 의사 확인, 회원제 서비스 제공, 본인확인, 이용자 식별 및 관리</li>
              <li>서비스 제공 및 관리(계약관리, 협약관리, 집행관리, 정산관리, AI-OCR 등)</li>
              <li>서비스 이용에 필요한 각종 고지 통지 안내</li>
              <li>민원처리 및 고객상담, 분쟁해결, 법령상 의무이행</li>
              <li>불법 및 부정 이용 방지, 부정 사용자 차단 및 관리</li>
            </ul>
          </dd>
          <dt>보유 및 이용기간</dt>
          <dd>
            <ul>
              <li><b>개인정보는 서비스 종료일 또는 동의 철회시까지 보유·이용 됩니다.</b></li>
            </ul>
          </dd>
          <dt>기부 권리 및 불이익</dt>
          <dd>귀하는 동의를 거부하실 수 있습니다. 다만, 개인정보 수집·이용에 관한 동의는 AICMS 서비스 계약의 체결 및 이행을 위한 필수적 사항이므로, 위 사항에 동의하셔야만 AICMS 서비스 이용이 가능합니다.</dd>
        </dl>

        <p class="stit">▣ 수집·이용 항목</p>
        <dl class="list type2">
          <dt>개인정보</dt>
          <dd>일반개인정보
            <ul>
              <li>이름, 휴대전화번호, 생년월일(성별), 이메일주소</li>
              <li>서비스 이용기록(화면 이동 내역, 화면 내 클릭 정보, 방문기록 등), 접속 로그(웹 실행방법, 화면정보 등), 쿠키, 접속 IP 주소</li>
            </ul>
          </dd>
        </dl>
        <!-- <div class="agreement">
          <p>위 개인정보 <u>수집·이용</u>에 동의하십니까?</p>
          <div>
            <span>동의하지 않음</span>
            <span>동의함</span>
          </div>
        </div> -->

        <p class="stit">2. 제공에 관한 사항</p>
        <dl class="list type2">
          <dt>제공받는 자</dt>
          <dd><b>회원님이 AICMS에서 등록한 발주기관</b>
            <ul>
              <li>홈 &gt; 개인정보처리방침 “제3자 제공에 관한 사항”을 통해서 확인하실 수 있습니다.</li>
            </ul>
          </dd>
          <dt>제공받는 자의 이용 목적</dt>
          <dd><b>발주기관 사업 관련 서비스 제공</b>
            <ul>
              <li>공고등록, 공고조회, 제안서 제출, 제안기업 선정 등 <b>계약관리</b></li>
              <li>사업관리, 수행기관관리, TASK관리, 예산관리, 계좌관리 등 <b>협약관리</b></li>
              <li>지급요청, 지급승인, 한도관리, 집행등록 등 <b>집행관리</b></li>
              <li>온라인 정산, 정산 보고서 등 <b>정산관리</b></li>
              <li>문서 관리, 검증기준 관리, 학습 관리, 문서 검증 등 <b>AI-OCR</b></li>
            </ul>
          </dd>
          <dt>보유 및 이용기간</dt>
          <dd><b>개인정보는 서비스 종료일 또는 동의 철회시까지 보유·이용 됩니다.</b></dd>
          <dt>거부 권리 및 불이익</dt>
          <dd>귀하는 동의를 거부하실 수 있습니다. 다만, 개인정보 제공에 관한 동의는 AICMS 서비스 계약의 체결 및 이행을 위한 필수적 사항이므로, 위 사항에 동의하셔야만 AICMS 서비스 이용이 가능합니다.</dd>
        </dl>

        <p class="stit">▣ 제공 항목</p>
        <dl class="list type2">
          <dt>개인정보</dt>
          <dd>일반개인정보
            <ul>
              <li>회원의 이름, 휴대전화번호, 생년월일(성별, 이메일주소)</li>
            </ul>
          </dd>
        </dl>
        <!-- <div class="agreement">
          <p>위 개인정보 <u>제공</u>에 동의하십니까?</p>
          <div>
            <span>동의하지 않음</span>
            <span>동의함</span>
          </div>
        </div> -->
      </div>
    </div>

    <div class="btm_btn_wrap" v-if="false"><!-- 화면 확인용 - 팝업 구동시 타이틀 display:none 처리됨 -->
      <v-btn class="vbtn">확인</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >


</script> 