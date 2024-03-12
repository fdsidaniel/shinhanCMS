<template>

  <div class="aicms_intro_wrap">
    
    <div class="aicms_intro">
      
      <div class="intro_top">
        <h2><div><span>지능형 대금관리시스템</span></div><i></i></h2>
        <!-- <h3>Artificial Intelligence Cash Management System</h3> -->
        <div class="waviy">
          <span style="--i:1">A</span>
          <span style="--i:2">r</span>
          <span style="--i:3">t</span>
          <span style="--i:4">i</span>
          <span style="--i:5">f</span>
          <span style="--i:6">i</span>
          <span style="--i:7">c</span>
          <span style="--i:8">i</span>
          <span style="--i:9">a</span>
          <span style="--i:10" class="mr_11">l</span>

          <span style="--i:11">I</span>
          <span style="--i:12">n</span>
          <span style="--i:13">t</span>
          <span style="--i:14">e</span>
          <span style="--i:15">l</span>
          <span style="--i:16">l</span>
          <span style="--i:17">i</span>
          <span style="--i:18">g</span>
          <span style="--i:19">e</span>
          <span style="--i:20">n</span>
          <span style="--i:21">c</span>
          <span style="--i:22" class="mr_11">e</span>

          <span style="--i:23">C</span>
          <span style="--i:24">a</span>
          <span style="--i:25">s</span>
          <span style="--i:26" class="mr_11">h</span>

          <span style="--i:27">M</span>
          <span style="--i:28">a</span>
          <span style="--i:29">n</span>
          <span style="--i:30">a</span>
          <span style="--i:31">g</span>
          <span style="--i:32">e</span>
          <span style="--i:33">m</span>
          <span style="--i:34">e</span>
          <span style="--i:35">n</span>
          <span style="--i:36" class="mr_11">t</span>

          <span style="--i:37">S</span>
          <span style="--i:38">y</span>
          <span style="--i:39">s</span>
          <span style="--i:40">t</span>
          <span style="--i:41">e</span>
          <span style="--i:42">m</span>
        </div>
        <div class="img">
          <img src="../../../assets/images/img_aicms.png" alt="aicms 소개 이미지">
          <i class="dot"></i>
          <i class="line1"></i>
          <div class="line2">
            <i></i>
          </div>
        </div>
      </div>
  
      <div class="intro_row_1">
        <p class="tit" :class="{ 'active': introRow1Tit }"><strong>성공적인 사업을 위한</strong><br>시작부터 끝까지</p>

        <div class="rolling_box">
          <ul class="rolling_list" :class="{ 'active': introRow1RollingList }">
            <li class="" :class="{ 'active': over_1 }" @mouseenter="handleMouseOver" @mouseleave="handleMouseOut">
              <div class="con">
                <p class="tit">플랫폼과 기관 연계</p>
                <div class="txt">기관별 <span>표준화된 관리시스템</span>을 제공<br>실시간 모니터링 가능한 자금관리 전용 시스템 취득<br>PMS 시스템과 협약 연계 및 집행 · 정산 데이터 연동</div>
              </div>
              <p class="img"><img src="../../../assets/images/img_aicms_intro01.png" alt="플랫폼과 기관 연계 이미지"></p>
            </li>
            <li class="" :class="{ 'active': over_2 }" @mouseenter="handleMouseOver" @mouseleave="handleMouseOut">
              <div class="con">
                <p class="tit">안전한 대금 관리</p>
                <div class="txt">시스템 일원화로 자금 관리 <span>투명성</span>과 <span>효율성</span> 보장<br><span>다단계 결재</span>를 통한 지급 승인과 1일, 1회 지급한도 관리<br>인정/불인정을 통한 정산 보고서 <span>자동 생성</span></div>
              </div>
              <p class="img"><img src="../../../assets/images/img_aicms_intro02.png" alt="안전한 대금 관리 이미지"></p>
            </li>
            <li class="" :class="{ 'active': over_3 }" @mouseenter="handleMouseOver" @mouseleave="handleMouseOut">
              <div class="con">
                <p class="tit">AI 도입을 통한 업무 생산성 비약적 증가</p>
                <div class="txt">계약 · 협약 · 집행 별 문서 관리 표준화 및 검증 자동화<br>AI 학습을 통한 서류 검증 자동화</div>
              </div>
              <p class="img"><img src="../../../assets/images/img_aicms_intro03.png" alt="AI 학습을 통한 서류 검증 자동화 이미지"></p>
            </li>
          </ul>
        </div>
      </div>

      <div class="intro_row_2">
        <p class="tit" :class="{ 'active': introRow2Tit }"><strong>AICMS</strong><br>무엇이 다른가요?</p>

        <div class="box" :class="{ 'active': circleActive }">
          <div class="circle_big">            
            <div class="circle_small">
              <p class="img"><img src="../../../assets/images/logo_shinhan_w.svg" alt="shinhan"></p>
              <b>신한은행</b>과 함께<br>계약관리부터 온라인 정산까지<br><b>다양한 서비스</b> 이용해 보세요.
            </div>
            <span class="line_top_left"><span></span></span>
            <span class="line_top_right"><span></span></span>
            <span class="line_bottom_left"><span></span></span>
            <span class="line_bottom_right"><span></span></span>
          </div>
          <div class="circle_small_top_left"><span>계약 · 협약 관리</span><i class="begin"></i><i class="end"></i></div>
          <div class="circle_small_top_right"><span>집행 방식 다양화<i class="top"></i><i class="btm"></i></span></div>
          <div class="circle_small_bottom_left"><span>문서 관리<br>AI-OCR</span><i></i></div>
          <div class="circle_small_bottom_right"><span>온라인 정산 확정<br>반납금 관리</span></div>
        </div>
      </div>

      <div class="intro_row_3">
        <p class="tit" :class="{ 'active': introRow3Tit }"><strong>기관별로</strong><br>AICMS에서는 어떤 서비스를 받을까?</p>

        <div class="service_box" :class="{ 'active': serviceBoxActive }">
          <div class="org_left">
            <p>수행기관</p>
            <dl>
              <dt>편하고 빠른 업무</dt>
              <dd>자금 투명성<br>확보</dd>
              <dd>지급 프로세스<br>효율성</dd>
              <dd>AI-OCR<br>판독 · 교정<br>검증 · 확인</dd>
              <dd>서류<br>검증 시간<br>대폭 축소</dd>              
            </dl>
          </div>
          <div class="org_right">
            <p>발주기관</p>
            <dl>
              <dt>혁신적인 서비스 구축 토대 마련</dt>
              <dd>AI 기반의<br>OCR</dd>
              <dd>안전한<br>대금지급<br>프로세스 제공</dd>
              <dd>주기적 모니터링<br>환경 확보</dd>              
              <dd>정산 보고서<br>자동 생성</dd>
            </dl>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup>

