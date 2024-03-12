<template>

  <div class="title_box">
    <h2>공고 조회</h2>
    <ul class="loc">
      <li>홈</li>
      <li>계약관리</li>
      <li>공고조회</li>
    </ul>
  </div>

  <div class="conbody">

    <h3 class="title">차세대 이관작업 대행 업체 선정 공고</h3>
    <ul class="title_after_info">
      <li><span class="tit">사업공고번호</span>23123401</li>
      <li><span class="tit">시작일</span>2023.10.10</li>
      <li><span class="tit">종료일</span>2023.11.01</li>
      <li>
        <span class="tit">발주 기관 명</span>발주기관99999
        <nuxt-link to="/pub/COT/COT001S01" class="vlink btn_meno">쪽지</nuxt-link>
      </li>
      <li><span class="tit">발주 기관 주소</span>서울특별시</li>
    </ul>

    <dl class="dl_bg_bdr mt_40">
      <dt>계약방법</dt>
      <dd>제한경쟁입찰</dd>
      <dt>낙찰자 결정 방식 : 현상에 의한 계약</dt>
      <dd>다수의 공급 업체를 대상으로 제안서 접수 및 평가 절차 진행 후 가장 적합한 업체를 우선 협상 대상으로 선정</dd>
      <dt>계약 체결 형태 : 증액 계약</dt>
      <dd>당행 계약 목적물 전체에 대하여 총액으로 가격 협상하여 계약을 체결</dd>
    </dl>

    <div class="file_list link">
      <p class="tit">공고 첨부</p>
      <ul>
        <li><nuxt-link to="/pub/COT/COT001S01" class="vlink basic">공고문.pdf</nuxt-link></li>
        <li><nuxt-link to="/pub/COT/COT001S01" class="vlink basic">주요구축내용.doc</nuxt-link></li>
      </ul>
      <p class="tip_txt">파일을 선택 하시면 각 파일을 뷰어로 확인하실 수 있습니다.</p>
    </div>

    <div class="file_list">
      <p class="tit">제출 문서 목록</p>
      <ul>
        <li>재무재표</li>
        <li>보증보험 정보</li>
      </ul>
    </div>

    <h3>공고 제안 접수</h3>
    <v-table class="vtable_view">
      <tbody>
        <tr>
          <th>제안내용</th>
          <td>
            <v-textarea placeholder="내용을 입력하세요." class="h_200"></v-textarea>
            <p class="txt_limit">0/1,000 자</p>
          </td>
        </tr>
        <tr>
          <th>제출 문서 목록</th>
          <td><v-btn class="vbtn line" size="small">문서 관리</v-btn></td>
        </tr>
      </tbody>
    </v-table>

    <div class="btn_btm_wrap">
      <v-btn class="vbtn blue" size="large">목록</v-btn>
      <v-tooltip text="버튼을 누르시면 법인 인증서 인증 완료 후 최종 제출됩니다." location="top" model-value>
        <template v-slot:activator="{ props }">
          <v-btn class="vbtn" size="large" v-bind="props">공고제안접수</v-btn>
        </template>
      </v-tooltip>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >



</script> 