<template>

  <div class="title_box">
    <h2>TASK 상세 조회</h2>
    <ul class="loc">
      <li>홈</li>
      <li>협약관리</li>
      <li>TASK 조회</li>
    </ul>
  </div>

  <div class="conbody">

    <h3 class="title">2023년 차세대 이관 작업 대행 업체 선정 공고</h3>
    <dl class="dl_bg_bdr mt_20">
      <dt>계약방법</dt>
      <dd>제한경쟁입찰</dd>
      <dt>낙찰자 결정 방식 : 현상에 의한 계약</dt>
      <dd>다수의 공급 업체를 대상으로 제안서 접수 및 평가 절차 진행 후 가장 적합한 업체를 우선 협상 대상으로 선정</dd>
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
            <th>PMS 관리번호</th>
          <td>1234567890</td>
        </tr>
        <tr>
          <th>사업 상태</th>
          <td>사업진행</td>
          <th>내부 사업</th>
          <td>Y</td>
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
            TASK 중단(사업자등록증 변경) <v-btn class="vbtn line" size="small">TASK 진행</v-btn>
          </td>
        </tr>
        <tr>
          <th>TASK 시작일</th>
          <td>2023-10-10</td>
          <th>TASK 종료일</th>
          <td>2023-10-11</td>
        </tr>
        <tr>
          <th>관리 유형</th>
          <td colspan="3">신한은행 EZ+</td>
        </tr>
        <tr>
          <th>계정 계좌 정보</th>
          <td colspan="3">
            <ul class="list_bar a_center">
              <li>계정 : 085758654321</li>
              <li>계좌번호 : 123456787580<v-btn class="vbtn line ml_10" size="small">정보 조회</v-btn></li>
              <li>상태 : 정상</li>
              <li>상태 : 정상</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </v-table>

    <h4>TASK 협약 문서</h4>
    <v-table class="vtable_list scroll h_299"><!-- 5 line h_299 -->
      <colgroup>
        <col style="width:80px;"/>
        <col style="width:;"/>
      </colgroup>
      <thead>
        <tr>
          <th>NO.</th>
          <th>업로드 파일 명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><nuxt-link to="/pub/COV/COV003S01" class="vlink basic ico_file">수주계약서.pdf</nuxt-link></td>
        </tr>
        <tr>
          <td>2</td>
          <td><nuxt-link to="/pub/COV/COV003S01" class="vlink basic ico_file">수주계약서.pdf</nuxt-link></td>
        </tr>
        <tr>
          <td>3</td>
          <td><nuxt-link to="/pub/COV/COV003S01" class="vlink basic ico_file">수주계약서.pdf</nuxt-link></td>
        </tr>
        <tr>
          <td>4</td>
          <td><nuxt-link to="/pub/COV/COV003S01" class="vlink basic ico_file">수주계약서.pdf</nuxt-link></td>
        </tr>
        <tr>
          <td>5</td>
          <td><nuxt-link to="/pub/COV/COV003S01" class="vlink basic ico_file">수주계약서.pdf</nuxt-link></td>
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