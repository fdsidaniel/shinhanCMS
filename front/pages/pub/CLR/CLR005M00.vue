<template>

  <div class="title_box">
    <h2>정산반납금 조회(정산후)</h2>
    <ul class="loc">
      <li>홈</li>
      <li>정산관리</li>
      <li>정산반납금 조회(정산후)</li>
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

    <!-- 발주기관 화면 -->
    <div v-if="true">
      <h3 class="tit_btn stit">
        <span>가상계좌정보</span>
        <div>
          <v-btn class="vbtn line" size="small">잔액 조회</v-btn>
          <span class="unit mt_8">(단위:원)</span>
        </div>
      </h3>
      <v-table class="vtable_list">
        <colgroup>
          <col style="width:192px;"/>
          <col style="width:192px;"/>
          <col style="width:192px;"/>
          <col style="width:192px;"/>
          <col style="width:194px;"/>
          <col style="width:194px;"/>
        </colgroup>
        <thead>
          <tr>
            <th colspan="2">정부계좌정보</th>
            <th colspan="2">민간계좌정보</th>
            <th colspan="2">환입계좌정보</th>
          </tr>
          <tr>
            <th>계좌번호</th>
            <th>잔액</th>
            <th>계좌번호</th>
            <th>잔액</th>
            <th>계좌번호</th>
            <th>잔액</th>
          </tr>
        </thead>
        <tbody> 
          <tr>
            <td class="">23112356477</td>
            <td class="t_right">23112356477</td>
            <td class="">23112356477</td>
            <td class="t_right">30,000</td>
            <td class="">23112356477</td>
            <td class="t_right">0</td>
          </tr>    
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4" class="tot">
              <div class="sum">
                <span>(정부+민간 계좌) 잔액 합계 : 4,730,000</span>
              </div>
            </td>
            <td colspan="2" class="tot">
              <div class="sum">
                <span></span>
              </div>
            </td>
          </tr>
        </tfoot>
      </v-table>

      <h3 class="tit_btn stit mt_20">
        <span>정산 확정 정보</span>
        <div>
          <v-btn class="vbtn line" size="small">정산 보고서</v-btn>
          <span class="unit mt_8">(단위:원)</span>
        </div>
      </h3>
      <v-table class="vtable_list">
        <colgroup>
          <col style="width:200px;"/>
          <col style="width:*;"/>
          <col style="width:*;"/>
          <col style="width:*;"/>
        </colgroup>
        <thead>
          <tr>
            <th>구분</th>
            <th>잔액 합계&#91;C3&#93;</th>
            <th>불인정 금액&#91;D3&#93;</th>
            <th>예상 반납금&#91;C3+D3&#93;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>정부지원금</td>
            <td class="t_right">19,000,000</td>
            <td class="t_right">20,000</td>
            <td class="t_right">19,020,000</td>
          </tr>
          <tr>
            <td>민간부담금</td>
            <td class="t_right">1,000,000</td>
            <td class="t_right">10,000</td>
            <td class="t_right">1,010,000</td>
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
          </tr>
        </tfoot>
      </v-table>

      <h3 class="tit_btn stit mt_20">
        <span>반납 계좌 상세 정보</span>
        <div>
          <v-btn class="vbtn line" size="small">계좌 조회</v-btn>
          <span class="unit mt_8">(단위:원)</span>
        </div>
      </h3>
      <v-table class="vtable_list">
        <colgroup>
          <col style="width:;"/>
          <col style="width:;"/>
          <col style="width:;"/>
          <col style="width:;"/>
          <col style="width:;"/>
        </colgroup>
        <thead>
          <tr>
            <th>구분</th>
            <th>이체금액</th>
            <th>은행</th>
            <th>입금계좌번호</th>
            <th>입금계좌명</th>
          </tr>
        </thead>
        <tbody> 
          <tr>
            <td>정부 계좌</td>
            <td><v-text-field label="이체금액" v-model="price" :rules="priceRules" placeholder="" class="i_basics flex1 none_details t_right" /></td>
            <td><ComSelectBox groupCode="01" v-model="bankName" :items="itemsbankName" class="s_basics none_details" /></td>
            <td><v-text-field label="입금계좌번호" v-model="accNum" :rules="accNumRules" placeholder="" class="i_basics flex1 none_details" /></td>
            <td>홍길동</td>
          </tr>
          <tr>
            <td>민간 계좌</td>
            <td><v-text-field label="이체금액" v-model="price2" :rules="price2Rules" placeholder="" class="i_basics flex1 none_details t_right" /></td>
            <td>신한은행</td>
            <td>23112356477</td>
            <td></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>반납 금액 합계</td>
            <td class="tot">
              <div class="sum">
                <span>20,000,000</span>
              </div>
            </td>
            <td class="tot">
              <div class="sum">
              </div>
            </td>
            <td class="tot">
              <div class="sum">
              </div>
            </td>
            <td class="tot">
              <div class="sum">
              </div>
            </td>
          </tr>
        </tfoot>
      </v-table>    

      <h3 class="tit_btn stit mt_20">
        <span>반납 일자</span>
        <div>
          <p class="tip_txt">반납 계좌 상세 정보에 따라 영업일 기준 +1일 후 이체 됩니다.</p>
        </div>
      </h3>
      <v-table class="vtable_view bg">
        <colgroup>
          <col style="width:;"/>
          <col style="width:;"/>
          <col style="width:;"/>
          <col style="width:;"/>
          <col style="width:;"/>
          <col style="width:;"/>
        </colgroup>
        <tbody>
          <tr>
            <th>정산확정일자</th>
            <td>2023-11-29</td>
            <th>반납확정일자</th>
            <td>2023-12-01</td>
            <th>이체일자</th>
            <td>2023-12-04</td>
          </tr>
        </tbody>
      </v-table>

      <div class="btn_btm_wrap">
        <v-btn class="vbtn" size="large">정산 반납금 확정</v-btn>
      </div>
    </div>
    <!-- //발주기관 화면 -->

    <!-- 수행기관 화면 -->
    <div v-if="true">
      <h3 class="tit_btn stit mt_20">
        <span>정산 확정 정보</span>
        <div>
          <v-btn class="vbtn line" size="small">정산 보고서</v-btn>
          <span class="unit mt_8">(단위:원)</span>
        </div>
      </h3>
      <v-table class="vtable_list">
        <colgroup>
          <col style="width:200px;"/>
          <col style="width:*;"/>
          <col style="width:*;"/>
          <col style="width:*;"/>
        </colgroup>
        <thead>
          <tr>
            <th>구분</th>
            <th>잔액 합계&#91;C3&#93;</th>
            <th>불인정 금액&#91;D3&#93;</th>
            <th>예상 반납금&#91;C3+D3&#93;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>정부지원금</td>
            <td class="t_right">19,000,000</td>
            <td class="t_right">20,000</td>
            <td class="t_right">19,020,000</td>
          </tr>
          <tr>
            <td>민간부담금</td>
            <td class="t_right">1,000,000</td>
            <td class="t_right">10,000</td>
            <td class="t_right">1,010,000</td>
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
          </tr>
        </tfoot>
      </v-table>

      <h3 class="tit_btn stit mt_20">
        <span>반납 계좌 상세 정보</span>
        <div>
          <span class="unit mt_8">(단위:원)</span>
        </div>
      </h3>
      <v-table class="vtable_list">
        <colgroup>
          <col style="width:;"/>
          <col style="width:;"/>
          <col style="width:;"/>
          <col style="width:;"/>
          <col style="width:;"/>
        </colgroup>
        <thead>
          <tr>
            <th>구분</th>
            <th>이체금액</th>
            <th>은행</th>
            <th>입금계좌번호</th>
            <th>입금계좌명</th>
          </tr>
        </thead>
        <tbody> 
          <tr>
            <td>정부 계좌</td>
            <td class="t_right">4,700,000</td>
            <td>신한은행</td>
            <td>23112356477</td>
            <td>홍길동</td>
          </tr>
          <tr>
            <td>민간 계좌</td>
            <td class="t_right">30,000</td>
            <td>신한은행</td>
            <td>23112356477</td>
            <td></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>반납 금액 합계</td>
            <td class="tot">
              <div class="sum">
                <span>20,000,000</span>
              </div>
            </td>
            <td class="tot">
              <div class="sum">
              </div>
            </td>
            <td class="tot">
              <div class="sum">
              </div>
            </td>
            <td class="tot">
              <div class="sum">
              </div>
            </td>
          </tr>
        </tfoot>
      </v-table>

      <h3 class="tit_btn stit mt_20">반납 일자</h3>
      <v-table class="vtable_view bg">
        <colgroup>
          <col style="width:;"/>
          <col style="width:;"/>
          <col style="width:;"/>
          <col style="width:;"/>
          <col style="width:;"/>
          <col style="width:;"/>
        </colgroup>
        <tbody>
          <tr>
            <th>정산확정일자</th>
            <td>2023-11-29</td>
            <th>반납확정일자</th>
            <td>2023-12-01</td>
            <th>이체일자</th>
            <td>2023-12-04</td>
          </tr>
        </tbody>
      </v-table>
    </div>
    <!-- 수행기관 화면 -->

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

