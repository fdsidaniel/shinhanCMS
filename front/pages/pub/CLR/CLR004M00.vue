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
              <span class="tit other">TASK명</span>
              <div class="txt tooltip_box">
                <p v-if="!taskName">선택하세요.</p> <!-- TASK 선택 전 -->
                <div v-else><!-- TASK 선택 후 활성 -->
                  <p>TASK명 출력 영역 TASK명 출력 영역</p>            
                  <p class="tooltip" @click="layerPopView">TASK 정보</p>
                  <!-- layer pop in conbody -->
                  <div class="incon_layer_pop" :class="{ 'open': layerPop }">
                    <div class="layer_pop_con">
                      <div class="title">
                        <span class="ico_progress">진행</span><!-- 진행 ico_progress, 중단 ico_stop, 정산 ico_calculate, 종료 ico_end, 완료 ico_comp -->
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

    <!-- <h3 class="stit">금액 정보<div class="unit">(단위:원)</div></h3>
    <v-table class="vtable_view bg">
      <colgroup>
        <col style="width:150px;"/>
        <col style="width:*;"/>
        <col style="width:150px;"/>
        <col style="width:*;"/>
      </colgroup>
      <tbody>
        <tr>
          <th>지급 인정 합계</th>
          <td class="t_right">10,000,000</td>
          <th>지급 불인정 합계</th>
          <td class="t_right">10,000,000</td>
        </tr>
      </tbody>
    </v-table> -->

    <h3 class="stit">정산 보고서</h3>
    <h4 class="stit">사용실적<div class="unit">(단위:원)</div></h4>
    <v-table class="vtable_list th_bg small">
      <colgroup>
        <col style="width:192px;"/>
        <col style="width:192px;"/>
        <col style="width:192px;"/>
        <col style="width:192px;"/>
        <col style="width:192px;"/>
        <col style="width:192px;"/>
      </colgroup>
      <thead>
        <tr>
          <th colspan="4">총 사업비</th>
          <th rowspan="2" class="nbd">사용 금액</th>
          <th rowspan="2" class="nbd">사용 잔액</th>
        </tr>
        <tr>
          <th class="nbd">정부지원금 입금액</th>
          <th class="nbd">민간부담금 입금액</th>
          <th class="nbd">이자(정보+민간+환입)</th>
          <th class="nbd">합계</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="t_right">200,000,000</td>
          <td class="t_right">10,000,000</td>
          <td class="t_right">30,000</td>
          <td class="t_right">210,030,000</td>
          <td class="t_right">190,000,000</td>
          <td class="t_right">20,030,000</td>
        </tr>
      </tbody>
    </v-table>
    <p class="tip_txt mt_5">사용금액 = 지급합계</p>
    <p class="tip_txt mt_5">사용잔액 = 입금 합계 - 사용금액  = 현재계좌잔액합</p>

    <h4 class="stit">검토결과<div class="unit">(단위:원)</div></h4>
    <v-table class="vtable_list th_bg small">
      <colgroup>
        <col style="width:20%;"/>
        <col style="width:20%;"/>
        <col style="width:20%;"/>
        <col style="width:20%;"/>
        <col style="width:20%;"/>
      </colgroup>
      <thead>
        <tr>
          <th class="nbd">불인정 금액</th>
          <th class="nbd">사용 잔액</th>
          <th class="nbd">합계</th>
          <th class="nbd">정부 지분율(%)</th>
          <th class="nbd">정산금</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>200,000,000</td>
          <td>10,000,000</td>
          <td>30,000</td>
          <td>95</td>
          <td>210,030,000</td>
        </tr>
      </tbody>
    </v-table>
    <p class="tip_txt mt_5">정부지분율 = 전체사업비입금액 대비 정부사업비 입금 비율</p>
    <p class="tip_txt mt_5">정산금 = 정부지분율 해당괴는 정부잔액</p>

    <h4 class="stit">정산금 상세<div class="unit">(단위:원)</div></h4>
    <v-table class="vtable_list th_bg small">
      <colgroup>
        <col style="width:33%;"/>
        <col style="width:33%;"/>
        <col style="width:34%;"/>
      </colgroup>
      <thead>
        <tr>
          <th class="nbd">구분</th>
          <th class="nbd">정산 잔액</th>
          <th class="nbd">불인정 금액</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>정부지원금</td>
          <td class="t_right">19,076,572</td>
          <td class="t_right">952,400</td>
        </tr>    
        <tr>
          <td>민간 부담금</td>
          <td class="t_right">953,428</td>
          <td class="t_right">47,600</td>
        </tr>    
      </tbody>
      <tfoot>
        <tr>
          <td>합계</td>
          <td class="tot">
            <div class="sum">
              <span>20,030,000</span>
            </div>
          </td>
          <td class="tot">
            <div class="sum">
              <span>1,000,000</span>
            </div>
          </td>
        </tr>
      </tfoot>
    </v-table>

    <h4 class="stit">예상 반납금<div class="unit">(단위:원)</div></h4>
    <v-table class="vtable_list small">
      <colgroup>
        <col style="width:192px;"/>
        <col style="width:192px;"/>
        <col style="width:192px;"/>
        <col style="width:192px;"/>
        <col style="width:192px;"/>
        <col style="width:192px;"/>
      </colgroup>
      <thead>
        <tr>
          <th>구분</th>
          <th>실잔액</th>
          <th>이자</th>
          <th>잔액 합계</th>
          <th>불인정 금액</th>
          <th>예상 반납금</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>정부지원금</td>
          <td class="t_right">19,000,000</td>
          <td class="t_right">20,000</td>
          <td class="t_right">19,020,000</td>
          <td class="t_right">952,400</td>
          <td class="t_right">19,972,400</td>
        </tr>    
        <tr>
          <td>민간부담금</td>
          <td class="t_right">1,000,000</td>
          <td class="t_right">10,000</td>
          <td class="t_right">1,010,000</td>
          <td class="t_right">952,400</td>
          <td class="t_right">57,600</td>
        </tr>    
      </tbody>
      <tfoot>
        <tr>
          <td>합계</td>
          <td class="tot">
            <div class="sum">
              <span>20,000,000</span>
            </div>
          </td>
          <td class="tot">
            <div class="sum">
              <span>30,000</span>
            </div>
          </td>
          <td class="tot">
            <div class="sum">
              <span>20,030,000</span>
            </div>
          </td>
          <td class="tot">
            <div class="sum">
              <span>-</span>
            </div>
          </td>
          <td class="tot">
            <div class="sum">
              <span>20,030,000</span>
            </div>
          </td>
        </tr>
      </tfoot>
    </v-table>

    <div class="guide_box" :class="{ 'open': guideShow }">
      <p class="tit" @click="guideView" ref="guideScroll">안내사항</p>

      <div class="con">
        <dl class="info_list">
          <dt>사용실적</dt>
          <dd>정부지원금 입금액 : A</dd>
          <dd>민간부담금 입금액 : B</dd>
          <dd>이자 : C</dd>
          <dd>합계 : D=A+B+C</dd>
          <dd>사용금액 : E</dd>
          <dd>사용잔액 : F=D-E</dd>
        </dl>
        <dl class="info_list">
          <dt>사용 검토결과실적</dt>
          <dd>불인정금액 : A1</dd>
          <dd>사용잔액 : B1</dd>
          <dd>합계 : C1=A1+B1</dd>
          <dd>정부지분율 : D1=A/(A+B)x100</dd>
          <dd>정산금 : F1=C1xD1/100</dd>
        </dl>
        <dl class="info_list other">
          <dt>정산금상세</dt>
          <dd>정부지원금 정산잔액 : A2=B1xD1/100</dd>
          <dd>민간부담금 정산잔액 : C2=B1-A2</dd>
          <dd>정부지원금 불인정금액 : B2=A1xD1/100</dd>
          <dd>민간부담금 불인정 금액 : D2=A1-B2</dd>
        </dl>
        <dl class="info_list other">
          <dt>예상반납금</dt>
          <dd>정부지원금 실잔액 : A3</dd>
          <dd>민간부담금 실잔액 : A4</dd>
          <dd>정부지원금 이자 : B3</dd>
          <dd>민간부담금 이자 : B4</dd>
          <dd>정부지원금 잔액합계 : C3=A3+B3</dd>
          <dd>민간부담금 잔액합계 : C4=A4+B4</dd>
          <dd>정부지원금 불인정금액 : D3=B2</dd>
          <dd>민간부담금 불인정금액 : D4=(-)D3</dd>
          <dd>정부지원금 예상반납금 : E3=C3+D3</dd>
          <dd>민간부담금 예산반납금 : E4=C4+D4</dd>
        </dl>
      </div>
    </div>

    <div class="btn_btm_wrap">
      <v-btn class="vbtn blue" size="large">온라인 정산</v-btn>
      <v-btn class="vbtn" size="large">정산 확정</v-btn>
    </div>

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

const guideShow = ref(false)
const guideView = () => {
  guideShow.value = !guideShow.value
  //this.$refs.guideScroll.scrollIntoView({ behavior: "smooth" })
};


</script> 