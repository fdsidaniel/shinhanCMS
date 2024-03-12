<template>
  
  <!-- popup size width:1000 height:962 -->
  <div class="popup_body" style="width:1000px;">
    <h2 class="poptit">문서뷰어 팝업 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <div class="doc_viewer">
      
      <div class="doc_title">
        <p>사업자등록증</p>
        <div class="right"><span>파일명</span>사업자등록증사업자등록증.jpg</div> 
      </div>

      <div class="doc_con">
        <div class="doc_preview" :class="{ 'result': resultInfo}">
          <div class="doc_util">
            <v-btn class="vbtn line btn_prev" size="small">이전</v-btn>
            <span class="pagination">1/5</span>
            <v-btn class="vbtn line btn_next" size="small">다음</v-btn>
            <div class="file_list_view">
              <v-btn class="vbtn line btn_list" size="small" @click="layerPopView">파일 목록</v-btn>
              <!-- layer pop in conbody -->
              <div class="incon_layer_pop" :class="{ 'open': layerPop }">
                <div class="layer_pop_con">
                  <div class="title">
                    파일리스트
                  </div>
                  <v-btn class="vbtn btn_close" @click="layerPopView">닫기</v-btn>
                  <div class="con">
                    <v-table class="vtable_view">
                      <colgroup>
                        <col style="width:100px;"/>
                        <col style="width:*;"/>
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>수주 계약서</th>
                          <td>수주 계약서.pdf</td>
                        </tr>
                        <tr>
                          <th>수주 계약서</th>
                          <td>수주 계약서수주 계약서수주 계약서수주 계약서.pdf</td>
                        </tr>
                        <tr>
                          <th>사업자등록증</th>
                          <td>사업자등록증.pdf</td>
                        </tr>
                        <tr>
                          <th>수주 계약서</th>
                          <td>수주 계약서.pdf</td>
                        </tr>
                        <tr>
                          <th>수주 계약서</th>
                          <td>수주 계약서.pdf</td>
                        </tr>
                        <tr>
                          <th>수주 계약서</th>
                          <td>수주 계약서.pdf</td>
                        </tr>
                        <tr>
                          <th>수주 계약서</th>
                          <td>수주 계약서.pdf</td>
                        </tr>
                        <tr>
                          <th>수주 계약서</th>
                          <td>수주 계약서.pdf</td>
                        </tr>
                        <tr>
                          <th>수주 계약서</th>
                          <td>수주 계약서.pdf</td>
                        </tr>
                        <tr>
                          <th>수주 계약서</th>
                          <td>수주 계약서.pdf</td>
                        </tr>
                      </tbody>
                    </v-table>
                  </div>
                </div>
              </div>
              <!-- //layer pop -->
            </div>
            <v-btn class="vbtn line btn_download" size="small">다운로드</v-btn>
          </div>
          <div class="doc_screen">            
            <div class="imgbox">
              <!-- <v-img src="/_nuxt/assets/images/img.jpg" class="vimg" /> -->
              <v-img src="/_nuxt/assets/images/img_h.png" class="vimg" />
              <!-- <v-img src="/_nuxt/assets/images/img2.jpg" class="vimg" /> -->
              <!-- <v-img src="/_nuxt/assets/images/img3.png" class="vimg" /> -->
              <!-- <v-img src="/_nuxt/assets/images/img_w.png" class="vimg" /> -->
            </div>
          </div>
        </div>
        <div class="doc_info" :class="{ 'result': resultInfo}" v-if="true">
          <h3>            
            {{ !resultInfo ? '검증 항목' : '검증 결과' }}
            <v-btn class="vbtn line btn_confirm_result" size="small" v-if="tableView" @click="resultView">검증 결과</v-btn>
            <v-btn class="vbtn line btn_confirm_result close" size="small" v-else @click="resultView">검증 결과 닫기</v-btn>
          </h3>
          <v-table class="vtable_view" v-if="tableView">
            <colgroup>
              <col style="width:80px;"/>
              <col style="width:*;"/>
            </colgroup>
            <tbody>
              <tr>
                <th colspan="2" class="nothing">검증 항목이 없습니다.</th>
              </tr>
              <tr>
                <th>사업자<br>등록번호</th>
                <td>0000-00-00000</td>
              </tr>
              <tr>
                <th>사업자명</th>
                <td>한마정보통신</td>
              </tr>
              <tr>
                <th>대표자명</th>
                <td>홍길동</td>
              </tr>
              <tr>
                <th>개업일자</th>
                <td>2022년 10월 17일</td>
              </tr>
              <tr>
                <th>본사주소</th>
                <td>서울특별시 종로구 자하문로 15길</td>
              </tr>
              <tr>
                <th>사업장주소</th>
                <td>서울특별시 종로구 자하문로 15길</td>
              </tr>
              <tr>
                <th>업종</th>
                <td>재활용품 총관 광고행</td>
              </tr>
              <tr>
                <th>업태</th>
                <td>소매 제도 서비스</td>
              </tr>
            </tbody>
          </v-table>
          <!-- 검증 결과 -->
          <div class="confirm_result" v-else>
            <div class="box">
              <p class="tit">사업자 등록증<span>2023-10-18 23:55:55</span></p>
              <ul class="list">
                <li>
                  <p class="stit">01. 사업자 계약서 발주서 관련 사항에 대한 <b class="fail">실패-문서판독불가</b> 입니다.</p>
                  <p class="code">1234567890_0987654321</p>
                  <p class="txt">한마정보통신_견적서</p>
                </li>
                <li>
                  <p class="stit">02. 사업자 계약서 발주서 관련 사항에 대한 <b class="success">성공</b> 입니다.</p>
                  <p class="code">1234567890_0987654321</p>
                  <p class="txt">한마정보통신_견적서</p>
                </li>
                <li>
                  <p class="stit">03. 사업자 계약서 발주서 관련 사항에 대한 <b class="error">오류-문서판독불가</b> 입니다.</p>
                  <p class="code">1234567890_0987654321</p>
                  <p class="txt">한마정보통신_견적서</p>
                </li>
              </ul>
            </div>
            <div class="box">
              <p class="tit">사업자 등록증<span>2023-10-18 23:55:55</span></p>
              <ul class="list">
                <li>
                  <p class="stit">01. 사업자 계약서 발주서 관련 사항에 대한 <b class="fail">실패-문서판독불가</b> 입니다.</p>
                  <p class="code">1234567890_0987654321</p>
                  <p class="txt">한마정보통신_견적서</p>
                </li>
                <li>
                  <p class="stit">02. 사업자 계약서 발주서 관련 사항에 대한 <b class="success">성공</b> 입니다.</p>
                  <p class="code">1234567890_0987654321</p>
                  <p class="txt">한마정보통신_견적서</p>
                </li>
                <li>
                  <p class="stit">03. 사업자 계약서 발주서 관련 사항에 대한 <b class="error">오류-문서판독불가</b> 입니다.</p>
                  <p class="code">1234567890_0987654321</p>
                  <p class="txt">한마정보통신_견적서</p>
                </li>
              </ul>
            </div>
          </div>
          <!-- //검증 결과 -->
        </div>
      </div>

    </div>
    
    
    <div v-if="false">
      문서명 : 문서명
      파일명 : 파일명

      <v-btn class="vbtn">목록</v-btn>
      <v-btn class="vbtn">다운로드</v-btn>

      <v-img src="/_nuxt/assets/images/img.jpg" class="vimg" />
      <!-- <v-img :width="300" aspect-ratio="16/9" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" /> -->
    </div>
    
  </div>

</template>

<style scoped>
  
</style>

<script setup >

// 파일 목록 레이어 팝업
const layerPop = ref(false)
const layerPopView = () => {
  layerPop.value = !layerPop.value
};

// 문서 검증 결과
const tableView = ref(true)
const resultInfo = ref(false)
const resultView = () => {
  resultInfo.value = !resultInfo.value
  tableView.value = !resultInfo.value
};

</script> 