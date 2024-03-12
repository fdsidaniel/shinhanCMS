<template>

  <div class="title_box">
    <h2>사업참여(TASK) 상세 조회</h2>
    <ul class="loc">
      <li>홈</li>
      <li>협약관리</li>
      <li>사업참여(TASK)조회</li>
    </ul>
  </div>

  <div class="conbody">

    <h3 class="title">2023년 차세대 이관 작업 대행 업체 선정 공고</h3>
    <div class="t_right"><v-btn class="vbtn line" size="small">담당자 정보</v-btn></div>
    <dl class="dl_bg_bdr mt_10">
      <dt>계약방법</dt>
      <dd>제한경쟁입찰</dd>
      <dt>낙찰자 결정 방식 : 현상에 의한 계약</dt>
      <dd>다수의 공급 업체를 대상으로 제안서 접수 및 평가 절차 진행 후 가장 적합한 업체를 우선 협상 대상으로 선정</dd>
      <dt>계약 체결 형태 : 증액 계약</dt>
      <dd>당행 계약 목적물 전체에 대하여 총액으로 가격 협상하여 계약을 체결</dd>
    </dl>

    <v-table class="vtable_view bg mt_20">
      <colgroup>
        <col style="width:150px;" />
        <col style="width:428px;" />
        <col style="width:150px;" />
        <col style="width:428px;" />
      </colgroup>
      <tbody>
        <tr>
          <th>사업 시작일</th>
          <td>2023.10.10</td>
          <th>사업 종료일</th>
          <td>2023.11.01</td>
        </tr>
        <tr>
          <th>사업 번호</th>
          <td>231234B01</td>
          <th>사업공고번호</th>
          <td>23123401</td>
        </tr>
        <tr>
          <th>PMS 관리번호</th>
          <td>1234567890</td>
          <th>사업 상태</th>
          <td>사업진행</td>
        </tr>
        <tr>
          <th>발주 기관 명</th>
          <td>발주기관99</td>
          <th>발주 기관 주소</th>
          <td>서울특별시</td>
        </tr>
        <tr>
          <th>관리 유형</th>
          <td colspan="3">AI-OCR, 계좌이체, 신한은행 EZ+</td>
        </tr>
      </tbody>
    </v-table>

    <h4>TASK 정보</h4>
    <v-table class="vtable_view inbtn bg">
      <colgroup>
        <col style="width:150px;" />
        <col style="width:428px;" />
        <col style="width:150px;" />
        <col style="width:428px;" />
      </colgroup>
      <tbody>
        <tr>
          <th>TASK명</th>
          <td>회원관리01</td>
          <th>TASK 상태</th>
          <td>
            TASK 중단(사업자등록증 변경) <!--<v-btn class="vbtn line" size="small">TASK 진행</v-btn>-->
          </td>
        </tr>
        <tr>
          <th>TASK 시작일</th>
          <td>2023-10-10</td>
          <th>TASK 종료일</th>
          <td>2023-10-11</td>
        </tr>
        <tr>
          <th>공동 TASK 정보</th>
          <td>231234B0-000</td>
          <th>상위 TASK 정보</th>
          <td>231234B0-000</td>
        </tr>
      </tbody>
    </v-table>

    <h4>사업비 정보</h4>
    <v-table class="vtable_view inbtn bg">
      <colgroup>
        <col style="width:150px;" />
        <col style="width:428px;" />
        <col style="width:150px;" />
        <col style="width:428px;" />
      </colgroup>
      <tbody>
        <tr>
          <th>사업비 계좌</th>
          <td>신한은행 56291038255529</td>
          <th>예산</th>
          <td>1,000만원</td>
        </tr>
        <tr>
          <th>1회 승인한도금액</th>
          <td>1,000만원</td>
          <th>1일 승인한도금액</th>
          <td>1,000만원</td>
        </tr>
        <tr>
          <th>가상계좌 종류</th>
          <td colspan="3">정부, 민간, 환입</td>
        </tr>
        <tr>
          <th>민간 계좌정보</th>
          <td colspan="3">
            신한은행 1234567890 <v-btn class="vbtn line" size="small">잔액 조회</v-btn>
            <span class="ml_20">(잔액 : 10,000,000 원)</span>
          </td>
        </tr>
        <tr>
          <th>환입 계좌정보</th>
          <td colspan="3">
            신한은행 1234567890 <v-btn class="vbtn line" size="small">잔액 조회</v-btn>
            <span class="ml_20">(잔액 : 10,000,000 원)</span>
          </td>
        </tr>
      </tbody>
    </v-table>

    <h4>입금 계획 정보</h4>
    <v-table class="vtable_list scroll h_295"><!-- 5 line h_295 -->
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

    <h4>담당자 관리</h4>
    <v-table class="vtable_list none_head_line">
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
          <td>지급 담당자</td>
        </tr>
        <tr>
          <td>김신한(88)</td>
          <td>사업 담당자</td>
          <td></td>
        </tr>
      </tbody>
    </v-table>

    
    <div class="btn_btm_wrap">      
      <v-btn class="vbtn blue" size="large">수정</v-btn>
      <v-btn class="vbtn" size="large">목록</v-btn>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >



</script> 