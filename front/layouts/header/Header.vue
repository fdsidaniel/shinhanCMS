<template>
  <div class="header">
    <div class="gnb_box">
      <h1 class=""><!-- logo class logo_발주기관코드 -->
        <nuxt-link to="../MEM/MEM001M00">로고 이미지</nuxt-link>
      </h1>

      <div class="gnb" :class="{ 'close': gnbView }" @click="handleClick" @mouseenter="gnbMouseOver">
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit">원화(펌뱅킹)</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="">당행 입금 이체</nuxt-link></li>
            <li><nuxt-link to="">당, 타행 지급 이체</nuxt-link></li>
            <li><nuxt-link to="">당, 타행 예금주 성명 조회</nuxt-link></li>
            <li><nuxt-link to="">예금거래 명세통지</nuxt-link></li>
            <li><nuxt-link to="">가상거래 명세통지</nuxt-link></li>
            <li><nuxt-link to="">타행이체 결과 불능분 통지</nuxt-link></li>
          </ul>
        </div>
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit">외화</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="">외화</nuxt-link></li>
          </ul>
        </div>
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit">법인카드</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="">법인카드 승인내역</nuxt-link></li>
            <li><nuxt-link to="">법인카드 매입내역</nuxt-link></li>
            <li><nuxt-link to="">법인카드 청구내역</nuxt-link></li>
          </ul>
        </div>
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit">제휴가상계좌</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="">제휴가상계좌 입금 승인정보</nuxt-link></li>
            <li><nuxt-link to="">제휴가상계좌 입금 승인처리내역</nuxt-link></li>
            <li><nuxt-link to="">제휴가상계좌 수취인정보</nuxt-link></li>
            <li><nuxt-link to="">제휴가상계좌 수취인조회내역</nuxt-link></li>
            <li><nuxt-link to="">제휴가상계좌 집계대사</nuxt-link></li>
          </ul>
        </div>
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit">광과금/기타</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="">공과금</nuxt-link></li>
          </ul>
        </div>
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit">오류관리</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="">오류 관리</nuxt-link></li>
            <li><nuxt-link to="">오류 이력 조회</nuxt-link></li>
          </ul>
        </div>
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit">서비스 현황</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="">일일 이체 현황</nuxt-link></li>
            <li><nuxt-link to="">월간 이체 현황</nuxt-link></li>
            <li><nuxt-link to="">일일 오류 발생 현황</nuxt-link></li>
            <li><nuxt-link to="">월간 오루 발생 현황</nuxt-link></li>
          </ul>
        </div>
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit">일괄 이체</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="">일괄이체 지급요청</nuxt-link></li>
          </ul>
        </div>
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit">시스템 관리</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="">사용자 가입 신청/수정</nuxt-link></li>
            <li><nuxt-link to="">사용자 가입 취소</nuxt-link></li>
            <li><nuxt-link to="">서비스 시간 관리</nuxt-link></li>
            <li><nuxt-link to="">서비스 오류 관리</nuxt-link></li>
            <li><nuxt-link to="">전문 송/수신 이력 관리</nuxt-link></li>
            <li><nuxt-link to="">법인카드 파일관리</nuxt-link></li>
            <li><nuxt-link to="">일괄이체 파일관리</nuxt-link></li>
            <li><nuxt-link to="">사용자 신규/변경</nuxt-link></li>
            <li><nuxt-link to="">사용자 권한 제어</nuxt-link></li>
          </ul>
        </div>
      </div>

      <div class="gnb_right">        
        <div class="btn_util">
          <div class="last_login">
            <p>최종접속</p>
            <div class="loginfo">
              2024.02.15 14:12:56 김기관 <span>(기관관리자)</span>
            </div>
          </div>
          <v-btn class="vbtn btn_logout" size="small">로그아웃</v-btn>          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

// 메뉴 클릭 시 GNB 하위 메뉴 hide
const gnbView = ref(false)
const handleClick = (event) => {
  if(event.target.tagName === 'A') {    
    gnbView.value = true
    console.log('gnb sub menu close')
  }  
}
const gnbMouseOver = () => {
  gnbView.value = false
}

</script>

<style>
</style>