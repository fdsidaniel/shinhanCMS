<template>

  <div class="title_box">
    <h2>메인 테스트</h2>
    <ul class="loc">
      <li>홈</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="sample_wrap">

        <!-- <v-tabs v-model="tab" class="tab_basics">
            <v-tab value="tab1">tab1</v-tab>
            <v-tab value="tab2">tab2</v-tab>
        </v-tabs>

        <v-window v-model="tab" class="tab_con">
            <v-window-item value="tab1">
                tab1
            </v-window-item>

            <v-window-item value="tab2">
                tab2
            </v-window-item>
        </v-window> -->

        <v-tabs v-model="tab" class="">
            <v-tab v-for="(tab, index) in tabCount" :key="index" :value="'tab' + (index + 1)">
                기관{{ index + 1 }}
            </v-tab>        
        </v-tabs>
        <v-btn @click="addTab">기관 추가</v-btn>
        <v-btn @click="delTab">기관 삭제</v-btn>
        

        <v-window v-model="tab" class="tab_con">
            <v-window-item v-for="(tab, index) in tabCount" :key="index" :value="'tab' + (index + 1)">
                내용{{ index + 1 }} content
            </v-window-item>
        </v-window>

        <h3>숫자 카운팅 - 프레임 : 100fps / 딜레이 : 0.5s</h3>
        <div class="d_flex">
            <div class="">
                <p class="mb_10">기본 카운트 업</p>
                <v-text-field label="타이틀" v-model="maxNum1" :rules="maxNum1Rules" placeholder="숫자를 입력해주세요" class="i_basics none_details"></v-text-field>            
                <div class="count_up number1">0</div>
                <v-btn class="vbtn line" size="small" @click="countingType1">카운팅</v-btn>
            </div>
            <div class="ml_20 mr_20">
                <p class="mb_10">한자리씩 순서대로 카운트 업</p>
                <v-text-field label="타이틀" v-model="maxNum2" :rules="maxNum2Rules" placeholder="숫자를 입력해주세요" class="i_basics none_details"></v-text-field>
                <div class="count_up number2">0</div>
                <v-btn class="vbtn line" size="small" @click="countingType2">카운팅</v-btn>
            </div>
            <div class="">
                <p class="mb_10">각자리별 따로 카운트업</p>
                <v-text-field label="타이틀" v-model="maxNum3" :rules="maxNum3Rules" placeholder="숫자를 입력해주세요" class="i_basics none_details"></v-text-field>
                <div class="count_up number3">0</div>
                <v-btn class="vbtn line" size="small" @click="countingType3">카운팅</v-btn>
            </div>
        </div>

        <h3>클래스 분기 처리</h3>
        <p :class="{ 'color_black': tempData1 > 0 }"> {{ tempData1 }} </p>
        <p :class="{ 'color_black': tempData2 > 0 }"> {{ tempData2 }} - "0 보다 크면 color_black addClass"</p>

        <h3>Slide</h3>
        <div class="slide_wrap">
            <!-- <v-btn class="vbtn line btn_prev" size="small" @click="btnPrev" v-if="btnPrevView">이전</v-btn> -->
            <v-btn class="vbtn line btn_prev" :class="{ 'off' : btnPrevView }" size="small" @click="btnPrev">이전</v-btn>
            <div class="slide_box">
                <!-- <ul class="slide_list" :style="{width: `${liItemWidthTot}`+ 'px', transform: translateX(`${move}` + 'px') , marginLeft: `${move}`+ 'px'}"> -->
                <ul class="slide_list" :style="{ width: liItemWidthTot + 'px', transform: 'translateX(' + move + 'px)' }">
                    <li>
                        <div class="box">
                            <p class="tit">신한은행</p>
                            <div class="before">
                                <div>
                                    내용111
                                </div>
                            </div>
                            <div class="after">
                            확장내용 111
                            </div>
                            <!-- <v-btn class="vbtn line btn_extend" size="small" @click="viewExtend">버튼</v-btn> -->
                        </div>
                        <p class="btn_extend" @click="viewExtend">버튼</p>
                    </li>
                    <li>
                        <div class="box">
                            <p class="tit">한마정보통신</p>
                            <div class="before">
                                <div>
                                    내용222
                                </div>
                            </div>
                            <div class="after">
                            확장내용 222
                            </div>
                            <!-- <v-btn class="vbtn line btn_extend" size="small" @click="viewExtend">버튼</v-btn> -->
                        </div>
                        <p class="btn_extend" @click="viewExtend">버튼</p>
                    </li>
                    <li>
                        <div class="box">
                            <p class="tit">신한기관정부</p>
                            <div class="before">
                                <div>
                                    내용333
                                </div>
                            </div>
                            <div class="after">
                            확장내용 333
                            </div>
                            <!-- <v-btn class="vbtn line btn_extend" size="small" @click="viewExtend">버튼</v-btn> -->
                        </div>
                        <p class="btn_extend" @click="viewExtend">버튼</p>
                    </li>
                    <li>
                        <div class="box">
                            <p class="tit">신한은행</p>
                            <div class="before">
                                <div>
                                    내용444
                                </div>
                            </div>
                            <div class="after">
                            확장내용 444
                            </div>
                            <!-- <v-btn class="vbtn line btn_extend" size="small" @click="viewExtend">버튼</v-btn> -->
                        </div>
                        <p class="btn_extend" @click="viewExtend">버튼</p>
                    </li>
                    <li>
                        <div class="box">
                            <p class="tit">신한은행</p>
                            <div class="before">
                                <div>
                                    내용555
                                </div>
                            </div>
                            <div class="after">
                            확장내용 555
                            </div>
                            <!-- <v-btn class="vbtn line btn_extend" size="small" @click="viewExtend">버튼</v-btn> -->
                        </div>
                        <p class="btn_extend" @click="viewExtend">버튼</p>
                    </li>
                    <li>
                        <div class="box">
                            <p class="tit">신한은행</p>
                            <div class="before">
                                <div>
                                    내용666
                                </div>
                            </div>
                            <div class="after">
                            확장내용 666
                            </div>
                            <!-- <v-btn class="vbtn line btn_extend" size="small" @click="viewExtend">버튼</v-btn> -->
                        </div>
                        <p class="btn_extend" @click="viewExtend">버튼</p>
                    </li>
                    <li>
                        <div class="box">
                            <p class="tit">신한은행</p>
                            <div class="before">
                                <div>
                                    내용777
                                </div>
                            </div>
                            <div class="after">
                            확장내용 777
                            </div>
                            <!-- <v-btn class="vbtn line btn_extend" size="small" @click="viewExtend">버튼</v-btn> -->
                        </div>
                        <p class="btn_extend" @click="viewExtend">버튼</p>
                    </li>
                </ul>
            </div>
            <v-btn class="vbtn line btn_next" :class="{ 'off' : btnNextView }" size="small" @click="btnNext">다음</v-btn>
            <!-- <v-btn class="vbtn line btn_next" size="small" @click="btnNext" v-if="btnNextView">다음</v-btn> -->
        </div>
    </div>

  </div>

