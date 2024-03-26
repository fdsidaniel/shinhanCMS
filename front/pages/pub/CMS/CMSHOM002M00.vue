<template>

  <div class="cms_main_wrap">
    
    <div class="main_top">
        <!-- 기관현황 -->
        <div class="state_org_box org">
            <div class="left">
                <h2>군인공제회<br>기관 담당자님</h2>
                <p class="txt">표준 펌뱅킹 시스템 방문을 환영합니다.</p>
            </div>
            <div class="right">
                <ul class="state_tot">
                    <li class="tot">
                        <p>이체현황 총</p>
                        <strong class="transfer_tot" :class="{ 'zero': transferTot == 0 }">0</strong>
                    </li>
                    <li class="normal">
                        <p>이체 정상</p>
                        <strong class="transfer_normal" :class="{ 'zero': transferNormal == 0 }">0</strong>
                    </li>
                    <li class="error">
                        <p>이체 오류</p>
                        <strong class="transfer_error" :class="{ 'zero': transferError == 0 }">0</strong>
                    </li>
                </ul>
            </div>
        </div>
        <!-- //기관현황 -->

        <!-- 오류 현황 -->
        <div class="state_org_err_box org">
            <h3>오류 현황</h3>
            <div class="error_wrap">
                <ul class="err_list">
                    <li>
                        <span>타임아웃</span>
                        <nuxt-link to="" class="btn_link" :class="{ 'black': timeOut > 0 }">{{ timeOut }}</nuxt-link>
                    </li>
                    <li>
                        <span>타행불능</span>
                        <nuxt-link to="" class="btn_link" :class="{ 'black': impossible > 0 }">{{ impossible }}</nuxt-link>
                    </li>
                    <li>
                        <span>네트워크 오류</span>
                        <nuxt-link to="" class="btn_link" :class="{ 'black': networkErr > 0 }">{{ networkErr }}</nuxt-link>
                    </li>
                    <li>
                        <span>처리 오류</span>
                        <nuxt-link to="" class="btn_link" :class="{ 'black': processErr > 0 }">{{ processErr }}</nuxt-link>
                    </li>
                </ul>

                <div class="err_box">
                    <div class="left">
                        <ul class="err_list">
                            <li class="all">
                                <span>전체</span>
                                <strong>999</strong>
                            </li>
                            <li class="time_out">
                                <span>타임아웃</span>
                                <strong>10</strong>
                            </li>
                            <li class="impossible">
                                <span>타행불능</span>
                                <strong>10</strong>
                            </li>
                            <li class="network_err">
                                <span>네트워크 오류</span>
                                <strong>10</strong>
                            </li>
                            <li class="process_err">
                                <span>처리 오류</span>
                                <strong>10</strong>
                            </li>
                        </ul>
                    </div>
                    <div class="right">
                        <div class="scroll">
                            <ul class="err_detail_list">
                                <li><b>신한은행기관관리부</b> [02.15 14:12] 타임아웃 1건 발생하였습니다.</li>
                                <li><b>신한은행기관관리부</b> [02.15 14:12] 타임아웃 2건 발생하였습니다.</li>
                                <li><b>신한은행기관관리부</b> [02.15 14:12] 타행불능 3건 발생하였습니다.</li>
                                <li><b>신한은행기관관리부</b> [02.15 14:12] 네트워크오류 1건 발생하였습니다.</li>
                                <li><b>신한은행기관관리부</b> [02.15 14:12] 처리오류 오류 1건 발생하였습니다. 처리오류 오류 1건 발생하였습니다.</li>
                                <li><b>신한은행기관관리부</b> [02.15 14:12] 네트워크오류 2건 발생하였습니다.</li>
                                <li><b>신한은행기관관리부</b> [02.15 14:12] 네트워크오류 3건 발생하였습니다.</li>
                                <li><b>신한은행기관관리부</b> [02.15 14:12] 네트워크오류 4건 발생하였습니다.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- //오류 현황 -->
    </div>

    <!-- Today 승인 내역 -->
    <div class="main_mid org">
        <div class="today">
            <strong>Today 승인 내역</strong> 사용자 승인 요청 건 이 <nuxt-link to="" class="btn_link">5</nuxt-link>건 있습니다.
        </div>
    </div>
    <!-- //Today 승인 내역 -->

    <div class="main_btm">
        <!-- 서버 자원 현황 -->
        <div class="row">
            <h3>서버 자원 현황</h3>
            <!-- chart -->
            <div class="box mt_22">
                <div class="chart_box">
                    <p class="tit">CPU</p>
                    <DoughnutChart :chartData="cpuData" class="chart" />
                    <span class="use_data">{{ cpuUse }}%</span>
                </div>
                <div class="chart_box">
                    <p class="tit">메모리</p>
                    <DoughnutChart :chartData="memoryData" class="chart" />
                    <span class="use_data">{{ memoryUse }}%</span>
                </div>
                <div class="chart_box">
                    <p class="tit">디스크 현황</p>
                    <DoughnutChart :chartData="diskData" class="chart" />
                    <span class="use_data">{{ diskUse }}%</span>
                </div>
            </div>
            <!-- chart -->
        </div>
        <!-- //서버 자원 현황 -->

        <!-- 실시간 진행 상황 -->
        <div class="row">
            <div class="tit_box">
                <h3> 실시간 진행 상황</h3>
            </div>
            <div class="box">
                <div class="state_info">
                    <!-- 상태 목록 -->
                    <div class="state_list_box">
                        <!-- 상태 -->
                        <div class="state_list active" @mouseenter="stateListOver">
                            <p class="tit">펌</p>
                            <ul class="list">
                                <li>어플리케이션<span class="error">상태</span></li>
                                <li>DB 커넥션<span class="normal">상태</span></li>
                                <li>게시전문<span class="normal">상태</span></li>
                            </ul>
                        </div>
                        <!-- //상태 -->

                        <!-- 상태 -->
                        <div class="state_list" @mouseenter="stateListOver">
                            <p class="tit">제휴 가상 계좌</p>
                            <ul class="list">
                                <li>어플리케이션<span class="error">상태</span></li>
                                <li>DB 커넥션<span class="normal">상태</span></li>
                                <li>게시전문<span class="normal">상태</span></li>
                            </ul>
                        </div>
                        <!-- //상태 -->

                        <!-- 상태 -->
                        <div class="state_list" @mouseenter="stateListOver">
                            <p class="tit">법인카드</p>
                            <ul class="list">
                                <li>어플리케이션<span class="error">상태</span></li>
                                <li>DB 커넥션<span class="normal">상태</span></li>
                                <li>게시전문<span class="normal">상태</span></li>
                            </ul>
                        </div>
                        <!-- //상태 -->

                        <!-- 상태 -->
                        <div class="state_list" @mouseenter="stateListOver">
                            <p class="tit">일괄 이체</p>
                            <ul class="list">
                                <li>어플리케이션<span class="error">상태</span></li>
                                <li>DB 커넥션<span class="normal">상태</span></li>
                                <li>게시전문<span class="normal">상태</span></li>
                            </ul>
                        </div>
                        <!-- //상태 -->

                        <!-- 상태 -->
                        <div class="state_list" @mouseenter="stateListOver">
                            <p class="tit">컨버터</p>
                            <ul class="list">
                                <li>어플리케이션<span class="error">상태</span></li>
                                <li>DB 커넥션<span class="normal">상태</span></li>
                                <li>게시전문<span class="normal">상태</span></li>
                            </ul>
                        </div>
                        <!-- //상태 -->
                    </div>
                    <!-- //상태 목록 -->

                    <!-- 상태 내용 -->
                    <div class="state_list_info">
                        <div class="scroll">
                            <ul class="list">
                                <li><b>[오류발생]</b>[어플리케이션] 신한은행기관관리부 DB 커넥션 에러가 1건 발생하였습니다.</li>
                            </ul>
                        </div>
                    </div>
                    <!-- 상태 내용 -->
                </div>
            </div>
        </div>
        <!-- //실시간 진행 상황 -->

        <!-- 이체 별 현황 -->
        <div class="row">
            <h3>이체 별 현황</h3>
            <!-- chart -->
            <div class="box">
                <div class="chart_box">
                    <p class="tit">당 타행 이체 현황 조회<nuxt-link to="" class="vlink btn_more">더보기</nuxt-link></p>
                    <div class="inbox">
                        <DoughnutChart :chartData="tranData" class="chart" />
                        <div class="info">
                            <ul class="list withdraw">
                                <li>출금 <strong>10,000</strong>만원</li>
                                <li>당행 <b>40,000</b>만원</li>
                                <li>타행 <b>60,000</b>만원</li>
                            </ul>
                            <ul class="list deposit">
                                <li>입금 <strong>999,999,000</strong>만원</li>
                                <li>당행 <b>999,999,000</b>만원</li>
                                <li>타행 <b>60,000</b>만원</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="chart_box batch">
                    <p class="tit">일괄 이체 현황 조회<nuxt-link to="" class="vlink btn_more">더보기</nuxt-link></p>
                    <PieChart :chartData="totTranData" class="chart" />
                </div>
            </div>
            <!-- chart -->            
        </div>
        <!-- //이체 별 현황 -->

        <!-- util -->
        <div class="util">
            <div class="col qna">
                <nuxt-link to="" class="btn_tit">Q&amp;A</nuxt-link>
                <div class="txt">궁금한 점을<br>해결해 드리겠습니다.</div>
            </div>
            <div class="col app">
                <nuxt-link to="" class="btn_tit">사용자 가입 신청</nuxt-link>
                <div class="txt">본인 외 사용자를<br>추가 신청하실 수 있습니다.</div>
            </div>
            <div class="col call">
                <p class="tit">02-2151-8526</p>
                <div class="txt">관리자 시스템<br>회원정보</div>
            </div>
        </div>
        <!-- //util -->
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup>

