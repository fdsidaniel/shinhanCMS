<template>

  <div class="title_box">
    <h2>사업 신규등록</h2>
    <ul class="loc">
      <li>홈</li>
      <li>협약관리</li>
      <li>사업 신규등록</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="step_wrap">
      <div class="step_box">
        <ul class="step_list active_step_6"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3, active_step_4, active_step_5, active_step_6 -->
          <li class="step1">사업정보</li>
          <li class="step2">참여기관<br>협약문서정보</li>
          <li class="step3">사업비 계좌 정보</li>
          <li class="step4">비목세목 정보</li>
          <li class="step5">결재선 정보</li>
        </ul>
      </div>

      <div class="step_con">

        <h3><span>차세대 이관 작업 대행 선정 공고 사업</span><div class="right"><span>기간</span>2023.10.10~2024.11.01</div></h3>

        <v-table class="vtable_view bg mt_20">
          <tbody>
            <tr>
              <th>PMS 관리번호</th>
              <td>-</td>
              <th>관리 유형</th>
              <td>AI-OCR, 계좌이체</td>
            </tr>
            <tr>
              <th>참여기관 정보</th>
              <td>총 6 기관</td>
              <th>TASK 협약 문서</th>
              <td>총 6 건</td>
            </tr>
            <tr>
              <th>집금계좌정보</th>
              <td>신한은행 562911835234701 </td>
              <th>모계좌정보</th>
              <td>신한은행 562911835234702</td>
            </tr>
            <tr>
              <th>1회 승인한도금액</th>
              <td>1,000,000원</td>
              <th>1일 승인한도금액</th>
              <td>1,000,000원</td>
            </tr>
            <tr>
              <th>결재선</th>
              <td colspan="3">
                <ul class="list_bar">
                  <li>TASK 신규 1차 승인</li>
                  <li>지급 요청 3차 승인</li>
                  <li>TASK 정산 확정 5차 승인</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </v-table>

        <v-table class="vtable_list none_head_line mt_20">
          <colgroup>
            <col style="width:;"/>
            <col style="width:;"/>
          </colgroup>
          <thead>
            <tr>
              <th>비목</th>
              <th>세목</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="4">직접비</td>
              <td>내부 인건비</td>
            </tr>
            <tr>
              <td>연구장비, 재료비</td>
            </tr>
            <tr>
              <td>연구활동비</td>
            </tr>
            <tr>
              <td>연구과제추진비</td>
            </tr>
            <tr>
              <td rowspan="2">간접비</td>
              <td>간접비</td>
            </tr>
            <tr>
              <td>미등록카드건</td>
            </tr>
          </tbody>
        </v-table>

        <div class="btn_btm_wrap">
          <v-btn class="vbtn blue" size="large">이전</v-btn>
          <v-btn class="vbtn" size="large">수정완료</v-btn>
        </div>
        
      </div>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >



</script> 