</template>

<style scoped>
.count_up{padding:10px;}
  .color_black{color:#000;font-weight:600;}
</style>

<script setup >

const tab = ref('tab1')
const tabCount = ref(2) // 초기 탭 개수
const addTab = () => {
  tabCount.value++
}
const delTab = () => {
  tabCount.value--
}

const maxNum1 = ref('1234')
const maxNum1Rules = [
]
//let maxNum1 = 1234
const maxNum2 = ref('549876')
const maxNum2Rules = [
]
const maxNum3 = ref('759214')
const maxNum3Rules = [
]

/* 프레임 나눠서 카운트 업 */
const countingType1 = () => {
    const element = document.querySelector('.number1')
    let delay = 500
    let fps = 100
    setTimeout(() => {
        if(maxNum1.value == 0){
            element.innerHTML = '0'
        } else {
            /* 입력한 숫자를 fps에 걸쳐 0부터 올림. */
            const each = Math.ceil(maxNum1.value/fps)
            let time = 0
            
            for(let i=0; i<=maxNum1.value; i+=each){
                setTimeout(() => {
                    element.innerHTML = i
                }, 20*time);
                /* 딱 떨어지지 않는 숫자를 마지막에 그 숫자로 만들어주기 위함 */
                if(i+each>maxNum1.value){
                    setTimeout(() => {
                        element.innerHTML = maxNum1.value
                    }, 20*(time+1))
                }
                time++;
            }
        }
    }, delay)
};
/* 한자리씩 순서대로 카운트업 */
const countingType2 = () =>{
    const element = document.querySelector('.number2')

    /* 각자리로 나누어 올리기 위해 쪼개려는 것 */
    let current = new Array(maxNum2.value.length).fill(0);
    let arrayNum = String(maxNum2.value).split('').reverse();
    
    /* 올라갈 때 걸리는 시간 균등하게 하기위해. 단, 최대 0.06초씩은 되도록 */
    let fps = 100
    const total = arrayNum.reduce((pre, cur)=>Number(pre)+Number(cur))
    const eachTime = Math.min(1000/total, fps) // Math.min(1000/total, 60)

    let delay = 500
    setTimeout(() => {
        let time = 0
        for(let j=0; j<arrayNum.length; j++){
            for(let i = 0; i<=arrayNum[j]; i++){
                setTimeout(()=>{
                current[arrayNum.length-j-1]=i
                element.innerHTML = current.join('')
                }, eachTime*(time + i))
            }
            time += arrayNum[j]-1
        }
    }, delay)
};
const countingType3 = () =>{
    const element = document.querySelector('.number3')

    /* 각자리로 나누어 올리기 위해 쪼개려는 것 */
    let current = [];
    let arrayNum = String(maxNum3.value).split('')

    let delay = 500
    let fps = 100
    setTimeout(() => {
        for(let i = 0; i<10; i++){
            setTimeout(()=>{
                for(let j = 0; j<arrayNum.length; j++){
                if(i<=arrayNum[j]){
                    current.push(i)
                } else{
                    current.push(arrayNum[j])
                }
                }
                element.innerHTML = current.join('')
                current = []
            }, fps*i) // 80*i
        }
    }, delay)
};


const tempData1 = ref(0)
const tempData2 = ref(9)

// 확장 버튼
const idx = ref()
let ulTemp
let liTemp
const viewExtend = (event) => {
  const lis = event.target.parentElement.parentElement.querySelectorAll('.btn_extend')
  const index = Array.from(lis).indexOf(event.target)
  idx.value = index
  const liElements = document.querySelectorAll(".slide_list li .btn_extend")

  //liItemWidthTot.value = ulTemp

  if (lis[idx.value].parentElement.classList.contains('open')) {
    lis[idx.value].parentElement.classList.remove('open');
    //liItemWidthTot.value = liItemWidthTot.value - lis[idx.value].parentElement.offsetWidth - liItemWidth
    //console.log(liItemWidthTot.value)

    //liItemWidthTot.value = liItemWidthTot.value - lis[idx.value].parentElement.offsetWidth - liItemWidth
    console.log('축소')
  } else {
    liElements.forEach((li) => {
      li.parentElement.classList.remove('open')
    });
    lis[idx.value].parentElement.classList.add("open")
    //liItemWidthTot.value = liItemWidthTot.value + lis[idx.value].parentElement.offsetWidth
    //console.log(liItemWidthTot.value)
    
    //liItemWidthTot.value = liItemWidthTot.value + lis[idx.value].parentElement.offsetWidth
    console.log('확장')
  }
  console.log('li index', idx.value)
  console.log('li width', lis[idx.value].parentElement.offsetWidth)  
};


// slide li width
let liMarginLeft = 20 // li margin-left
let liItem // li
let liItemWidth // li width
const liWidth = () => {
    liItem = document.querySelector('.slide_list li')
    liItemWidth = liItem.offsetWidth + liMarginLeft
    console.log('load li width :', liItemWidth)
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

    console.log('li cnt :', liItemCnt)
    console.log('li tot width :', liItemWidthTot.value)
    console.log('li width :', liItemWidth)
    console.log('slidesPerView  :', slidesPerView)
    console.log('slidesPerViewMove  :', slidesPerViewMove.value)
};

// 이전 다음 버튼
const btnPrevView = ref(true)
const btnNextView = ref(true)
const btnPrevNextView = () => {
    if(slidesPerViewMove.value < liItemCnt){
        btnNextView.value = false
        console.log('다음 버튼 show/hide', slidesPerViewMove.value + "/" + liItemCnt)
    }
    if(slidesPerViewMove.value === 0){
        btnNextView.value = true;
        console.log('다음 버튼 show/hide---', slidesPerViewMove.value)
    }
    if(slidesPerViewMove.value < liItemCnt - slidesPerView){
        btnPrevView.value = false;
        console.log('이전 버튼 show/hide', slidesPerViewMove.value + "/" + (liItemCnt - slidesPerView))
    }else if(slidesPerViewMove.value === liItemCnt - slidesPerView){
        btnPrevView.value = true;
        console.log('이전 버튼 show/hide---', slidesPerViewMove.value + "/" + (liItemCnt - slidesPerView))
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

        console.log('li +=이동 :', liItemWidth)
        console.log('slidesPerViewMove Next :', slidesPerViewMove.value)
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

        console.log('li -=이동 :',liItemWidth)
        console.log('slidesPerViewMove Next :', slidesPerViewMove.value)
    }
    if(slidesPerViewMove.value === 0){
        console.log('슬라이드 : 마지막')
    }
    btnPrevNextView()
    slideView()
};

let slideViewLastLeft = slidesPerView - 2 // slide view last left li
let slideViewLastRight = slidesPerView - 1 // slide view last right li
const slideView = () => {

    const lielements = document.querySelectorAll('.slide_list li');
    lielements.forEach(element => {
        element.classList.remove('last')
    })

    lielements[slideViewLastLeft].classList.add('last')
    lielements[slideViewLastRight].classList.add('last')
    console.log('-', slideViewLastLeft + "/" + slideViewLastRight)
    

    //document.querySelectorAll(".slide_con").classList.contains('open')
    //document.querySelectorAll(".slide_con").classList.contains('open')
    
    // 모든 클래스명이 "test"인 요소들을 선택합니다.
    // const elements = document.querySelectorAll('.slide_con');
  
    // // NodeList를 배열로 변환한 후 각 요소에 클래스를 추가합니다.
    // elements.forEach(element => {
    //     element.classList.add('test');
    // });

    // 클래스명이 "test"인 모든 요소를 선택합니다.
    // const elements = document.querySelectorAll('.slide_con');

    // // elements를 배열로 변환합니다.
    // const elementsArray = Array.from(elements);

    // // 특정 요소의 인덱스를 구합니다.
    // const index = elementsArray.indexOf(elementsArray.find(element => element.textContent === '2'));

    // // 인덱스를 출력합니다.
    // console.log(index);

    
    // 각 요소의 순서를 구합니다.
    // elements.forEach((element, index) => {
    //     //element.classList.add('test');
    //     console.log(`Index`, index);        
    // });
}

onMounted(() => {
    liWidth()
    ulWidth()
    btnPrevNextView()

    slideView()

    //countingType1()

    
    
    // const listItem = document.querySelector('.slide_list li');
    // const width = listItem.offsetWidth;
    // console.log('Width of the first list item:', width);
})
</script> 