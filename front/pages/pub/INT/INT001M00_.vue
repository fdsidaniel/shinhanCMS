<template>

  <div class="aicms_intro_wrap">
    
    <div class="aicms_intro">
      
      <div class="intro_top">
        <h2>지능형 대금관리시스템</h2>
        <h3>Artificial Intelligence Cash Management System</h3>
        <p class="img"><img src="../../../assets/images/img_aicms.png" alt="aicms 소개 이미지"></p>
      </div>
  
      <div class="intro_row_1">
        <p class="tit"><strong>성공적인 사업을 위한</strong><br>시작부터 끝까지</p>

        <div class="rolling_box">
          <ul class="rolling_list">
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
                <p class="tit">AI 학습을 통한 서류 자동 검증 화</p>
                <div class="txt">계약 · 협약 · 집행 별 문서 관리 표준화 및 검증 자동화<br>AI 도입을 통한 업무 향상성 비약적 증가</div>
              </div>
              <p class="img"><img src="../../../assets/images/img_aicms_intro03.png" alt="AI 학습을 통한 서류 자동 검증 화 이미지"></p>
            </li>
          </ul>
        </div>
      </div>

      <div class="intro_row_2">
        <p class="tit"><strong>AICMS</strong><br>무엇이 다른가요?</p>

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
          <div class="circle_small_bottom_left"><span>문서 양식<br>확장 관리</span><i></i></div>
          <div class="circle_small_bottom_right"><span>온라인 정산 확정<br>반납금 관리</span></div>
        </div>
      </div>

      <div class="intro_row_3">
        <p class="tit"><strong>기관별로</strong><br>AICMS에서는 어떤 서비스를 받을까?</p>

        <div class="service_box" :class="{ 'active': serviceBoxActive }">
          <div class="org_left">
            <p>수행기관</p>
            <dl>
              <dt>편하고 빠른 업무</dt>
              <dd>자금 투명성<br>확보</dd>
              <dd>지급 프로세스<br>효율성</dd>
              <dd>서류<br>검증 시간<br>대폭 축소</dd>
              <dd>AI-OCR<br>판독 · 교정<br>검증 · 확인</dd>
            </dl>
          </div>
          <div class="org_right">
            <p>발주기관</p>
            <dl>
              <dt>혁신적인 서비스 구축 토대 마련</dt>
              <dd>주기적 모니터링<br>환경 확보</dd>
              <dd>자동화 기술<br>적용</dd>
              <dd>안전한<br>대금지급<br>프로세스 제공</dd>
              <dd>AI 기반의<br>OCR</dd>
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

// var scrollPostion = 0

// handleScroll = (e) => {
//   this.scrollPostion = e.target.scrollTop;

//   if (this.scrollPosition > 100) {
//     console.log("UP")
//   } else {
//     console.log("DOWN")
//   }
// }


// const scrollContainer = ref(null);

// const handleScroll = () => {
//   // 스크롤 이벤트 처리
//   if (scrollContainer.value) {
//     console.log('스크롤 이벤트 발생:', scrollContainer.value.scrollTop);
//   }
// };

const circleActive = ref(false)
const serviceBoxActive = ref(false)
function logScroll() {  
  if (window.scrollY > 1400) {
    circleActive.value = true
    //console.log(window.scrollY)
  }
  if (window.scrollY > 2199) {
    serviceBoxActive.value = true
  }
}

window.addEventListener('scroll', logScroll)

// const over_1 = ref(true)
// const over_2 = ref(false)
// const over_3 = ref(false)
// let startRolling = 'start_1'

// const idx = ref();
// const handleMouseOver = (event) => {
//   const lis = event.target.parentElement.querySelectorAll('li');
//   const index = Array.from(lis).indexOf(event.target);
//   idx.value = index + 1;

//   over_1.value = false
//   over_2.value = false
//   over_3.value = false

//   if (idx.value == 1) {
//     over_1.value = true
//     startRolling = 'start_1'
//   } else if (idx.value == 2) {
//     over_2.value = true
//     startRolling = 'start_2'
//   } else if (idx.value == 3) {
//     over_3.value = true
//     startRolling = 'start_3'
//   }
// };


/*
let rolling_1
let rolling_2
let rolling_3

rolling_1 = setInterval(() => {
  over_1.value = true
  over_2.value = false
  over_3.value = false
  clearInterval(rolling_1)
}, 1000)

rolling_2 = setInterval(() => {
  over_1.value = false
  over_2.value = true
  over_3.value = false
  clearInterval(rolling_2)
}, 2000)

rolling_3 = setInterval(() => {
  over_1.value = false
  over_2.value = false
  over_3.value = true
  clearInterval(rolling_3);
}, 3000)


const over_1 = ref(true)
const over_2 = ref(false)
const over_3 = ref(false)

const idx = ref();
const handleMouseOver = (event) => {
  const lis = event.target.parentElement.querySelectorAll('li');
  const index = Array.from(lis).indexOf(event.target);
  idx.value = index + 1;

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
};
*/

const over_1 = ref(true)
const over_2 = ref(false)
const over_3 = ref(false)

let rolling_1
let rolling_2
let rolling_3
let intervalId = null;

const idx = ref();
const handleMouseOver = (event) => {
  const lis = event.target.parentElement.querySelectorAll('li');
  const index = Array.from(lis).indexOf(event.target);
  idx.value = index + 1;

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
  stopRolling()
};

const startRolling_1 = () => {
  rolling_1 = setInterval(() => {
    over_1.value = true
    over_2.value = false
    over_3.value = false
    clearInterval(rolling_1)
    console.log("롤링 시작1")
  }, 1000)
}

const startRolling_2 = () => {
  rolling_2 = setInterval(() => {
    over_1.value = false
    over_2.value = true
    over_3.value = false
    clearInterval(rolling_2)
    console.log("롤링 시작2")
  }, 3000)
}

const startRolling_3 = () => {
  rolling_3 = setInterval(() => {
    over_1.value = false
    over_2.value = false
    over_3.value = true
    clearInterval(rolling_3)
    console.log("롤링 시작3")
  }, 5000)
}

const begin = () => {
  setTimeout(() => {
    startRolling_1()
    startRolling_2()
    startRolling_3()
    console.log("시작")
  }, 1000);
};

const startRolling = () => {
  // if (!intervalId) {
  //   intervalId = setInterval(() => {
  //     startRolling_1()
  //     startRolling_2()
  //     startRolling_3()
  //   }, 7000);
  // }

  setInterval(() => {
    startRolling_1()
    startRolling_2()
    startRolling_3()
  }, 7000);
};

const stopRolling = () => {
  // 롤링 중지
  // if (intervalId) {
  //   clearInterval(intervalId);
  //   intervalId = null;
  //   console.log("롤링 중지")
  // }
  clearInterval(rolling_1)
  clearInterval(rolling_2)
  clearInterval(rolling_3)
  console.log("롤링 중지")
};

// 컴포넌트가 마운트될 때 롤링 시작
onMounted(() => {
  begin();
  startRolling();
});

onBeforeUnmount(() => {
  stopRolling();
});

const handleMouseOut = () => {
  if (idx.value == 1) {
    //startRolling_1()
    //startRolling1()
  } else if (idx.value == 2) {
    //startRolling_2()
    //startRolling2()
  } else if (idx.value == 3) {
    //startRolling_3()
    //startRolling3()
  }
};



</script> 