const guideShow = ref(false)
const guideView = () => {
  guideShow.value = !guideShow.value
  //this.$refs.guideScroll.scrollIntoView({ behavior: "smooth" })
};

const price = ref('4,700,000')
const priceRules = [
  //(v) => !!v || '',
]
const price2 = ref('30,000')
const price2Rules = [
  //(v) => !!v || '',
]

const accNum = ref('23112356477')
const accNumRules = [
  //(v) => !!v || '',
]

const accNum2 = ref('23112356477')
const accNum2Rules = [
  //(v) => !!v || '',
]

const bankName = ref('001')
const itemsbankName = ref([
  { title: '신한은행', value: '001' },
  { title: '국민은행', value: '002' },
  { title: '하나은행', value: '003' },
])

const bankName2 = ref('001')
const itemsbankName2 = ref([
  { title: '신한은행', value: '001' },
  { title: '국민은행', value: '002' },
  { title: '하나은행', value: '003' },
])

const today = new Date() // 현재 날짜와 시간을 포함하는 Date 객체 생성
const year = today.getFullYear() // 년도 가져오기
const month = today.getMonth() + 1 // 월 가져오기 (0부터 시작하므로 1 더하기)
const day = today.getDate() // 일 가져오기
const formattedToday = new Date(
  `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
)
const startDate = ref()
const startDate2 = ref()

</script> 