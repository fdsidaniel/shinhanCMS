<template>

  <div class="main_wrap">
    <div class="top_txt">
      성공적인 사업을 위한,
      <p>지능형 대금관리 시스템 AICMS</p>
    </div>

    <ul class="banner_box">
      <li>
        <span>문서 표준화 검증 절차</span>
        <p>퀵 -<br>하게</p>
        <div class="icon_1">아이콘</div>
      </li>
      <li>
        <span>동일 대금 시스템 관리</span>
        <p>투명한<br>대금관리</p>
        <div class="icon_2">아이콘</div>
      </li>
      <li>
        <span>AI-OCR 도입 효율성 증대</span>
        <p>자동화<br>서비스</p>
        <div class="icon_3">아이콘</div>
      </li>
      <li>
        <span>기관 연계</span>
        <p>PMS · ERP<br>연계</p>
        <div class="icon_4">아이콘</div>
      </li>
    </ul>

    <div class="notice_list">
      <div class="notice_con">
        <p class="tit">
          <nuxt-link to="/pub/HOM/HOM001M00" class="">알려드려요</nuxt-link>
        </p>
        <ul class="txt">
          <li>
            <nuxt-link to="/pub/HOM/HOM001M00" class="vlink">
              <p class="stit">시스템 정기 점검으로 인한 서비스 이용 제한 안내시스템 정기 점검으로 인한 서비스 이용 제한 안내시스템 정기 점검으로 인한 서비스 이용 제한 안내시스템 정기 점검으로 인한 서비스 이용 제한 안내시스템 정기 점검으로 인한 서비스 이용 제한 안내시스템 정기 점검으로 인한 서비스 이용 제한 안내</p>
              <span>2023.08.29</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="main_con">
      <div class="top">
        <div class="txt">
          <p class="txt">성공적인 사업을 위한,<br>시작부터 끝까지</p>
          <p class="tit">AICMS와 함께</p>
          <p class="tip_txt">기관에 따라 상세한 프로세스는 다를 수 있습니다.</p>
        </div>
        <div>
          <ul class="step_list">
            <li class="step_1" :class="{ on: step_1 }">
              <span>step 01</span>
              <p>사업등록</p>
            </li>
            <li class="step_2" :class="{ on: step_2 }">
              <span>step 02</span>
              <p>사업진행</p>
            </li>
            <li class="step_3" :class="{ on: step_3 }">
              <span>step 03</span>
              <p>정산처리</p>
            </li>
            <li class="step_4" :class="{ on: step_4 }">
              <span>step 04</span>
              <p>사업종료</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="btm">
        <div class="left_box">
          <div class="banner">
            <p class="tit">AICMS<br>SYSTEM<br>소개</p>
            <div class="txt">
              빠르고 쉽게<br>협약부터 집행 · 정산까지
            </div>
          </div>
          <div class="guide new">
            <p class="tit">이용자 가이드</p>
            <div class="btn">
              <nuxt-link to="/pub/HOM/HOM001M00" class="vlink order">발주기관용</nuxt-link>
              <nuxt-link to="/pub/HOM/HOM001M00" class="vlink execution">수행기관용</nuxt-link>
            </div>
          </div>
        </div>
        <div class="call">          
          <p class="tit">문의처</p>
          <p class="txt">02)<br>000 · 0000</p>
          <p class="txt2">평일 09:00 ~ 18:00</p>
          <p class="txt3">주말 및 공휴일 휴무</p>
        </div>
        <div class="faq">
          <nuxt-link to="/pub/HOM/HOM001M00" class="vlink basic">
            <p class="tit">자주하는 질문</p>
            <p class="txt">궁금한 점을<br>해결해<br>드리겠습니다.</p>
          </nuxt-link>
        </div>
      </div> 
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup>

const step_1 = ref(false)
const step_2 = ref(false)
const step_3 = ref(false)
const step_4 = ref(false)
const restart = ref(false)
let intervalId = null

const startRolling = () => {

  if (!intervalId) {
    intervalId = setInterval(() => {
      if (!step_1.value) {
        step_1.value = true
        console.log("step_1")
      } else if (!step_2.value) {
        step_2.value = true
        console.log("step_2")
      } else if (!step_3.value) {
        step_3.value = true
        console.log("step_3")
      } else if (!step_4.value) {
        step_4.value = true
        console.log("step_4")
      } else if (!restart.value) {
        restart.value = true
        console.log("유지")
      } else if (restart.value) {
        step_1.value = false
        step_2.value = false
        step_3.value = false
        step_4.value = false
        restart.value = false
        console.log("재시작")
      }
    }, 1000)
  }
}

// 롤링 중지
const stopRolling = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

// 컴포넌트가 마운트될 때 롤링 시작
onMounted(() => {
  startRolling()
})

// 컴포넌트가 언마운트될 때 인터벌 정리
onBeforeUnmount(() => {
  stopRolling()
})


</script> 