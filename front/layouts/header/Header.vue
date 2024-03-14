<template>
  <div class="header" :class="{ 'close': gnbView }">
    <div class="gnb_box">
      <h1 class=""><!-- logo class logo_발주기관코드 -->
        <nuxt-link to="../MEM/MEM001M00">로고 이미지</nuxt-link>
      </h1>

      <div class="gnb">
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit">원화(펌뱅킹)</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="/pub/publist_front">당행 입금 이체</nuxt-link></li>
            <li><nuxt-link to="/pub/publist_front">당, 타행 지급 이체</nuxt-link></li>
            <li><nuxt-link to="/pub/publist_front">당, 타행 예금주 성명 조회</nuxt-link></li>
            <li><nuxt-link to="/pub/publist_front">예금거래 명세통지</nuxt-link></li>
            <li><nuxt-link to="/pub/publist_front">가상거래 명세통지</nuxt-link></li>
            <li><nuxt-link to="/pub/publist_front">타행이체 결과 불능분 통지</nuxt-link></li>
          </ul>
        </div>
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit">외화</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="/pub/publist_front">외화</nuxt-link></li>
          </ul>
        </div>
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit">제휴가상계좌</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="/pub/publist_front">공고 조회</nuxt-link></li>
          </ul>
        </div>
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit">광과금/기타</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="/pub/publist_front">공고 조회</nuxt-link></li>
          </ul>
        </div>
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit">오류관리</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="/pub/publist_front">공고 조회</nuxt-link></li>
          </ul>
        </div>
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit">서비스 현황</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="/pub/publist_front">공고 조회</nuxt-link></li>
          </ul>
        </div>
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit">일괄 이체</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="/pub/publist_front">공고 조회</nuxt-link></li>
          </ul>
        </div>
        <div class="gnb_menu_box">
          <p class="gnb_menu_tit">시스템 관리</p>
          <ul class="gnb_menu_list">
            <li><nuxt-link to="/pub/publist_front">공고 조회</nuxt-link></li>
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


</script>

<style>
</style>