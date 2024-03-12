<template>
  <div class="header" :class="{ 'close': gnbView }">
    <div class="gnb_box">
      <h1 class="">
        <nuxt-link to="../MEM/MEM001M00">로고 이미지</nuxt-link>
      </h1>

      <div class="gnb" :class="{ 'close': gnbView }" @mouseenter="gnbMouseOver">
        <div class="gnb_banner">
          <ul class="slide_box">
            <li class="banner_1">
              <p class="tit">AICMS<br>SYSTEM</p>
              <div class="txt"><nuxt-link to="/pub/INT/INT001M00" class="vlink basic">빠르고 쉽게<br>협약부터 집행 · 정산까지</nuxt-link></div>
            </li>
          </ul>
          <div class="paging">
            <span class="active"></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit" @click="headerClose">계약관리</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="/pub/MEM/MEM001M00" @click="gnbClose">공고 조회</nuxt-link></li> <!-- 활성화 class active 추가 -->
            <li><nuxt-link to="../MEM/MEM001M00">공고 등록</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">공고제안접수 조회</nuxt-link></li>
          </ul>
        </div>
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit">협약관리</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="../MEM/MEM001M00">사업 신규등록</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">사업 조회</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">사업참여(TASK) 신청</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">사업참여(TASK) 조회</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">TASK 조회</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">사업 계좌 목록 조회</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">사업 담당자 변경 관리</nuxt-link></li>
          </ul>
        </div>
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit">집행관리</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="../MEM/MEM001M00">사업비 입금내역조회</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">지급요청</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">지급승인</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">지급실행</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">지급취소</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">일괄 집행 등록</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">집행내역조회</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">지급취소내역조회</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">민간계좌입금취소</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">정부계좌입금취소</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">TASK집행<br>입출금집계표 </nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">TASK별 잔액 조회</nuxt-link></li>
          </ul>
        </div>
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit">정산관리</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="../MEM/MEM001M00">온라인정산</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">비세목별 집행 집계표</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">비세목별 지급내역서</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">정산보고서</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">정산반납금 조회</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">사업정산목록조회</nuxt-link></li>
          </ul>
        </div>
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit">내부사업</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="../MEM/MEM001M00">사업참여(TASK) 신청</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">지급 요청</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">지급 실행</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">지급 취소</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">일괄집행 등록</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">집행내역조회</nuxt-link></li>
            <li><nuxt-link to="../MEM/MEM001M00">집행내역 정산신청</nuxt-link></li>
          </ul>
        </div>
      </div>

      <div class="gnb_right">
        <p class="logo_right"><span class="img"><img src="../../assets/images/logo_right.svg" alt=""></span><span class="txt">Shinhan</span></p>        
        <div class="btn_util" :class="{ 'mypage_open': myPageLayer , 'close':utilView }" @mouseenter="utilMouseOver">
          <v-btn class="vbtn btn_login" size="small" v-if="before">로그인</v-btn>
          <v-btn class="vbtn btn_join" size="small" v-if="before">회원가입</v-btn>
          <v-btn class="vbtn btn_memconfig new" size="small" v-if="after" @mouseenter="myPageLayer = true" @mouseleave="myPageLayer = false">마이페이지</v-btn> <!-- alarm class new add -->
          <v-btn class="vbtn btn_logout" size="small" v-if="after">로그아웃</v-btn>
          <div class="btn_mypage_view" @mouseenter="myPageLayer = true" @mouseleave="myPageLayer = false">
            <v-btn class="vbtn btn_etc" size="small" v-if="after" @click="gnbCloseUtil">일반 회원정보관리</v-btn>
            <v-btn class="vbtn btn_etc" size="small" v-if="after">기관 회원정보관리</v-btn>
            <v-btn class="vbtn btn_etc btn_memo" size="small" v-if="after">쪽지<span class="cnt">99+</span></v-btn>
            <v-btn class="vbtn btn_etc" size="small" v-if="after">결재함</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const before = ref(false)
const after = ref(true)

const myPageLayer = ref(false)

// 메뉴 클릭 시 GNB 하위 메뉴 hide
const gnbView = ref(false)
const gnbClose = () => {
  gnbView.value = true
};
const gnbMouseOver = () => {
  gnbView.value = false
}

// 헤더 메뉴 클릭 시 닫기
const headerClose = () => {
  gnbView.value = true
}

const utilView = ref(false)
const gnbCloseUtil = () => {
  myPageLayer.value = false
  utilView.value = true
};
const utilMouseOver = () => {
  utilView.value = false
}

</script>

<style>
</style>