<template>

  <div class="cms_main_wrap">
    
    <div class="main_top">
        <!-- 기관현황 -->
        <div class="state_org_box">
            <div class="left">
                <h2>기관현황</h2>
                <div class="config">
                    <span class="org_cnt">999개 기관</span>
                    <nuxt-link to="" class="btn_org_cfg">기관 설정</nuxt-link>
                </div>
            </div>
            <div class="right">
                <ul class="state_tot">
                    <li class="tot">
                        <p>이체현황 총</p>
                        <strong class="transfer_tot" :class="{ 'zero': transferTot == 0 }">0</strong>
                        <v-btn class="vbtn line sample" size="small" @click="transferTotType">카운팅</v-btn>
                    </li>
                    <li class="normal">
                        <p>이체 정상</p>
                        <strong class="transfer_normal" :class="{ 'zero': transferNormal == 0 }">0</strong>
                        <v-btn class="vbtn line sample" size="small" @click="transferNormalType">카운팅</v-btn>
                    </li>
                    <li class="error">
                        <p>이체 오류</p>
                        <strong class="transfer_error" :class="{ 'zero': transferError == 0 }">0</strong>
                        <v-btn class="vbtn line sample" size="small" @click="transferErrorType">카운팅</v-btn>
                    </li>
                </ul>
            </div>
        </div>
        <!-- //기관현황 -->

        <!-- 기관별 오류 현황 -->
        <div class="state_org_err_box">
            <h3>기관별 오류 현황</h3>
            <div class="slide_wrap">
                <v-btn class="vbtn line btn_prev" :class="{ 'off' : btnPrevView }" size="small" @click="btnPrev">이전</v-btn>
                <div class="slide_box">
                    <ul class="slide_list" :style="{ width: liItemWidthTot + 'px', transform: 'translateX(' + move + 'px)' }">
                        <li>
                            <div class="box">
                                <div class="tit">
                                    <span>신한은행</span>
                                    <nuxt-link to="" class="btn_org_home">기관 홈 바로가기</nuxt-link>
                                    <v-btn class="vbtn btn_view_cfg on" size="small" @click="btnViewCfg">노출 기관 설정</v-btn>
                                </div>
                                <div class="before">
                                    <div>
                                        내용111
                                    </div>
                                </div>
                                <div class="after">
                                확장내용 111
                                </div>
                            </div>
                            <p class="btn_extend" @click="viewExtend">확장</p>
                        </li>
                        <li>
                            <div class="box">
                                <div class="tit">
                                    <span>한마정보통신</span>
                                    <nuxt-link to="" class="btn_org_home">기관 홈 바로가기</nuxt-link>
                                    <v-btn class="vbtn btn_view_cfg" size="small" @click="btnViewCfg">노출 기관 설정</v-btn>
                                </div>
                                <div class="before">
                                    <div>
                                        내용222
                                    </div>
                                </div>
                                <div class="after">
                                확장내용 222
                                </div>
                            </div>
                            <p class="btn_extend" @click="viewExtend">확장</p>
                        </li>
                        <li>
                            <div class="box">
                                <div class="tit">
                                    <span>신한기관정부</span>
                                    <nuxt-link to="" class="btn_org_home">기관 홈 바로가기</nuxt-link>
                                    <v-btn class="vbtn btn_view_cfg" size="small" @click="btnViewCfg">노출 기관 설정</v-btn>
                                </div>
                                <div class="before">
                                    <div>
                                        내용333
                                    </div>
                                </div>
                                <div class="after">
                                확장내용 333
                                </div>
                            </div>
                            <p class="btn_extend" @click="viewExtend">확장</p>
                        </li>
                        <li>
                            <div class="box">
                                <div class="tit">
                                    <span>신한은행2</span>
                                    <nuxt-link to="" class="btn_org_home">기관 홈 바로가기</nuxt-link>
                                    <v-btn class="vbtn btn_view_cfg" size="small" @click="btnViewCfg">노출 기관 설정</v-btn>
                                </div>
                                <div class="before">
                                    <div>
                                        내용444
                                    </div>
                                </div>
                                <div class="after">
                                확장내용 444
                                </div>
                            </div>
                            <p class="btn_extend" @click="viewExtend">확장</p>
                        </li>
                        <li>
                            <div class="box">
                                <div class="tit">
                                    <span>신한은행3</span>
                                    <nuxt-link to="" class="btn_org_home">기관 홈 바로가기</nuxt-link>
                                    <v-btn class="vbtn btn_view_cfg" size="small" @click="btnViewCfg">노출 기관 설정</v-btn>
                                </div>
                                <div class="before">
                                    <div>
                                        내용555
                                    </div>
                                </div>
                                <div class="after">
                                확장내용 555
                                </div>
                            </div>
                            <p class="btn_extend" @click="viewExtend">확장</p>
                        </li>
                        <li>
                            <div class="box">
                                <div class="tit">
                                    <span>신한기관정부</span>
                                    <nuxt-link to="" class="btn_org_home">기관 홈 바로가기</nuxt-link>
                                    <v-btn class="vbtn btn_view_cfg" size="small" @click="btnViewCfg">노출 기관 설정</v-btn>
                                </div>
                                <div class="before">
                                    <div>
                                        내용666
                                    </div>
                                </div>
                                <div class="after">
                                확장내용 666
                                </div>
                            </div>
                            <p class="btn_extend" @click="viewExtend">확장</p>
                        </li>
                        <li>
                            <div class="box">
                                <div class="tit">
                                    <span>신한기관정부2</span>
                                    <nuxt-link to="" class="btn_org_home">기관 홈 바로가기</nuxt-link>
                                    <v-btn class="vbtn btn_view_cfg" size="small" @click="btnViewCfg">노출 기관 설정</v-btn>
                                </div>
                                <div class="before">
                                    <div>
                                        내용777
                                    </div>
                                </div>
                                <div class="after">
                                확장내용 777
                                </div>
                            </div>
                            <p class="btn_extend" @click="viewExtend">확장</p>
                        </li>
                    </ul>
                </div>
                <v-btn class="vbtn line btn_next" :class="{ 'off' : btnNextView }" size="small" @click="btnNext">다음</v-btn>
            </div>
        </div>
        <!-- //기관별 오류 현황 -->
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup>