// 이체현황 총
const transferTot = ref('160')
// 이체현황 총 숫자 카운팅 효과
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
const transferNormal = ref('160')
// 이체 정상 숫자 카운팅 효과
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
const transferError = ref('160')
// 이체 오류 숫자 카운팅 효과
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

// 타임아웃 color
const timeOut = ref(0)
// 타행불능
const impossible = ref(1)
// 네트워크 오류
const networkErr = ref(3)
// 처리 오류
const processErr = ref(0)

// 차트
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
let cpuUse = 86 // CPU 사용
let cpuUnused = 14 // CPU 미사용
const cpuData = {
  labels: ['미사용', '사용'],
  datasets: [
    {
      data: [cpuUnused, cpuUse],
      backgroundColor: ['#FF6D40', '#5D47E5'],

      indexAxis: 'y',
    },
  ],
};
let memoryUse = 70 // MEMORY 사용
let memoryUnused = 30 // MEMORY 미사용
const memoryData = {
  labels: ['미사용', '사용'],
  datasets: [
    {
      data: [memoryUnused, memoryUse],      
      backgroundColor: ['#FF6D40', '#29C986'],

      indexAxis: 'y',
    },
  ],
};
let diskUse = 50 // DISK 사용
let diskUnused = 50 // DISK 미사용
const diskData = {
  labels: ['미사용', '사용'],
  datasets: [
    {
      data: [diskUnused, diskUse],      
      backgroundColor: ['#FF6D40', '#FACB2C'],

      indexAxis: 'y',
    },
  ],
};

