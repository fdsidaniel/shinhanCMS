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
        <ul class="step_list active_step_5"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3, active_step_4, active_step_5 -->
          <li class="step1">사업정보</li>
          <li class="step2">참여기관<br>협약문서정보</li>
          <li class="step3">사업비 계좌 정보</li>
          <li class="step4">비목세목 정보</li>
          <li class="step5">결재선 정보</li>
        </ul>
      </div>

      <div class="step_con">

        <!-- <p class="stit">결재선 정보</p>
        <h3>차세대 이관 작업 대행 선정 공고 사업을 시작합니다.</h3> -->
        <div class="row">
          <div class="tit">TASK 신규를 다단계 결재로 진행 하시겠습니까?
            <div class="right">
              <v-btn class="vbtn line" size="small">결재선 변경</v-btn>
            </div>
          </div>
          <div class="con">
            <div class="d_flex">
                <v-btn class="vbtn line big flex1" size="small">예</v-btn>
                <v-btn class="vbtn line big flex1 ml_10" size="small">아니오</v-btn>
            </div>
            <v-table class="vtable_list none_head_line">
              <colgroup>
                <col style="width:80px;"/>
                <col style="width:400px;"/>
                <col style="width:382px;"/>
              </colgroup>
              <thead>
                <tr>
                  <th>NO</th>
                  <th>차수</th>
                  <th>승인자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>1차 승인자</td>
                  <td>김신한</td>
                </tr>
                 <tr>
                  <td>2</td>
                  <td>2차 승인자</td>
                  <td>김신한</td>
                </tr>
                  <tr>
                  <td>3</td>
                  <td>3차 승인자</td>
                  <td>김신한</td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </div>

        <div class="row">
          <div class="tit">지급요청을 다단계 결재로 진행 하시나요?
            <div class="right">
              <v-btn class="vbtn line" size="small">결재선 변경</v-btn>
            </div>
          </div>
          <div class="con">
            <div class="d_flex">
                <v-btn class="vbtn line big flex1" size="small">예</v-btn>
                <v-btn class="vbtn line big flex1 ml_10" size="small">아니오</v-btn>
            </div>
            <v-table class="vtable_list none_head_line">
              <colgroup>
                <col style="width:80px;"/>
                <col style="width:400px;"/>
                <col style="width:382px;"/>
              </colgroup>
              <thead>
                <tr>
                  <th>NO</th>
                  <th>차수</th>
                  <th>승인자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2차 승인자</td>
                  <td>김신한</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>3차 승인자</td>
                  <td>김신한</td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </div>

        <div class="row">
          <div class="tit">TASK 정산확정을 다단계 결재로 진행 하시나요?
            <div class="right">
              <v-btn class="vbtn line" size="small">결재선 변경</v-btn>
            </div>
          </div>
          <div class="con">
            <div class="d_flex">
                <v-btn class="vbtn line big flex1" size="small">예</v-btn>
                <v-btn class="vbtn line big flex1 ml_10" size="small">아니오</v-btn>
            </div>
            <v-table class="vtable_list none_head_line">
              <colgroup>
                <col style="width:80px;"/>
                <col style="width:400px;"/>
                <col style="width:382px;"/>
              </colgroup>
              <thead>
                <tr>
                  <th>NO</th>
                  <th>차수</th>
                  <th>승인자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>3차 승인자</td>
                  <td>김신한</td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </div>

        <div class="btn_btm_wrap">
          <v-btn class="vbtn blue" size="large">이전</v-btn>
          <v-btn class="vbtn" size="large">다음</v-btn>
        </div>
        
      </div>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >



</script> 