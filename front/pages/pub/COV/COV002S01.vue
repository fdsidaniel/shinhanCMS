<template>

  <div class="title_box">
    <h2>사업 상세 조회</h2>
    <ul class="loc">
      <li>홈</li>
      <li>협약관리</li>
      <li>사업 상세 조회</li>
    </ul>
  </div>

  <div class="conbody">

    <h3 class="title">2023년 차세대 이관 작업 대행 업체 선정 공고</h3>
    <dl class="dl_bg_bdr mt_20">
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
          <th>관리유형</th>
          <td>AI-OCR, 계좌이체, 신한은행 EZ+</td>
          <th>내부 사업</th>
          <td>N</td>
        </tr>
      </tbody>
    </v-table>

    <h4>참여기관 정보</h4>
    <v-table class="vtable_list scroll"><!-- h_295 -->
      <colgroup>
        <col style="width:80px;"/>
        <col style="width:538px;"/>
        <col style="width:538px;"/>
      </colgroup>
      <thead>
        <tr>
          <th>NO.</th>
          <th>기관 명</th>
          <th>사업 번호</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>한마생명</td>
          <td>123456789010000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>한마생명</td>
          <td>123456789010000</td>
        </tr>
        <tr>
          <td>3</td>
          <td>한마생명</td>
          <td>123456789010000</td>
        </tr>
        <tr>
          <td>4</td>
          <td>한마생명</td>
          <td>123456789010000</td>
        </tr>
        <tr>
          <td>5</td>
          <td>한마생명</td>
          <td>123456789010000</td>
        </tr>
      </tbody>
    </v-table>

    <h4>TASK 협약 문서</h4>
    <v-table class="vtable_list scroll"><!-- h_295 -->
      <colgroup>
        <col style="width:80px;"/>
        <col style="width:538px;"/>
        <col style="width:538px;"/>
      </colgroup>
      <thead>
        <tr>
          <th>NO.</th>
          <th>구분</th>
          <th>문서 명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>AI-OCR</td>
          <td>재무 재표</td>
        </tr>
        <tr>
          <td>2</td>
          <td>AI-OCR</td>
          <td>재무 재표</td>
        </tr>
        <tr>
          <td>3</td>
          <td>AI-OCR</td>
          <td>재무 재표</td>
        </tr>
        <tr>
          <td>4</td>
          <td>AI-OCR</td>
          <td>재무 재표</td>
        </tr>
        <tr>
          <td>5</td>
          <td>AI-OCR</td>
          <td>재무 재표</td>
        </tr>
      </tbody>
    </v-table>

    <h4>사업비 계좌 정보</h4>
    <v-table class="vtable_view bg">
      <colgroup>
        <col style="width:150px;"/>
        <col style="width:428px;"/>
        <col style="width:150px;"/>
        <col style="width:428px;"/>
      </colgroup>
      <tbody>
        <tr>
          <th>집금 계좌</th>
          <td>신한은행 56291038255527</td>
          <th>모 계좌</th>
          <td>신한은행 56291038255527</td>
        </tr>
        <tr>
          <th>1회 승인한도금액</th>
          <td>1,000만원</td>
          <th>1일 승인한도금액</th>
          <td>1,000만원</td>
        </tr>
      </tbody>
    </v-table>

    <h4>비목세목 정보</h4>
    <v-table class="vtable_list none_head_line">
      <colgroup>
        <col style="width:50%;"/>
        <col style="width:50%;"/>
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

    <h4 class="mt_40">결재선 정보</h4>
    <h5>TASK 신규</h5>
    <v-table class="vtable_list">
      <colgroup>
        <col style="width:80px;"/>
        <col style="width:538px;"/>
        <col style="width:538px;"/>
      </colgroup>
      <thead>
        <tr>
          <th>NO.</th>
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

    <h5>지급요청</h5>
    <v-table class="vtable_list">
      <colgroup>
        <col style="width:80px;"/>
        <col style="width:538px;"/>
        <col style="width:538px;"/>
      </colgroup>
      <thead>
        <tr>
          <th>NO.</th>
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

    <h5>TASK 정산확정</h5>
    <v-table class="vtable_list">
      <colgroup>
        <col style="width:80px;"/>
        <col style="width:538px;"/>
        <col style="width:538px;"/>
      </colgroup>
      <thead>
        <tr>
          <th>NO.</th>
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

    
    <div class="btn_btm_wrap">      
      <v-btn class="vbtn blue" size="large">목록</v-btn>
      <v-btn class="vbtn" size="large">수정</v-btn>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >



</script> 