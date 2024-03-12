<template>

  <div class="main_wrap after">
    <div class="top_txt">
      김발주 책임자님,<br>
      진행중인 사업이 <b>1,002</b>건이 있습니다.
      <div class="final_time">최종 접속 <b>2023년 12월 29일 13시 39분</b></div>
    </div>

    <div class="task_box">
      <ul class="business_list">
        <li :class="{ on: isActive }" @click="toggleActive">
          <strong class="tit">차세대 AI-OCR 사업 02</strong>
          <span class="date">2023-12-28 ~ 2024-01-31</span>
        </li>
        <li class="on" :class="{ on: isActive }" @click="toggleActive">
          <strong class="tit">차세대 AI-OCR 사업 02</strong>
          <span class="date">2023-12-28 ~ 2024-01-31</span>
        </li>
        <li :class="{ on: isActive }" @click="toggleActive">
          <strong class="tit">차세대 AI-OCR 사업 02 차세대 AI-OCR 사업 02 차세대 AI-OCR 사업 02 차세대 AI-OCR 사업 02</strong>
          <span class="date">2023-12-28 ~ 2024-01-31</span>
        </li>
        <li :class="{ on: isActive }" @click="toggleActive">
          <strong class="tit">부가세 환급 신고를 위한 기업카드 이용내역 자료 제공 안내</strong>
          <span class="date">2023-12-28 ~ 2024-01-31</span>
        </li>
      </ul>

      <div class="task_list_box">
        <div class="task_list">
          <div class="task_info ico_apply">
            <p class="tit">신청 중<br>TASK</p>
            <div class="cnt"><nuxt-link to="/pub/HOM/HOM001M02" class="vlink basic">10</nuxt-link>건</div>
          </div>
          <div class="task_info ico_progress">
            <p class="tit">진행 중<br>TASK</p>
            <div class="cnt"><nuxt-link to="/pub/HOM/HOM001M02" class="vlink basic">100</nuxt-link>건</div>
          </div>
          <div class="task_info ico_give">
            <p class="tit">지급<br>승인대상</p>
            <div class="cnt"><nuxt-link to="/pub/HOM/HOM001M02" class="vlink basic">124</nuxt-link>건</div>
          </div>
          <div class="task_info ico_calculate">
            <p class="tit">정산 중<br>TASK</p>
            <div class="cnt"><nuxt-link to="/pub/HOM/HOM001M02" class="vlink basic">10</nuxt-link>건</div>
          </div>
        </div>
        <nuxt-link to="/pub/HOM/HOM001M02" class="vlink basic btn_task_more">더보기</nuxt-link>
      </div>
    </div>

    <div class="qmenu_box">
      <p class="tit">발주기관 빠른메뉴</p>
      <ul class="qmenu_list">
        <li class="ico_1"><nuxt-link to="/pub/HOM/HOM001M02" class="vlink basic">공고등록</nuxt-link></li>
        <li class="ico_2"><nuxt-link to="/pub/HOM/HOM001M02" class="vlink basic">사업 신규등록</nuxt-link></li>
        <li class="ico_3"><nuxt-link to="/pub/HOM/HOM001M02" class="vlink basic">TASK 목록조회</nuxt-link></li>
        <li class="ico_4"><nuxt-link to="/pub/HOM/HOM001M02" class="vlink basic">지급승인</nuxt-link></li>
        <li class="ico_5"><nuxt-link to="/pub/HOM/HOM001M02" class="vlink basic">온라인 정산</nuxt-link></li>
      </ul>
    </div>

    <div class="notice_box">
      <div class="box">
        <p class="tit">알려드려요</p>
        <ul>
          <li>
            <nuxt-link to="/pub/HOM/HOM001M02" class="vlink basic">
              <p class="stit">시스템 정기 점검으로 인한 서비스 이용 제한 안내시스템 정기 점검으로 인한 서비스 이용 제한 안내시스템 정기 점검으로 인한 서비스 이용 제한 안내</p>
              <span class="date">2023-08-29</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="box">
        <p class="tit">사업공고</p>
        <ul>
          <li>
            <nuxt-link to="/pub/HOM/HOM001M02" class="vlink basic">
              <p class="stit">한마 사업공고 안내</p>
              <span class="date">2023-08-29</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="btm">
      <div class="left_box" v-if="type1">
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
      <div class="guide" v-if="type2">
        <p class="tit">이용자 가이드</p>
        <div class="btn">
          <nuxt-link to="/pub/HOM/HOM001M02" class="vlink order">발주기관용</nuxt-link>
          <nuxt-link to="/pub/HOM/HOM001M02" class="vlink execution">수행기관용</nuxt-link>
        </div>
      </div>
      <div class="guide" v-if="type2">
        <p class="tit">발주기관 건수</p>
        <div class="btn">
          <nuxt-link to="/pub/HOM/HOM001M02" class="vlink noicon">진행 중인 공고<span><strong>10</strong>건</span></nuxt-link>
          <nuxt-link to="/pub/HOM/HOM001M02" class="vlink noicon">공고 제안 접수<span><strong>10</strong>건</span></nuxt-link>
        </div>
      </div>
      <div class="call">
        <p class="tit">문의처</p>
        <p class="txt">02)<br>000 · 0000</p>
        <p class="txt2">평일 09:00 ~ 18:00</p>
        <p class="txt3">주말 및 공휴일 휴무</p>
      </div>
      <div class="faq">
        <nuxt-link to="/pub/HOM/HOM001M02" class="vlink basic">
          <p class="tit">자주하는 질문</p>
          <p class="txt">궁금한 점을<br>해결해<br>드리겠습니다.</p>
        </nuxt-link>
      </div>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup>

const type1 = ref(false)
const type2 = ref(true)

// const idx = ref()
// const toggleActive = (event) => {
//   const lis = event.target.parentElement.querySelectorAll('li')
//   const index = Array.from(lis).indexOf(event.target)
//   idx.value = index  

//   const liElements = document.querySelectorAll(".business_list li")
  
//   if (lis[idx.value].classList.contains('on')) {
//     lis[idx.value].classList.remove('on');
//   } else {
//     liElements.forEach((li) => {
//       li.classList.remove('on');
//     });
//     lis[idx.value].classList.add("on");
//   }
// };

// export default {
//   setup() {
//     //const isActive = ref(false);

//     // const toggleActive = () => {
//     //   this.isActive.value = !isActive.value;
//     // };

//     // const toggleActive = (event) => {
//     //   console.log(event.target);  // This logs the clicked DOM element
//     // }

//     return {
//       //isActive,
//       //toggleActive
//     }
//   }  
// }
</script> 