// 실시간 진행 상황
import ComSelectBox from '@/components/common/ComSelectBox.vue'

const stateListOver = (event) => {
    const states = document.querySelectorAll('.state_list');
    const index = Array.from(states).indexOf(event.target)
    const statesIdx = index
    states.forEach(element => {
        element.classList.remove('active')
    })
    states[statesIdx].classList.add('active')
}

// 당 타행 이체 현황 조회
const tranData = {
  labels: ['당행 출금', '당행 입금', '타행 출금', '타행 입금'],
  datasets: [
    {
      label: '당행 출금',
      data: [40, 20, 30, 20],
      backgroundColor: ['#5D47E5', '#F7C929', '#797F9A', '#FF6363'],

      //indexAxis: 'y',
    },
  ],
};

// 일괄 이체 현황 조회
import { PieChart } from 'vue-chart-3';
let totTranSucc = 20 // DISK 사용
let totTranfail = 10 // DISK 미사용
const totTranData = {
  labels: ['성공 건 수', '실패 건 수'],
  datasets: [
    {
      data: [totTranSucc, totTranfail],      
      backgroundColor: ['#5D47E5', '#FF6363'],

      indexAxis: 'y',
    },
  ],
};

onMounted(() => {
    transferTotType() // 이체현황 총
    transferNormalType() // 이체 정상
    transferErrorType() // 이체 오류
})

onBeforeUnmount(() => {
  
})

</script>