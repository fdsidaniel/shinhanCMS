<template>

  <div class="title_box">
    <h2>메인 테스트</h2>
    <ul class="loc">
      <li>홈</li>
    </ul>
  </div>

  <div class="conbody">

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


    <h3>Slide</h3>
    <div class="slide_wrap">        
        <v-btn class="vbtn line btn_prev" size="small" @click="btnPrev" v-if="btnPrevView">이전</v-btn>
        <div class="slide_box">
            <!-- <ul class="slide_list" :style="{width: `${liItemWidthTot}`+ 'px', transform: translateX(`${move}` + 'px') , marginLeft: `${move}`+ 'px'}"> -->
            <ul class="slide_list" :style="{ width: liItemWidthTot + 'px', transform: 'translateX(' + move + 'px)' }">
                <li>
                    <div class="box">
                        <div class="before">내용111</div>
                        <div class="after">
                        확장내용
                        </div>
                        <!-- <v-btn class="vbtn line btn_extend" size="small" @click="viewExtend">버튼</v-btn> -->
                    </div>
                    <p class="btn_extend" @click="viewExtend">버튼</p>
                </li>
                <li>
                    <div class="box">
                        <div class="before">내용222</div>
                        <div class="after">
                        확장내용
                        </div>
                        <!-- <v-btn class="vbtn line btn_extend" size="small" @click="viewExtend">버튼</v-btn> -->
                    </div>
                    <p class="btn_extend" @click="viewExtend">버튼</p>
                </li>
                <li>
                    <div class="box">
                        <div class="before">내용333</div>
                        <div class="after">
                        확장내용
                        </div>
                        <!-- <v-btn class="vbtn line btn_extend" size="small" @click="viewExtend">버튼</v-btn> -->
                    </div>
                    <p class="btn_extend" @click="viewExtend">버튼</p>
                </li>
                <li>
                    <div class="box">
                        <div class="before">내용444</div>
                        <div class="after">
                        확장내용
                        </div>
                        <!-- <v-btn class="vbtn line btn_extend" size="small" @click="viewExtend">버튼</v-btn> -->
                    </div>
                    <p class="btn_extend" @click="viewExtend">버튼</p>
                </li>
                <li>
                    <div class="box">
                        <div class="before">내용555</div>
                        <div class="after">
                        확장내용
                        </div>
                        <!-- <v-btn class="vbtn line btn_extend" size="small" @click="viewExtend">버튼</v-btn> -->
                    </div>
                    <p class="btn_extend" @click="viewExtend">버튼</p>
                </li>
                <li>
                    <div class="box">
                        <div class="before">내용666</div>
                        <div class="after">
                        확장내용
                        </div>
                        <!-- <v-btn class="vbtn line btn_extend" size="small" @click="viewExtend">버튼</v-btn> -->
                    </div>
                    <p class="btn_extend" @click="viewExtend">버튼</p>
                </li>
                <li>
                    <div class="box">
                        <div class="before">내용777</div>
                        <div class="after">
                        확장내용
                        </div>
                        <!-- <v-btn class="vbtn line btn_extend" size="small" @click="viewExtend">버튼</v-btn> -->
                    </div>
                    <p class="btn_extend" @click="viewExtend">버튼</p>
                </li>
            </ul>
        </div>
        <v-btn class="vbtn line btn_next" size="small" @click="btnNext" v-if="btnNextView">다음</v-btn>
    </div>

  </div>

</template>

<style scoped>
  
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

    liItemWidthTot.value = liItemWidthTot.value - lis[idx.value].parentElement.offsetWidth - liItemWidth
    console.log('축소')
  } else {
    liElements.forEach((li) => {
      li.parentElement.classList.remove('open')
    });
    lis[idx.value].parentElement.classList.add("open")
    //liItemWidthTot.value = liItemWidthTot.value + lis[idx.value].parentElement.offsetWidth
    //console.log(liItemWidthTot.value)
    
    liItemWidthTot.value = liItemWidthTot.value + lis[idx.value].parentElement.offsetWidth
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
const btnPrevView = ref(false)
const btnNextView = ref(false)
const btnPrevNextView = () => {
    if(slidesPerViewMove.value < liItemCnt){
        btnNextView.value = true
        console.log('다음 버튼 show/hide', slidesPerViewMove.value + "/" + liItemCnt)
    }
    if(slidesPerViewMove.value === 0){
        btnNextView.value = false;
        console.log('다음 버튼 show/hide---', slidesPerViewMove.value)
    }
    if(slidesPerViewMove.value < liItemCnt - slidesPerView){
        btnPrevView.value = true;
        console.log('이전 버튼 show/hide', slidesPerViewMove.value + "/" + (liItemCnt - slidesPerView))
    }else if(slidesPerViewMove.value === liItemCnt - slidesPerView){
        btnPrevView.value = false;
        console.log('이전 버튼 show/hide---', slidesPerViewMove.value + "/" + (liItemCnt - slidesPerView))
    }
};

const move = ref(0);
const btnPrev = () => {
    if(slidesPerViewMove.value < liItemCnt - slidesPerView){
        slidesPerViewMove.value +=1
        move.value += liItemWidth;

        console.log('li +=이동 :', liItemWidth)
        console.log('slidesPerViewMove Next :', slidesPerViewMove.value)
    }
    if(slidesPerViewMove.value === liItemCnt - slidesPerView){
        console.log('슬라이드 : 처음')
    }
    btnPrevNextView()
};
const btnNext = () => {
    if(slidesPerViewMove.value > 0){
        slidesPerViewMove.value -=1
        move.value -= liItemWidth;

        console.log('li -=이동 :',liItemWidth)
        console.log('slidesPerViewMove Next :', slidesPerViewMove.value)
    }    
    if(slidesPerViewMove.value === 0){
        console.log('슬라이드 : 마지막')
    }
    btnPrevNextView()
};

onMounted(() => {
    liWidth()
    ulWidth()
    btnPrevNextView()

    
    
    // const listItem = document.querySelector('.slide_list li');
    // const width = listItem.offsetWidth;
    // console.log('Width of the first list item:', width);
})
</script> 