// 이체현황 총
const transferTot = ref('160')
const transferTotType = () => {
    const element = document.querySelector('.transfer_tot')
    let delay = 500 // 딜레이
    let fps = 100 // 프레임
    setTimeout(() => {
        if(transferTot.value == 0){
            element.innerHTML = '0'
        } else {
            const each = Math.ceil(transferTot.value/fps)
            let time = 0
            
            for(let i=0; i<=transferTot.value; i+=each){
                setTimeout(() => {
                    element.innerHTML = i
                }, 20*time);
                if(i+each>transferTot.value){
                    setTimeout(() => {
                        element.innerHTML = transferTot.value
                    }, 20*(time+1))
                }
                time++;
            }
        }
    }, delay)
};
// 이체 정상
const transferNormal = ref('20')
const transferNormalType = () => {
    const element = document.querySelector('.transfer_normal')
    let delay = 1000 // 딜레이
    let fps = 100 // 프레임
    setTimeout(() => {
        if(transferNormal.value == 0){
            element.innerHTML = '0'
        } else {
            const each = Math.ceil(transferNormal.value/fps)
            let time = 0
            
            for(let i=0; i<=transferNormal.value; i+=each){
                setTimeout(() => {
                    element.innerHTML = i
                }, 20*time);
                if(i+each>transferNormal.value){
                    setTimeout(() => {
                        element.innerHTML = transferNormal.value
                    }, 20*(time+1))
                }
                time++;
            }
        }
    }, delay)
};
// 이체 오류
const transferError = ref('0')
const transferErrorType = () => {
    const element = document.querySelector('.transfer_error')
    let delay = 1500 // 딜레이
    let fps = 100 // 프레임
    setTimeout(() => {
        if(transferError.value == 0){
            element.innerHTML = '0'
        } else {
            const each = Math.ceil(transferError.value/fps)
            let time = 0
            
            for(let i=0; i<=transferError.value; i+=each){
                setTimeout(() => {
                    element.innerHTML = i
                }, 20*time);
                if(i+each>transferError.value){
                    setTimeout(() => {
                        element.innerHTML = transferError.value
                    }, 20*(time+1))
                }
                time++;
            }
        }
    }, delay)
};

