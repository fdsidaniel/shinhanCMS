<template>

  <div class="title_box">
    <h2>집행 관리</h2>
    <ul class="loc">
      <li>홈</li>
      <li>집행 관리</li>
      <li>민간 계좌 입금 취소</li>
    </ul>
  </div>

  <div class="conbody">

    <ul class="top_step_list active_step_3"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3 -->
      <li class="step1"><span>신청</span></li>
      <li class="step2"><span>승인</span></li>
      <li class="step3"><span>이체 실행</span></li>
    </ul>

    <div class="search_box top other noline mt_40">
      <div class="row">
        <div class="con d_flex flex1">
          <span class="tit">TASK명</span>
          <div class="txt tooltip_box flex1 mr_0">
            <ComSelectBox groupCode="01" v-model="comboTaskName" :items="itemsTaskName" class="s_basics none_details" />
            <p class="tooltip over_slt" @click="layerPopView">TASK 정보</p>
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
      </div>
    </div>

    <h3 class="stit">사업비 취소 정보<div class="unit">(단위:원)</div></h3>
    <v-table class="vtable_list none_head_line">
      <colgroup>
        <col style="width:289px;"/>
        <col style="width:289px;"/>
        <col style="width:289px;"/>
        <col style="width:289px;"/>
      </colgroup>
      <thead>
        <tr>
          <th>책임자</th>
          <th>입금 된 계좌번호</th>
          <th>입금 된 일자</th>
          <th>사업비 취소 금액</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>김수행수행</td>
          <td>56291835234701</td>
          <td>2023-10-10</td>
          <td class="t_right">10,000,000</td>
        </tr>
      </tbody>
    </v-table>

    <h3 class="stit">사업비 취소 금액 입금 계좌 정보<div class="unit">(단위:원)</div></h3>
    <v-table class="vtable_list none_head_line">
      <colgroup>
        <col style="width:289px;"/>
        <col style="width:289px;"/>
        <col style="width:209px;"/>
        <col style="width:369px;"/>
      </colgroup>
      <thead>
        <tr>
          <th>출금 계좌번호</th>
          <th>입금 계좌정보</th>
          <th>입금 금액</th>
          <th>임금 취소 사유</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>56291835234701</td>
          <td>56291835234701</td>
          <td class="t_right">10,000,000</td>
          <td>불입금 처리하고 싶습니다.</td>
        </tr>
      </tbody>
    </v-table>

    <h3 class="stit">신청자 정보</h3>
    <v-table class="vtable_list inbtn none_head_line">
      <colgroup>
        <col style="width:;"/>
        <col style="width:;"/>
        <col style="width:;"/>
      </colgroup>
      <thead>
        <tr>
          <th>신청 일자</th>
          <th>신청인</th>
          <th>결재 정보</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2023-10-10</td>
          <td>김수행수행</td>
          <td><v-btn class="vbtn line" size="small">결재 정보</v-btn></td>
        </tr>
      </tbody>
    </v-table>

    <div class="btn_btm_wrap">
      <v-btn class="vbtn" size="large">입금취소 이체 승인</v-btn>
    </div>

  </div>
  
</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'

// TASK 정보 레이어 팝업
const layerPop = ref(false)
const layerPopView = () => {
  layerPop.value = !layerPop.value
};

const comboTaskName = ref('01')
const itemsTaskName = [
  { title: '회원관리 UI/UX 화면 변경 진행 화면', value: '01' },
  { title: 'TASK 명을 기준으로 민간 계좌가 있는 경우 TASK 노출', value: '02' },
]

</script> 