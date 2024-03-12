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

    <div class="search_box top other noline">
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
    </div>

    <h3 class="stit">금액 정보<div class="unit">(단위:원)</div></h3>
    <v-table class="vtable_list">
      <colgroup>
        <col style="width:25%;"/>
        <col style="width:25%;"/>
        <col style="width:25%;"/>
        <col style="width:25%;"/>
      </colgroup>
      <thead>
        <tr>
          <th>입금 금액</th>
          <th>지급 금액(A+B)</th>
          <th>이자</th>
          <th>잔액</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="t_right">470,000,000</td>
          <td class="t_right">453,941,532</td>
          <td class="t_right">1,000,000</td>
          <td class="t_right">16,058,468</td>
        </tr>
      </tbody>
    </v-table>

    <v-table class="vtable_list mt_40">
      <colgroup>
        <col style="width:;"/>
        <col style="width:;"/>
        <col style="width:;"/>
        <col style="width:;"/>
        <col style="width:;"/>
      </colgroup>
      <thead>
        <tr>
          <th>비목명</th>
          <th>세목명</th>
          <th>지급 금액</th>
          <th>인정 금액(A)</th>
          <th>불인정 금액(B)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="6">직접비</td>
          <td class="atot">직접비 합계</td>
          <td class="atot t_right">206,970,766</td>
          <td class="atot t_right">206,970,766</td>
          <td class="atot t_right">-</td>
        </tr>
        <tr>
          <td>내부인건비</td>
          <td class="t_right">-</td>
          <td class="t_right">-</td>
          <td class="t_right">-</td>
        </tr>
        <tr>
          <td>외부인건비</td>
          <td class="t_right">-</td>
          <td class="t_right">-</td>
          <td class="t_right">-</td>
        </tr>
        <tr>
          <td>연구장비, 재료비</td>
          <td class="t_right">199,353,800</td>
          <td class="t_right">199,353,800</td>
          <td class="t_right">1,000,000</td>
        </tr>
        <tr>
          <td>연구활동비</td>
          <td class="t_right">2,800,000</td>
          <td class="t_right">2,800,000</td>
          <td class="t_right">-</td>
        </tr>
        <tr>
          <td>연구과제추진비</td>
          <td class="t_right">20,000,000</td>
          <td class="t_right">19,000,000</td>
          <td class="t_right">10,000,000</td>
        </tr>
        <tr>
          <td rowspan="2">간접비</td>
          <td class="atot">간접비 합계</td>
          <td class="atot t_right">20,000,000</td>
          <td class="atot t_right">19,000,000</td>
          <td class="atot t_right">1,000,000</td>
        </tr>
        <tr>
          <td>간접비</td>
          <td class="t_right">20,000,000</td>
          <td class="t_right">19,000,000</td>
          <td class="t_right">1,000,000</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>합계</td>
          <td></td>
          <td class="tot">
            <div class="sum">              
              <span>435,941,532</span>
            </div>
          </td>
          <td class="tot">
            <div class="sum">              
              <span>450,941,532</span>
            </div>
          </td>
          <td class="tot">
            <div class="sum">              
              <span>3,000,000</span>
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

// TASK 정보 레이어 팝업
const taskName = ref(true) // 화면 확인 용
const taskOpen = () => { // 화면 확인 용
  taskName.value = !taskName.value
};

const layerPop = ref(false)
const layerPopView = () => {
  layerPop.value = !layerPop.value
};

</script> 