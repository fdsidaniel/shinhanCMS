<template>

  <div class="title_box">
    <h2>사업비 입금내역조회</h2>
    <ul class="loc">
      <li>홈</li>
      <li>집행 관리</li>
      <li>사업비 입금내역조회</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="search_box top other">
      <div class="row">
       <div class="con flex1">
          <div class="input_flex a_center">
            <div class="input_flex a_center flex1 mr_20">
              <span class="tit">TASK</span>
              <div class="txt tooltip_box">
                <p v-if="!taskName">선택하세요.</p> <!-- TASK 선택 전 -->
                <div v-else><!-- TASK 선택 후 활성 -->
                  <p>TASK명 출력 영역 TASK명 출력 영역</p>            
                  <p class="tooltip" @click="layerPopView">TASK 정보</p>
                  <!-- layer pop in conbody -->
                  <div class="incon_layer_pop" :class="{ 'open': layerPop }">
                    <div class="layer_pop_con">
                      <div class="title">
                        <span class="ico_progress">진행</span><!-- 진행 ico_progress, 중단 ico_stop, 정산 ico_calculate, 완료 ico_comp -->
                        회원관리 UI/UX 화면 변경 진행 화면회원관리 UI/UX 화면 변경 진행 화면
                      </div>
                      <v-btn class="vbtn btn_close" @click="layerPopView">닫기</v-btn>
                      <div class="con">
                        <v-table class="vtable_view">
                          <colgroup>
                            <col style="width:80px;"/>
                            <col style="width:*;"/>
                          </colgroup>
                          <tbody>
                            <tr>
                              <th>TASK 기간</th>
                              <td>2023-10-10 ~ 2024-10-10</td>
                            </tr>
                            <tr>
                              <th>TASK 예산</th>
                              <td>10,000,000 원</td>
                            </tr>
                            <tr>
                              <th>발주기관 명</th>
                              <td>한마 생명</td>
                            </tr>
                            <tr>
                              <th>담당자</th>
                              <td>
                                <div class="d_flex">
                                  <ul class="flex1">
                                    <li class="tag">#발주 기관</li>
                                    <li>김발주(책임자)</li>
                                    <li>김신한신한(TASK 담당자)</li>
                                    <li>김신한(정산 담당자)</li>
                                    <li>김신한(정산 담당자)</li>
                                    <li>김신한(정산 담당자)</li>
                                  </ul>
                                  <ul class="flex1 ml_10">
                                    <li class="tag">#수행 기관</li>
                                    <li>김수행(책임자)</li>
                                    <li>홍길동길동(지급 담당자)</li>
                                    <li>김신한(지급 담당자)</li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </v-table>
                      </div>
                    </div>
                  </div>
                  <!-- //layer pop -->
                </div>
              </div>
              <v-btn class="vbtn line" size="small" @click="taskOpen">선택</v-btn>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="con flex1">
          <div class="input_flex a_center">
            <div class="i_calender a_center flex1 mr_20">
              <span class="tit">기간</span>
              <ComSelectBox groupCode="01" v-model="comboDate" :items="itemsDate" :isAll="true"  class="s_basics w_145 mr_10 none_details" />
              <ComDatePicker v-model="startDate" class="i_date w_145" placeholder="날짜선택" />
              <span>~</span>
              <ComDatePicker v-model="endDate" class="i_date w_145" placeholder="날짜선택" />
            </div>
            <div class="flex1">
              <div class="input_flex a_center flex1">
                <span class="tit">세목 명</span>
                <ComSelectBox groupCode="01" v-model="comboDetail" :items="itemsDetail" class="s_basics flex1 none_details" />                
              </div>
            </div>
            <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
          </div>
        </div>
      </div>
    </div>
    
    <h3 class="stit">지급내역<span class="date">(사업기간:2023-10-10 ~ 2023-10-10)</span><div class="unit">(단위:원)</div></h3>
    <v-table class="vtable_list">
      <colgroup>
        <col style="width:80px;"/>
        <col style="width:150px;"/>
        <col style="width:220px;"/>
        <col style="width:140px;"/>
        <col style="width:210px;"/>
        <col style="width:186px;"/>
        <col style="width:170px;"/>
      </colgroup>
      <thead>
        <tr>
          <th>번호</th>
          <th>비목명</th>
          <th>세목명</th>
          <th>지급일</th>
          <th>지급처</th>
          <th>지급처 계좌번호</th>
          <th>지급 금액</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>99999</td>
          <td>직접비</td>
          <td>연구활동비</td>
          <td>2023-10-10</td>
          <td>(주)양재드림디포</td>
          <td>41234112123456</td>
          <td class="t_right">10,000,000,000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>직접비</td>
          <td>연구활동비</td>
          <td>2023-10-10</td>
          <td>(주)양재드림디포</td>
          <td>41234112123456</td>
          <td class="t_right">10,000</td>
        </tr>
        <tr>
          <td class="subtot"></td>
          <td class="subtot" colspan="3"></td>
          <td class="subtot">소계</td>
          <td class="subtot t_right">2건</td>
          <td class="subtot t_right">20,000</td>
        </tr>
        <tr>
          <td>1</td>
          <td>직접비</td>
          <td>연구활동비, 재료비</td>
          <td>2023-10-10</td>
          <td>(주)양재드림디포</td>
          <td>41234112123456</td>
          <td class="t_right">10,000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>직접비</td>
          <td>연구활동비, 재료비</td>
          <td>2023-10-10</td>
          <td>(주)양재드림디포</td>
          <td>41234112123456</td>
          <td class="t_right">10,000</td>
        </tr>
        <tr>
          <td>3</td>
          <td>직접비</td>
          <td>연구활동비, 재료비</td>
          <td>2023-10-10</td>
          <td>(주)양재드림디포</td>
          <td>41234112123456</td>
          <td class="t_right">10,000</td>
        </tr>
        <tr>
          <td class="subtot"></td>
          <td class="subtot" colspan="3"></td>
          <td class="subtot">소계</td>
          <td class="subtot t_right">3건</td>
          <td class="subtot t_right">20,000</td>
        </tr>
        <tr>
          <td>1</td>
          <td>직접비</td>
          <td>연구활동비</td>
          <td>2023-10-10</td>
          <td>(주)양재드림디포</td>
          <td>41234112123456</td>
          <td class="t_right">10,000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>직접비</td>
          <td>연구활동비</td>
          <td>2023-10-10</td>
          <td>(주)양재드림디포</td>
          <td>41234112123456</td>
          <td class="t_right">10,000</td>
        </tr>
        <tr>
          <td class="subtot"></td>
          <td class="subtot" colspan="3"></td>
          <td class="subtot">소계</td>
          <td class="subtot t_right">2건</td>
          <td class="subtot t_right">20,000</td>
        </tr>
        <tr>
          <td>1</td>
          <td>직접비</td>
          <td>연구활동비</td>
          <td>2023-10-10</td>
          <td>(주)양재드림디포</td>
          <td>41234112123456</td>
          <td class="t_right">10,000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>직접비</td>
          <td>연구활동비</td>
          <td>2023-10-10</td>
          <td>(주)양재드림디포</td>
          <td>41234112123456</td>
          <td class="t_right">10,000</td>
        </tr>
        <tr>
          <td class="subtot"></td>
          <td class="subtot" colspan="3"></td>
          <td class="subtot">소계</td>
          <td class="subtot t_right">2건</td>
          <td class="subtot t_right">20,000</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td colspan="4">합계</td>
          <td class="tot">
            <div class="sum">
              <span>9건</span>
            </div>
          </td>
          <td class="tot">
            <div class="sum">
              <span>90,000</span>
            </div>
          </td>
        </tr>
      </tfoot>
    </v-table>

    <!-- <div class="btn_btm_wrap">
      <v-btn class="vbtn" size="large">정산완료 결과 등록</v-btn>
    </div> -->

  </div>
  
</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComDatePicker from '@/components/common/ComDatePicker.vue'

// TASK 정보 레이어 팝업
const taskName = ref(true) // 화면 확인 용
const taskOpen = () => { // 화면 확인 용
  taskName.value = !taskName.value
};

const layerPop = ref(false)
const layerPopView = () => {
  layerPop.value = !layerPop.value
};

const today = new Date() // 현재 날짜와 시간을 포함하는 Date 객체 생성
const year = today.getFullYear() // 년도 가져오기
const month = today.getMonth() + 1 // 월 가져오기 (0부터 시작하므로 1 더하기)
const day = today.getDate() // 일 가져오기
const formattedToday = new Date(
  `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
)
const startDate = ref(formattedToday)
const endDate = ref(formattedToday)

const comboDate = ref('001')
const itemsDate = ref([
  { title: 'TASK 기간', value: '001' },
  { title: '지급 기간', value: '002' },
])

const comboDetail = ref('01')
const itemsDetail = [
  { title: '세목명', value: '01' },
  { title: '세목명', value: '02' },
]

</script> 