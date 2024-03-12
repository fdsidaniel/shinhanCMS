<template>

  <div class="title_box">
    <h2>자주하는 질문</h2>
    <ul class="loc">
      <li>홈</li>
      <li>고객센터</li>
      <li>자주하는 질문</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="t_right">
      <v-btn class="vbtn blue" size="small">관리자에게 문의하기</v-btn>
    </div>

    <div class="faq_list">
      <dl>
        <dt @click="faqView">금융 인증서 발급 방법</dt>
        <dd>
          <div class="txt">
            인증서 발급 안내
            <ul class="ul_list">
              <li class="d_flex a_start">
                <span class="mr_3">일반회원 :</span>
                <div>
                  회원 가입 시 개인금융인증서 필요합니다.<br>
                  신한은행(개인)
                  <nuxt-link to="https://bank.shinhan.com" target="_blank" class="vlink basic">https://bank.shinhan.com</nuxt-link>
                  &gt; 인증센터 &gt; 금융인증센터 &gt; 금융인증서 발급/재발급
                </div>
              </li>
              <li class="d_flex a_start">
                <span class="mr_3">기관회원 :</span>
                <div>
                  회원 가입 시, 지급담당자 지급실행 시 법인금융인증서 필요합니다.<br>
                  신한은행(기업)
                  <nuxt-link to="https://bizbank.shinhan.com" target="_blank" class="vlink basic">https://bizbank.shinhan.com</nuxt-link>
                  &gt; 인증센터 &gt; 금융인증센터 &gt; 금융인증서 발급/재발급
                </div>
              </li>
            </ul>
          </div>
        </dd>

        <dt @click="faqView">일반 회원가입 방법</dt>
        <dd>
          <div class="txt">
            홈 &gt; 회원관리 &gt; 일반회원가입
            <ul class="ul_list">
              <li>약관동의 : 약관 동의는 필수 조건입니다.</li>
              <li>회원정보입력 : 회원정보를 입력합니다.</li>
              <li>채널인증 : SMS 또는 이메일을 통한 채널인증은 필수 입니다.</li>
              <li>회원가입 : 회원정보 확인 및 개인금융인증서 인증 후 회원가입이 완료됩니다.</li>
            </ul>
          </div>
        </dd>

        <dt @click="faqView">기관 회원가입 방법</dt>
        <dd>
          <div class="txt">
              홈 &gt; 회원관리 &gt; 기관회원가입
              <ul class="ul_list">
                <li>약관동의 : 약관 동의는 필수 조건입니다.</li>
                <li>기관정보입력 : 수행기관 정보를 입력합니다.</li>
                <li>책임자정보 입력 : 기관 책임자 정보를 입력합니다.</li>
                <li>채널인증 : SMS 또는 이메일을 통한 채널인증은 필수 입니다.</li>
                <li>회원가입 : 회원정보 확인 및 법인금융인증서 인증 후 회원가입이 완료됩니다.</li>
              </ul>
          </div>
        </dd>

        <dt @click="faqView">수행기관 권한</dt>
        <dd>
          <div class="txt">
            <ul class="ul_list mt_0">
              <li>TASK책임자 : 협약시 TASK의 책임자 입니다.</li>
              <li>사업담당자 : TASK 조회 및 집행등록 가능 합니다.</li>
              <li>지급담당자 : 이체, 지급취소 실행 가능 합니다.</li>
            </ul>
          </div>
        </dd>

        <dt @click="faqView">사업자 번호 변경</dt>
        <dd>
          <div class="txt">
            홈 &gt; 회원관리 &gt; 기관 회원정보관리 &gt; 수행기관 정보 TAB &gt; 사업자등록증 변경
            <ul class="ul_list">
              <li>TASK 수행중 사업자등록번호 변경시 기관정보 입력 및 사업자등록증 업로드</li>
              <li>사업자등록 변경 버튼 클릭 시 법인금융인증서 인증 후 사업자등록증 변경처리 완료됩니다.</li>
            </ul>
          </div>
        </dd>

        <dt @click="faqView">일반회원 책임자 권한으로 변경</dt>
        <dd>
          <div class="txt">
            홈 &gt; 회원관리 &gt; 일반 회원정보관리
            <ul class="ul_list">
              <li>책임자권한변경 버튼 클릭 시 법인금융인증서 인증 후 책임자로 권한이 변경됩니다.</li>
            </ul>
          </div>
        </dd>

        <dt @click="faqView">세목별 예산 관리</dt>
        <dd>
          <div class="txt">
            <ul class="ul_list mt_0">
              <li>지능형 대금관리시스템은 세목별 예산 관리를 하지 않습니다.</li>
              <li>TASK의 총 예산만 관리합니다.</li>
            </ul>
          </div>
        </dd>

        <dt @click="faqView">부가세 안내</dt>
        <dd>
          <div class="txt">
            <ul class="ul_list mt_0">
              <li>지능형 대금관리 시스템에서는 부가세를 지급하지 않습니다.</li>
              <li>공급가액만 지급대상입니다.</li>
            </ul>
          </div>
        </dd>

        <dt @click="faqView">증빙파일 업로드 제한</dt>
        <dd>
          <div class="txt">
            <ul class="ul_list mt_0">
              <li>파일 1개당 가능용량은 10메가 입니다.</li>
              <li>1회 업로드 가능한 파일 총 개수는 10개 입니다.</li>
              <li>파일보관 기간은 2년입니다.</li>
            </ul>
          </div>
        </dd>

        <dt @click="faqView">지급 승인 안내</dt>
        <dd>
          <div class="txt">
            <ul class="ul_list mt_0">
              <li>TASK 별 1일, 1회 한도 금액을 발주기관에서 관리합니다.</li>
              <li>1회 한도 이상 금액은 발주기관 TASK승인자의 승인이 필요합니다.</li>
              <li>
                1회 한도 미만 금액은 자동승인으로 지급실행(법인금융인증서 필수)이 바로 가능합니다.<br>
                단, 당일 지급금액이 1일 한도 초과 시 지급이 불가합니다. (발주기관 문의)
              </li>
            </ul>
          </div>
        </dd>

        <dt @click="faqView">지급 취소 안내</dt>
        <dd>
          <div class="txt">
            홈 &gt; 집행관리 &gt; 지급취소
            <ul class="ul_list">
              <li>거래처로 부터 환불 또는 오 지급한 경우 지급취소 처리가 가능합니다. (전액취소)</li>
            </ul>
          </div>
        </dd>

        <dt @click="faqView">세목 수정 방법</dt>
        <dd>
          <div class="txt">
            홈 &gt; 집행관리 &gt; 집행내역 조회
            <ul class="ul_list">
              <li>세목수정 버튼 클릭 시 세목수정 팝업을 통해 세목 수정 및 문서 첨부가 가능합니다.</li>
            </ul>
          </div>
        </dd>

        <dt @click="faqView">서비스 이용시간 안내</dt>
        <dd>
          <div class="txt">            
            <ul class="ul_list mt_0">
              <li>지급실행은 평일 오전 9시 부터 오후 6시 까지 이용가능합니다.</li>
              <li>시스템 상황에 따라 운영시간은 변동 가능합니다.</li>
            </ul>
          </div>
        </dd>

        <dt @click="faqView">사업비 통장 개설 안내</dt>
        <dd>
          <div class="txt">
            <ul class="ul_list mt_0">
              <li>계좌 개설을 위해 신한은행 영업점 방문 전, 필요 서류에 대한 유선 문의 후 방문 바랍니다.</li>
            </ul>
          </div>
        </dd>

        <dt @click="faqView">이체 확인증 출력</dt>
        <dd>
          <div class="txt">
            <ul class="ul_list mt_0">
              <li>본 시스템은 이체 확인증 제공이 어렵습니다.</li>
              <li>신한은행의 기업인터넷뱅킹 시스템을 통해서 출력하시면 됩니다.</li>
              <li>
                신한은행(기업)
                <nuxt-link to="https://bizbank.shinhan.com" target="_blank" class="vlink basic">https://bizbank.shinhan.com</nuxt-link>
              </li>
            </ul>
          </div>
        </dd>
      </dl>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

// faq show hide
const idx = ref()
const faqView = (event) => {
  const dts = event.target.parentElement.querySelectorAll('dt')
  const index = Array.from(dts).indexOf(event.target)
  idx.value = index 
  
  console.log(idx.value+"///")

  const dtElements = document.querySelectorAll(".faq_list dl dt")
  
  if (dts[idx.value].classList.contains('open')) {
    dts[idx.value].classList.remove('open');
  } else {
    dtElements.forEach((dt) => {
      dt.classList.remove('open');
    });
    dts[idx.value].classList.add("open");
  }
};

</script> 