// 기관 노출
const btnViewCfgIdx = ref()
const btnViewCfg = (event) => {
    const elements = event.target.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.btn_view_cfg')
    const index = Array.from(elements).indexOf(event.target)
    btnViewCfgIdx.value = index
    if(elements[btnViewCfgIdx.value].classList.contains("on")){
        elements[btnViewCfgIdx.value].classList.remove("on")
    }else{
        elements[btnViewCfgIdx.value].classList.add("on")
    }
};

// 확장 버튼
const btnIdx = ref()
let ulTemp
let liTemp
const viewExtend = (event) => {
    const lis = event.target.parentElement.parentElement.querySelectorAll('.btn_extend')
    const index = Array.from(lis).indexOf(event.target)
    btnIdx.value = index
    const liElements = document.querySelectorAll(".slide_list li .btn_extend")

    if (lis[btnIdx.value].parentElement.classList.contains('open')) {
        lis[btnIdx.value].parentElement.classList.remove('open')
        lis[btnIdx.value].innerHTML = '확장'
        
    } else {
        liElements.forEach((li) => {
            li.parentElement.classList.remove('open')
        });
        lis[btnIdx.value].parentElement.classList.add("open")
        lis[btnIdx.value].innerHTML = '축소'
    }
};
// slide li width
let liMarginLeft = 20 // li margin-left
let liItem // li
let liItemWidth // li width
const liWidth = () => {
    liItem = document.querySelector('.slide_list li')
    liItemWidth = liItem.offsetWidth + liMarginLeft
}
// slide ul width
let liItemAll // li all
let liItemCnt // li length
let slidesPerView = 4 // slide view cnt
const slidesPerViewMove = ref(0)
//let liItemWidthTot
const liItemWidthTot = ref(0); // li all width
const ulWidth = () => {
    liItemAll =  document.querySelectorAll(".slide_list li")
    liItemCnt = liItemAll.length
    liItemWidthTot.value = liItemCnt * liItemWidth - liMarginLeft
    slidesPerViewMove.value = liItemCnt - slidesPerView
    ulTemp = liItemWidthTot.value
};
// 이전 다음 버튼
const btnPrevView = ref(true)
const btnNextView = ref(true)
const btnPrevNextView = () => {
    if(slidesPerViewMove.value < liItemCnt){
        btnNextView.value = false
    }
    if(slidesPerViewMove.value === 0){
        btnNextView.value = true
    }
    if(slidesPerViewMove.value < liItemCnt - slidesPerView){
        btnPrevView.value = false
    }else if(slidesPerViewMove.value === liItemCnt - slidesPerView){
        btnPrevView.value = true
    }
    // 확장 닫기
    const lielements = document.querySelectorAll('.slide_list li')
    lielements.forEach(element => {
        element.classList.remove('open')
    })
};
const move = ref(0);
const btnPrev = () => {
    if(slidesPerViewMove.value < liItemCnt - slidesPerView){
        slidesPerViewMove.value +=1
        move.value += liItemWidth;
        slideViewLastLeft -= 1
        slideViewLastRight -= 1
    }
    if(slidesPerViewMove.value === liItemCnt - slidesPerView){
        console.log('슬라이드 : 처음')
    }
    btnPrevNextView()
    slideView()   
};
const btnNext = () => {
    if(slidesPerViewMove.value > 0){
        slidesPerViewMove.value -=1
        move.value -= liItemWidth;
        slideViewLastLeft += 1
        slideViewLastRight += 1
    }
    if(slidesPerViewMove.value === 0){
        console.log('슬라이드 : 마지막')
    }
    btnPrevNextView()
    slideView()
};
// slideView last li
let slideViewLastLeft = slidesPerView - 2 // slide view last left li
let slideViewLastRight = slidesPerView - 1 // slide view last right li
const slideView = () => {
    const lielements = document.querySelectorAll('.slide_list li');
    lielements.forEach(element => {
        element.classList.remove('last')
    })

    lielements[slideViewLastLeft].classList.add('last')
    lielements[slideViewLastRight].classList.add('last')
}

onMounted(() => {
    transferTotType() // 이체현황 총
    transferNormalType() // 이체 정상
    transferErrorType() // 이체 오류

    liWidth() //slide li width
    ulWidth() //slide ul width
    btnPrevNextView() // 이전 다음 버튼
    slideView() // slideView last li
})

onBeforeUnmount(() => {
  
})


</script> 