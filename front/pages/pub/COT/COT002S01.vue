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
    </ul>

    <dl class="dl_bg_bdr mt_20">
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

    <div class="btn_btm_wrap">
      <v-btn class="vbtn blue" size="large">삭제</v-btn>
      <v-btn class="vbtn blue" size="large">목록</v-btn>
      <v-btn class="vbtn" size="large">수정</v-btn>
    </div>
    
    <div class="tit_cnt_btn mt_40">      
      <div class="tit_cnt a_center">
        <p class="tit">제안 업체 목록</p>
        총 <b>100</b>건
      </div>
    </div>
    <v-table class="vtable_list inbtn mt_10 scroll h_299">
      <colgroup>
        <col style="width:60px;"/>
        <col style="width:80px;"/>
        <col style="width:160px;"/>
        <col style="width:*;"/>
        <col style="width:150px;"/>
        <col style="width:200px;"/>
        <col style="width:150px;"/>
      </colgroup>
      <thead>
        <tr>
          <th class="center"><v-checkbox v-model="checkbox1" /></th>
          <th>NO.</th>
          <th>제출 일시</th>
          <th>수행 기관 명</th>
          <th>책임자</th>
          <th>제출 문서 목록</th>
          <th>제안 선정 결과</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox2" /></td>
          <td>99999</td>
          <td>23.10.10 12:10:00</td>
          <td>
            <span>수행기관333</span>
            <v-btn class="vbtn line ml_10" size="small">사업자등록증</v-btn>
          </td>
          <td>
            김수행
            <nuxt-link to="/pub/COT/COT002S01" class="vlink btn_mobile">책임자 정보 보기</nuxt-link>
          </td>
          <td><nuxt-link to="/pub/COT/COT002S01" class="vlink basic line">제출 문서 보기</nuxt-link></td>
          <td><nuxt-link to="/pub/COT/COT002S01" class="vlink basic line">선정</nuxt-link></td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox3" /></td>
          <td>2</td>
          <td>23.10.10 12:10:00</td>
          <td>
            <span>수행기관333</span>
            <v-btn class="vbtn line ml_10" size="small">사업자등록증</v-btn>
          </td>
         <td>
            김수행
            <nuxt-link to="/pub/COT/COT002S01" class="vlink btn_mobile">책임자 정보 보기</nuxt-link>
          </td>
          <td><nuxt-link to="/pub/COT/COT002S01" class="vlink basic line">제출 문서 보기</nuxt-link></td>
          <td><nuxt-link to="/pub/COT/COT002S01" class="vlink basic line">선정</nuxt-link></td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox4" /></td>
          <td>3</td>
          <td>23.10.10 12:10:00</td>
          <td>
            <span>수행기관333</span>
            <v-btn class="vbtn line ml_10" size="small">사업자등록증</v-btn>
          </td>
          <td>
            김수행
            <nuxt-link to="/pub/COT/COT002S01" class="vlink btn_mobile">책임자 정보 보기</nuxt-link>
          </td>
          <td><nuxt-link to="/pub/COT/COT002S01" class="vlink basic line">제출 문서 보기</nuxt-link></td>
          <td><nuxt-link to="/pub/COT/COT002S01" class="vlink basic line">선정</nuxt-link></td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox5" /></td>
          <td>4</td>
          <td>23.10.10 12:10:00</td>
          <td>
            <span>수행기관333</span>
            <v-btn class="vbtn line ml_10" size="small">사업자등록증</v-btn>
          </td>
          <td>
            김수행
            <nuxt-link to="/pub/COT/COT002S01" class="vlink btn_mobile">책임자 정보 보기</nuxt-link>
          </td>
          <td><nuxt-link to="/pub/COT/COT002S01" class="vlink basic line">제출 문서 보기</nuxt-link></td>
          <td><nuxt-link to="/pub/COT/COT002S01" class="vlink basic line">선정</nuxt-link></td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox6" /></td>
          <td>5</td>
          <td>23.10.10 12:10:00</td>
          <td>
            <span>수행기관333</span>
            <v-btn class="vbtn line ml_10" size="small">사업자등록증</v-btn>
          </td>
          <td>
            김수행
            <nuxt-link to="/pub/COT/COT002S01" class="vlink btn_mobile">책임자 정보 보기</nuxt-link>
          </td>
          <td><nuxt-link to="/pub/COT/COT002S01" class="vlink basic line">제출 문서 보기</nuxt-link></td>
          <td><nuxt-link to="/pub/COT/COT002S01" class="vlink basic line">선정</nuxt-link></td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox7" /></td>
          <td>5</td>
          <td>23.10.10 12:10:00</td>
          <td>
            <span>수행기관333</span>
            <v-btn class="vbtn line ml_10" size="small">사업자등록증</v-btn>
          </td>
          <td>
            김수행
            <nuxt-link to="/pub/COT/COT002S01" class="vlink btn_mobile">책임자 정보 보기</nuxt-link>
          </td>
          <td><nuxt-link to="/pub/COT/COT002S01" class="vlink basic line">제출 문서 보기</nuxt-link></td>
          <td><nuxt-link to="/pub/COT/COT002S01" class="vlink basic line">선정</nuxt-link></td>
        </tr>
        <tr>
          <td class="center"><v-checkbox v-model="checkbox8" /></td>
          <td>5</td>
          <td>23.10.10 12:10:00</td>
          <td>
            <span>수행기관333</span>
            <v-btn class="vbtn line ml_10" size="small">사업자등록증</v-btn>
          </td>
          <td>
            김수행
            <nuxt-link to="/pub/COT/COT002S01" class="vlink btn_mobile">책임자 정보 보기</nuxt-link>
          </td>
          <td><nuxt-link to="/pub/COT/COT002S01" class="vlink basic line">제출 문서 보기</nuxt-link></td>
          <td><nuxt-link to="/pub/COT/COT002S01" class="vlink basic line">선정</nuxt-link></td>
        </tr>
      </tbody>
    </v-table>
    <div class="btn_btm_wrap left">
      <v-btn class="vbtn line" size="small">선정 결과 등록</v-btn>
    </div>

    <div class="btn_btm_wrap">
      <v-btn class="vbtn" size="large">사업 연계</v-btn>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

const checkbox1 = ref(false)
const checkbox2 = ref(false)
const checkbox3 = ref(false)
const checkbox4 = ref(false)
const checkbox5 = ref(false)
const checkbox6 = ref(false)
const checkbox7 = ref(false)
const checkbox8 = ref(false)

</script> 