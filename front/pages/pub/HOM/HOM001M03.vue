<template>

  <div class="main_wrap after">
    <div class="top_txt">
      김수행님,<br>
      진행중인 TASK가 <b>5</b>건이 있습니다.
      <nuxt-link to="/pub/HOM/HOM001M03" class="vlink basic more">진행중인 TASK 더보기</nuxt-link>
      <div class="r_box">
        <nuxt-link to="/pub/HOM/HOM001M03" class="vlink basic calculate">정산 중<strong>1건</strong></nuxt-link>
      </div>
      <div class="final_time other">최종 접속 <b>2023년 12월 29일 13시 39분</b></div>
    </div>

    <div class="task_ing">
      <div class="task_ing_list">
        <div class="link">
          <span class="date">10.09~23.11.23</span>
          <p class="tit">차세대 AI-OCR 사업 01</p>
          <p class="tit_task">차세대 AI-OCR TASK명</p>
        </div>
        <ul class="cnt_box">
          <li class="ico_1">
            <span>건별지급 승인대기</span>
            <strong>3,000건</strong>
          </li>
          <li class="ico_2">
            <span>건별지급 승인완료</span>
            <strong>10건</strong>
          </li>
        </ul>
      </div>
      <div class="task_ing_list">
        <div class="link">
          <span class="date">10.09~23.11.23</span>
          <p class="tit">차세대 AI-OCR 사업 01</p>
          <p class="tit_task">TASK명 2줄까지 들어갑니다. TASK명 2줄까지 들어갑니다. 2줄 넘어가면 말줄임 처리 됩니다.</p>
        </div>
        <ul class="cnt_box">
          <li class="ico_1">
            <span>건별지급 승인대기</span>
            <strong>3,000건</strong>
          </li>
          <li class="ico_2">
            <span>건별지급 승인완료</span>
            <strong>10건</strong>
          </li>
        </ul>
      </div>
      <div class="task_ing_list">
        <p class="nothing">진행중인 TASK가 없습니다.</p>
      </div>
      <div class="task_ing_list">
        <div class="link">
          <span class="date">10.09~23.11.23</span>
          <p class="tit">차세대 AI-OCR 사업 01</p>
          <p class="tit_task">차세대 AI-OCR TASK명</p>
        </div>
        <ul class="cnt_box">
          <li><nuxt-link to="/pub/HOM/HOM001M03" class="vlink basic">일괄 집행</nuxt-link></li>
        </ul>
      </div>
    </div>

    <div class="mid">
      <div class="qmenu_box flex1">
        <p class="tit">수행기관 빠른메뉴</p>
        <ul class="qmenu_list">
          <li class="ico_6"><nuxt-link to="/pub/HOM/HOM001M03" class="vlink basic">공고조회</nuxt-link></li>
          <li class="ico_7"><nuxt-link to="/pub/HOM/HOM001M03" class="vlink basic">사업 공고 제안 접수</nuxt-link></li>
          <li class="ico_8"><nuxt-link to="/pub/HOM/HOM001M03" class="vlink basic">사업참여(TASK) 신청</nuxt-link></li>
          <li class="ico_9"><nuxt-link to="/pub/HOM/HOM001M03" class="vlink basic">집행 내역 조회</nuxt-link></li>
        </ul>
      </div>
      <!-- <div class="right_box"> 2023-11-23 삭제
        <nuxt-link to="/pub/HOM/HOM001M03" class="vlink basic calculate"><strong>1</strong>정산중</nuxt-link>
        <nuxt-link to="/pub/HOM/HOM001M03" class="vlink basic return"><strong>5</strong>반납대기</nuxt-link>
      </div> -->
    </div>

    <div class="notice_box">
      <div class="box">
        <p class="tit">알려드려요</p>
        <ul>
          <li>
            <nuxt-link to="/pub/HOM/HOM001M03" class="vlink basic">
              <p class="stit">시스템 정기 점검으로 인한 서비스 이용 제한 안내시스템 정기 점검으로 인한 서비스 이용 제한 안내시스템 정기 점검으로 인한 서비스 이용 제한 안내</p>
              <span class="date">2023.08.29</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="box">
        <p class="tit">사업공고</p>
        <ul>
          <li>
            <nuxt-link to="/pub/HOM/HOM001M03" class="vlink basic">
              <p class="stit">한마 사업공고 안내</p>
              <span class="date">2023.08.29</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="btm">
      <div class="guide">
        <p class="tit">이용자 가이드</p>
        <div class="btn">
          <nuxt-link to="/pub/HOM/HOM001M03" class="vlink order">발주기관용</nuxt-link>
          <nuxt-link to="/pub/HOM/HOM001M03" class="vlink execution">수행기관용</nuxt-link>
        </div>
      </div>
      <div class="guide">
        <p class="tit">수행기관 제출 건수</p>
        <div class="btn">
          <nuxt-link to="/pub/HOM/HOM001M03" class="vlink noicon">공고 제안 접수<span><strong>10</strong>건</span></nuxt-link>
        </div>
      </div>
      <div class="call">
        <p class="tit">문의처</p>
        <p class="txt">02)<br>000 · 0000</p>
        <p class="txt2">평일 09:00 ~ 18:00</p>
        <p class="txt3">주말 및 공휴일 휴무</p>
      </div>
      <div class="faq">
        <nuxt-link to="/pub/HOM/HOM001M03" class="vlink basic">
          <p class="tit">자주하는 질문</p>
          <p class="txt">궁금한 점을<br>해결해<br>드리겠습니다.</p>
        </nuxt-link>
      </div>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script>
export default {
  setup() {
    //const isActive = ref(false);

    // const toggleActive = () => {
    //   this.isActive.value = !isActive.value;
    // };

    // const toggleActive = (event) => {
    //   console.log(event.target);  // This logs the clicked DOM element
    // }

    return {
      //isActive,
      //toggleActive
    }
  }  
}
</script> 