// 스크롤 이벤트
const introRow1Tit = ref(false)
const introRow1RollingList = ref(false)

const introRow2Tit = ref(false)
const introRow3Tit = ref(false)

const circleActive = ref(false)
const serviceBoxActive = ref(false)
function logScroll() {  
  // if (window.scrollY == 0) {
  //   introRow1Tit.value = false
  //   introRow1RollingList.value = false

  //   introRow2Tit.value = false
  //   introRow3Tit.value = false

  //   circleActive.value = false
  //   serviceBoxActive.value = false
  // }
  
  if (window.scrollY > 140) {
    introRow1Tit.value = true
  }
  if (window.scrollY > 300) {
    introRow1RollingList.value = true
    startRolling()
  }
  if (window.scrollY > 800) {
    introRow2Tit.value = true
  }
  if (window.scrollY > 1700) {
    introRow3Tit.value = true
  }

  if (window.scrollY > 1400) {
    circleActive.value = true
  }
  if (window.scrollY > 2000) {
    serviceBoxActive.value = true
  }
  //console.log(window.scrollY)
}
window.addEventListener('scroll', logScroll)

// 마우스 오버 이벤트
const over_1 = ref(true)
const over_2 = ref(false)
const over_3 = ref(false)
const idx = ref()
const handleMouseOver = (event) => {
  const lis = event.target.parentElement.querySelectorAll('li')
  const index = Array.from(lis).indexOf(event.target)
  idx.value = index + 1

  over_1.value = false
  over_2.value = false
  over_3.value = false

  if (idx.value == 1) {
    over_1.value = true
  } else if (idx.value == 2) {
    over_2.value = true
  } else if (idx.value == 3) {
    over_3.value = true
  }
  // 롤링 중지
  isMouseOver = true
  stopRolling()
}

// 롤링 이벤트
let rolling_1
let rolling_2
let rolling_3
let intervalId = null
let isMouseOver = false

const startRolling = () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      if (!isMouseOver) {
        // 마우스 오버 중이 아닌 경우에만 롤링

        if (over_1.value == true) {
          over_1.value = false
          over_2.value = true
          over_3.value = false
        } else if (over_2.value == true) { 
          over_1.value = false
          over_2.value = false
          over_3.value = true
        } else if (over_3.value == true) {
          over_1.value = true
          over_2.value = false
          over_3.value = false
        }
      }
    }, 3000)
  }
}

// 롤링 중지
const stopRolling = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null    
  }
}

// 마우스 아웃 롤링 시작
const handleMouseOut = () => {
  isMouseOver = false
  startRolling()
}

// 컴포넌트가 마운트될 때 롤링 시작
onMounted(() => {
  //startRolling()
  document.body.classList.add('aicms')
})

// 컴포넌트가 언마운트될 때 인터벌 정리
onBeforeUnmount(() => {
  stopRolling()
  document.body.classList.remove('aicms')
})


</script> 