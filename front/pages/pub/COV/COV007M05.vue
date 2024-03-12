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
        <ul class="step_list task_corp active_step_6"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3, active_step_4, active_step_5, active_step_6 -->
          <li class="step1">TASK 기업 정보</li>
          <li class="step2">사업비 계좌 정보</li>
          <li class="step3">문서 첨부 정보</li>
          <li class="step4">입금 계획 정보</li>
          <li class="step5">담당자 정보</li>
        </ul>
      </div>

      <div class="step_con">
        
        <h3><span>2023년 차세대 이관 작업 대행 선정 공고 사업</span><div class="right"><span>기간</span>2023.10.10~2024.11.01</div></h3>
        <v-table class="vtable_view bg mt_20">
          <colgroup>
            <col style="width:160px;" />
            <col style="width:271px;" />
            <col style="width:160px;" />
            <col style="width:271px;" />
          </colgroup>
          <tbody>
            <tr>
              <th>TASK 명</th>
              <td>TASK01</td>
              <th>사업비 계좌</th>
              <td>신한은행 56291835234701</td>              
            </tr>
            <tr>
              <th>TASK 기간</th>
              <td>2023-10-10 ~ 2023-10-10</td>
              <th>예산 금액</th>
              <td>1,000,000원</td>
            </tr>
            <tr>
              <th>TASK 협약 문서</th>
              <td>총 6건</td>
              <th>반납금 자동이체 동의</th>
              <td>Y</td>
            </tr>
            <tr>
              <th>TASK 진행방법</th>
              <td colspan="3">컨소시업 OR 주관 기업 OR 2321234BO</td>              
            </tr>
          </tbody>
        </v-table>

        <v-table class="vtable_list mt_20 scroll maxh_295"><!-- 5 line maxh_295 ,  10 line maxh_544 -->
          <colgroup>
            <col style="width:80px;"/>
            <col style="width:;"/>
            <col style="width:;"/>
            <col style="width:;"/>
          </colgroup>
          <thead>
            <tr>
              <th>NO.</th>
              <th>입금 시작일</th>
              <th>입금 종료일</th>
              <th>입금계획금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2023-10-10</td>
              <td>2023-10-10</td>
              <td>50,000,000원</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2023-10-10</td>
              <td>2023-10-10</td>
              <td>50,000,000원</td>
            </tr>
            <tr>
              <td>3</td>
              <td>2023-10-10</td>
              <td>2023-10-10</td>
              <td>50,000,000원</td>
            </tr>
            <tr>
              <td>4</td>
              <td>2023-10-10</td>
              <td>2023-10-10</td>
              <td>50,000,000원</td>
            </tr>
            <tr>
              <td>5</td>
              <td>2023-10-10</td>
              <td>2023-10-10</td>
              <td>50,000,000원</td>
            </tr>
          </tbody>
        </v-table>

        <v-table class="vtable_list none_head_line mt_20 scroll maxh_294"><!-- 5 line maxh_294 ,  10 line maxh_544 -->
          <colgroup>
            <col style="width:;"/>
            <col style="width:;"/>
          </colgroup>
          <thead>
            <tr>
              <th>회원정보</th>
              <th colspan="2">담당자 권한</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>김신한(88)</td>
              <td>사업 담당자</td>
              <td>지급 담당자</td>
            </tr>
            <tr>
              <td>김신한(88)</td>
              <td></td>
              <td>지급 담당자</td>
            </tr>
            <tr>
              <td>김신한(88)</td>
              <td></td>
              <td>지급 담당자</td>
            </tr>
            <tr>
              <td>김신한(88)</td>
              <td>사업 담당자</td>
              <td></td>
            </tr>
            <tr>
              <td>김신한(88)</td>
              <td>사업 담당자</td>
              <td></td>
            </tr>
          </tbody>
        </v-table>

        <div class="btn_btm_wrap">
          <v-btn class="vbtn blue" size="large">이전</v-btn>
          <v-btn class="vbtn" size="large">TASK 신청</v-btn>
        </div>
        
      </div>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >



</script> 