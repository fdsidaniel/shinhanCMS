<template>
  
  <div class="conbody pub_guide">
    <input type="text" tabIndex="0">
    <v-tabs v-model="tab" class="tab_basics">
      <v-tab value="form" @click="consoleClear">FORM</v-tab>
      <v-tab value="button" @click="consoleClear">BUTTON</v-tab>
      <v-tab value="grid" @click="consoleClear">GRID</v-tab>
      <v-tab value="table" @click="consoleClear">TABLE</v-tab>
      <v-tab value="title" @click="consoleClear">TITLE</v-tab>
      <v-tab value="search" @click="consoleClear">SEARCH</v-tab>
      <v-tab value="etc" @click="consoleClear">ETC</v-tab>
      <v-tab value="css" @click="consoleClear">CSS</v-tab>
      <v-tab value="svg" @click="consoleClear">svg icon</v-tab>
    </v-tabs>

    <v-window v-model="tab" class="tab_con">

      <v-window-item value="form">
        <div class="pub_guide_con">

          <h3>input</h3>
          <div class="component">
            <v-text-field label="타이틀" v-model="ipt" :rules="iptRules" required placeholder="타이틀" class="i_basics"></v-text-field>
            <v-text-field label="타이틀" v-model="ipt" disabled placeholder="비활성" class="i_basics"></v-text-field>
            <v-text-field label="타이틀" v-model="ipt" :rules="iptRules" required placeholder="error msg none" class="i_basics none_details"></v-text-field>
            <br>
            <div class="d-flex">
              <div class="input_find">
                <v-text-field label="Your Name" v-model="ipt" :rules="iptRules" required placeholder="Placeholder" class="i_basics"></v-text-field>
                <v-btn class="vbtn" size="small">조회</v-btn>
              </div>
            </div>            
          </div>

          <h3>input - html tag</h3>
          <div class="component">
            <input type="text" class="i_basics" placeholder="아이디"><!-- error class v-input--error -->
            <br>
            <input type="text" class="i_basics" disabled placeholder="아이디">
            <br>
            <input type="text" class="i_basics v-input--error" placeholder="아이디">
            <p class="error_message">다시 입력해주세요.</p>
            <br>
            <div class="d-flex">
              <div class="input_find">
                <input type="text" class="i_basics" placeholder="아이디">
                <v-btn class="vbtn" size="small">조회</v-btn>
              </div>
            </div>
          </div>

          <h3>키보드 보안 iframe - 스킨 적용 제외</h3>
          <div class="component">
            <div class="ifm_keysec">
              <iframe src="/keyboard_security.html" frameborder="0" width="100%" height="100%"></iframe>
            </div>
          </div>

          <h3>라디오버튼</h3>
          <div class="component">
            <div><ComRadioButton :options="radioOptions" v-model="selectedValue" :isInline="true" /></div>
            <div><ComRadioButton :options="radioOptions" v-model="selectedValue" disabled /></div>
            <div><ComRadioButton :options="transfer" v-model="transferValue" :isInline="true" class="type_chk_big" /></div>
          </div>

          <h3>체크박스</h3>
          <div class="component">
            <div><v-checkbox v-model="checkbox1" :label="'체크'" /></div>
            <div class="i_chk">
              <v-checkbox v-model="checkbox2" :label="'체크1'" />
              <v-checkbox v-model="checkbox3" :label="'체크2'" />
              <v-checkbox v-model="checkbox4" :label="'체크3'" />
            </div>
            <div class="d_flex">
              <div>
                <v-checkbox v-model="checkbox5" :label="`체크`" />
              </div>
              <v-btn class="vbtn line ml_20" size="small">버튼</v-btn>
            </div>
            <div class="d_flex">
              <div>
                <v-checkbox v-model="checkbox7" disabled :label="`체크`" />
              </div>
            </div>
          </div>
          
          <h3>콤보박스</h3>
          <div class="component">            
            <div><ComSelectBox groupCode="01" v-model="comboSelected" :items="items" :isDefault="false" class="s_basics none_details" /></div>
            <div><ComSelectBox groupCode="01" v-model="comboSelected" :items="items" error-messages="선택해주세요." class="s_basics" /></div>
            <div><ComSelectBox groupCode="01" v-model="comboSelected" :items="items" disabled class="s_basics none_details" /></div>
            <div>
              <v-combobox
                label="기관명을 입력해주세요."
                :items="['[123-45-90890]한마정보통신', '[123-45-90812]한마은행', '[123-45-90822]한마생명']"
                v-model="userOrgSearch"
                :rules="nameOrgSearchRules"
                class="v_combo"
                placeholder="기관명을 입력해주세요."
              ></v-combobox>
            </div>
            <div>
              <v-combobox
                label="받는 분"
                :items="['전체', '아이디4', '아이디3', '아이디2', '아이디1']"
                v-model="userOrgSearch2"
                :rules="nameOrgSearchRules2"
                class="v_combo none_details flex1"
                placeholder="선택 버튼을 선택해서 받는 분을 선택해주세요."
                multiple
              ></v-combobox>
            </div>
          </div>

          <h3>textarea</h3>
          <div class="component">
            <v-textarea class="h_100" placeholder="결과 사유를 입력해 주세요."></v-textarea>
            <p class="txt_limit">0/50 자</p>

            <v-textarea class="h_100" disabled placeholder="결과 사유를 입력해 주세요." value="결과 사유를 입력해 주세요."></v-textarea>

            <v-table class="vtable_view">
              <colgroup>
                <col style="width:;"/>
                <col style="width:;"/>
              </colgroup>
              <tbody>
                <tr>
                  <th>textarea</th>
                  <td>
                    <v-textarea class="h_100" placeholder="결과 사유를 입력해 주세요." :rules="textareaRules"></v-textarea>
                    <p class="txt_limit">0/50 자</p>
                  </td>
                </tr>
              </tbody>
            </v-table>

            <v-table class="vtable_view">
              <colgroup>
                <col style="width:;"/>
                <col style="width:;"/>
              </colgroup>
              <tbody>
                <tr>
                  <th>textarea</th>
                  <td>
                    <v-textarea class="h_100 single" placeholder="결과 사유를 입력해 주세요." :rules="textareaRules2"></v-textarea>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>

          <h3>달력</h3>
          <div class="component pl_100">
            <div class="i_calender">
              <ComDatePicker v-model="startDate" class="i_date w_145" placeholder="날짜선택" />
              <span>~</span>
              <ComDatePicker v-model="endDate" class="i_date w_145" placeholder="날짜선택" />
            </div>
          </div>

          <h3>파일 업로드</h3>
          <div class="component">
            <div><v-file-input v-show="true" id="" label="파일찾기"></v-file-input></div>
            <div><v-file-input v-show="true" id="" label="파일 업로드하기" v-model="fileupkoad" :rules="fileupkoadRules" class="file_upload"></v-file-input></div>
            <div>
              <div class="drag_file_upload_box">
                <v-file-input
                  accept="image/*"
                  v-model="fileupkoad"
                  :rules="fileupkoadRules"
                  show-size
                  @change="fileChange"
                  :onClick:clear="clear"
                  label="파일 업로드"
                  class="file_upload"
                />
                <div class="tip_tit" :class="{ 'hide': tipTxt }">
                  <p>드래그 & 드랍을 통해 파일을 업로드 해주세요.</p>
                </div>
              </div>
              <!-- <p class="error_message">업로드된 파일을 다시 확인해주세요.</p> -->
            </div>
          </div>

        </div>
      </v-window-item>

      <v-window-item value="button">
        <div class="pub_guide_con">
          
          <h3>Large(H56)</h3>
          <div class="component">
            <div class="d-flex">
              <v-btn class="vbtn" size="large">버튼</v-btn>
              &nbsp;&nbsp;&nbsp;
              <v-btn class="vbtn" size="large" disabled>버튼</v-btn>
            </div>
            <div class="d-flex mt_10">
              <v-btn class="vbtn blue" size="large">버튼</v-btn>
              &nbsp;&nbsp;&nbsp;
              <v-btn class="vbtn blue" size="large" disabled>버튼</v-btn>
            </div>
            <div class="d-flex mt_10">
              <v-btn class="vbtn line" size="large">버튼</v-btn>
              &nbsp;&nbsp;&nbsp;
              <v-btn class="vbtn line" size="large" disabled>버튼</v-btn>
            </div>
          </div>

          <h3>Medium(H48)</h3>
          <div class="component">
            <div class="d-flex">
              <v-btn class="vbtn">버튼</v-btn>
              &nbsp;&nbsp;&nbsp;
              <v-btn class="vbtn" disabled>버튼</v-btn>
            </div>
            <div class="d-flex mt_10">
              <v-btn class="vbtn blue">버튼</v-btn>
              &nbsp;&nbsp;&nbsp;
              <v-btn class="vbtn blue" disabled>버튼</v-btn>
            </div>
            <div class="d-flex mt_10">
              <v-btn class="vbtn line">버튼</v-btn>
              &nbsp;&nbsp;&nbsp;
              <v-btn class="vbtn line" disabled>버튼</v-btn>
            </div>
            <div class="d_flex">
              <v-btn class="vbtn line big flex1" size="small">예</v-btn>
              <v-btn class="vbtn line big flex1 ml_10" size="small">아니오</v-btn>
            </div>
          </div>

          <h3>Small(H40)</h3>
          <div class="component">
            <div class="d-flex">
              <v-btn class="vbtn" size="small">버튼</v-btn>
              &nbsp;&nbsp;&nbsp;
              <v-btn class="vbtn" size="small" disabled>버튼</v-btn>
            </div>
            <div class="d-flex mt_10">
              <v-btn class="vbtn blue" size="small">버튼</v-btn>
              &nbsp;&nbsp;&nbsp;
              <v-btn class="vbtn blue" size="small" disabled>버튼</v-btn>
            </div>
            <div class="d-flex mt_10">
              <v-btn class="vbtn line" size="small">버튼</v-btn>
              &nbsp;&nbsp;&nbsp;
              <v-btn class="vbtn line" size="small" disabled>버튼</v-btn>
            </div>
            <div class="d-flex mt_10">
              <v-btn class="vbtn line btn_del" size="small">삭제</v-btn>
              &nbsp;&nbsp;&nbsp;
              <v-btn class="vbtn line btn_add" size="small">추가</v-btn>
            </div>
            <div class="d-flex mt_10">
              <v-btn class="vbtn line search" size="small">조회</v-btn>
            </div>
             <div class="d-flex mt_10">
              <v-btn class="vbtn line sort new" size="small">최신순</v-btn>
              &nbsp;&nbsp;&nbsp;
              <v-btn class="vbtn line sort old" size="small">과거순</v-btn>
            </div>
            <div class="d-flex mt_10">
              <v-btn class="vbtn line sort new" size="small" :class="{ 'old': sort }" @click="btnSort">{{ message }}</v-btn>
            </div>
            <div class="d-flex mt_10">
              <v-btn class="vbtn line btn_reset" size="small">초기화</v-btn>
            </div>
            <div class="d-flex mt_10">
              <v-btn class="vbtn btn_file_del" size="small">삭제</v-btn>
            </div>
            <div class="d-flex mt_10">
              <v-btn class="vbtn btn_viewer" size="small">뷰어</v-btn>
              <v-btn class="vbtn btn_viewer" disabled size="small">뷰어</v-btn>
            </div>
            <div class="d-flex mt_10">
              <v-btn class="vbtn btn_msg" size="small">쪽지</v-btn>
            </div>
            <div class="d-flex mt_10">
              <v-btn class="vbtn btn_memo" size="small">메모</v-btn>
            </div>
            <div class="d-flex mt_10">
              <v-btn class="vbtn btn_modify" size="small">수정</v-btn>
            </div>
            <div class="d-flex mt_10">
              <v-btn class="vbtn btn_file" size="small">첨부파일</v-btn>
            </div>
            <div class="d-flex mt_10">
              <v-btn class="vbtn btn_mobile" size="small">휴대폰</v-btn>
            </div>
            <div class="d-flex mt_10">
              <v-btn class="vbtn blue line btn_excel" size="">엑셀파일받기</v-btn>
            </div>
          </div>          

          <h3>Text Button</h3>
          <div class="component">
            <div class="d-flex">
              <nuxt-link to="/pub/pub_guide" class="vlink basic">Text Button</nuxt-link>
              &nbsp;&nbsp;&nbsp;
              <nuxt-link to="/pub/pub_guide" class="vlink">Text Button</nuxt-link>
              &nbsp;&nbsp;&nbsp;
              <nuxt-link to="/pub/pub_guide" class="vlink blue">Text Button</nuxt-link>
              &nbsp;&nbsp;&nbsp;
              <nuxt-link to="/pub/pub_guide" class="vlink blue line">Text Button</nuxt-link>
            </div>
            <div>
              <v-btn class="vbtn" size="large" @click="showLoading">로딩</v-btn>
              <!-- 로딩 아이콘 -->
              <div class="v-progress-circular-loading" v-show="loading" @click="hideLoading">
                <!-- <div class="loader"> 구버전 현재 사용 안함
                  <div class="loader__bar"></div>
                  <div class="loader__bar"></div>
                  <div class="loader__bar"></div>
                  <div class="loader__bar"></div>
                  <div class="loader__bar"></div>
                  <div class="loader__ball"></div>
                </div> -->
                <svg class="hourglass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 206" preserveAspectRatio="none">
                  <path class="middle" d="M120 0H0v206h120V0zM77.1 133.2C87.5 140.9 92 145 92 152.6V178H28v-25.4c0-7.6 4.5-11.7 14.9-19.4 6-4.5 13-9.6 17.1-17 4.1 7.4 11.1 12.6 17.1 17zM60 89.7c-4.1-7.3-11.1-12.5-17.1-17C32.5 65.1 28 61 28 53.4V28h64v25.4c0 7.6-4.5 11.7-14.9 19.4-6 4.4-13 9.6-17.1 16.9z"/>
                  <path class="outer" d="M93.7 95.3c10.5-7.7 26.3-19.4 26.3-41.9V0H0v53.4c0 22.5 15.8 34.2 26.3 41.9 3 2.2 7.9 5.8 9 7.7-1.1 1.9-6 5.5-9 7.7C15.8 118.4 0 130.1 0 152.6V206h120v-53.4c0-22.5-15.8-34.2-26.3-41.9-3-2.2-7.9-5.8-9-7.7 1.1-2 6-5.5 9-7.7zM70.6 103c0 18 35.4 21.8 35.4 49.6V192H14v-39.4c0-27.9 35.4-31.6 35.4-49.6S14 81.2 14 53.4V14h92v39.4C106 81.2 70.6 85 70.6 103z"/>
                </svg>
              </div>
              <!-- //로딩 아이콘 -->
            </div>
            <div>
              <v-btn class="vbtn" size="large" @click="showInstallLoading">설치페이지 이동 로딩</v-btn>
              <!-- 설치페이지 이동 로딩 -->
              <div class="v-progress-circular-loading" v-show="installLoading" @click="hideInstallLoading">
                <div class="install_loading">
                  <div class="txt">안전한 금융거래를 위해 준비중입니다.</div>
                </div>
              </div>
              <!-- //설치페이지 이동 로딩 -->
            </div>
          </div>

          <h3>하단 버튼</h3>
          <div class="component">
            <div class="btn_btm_wrap">
              <v-btn class="vbtn blue" size="large">목록</v-btn>
              <v-tooltip text="회원가입 버튼을 누르시면 금융인증서 인증완료 후 최종 가입됩니다." location="top" model-value :class="{ 'active': showActive }"><!-- show class active 개발에서 제어 -->
                <template v-slot:activator="{ props }">
                  <v-btn class="vbtn" size="large" v-bind="props">회원가입</v-btn>
                </template>
              </v-tooltip>
            </div>
          </div>

        </div>
      </v-window-item>

      <v-window-item value="grid">
        <div class="pub_guide_con">
          
          <h3>ComAgGrid - ComAgGrid는 그리드, 총 건수, 보기 셀렉트, 더보기 버튼이 포함되어 있습니다.</h3>
          <div class="component">
            <div class="tit_cnt_btn">
              <p class="tit_cnt">총 <b>100</b>건</p>
              <div>
                <ComSelectBox groupCode="01" v-model="comboCnt" :items="itemsCnt" class="s_basics none_details w_120" />
              </div>
            </div>
            <ComAgGrid
              ref="agrid"
              :columnDefs="columnDefsReceive"
              style="height: 553px"
              class="grid"
              :rowData="rowDataReceive"
              :defaultColDef="defaultColDefReceive"
              :rowHeight="51"
              :tooltipShowDelay="0"
              :tooltipHideDelay="9000"
            />
            <div class="grid_extend"></div>
            <v-btn class="vbtn btn_grid_more" size="small">더보기</v-btn>
          </div>

          <h3>ComAgGridBasic - ComAgGridBasic은 그리드, 더보기 버튼만 나옵니다.</h3>
          <div class="component">

            <div class="tit_cnt_btn"><!-- case 1 -->
              <div class="tit_cnt a_center">
                <p class="title">정산신청내역</p>
              </div>
              <div class="a_center">
                <v-checkbox v-model="checkbox1" :label="`미 등록건`" />
                <ComSelectBox groupCode="01" v-model="comboCnt" :items="itemsCnt" class="s_basics none_details w_120 ml_20" />
                <span class="unit">(단위:원)</span>
              </div>
            </div>

            <div class="tit_cnt_btn"><!-- case 2 -->
              <div class="tit_cnt a_center">
                <p class="title">계좌 별 정산 후 금액 8건</p>
              </div>
            </div>

            <div class="tit_cnt_btn"><!-- case 3 -->
              <div class="tit_cnt a_center">
                <p class="tit">제안 업체 목록</p>
                총 <b>100</b>건
              </div>
            </div>

            <div class="tit_cnt_btn"><!-- case 4 -->
              <p class="tit_cnt">총 <b>5</b>건 <b class="c_red">오류</b><span class="c_black">가 있습니다.</span></p>
              <!-- <p class="tit_cnt">총 <b>105</b>건 <span class="c_black">계좌 검증이 완료되었습니다.</span></p> -->
            </div>
            <div class="tit_cnt_btn">
              <!-- <p class="tit_cnt">총 <b>5</b>건 <b class="c_red">오류</b><span class="c_black">가 있습니다.</span></p> -->
              <p class="tit_cnt">총 <b>105</b>건 <span class="c_black">계좌 검증이 완료되었습니다.</span></p>
            </div>

            <div class="tit_cnt_btn"><!-- case 5 -->
              <p class="tit_cnt">조회 건 수 <b>100</b>건</p>
              <div class="a_center">
                <v-btn class="vbtn line" size="small">엑셀 다운로드</v-btn>        
                <ComSelectBox groupCode="01" v-model="comboCnt" :items="itemsCnt" class="s_basics none_details w_120" />
                <span class="unit">(단위:원)</span>
              </div>
            </div>

            <div class="tit_cnt_btn"><!-- case 6 -->
              <p class="tit_cnt">
                조회 건 수 <b>100</b>건,
                지급 금액 합계 <b>10,000,000</b>원
              </p>
            </div>

            <div class="tit_cnt_btn"><!-- case 7 -->
              <div class="tit_cnt other">
                <div>
                환입계좌번호는 <b>신한은행 123</b> 입니다.
                <v-btn class="vbtn line white ml_10 mmt_5" size="small">계좌복사</v-btn>
                <br>
                지급취소는 전액취소만 가능합니다. 환입계좌로 지급취소 금액을 입금하셔야 합니다.
                </div>
              </div>
              <div class="a_center">
                <span class="unit">(단위:원)</span>
              </div>
            </div>

            <div class="tit_cnt_btn"><!-- case 8 -->
              <p class="tit_cnt">조회 건 수 <b>100</b>건</p>
              <div class="a_center">
                <v-btn class="vbtn line" size="small">행 추가</v-btn>
                <v-btn class="vbtn line" size="small">행 수정</v-btn>
                <v-btn class="vbtn line" size="small">행 삭제</v-btn>        
                <span class="unit">(단위:원)</span>
              </div>
            </div>

            <div class="tit_cnt_btn"><!-- case 9 -->
              <div class="tit_cnt a_center">
                <p class="title">TASK별 정산 전 작액조회</p>
                <span class="ml_10 mt_2">총 <b>100</b>건</span>
              </div>
            </div>

            <div class="tit_cnt_btn"><!-- case 10 -->
              <p class="tit_cnt">총 <b>100</b>건</p>
              <div>
                <v-text-field label="공지사항" v-model="notice" :rules="noticeRules" placeholder="2자리 이상 입력해주세요" class="i_basics w_300 none_details"></v-text-field>
                <v-btn class="vbtn line search ml_5 white" size="small">조회</v-btn>
                <ComSelectBox groupCode="01" v-model="comboCnt" :items="itemsCnt" class="s_basics none_details w_120 ml_5" />
              </div>
            </div>

            <div class="tit_cnt_btn"><!-- basic -->
              <p class="tit_cnt">총 <b>100</b>건</p>
              <div>
                <ComSelectBox groupCode="01" v-model="comboCnt" :items="itemsCnt" class="s_basics none_details w_120" />
              </div>
            </div>            
            <ComAgGridBasic
              ref="agrid"
              :columnDefs="columnDefsReceive"
              style="height: 553px"
              class="grid"
              :rowData="rowDataReceive"
              :defaultColDef="defaultColDefReceive"
              :rowHeight="51"
            />
            <v-btn class="vbtn btn_grid_more" size="small">더보기</v-btn>
          </div>

          <h3>ComAgGrid
            <p class="fs_18">가로 스크롤 X class fixed 추가 / head bottom 라인 삭제 class none_head_line 추가 / 컬럼 세로 라인 class vline 추가</p>
          </h3>          
          <div class="component">

            <div class="tit_cnt_btn"><!-- basic -->
              <p class="tit_cnt">총 <b>100</b>건</p>
              <div>
                <ComSelectBox groupCode="01" v-model="comboCnt" :items="itemsCnt" class="s_basics none_details w_120" />
              </div>
            </div>
            <ComAgGrid
              ref="agrid2"
              :columnDefs="columnDefsReceive2"
              style="height: 553px"
              class="grid none_head_line vline"
              :rowData="rowDataReceive2"
              :defaultColDef="defaultColDefReceive2"
              :rowHeight="51"
            />
            <v-btn class="vbtn btn_grid_more" size="small">더보기</v-btn>
            <br><br>
            <div class="gridToolTip">
              그리드 툴팁 내용
            </div>
          </div>

        </div>
      </v-window-item>

      <v-window-item value="table">
        <div class="pub_guide_con">
          
          <h3>테이블 목록</h3>
          <div class="component">
            <v-table class="vtable_list">
              <colgroup>
                <col style="width:20%;"/>
                <col style="width:20%;"/>
                <col style="width:20%;"/>
                <col style="width:20%;"/>
                <col style="width:20%;"/>
              </colgroup>
              <thead>
                <tr>
                  <th>성명</th>
                  <th>생년월일</th>
                  <th>성별</th>
                  <th>전화번호</th>
                  <th>이메일 주소</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>김기관기관</td>
                  <td>99.09.09</td>
                  <td>여</td>
                  <td>010-9999-5555</td>
                  <td>aaaaaaaaaa@test.com</td>
                </tr>
                <tr>
                  <td>김기관기관</td>
                  <td>99.09.09</td>
                  <td>여</td>
                  <td>010-9999-5555</td>
                  <td>aaaaaaaaaa@test.com</td>
                </tr>
                <tr>
                  <td>김기관기관</td>
                  <td>99.09.09</td>
                  <td>여</td>
                  <td>010-9999-5555</td>
                  <td>aaaaaaaaaa@test.com</td>
                </tr>
              </tbody>
            </v-table>
          </div>

          <h3>테이블 목록 - th border-bottom:0 , th class="nbd" or v-table class="none_head_line" 추가</h3>
          <div class="component">
            <v-table class="vtable_list none_head_line">
              <colgroup>
                <col style="width:20%;"/>
                <col style="width:20%;"/>
                <col style="width:20%;"/>
                <col style="width:20%;"/>
                <col style="width:20%;"/>
              </colgroup>
              <thead>
                <tr>
                  <th class="nbd">class="nbd"</th>
                  <th class="nbd">class="nbd"</th>
                  <th class="nbd">class="nbd"</th>
                  <th class="nbd">class="nbd"</th>
                  <th class="nbd">class="nbd"</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>김기관기관</td>
                  <td>99.09.09</td>
                  <td>여</td>
                  <td>010-9999-5555</td>
                  <td>aaaaaaaaaa@test.com</td>
                </tr>
              </tbody>
            </v-table>
          </div>

          <h3>테이블 목록 - 세로 라인 X v-table class="none_vline" 추가</h3>
          <div class="component">
            <v-table class="vtable_list none_vline">
              <colgroup>
                <col style="width:20%;"/>
                <col style="width:20%;"/>
                <col style="width:20%;"/>
                <col style="width:20%;"/>
                <col style="width:20%;"/>
              </colgroup>
              <thead>
                <tr>
                  <th>성명</th>
                  <th>생년월일</th>
                  <th>성별</th>
                  <th>전화번호</th>
                  <th>이메일 주소</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>김기관기관</td>
                  <td>99.09.09</td>
                  <td>여</td>
                  <td>010-9999-5555</td>
                  <td>aaaaaaaaaa@test.com</td>
                </tr>
                <tr>
                  <td>김기관기관</td>
                  <td>99.09.09</td>
                  <td>여</td>
                  <td>010-9999-5555</td>
                  <td>aaaaaaaaaa@test.com</td>
                </tr>
              </tbody>
            </v-table>
          </div>

          <h3>테이블 목록 - th bg</h3>
          <div class="component">
            <v-table class="vtable_list th_bg">
              <colgroup>
                <col style="width:20%;"/>
                <col style="width:20%;"/>
                <col style="width:20%;"/>
                <col style="width:20%;"/>
                <col style="width:20%;"/>
              </colgroup>
              <thead>
                <tr>
                  <th>성명</th>
                  <th>생년월일</th>
                  <th>성별</th>
                  <th>전화번호</th>
                  <th>이메일 주소</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>김기관기관</td>
                  <td>99.09.09</td>
                  <td>여</td>
                  <td>010-9999-5555</td>
                  <td>aaaaaaaaaa@test.com</td>
                </tr>
              </tbody>
            </v-table>
          </div>

          <h3>테이블 목록 - th bg , border-bottom:0</h3>
          <div class="component">
            <v-table class="vtable_list th_bg">
              <colgroup>
                <col style="width:20%;"/>
                <col style="width:20%;"/>
                <col style="width:20%;"/>
                <col style="width:20%;"/>
                <col style="width:20%;"/>
              </colgroup>
              <thead>
                <tr>
                  <th class="nbd">class="nbd"</th>
                  <th class="nbd">class="nbd"</th>
                  <th class="nbd">class="nbd"</th>
                  <th class="nbd">class="nbd"</th>
                  <th class="nbd">class="nbd"</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>김기관기관</td>
                  <td>99.09.09</td>
                  <td>여</td>
                  <td>010-9999-5555</td>
                  <td>aaaaaaaaaa@test.com</td>
                </tr>
              </tbody>
            </v-table>
          </div>

          <h3>테이블 목록 - 합계</h3>
          <div class="component">
            <v-table class="vtable_list">
              <colgroup>
                <col style="width:;"/>
                <col style="width:;"/>
                <col style="width:;"/>
                <col style="width:;"/>
                <col style="width:;"/>
              </colgroup>
              <thead>
                <tr>
                  <th>비목명</th>
                  <th>세목명</th>
                  <th>지급 금액</th>
                  <th>인정 금액(A)</th>
                  <th>불인정 금액(B)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="6">직접비</td>
                  <td class="atot">직접비 합계</td>
                  <td class="atot t_right">206,970,766</td>
                  <td class="atot t_right">206,970,766</td>
                  <td class="atot t_right">-</td>
                </tr>
                <tr>
                  <td>내부인건비</td>
                  <td class="t_right">-</td>
                  <td class="t_right">-</td>
                  <td class="t_right">-</td>
                </tr>
                <tr>
                  <td>외부인건비</td>
                  <td class="t_right">-</td>
                  <td class="t_right">-</td>
                  <td class="t_right">-</td>
                </tr>
                <tr>
                  <td>연구장비, 재료비</td>
                  <td class="t_right">199,353,800</td>
                  <td class="t_right">199,353,800</td>
                  <td class="t_right">1,000,000</td>
                </tr>
                <tr>
                  <td>연구활동비</td>
                  <td class="t_right">2,800,000</td>
                  <td class="t_right">2,800,000</td>
                  <td class="t_right">-</td>
                </tr>
                <tr>
                  <td>연구과제추진비</td>
                  <td class="t_right">20,000,000</td>
                  <td class="t_right">19,000,000</td>
                  <td class="t_right">10,000,000</td>
                </tr>
                <tr>
                  <td rowspan="2">간접비</td>
                  <td class="atot">간접비 합계</td>
                  <td class="atot t_right">20,000,000</td>
                  <td class="atot t_right">19,000,000</td>
                  <td class="atot t_right">1,000,000</td>
                </tr>
                <tr>
                  <td>간접비</td>
                  <td class="t_right">20,000,000</td>
                  <td class="t_right">19,000,000</td>
                  <td class="t_right">1,000,000</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>합계</td>
                  <td></td>
                  <td class="tot">
                    <div class="sum">              
                      <span>435,941,532</span>
                    </div>
                  </td>
                  <td class="tot">
                    <div class="sum">              
                      <span>450,941,532</span>
                    </div>
                  </td>
                  <td class="tot">
                    <div class="sum">              
                      <span>3,000,000</span>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </v-table>
          </div>

          <h3>테이블 목록 - th bg , small</h3>
          <div class="component">
            <v-table class="vtable_list th_bg small">
              <colgroup>
                <col style="width:;"/>
                <col style="width:;"/>
                <col style="width:;"/>
                <col style="width:;"/>
                <col style="width:;"/>
                <col style="width:;"/>
              </colgroup>
              <thead>
                <tr>
                  <th colspan="4">총 사업비</th>
                  <th rowspan="2" class="nbd">사용 금액</th>
                  <th rowspan="2" class="nbd">사용 잔액</th>
                </tr>
                <tr>
                  <th class="nbd">정부지원금 입금액</th>
                  <th class="nbd">민간부담금 입금액</th>
                  <th class="nbd">이자(정보+민간+환입)</th>
                  <th class="nbd">합계</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="t_right">200,000,000</td>
                  <td class="t_right">10,000,000</td>
                  <td class="t_right">30,000</td>
                  <td class="t_right">210,030,000</td>
                  <td class="t_right">190,000,000</td>
                  <td class="t_right">20,030,000</td>
                </tr>
              </tbody>
            </v-table>
          </div>

          <h3>테이블 목록 - td 버튼, 셀렉트 등 v-table class="inbtn" 추가</h3>
          <div class="component">
            <v-table class="vtable_list inbtn">
              <colgroup>
                <col style="width:80px;"/>
                <col style="width:40%;"/>
                <col style="width:60%;"/>
              </colgroup>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>문서명</th>
                  <th>파일명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>사업자등록증</td>
                  <td><nuxt-link to="/pub/COM/COM002M00" class="vlink basic">계약서.pdf</nuxt-link></td>
                </tr>
                <tr>
                  <td class="center"><v-checkbox v-model="checkbox1" /></td>
                  <td><ComSelectBox groupCode="01" label="항목 선택" v-model="comboSelected1" :items="items1" class="s_basics" /></td>
                  <td>
                    <nuxt-link to="/pub/COM/COM002M00" class="vlink basic v_mid">계약서.pdf</nuxt-link>
                    <v-btn class="vbtn btn_file_del ml_10" size="small">파일삭제</v-btn>
                  </td>
                </tr>
                <tr>
                  <td><ComRadioButton :options="radio" v-model="radioValue" :isInline="true" class="center" /></td>
                  <td><ComSelectBox groupCode="01" label="항목 선택" v-model="comboSelected2" :items="items2" class="s_basics" /></td>
                  <td></td>
                </tr>
              </tbody>
            </v-table>
            <div class="btn_btm_wrap right">
              <v-btn class="vbtn blue" size="small">초기화</v-btn>
              <v-btn class="vbtn" size="small">등록</v-btn>
            </div>
          </div>

          <h3>테이블 목록 - 스크롤 scroll 추가 / 5line h_295 , 10line h_545</h3>
          <div class="component">
            <v-table class="vtable_list inipt scroll h_200 h_295">
              <colgroup>
                <col style="width:20%;"/>
                <col style="width:15%;"/>
                <col style="width:30%;"/>
                <col style="width:15%;"/>
                <col style="width:20%;"/>
              </colgroup>
              <thead>
                <tr>
                  <th>성명</th>
                  <th>생년월일</th>
                  <th>성별</th>
                  <th>전화번호</th>
                  <th>이메일 주소</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>김기관기관</td>
                  <td>99.09.09</td>
                  <td><span class="ico_ing">진행</span> <span>class="ico_ing"</span></td>
                  <td>010-9999-5555</td>
                  <td>aaaaaaaaaa@test.com</td>
                </tr>
                <tr>
                  <td>
                    <span>수행기관333</span>
                    <v-btn class="vbtn line ml_10" size="small">사업자등록증</v-btn>
                  </td>
                  <td>99.09.09</td>
                  <td><span class="ico_fail">실패-문서판독불가</span> <span>class="ico_fail"</span></td>
                  <td>010-9999-5555</td>
                  <td>aaaaaaaaaa@test.com</td>
                </tr>
                <tr>
                  <td>
                    김수행
                    <nuxt-link to="/pub/pub_guide" class="vlink btn_mobile">책임자 정보 보기</nuxt-link>
                  </td>
                  <td>99.09.09</td>
                  <td><span class="ico_fail">검증오류</span> <span>class="ico_fail"</span></td>
                  <td>010-9999-5555</td>
                  <td>aaaaaaaaaa@test.com</td>
                </tr>
                <tr>
                  <td><nuxt-link to="/pub/pub_guide" class="vlink basic line">제출 문서 보기</nuxt-link></td>
                  <td>99.09.09</td>
                  <td><span class="ico_calculate">정산</span> <span>class="ico_calculate"</span></td>
                  <td>010-9999-5555</td>
                  <td>aaaaaaaaaa@test.com</td>
                </tr>
                <tr>
                  <td>김기관기관</td>
                  <td>99.09.09</td>
                  <td><span class="ico_end">종료</span> <span>class="ico_end"</span></td>
                  <td>010-9999-5555</td>
                  <td>aaaaaaaaaa@test.com</td>
                </tr>
                <tr>
                  <td>김기관기관</td>
                  <td>99.09.09</td>
                  <td><span class="ico_success">완료</span> <span>class="ico_success"</span></td>
                  <td>010-9999-5555</td>
                  <td>aaaaaaaaaa@test.com</td>
                </tr>
                <tr>
                  <td>김기관기관</td>
                  <td>99.09.09</td>
                  <td><span class="ico_request">재요청</span> <span>class="ico_request"</span></td>
                  <td>010-9999-5555</td>
                  <td>aaaaaaaaaa@test.com</td>
                </tr>
              </tbody>
            </v-table>
            <div class="btn_btm_wrap left">
              <v-btn class="vbtn line" size="small">선정 결과 등록</v-btn>
            </div>
          </div>

          <h3>테이블 뷰</h3>
          <div class="component">
            <v-table class="vtable_view">
              <colgroup>
                <col style="width:;"/>
                <col style="width:;"/>
              </colgroup>
              <tbody>
                <tr>
                  <th>제목</th>
                  <td>내용</td>
                </tr>
                <tr>
                  <th>기관 명</th>
                  <td>
                    <div class="input_flex">
                      <v-text-field label="기관 명" v-model="userOrgName" :rules="userOrgNameRules" placeholder="기관명 입력 후 중복확인" class="i_basics w_300"></v-text-field>
                      <v-btn class="vbtn line ml_5" size="small">중복확인</v-btn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>기업 구분</th>
                  <td>
                    <ComRadioButton :options="radioOrgChannel" v-model="selectedOrgChannel" :isInline="true" />
                  </td>
                </tr>
                <tr>
                  <th>성명/내외국인</th>
                  <td>
                    <div class="d_flex">
                      <v-text-field label="성명/내외국인" v-model="userName" :rules="userNameRules" placeholder="" class="i_basics w_300"></v-text-field>
                      <ComRadioButton :options="radioName" v-model="selectedName" :isInline="true" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>생년월일/성별</th>
                  <td>
                    <div class="d_flex">
                      <v-text-field label="생년월일/성별" v-model="userBirthday" :rules="userBirthdayRules" placeholder="생년월일 8자리" class="i_basics w_300"></v-text-field>
                      <ComRadioButton :options="radioSex" v-model="selectedSex" :isInline="true" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>안내 채널</th>
                  <td>
                    <ComRadioButton :options="radioChannel" v-model="selectedChannel" :isInline="true" />
                    <p class="tip_txt mt_10">선택한 안내 채널 정보를 반드시 입력 후 인증 받으셔야 합니다.<br>미사용 시 이메일 또는 휴대폰 인증 처리하셔야만 가입이 가능합니다.</p>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>

          <h3>테이블 뷰 - th bg</h3>
          <div class="component">
            <v-table class="vtable_view bg">
              <colgroup>
                <col style="width:;"/>
                <col style="width:;"/>
              </colgroup>
              <tbody>
                <tr>
                  <th>제목</th>
                  <td>내용</td>
                </tr>
                <tr>
                  <th>제목</th>
                  <td>내용</td>
                </tr>
              </tbody>
            </v-table>
          </div>

          <h3>테이블 뷰 - td 버튼, 셀렉트 등 v-table class="inbtn" 추가</h3>
          <div class="component">
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
                  <th>콤보</th>
                  <td><ComSelectBox groupCode="01" v-model="comboSelected" :items="items" class="s_basics w_300" /></td>
                  <th>체크</th>
                  <td><v-checkbox v-model="checkbox2" :label="'체크1'" /></td>
                </tr>
                <tr>
                  <th>버튼</th>
                  <td><v-btn class="vbtn line ml_0" size="small">버튼</v-btn></td>
                  <th>라디오</th>
                  <td><ComRadioButton :options="radioOptions" v-model="selectedValue" :isInline="true" /></td>
                </tr>
                <tr>
                  <th>이체방식</th>
                  <td>건 별</td>
                  <th>지급방법</th>
                  <td>계정이체</td>
                </tr>
                <tr>
                  <th>정부 계좌정보</th>
                  <td colspan="3">
                    신한은행 1234567890 <v-btn class="vbtn line" size="small">잔액 조회</v-btn>
                    <span class="ml_20">(잔액 : 10,000,000 원)</span>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>

        </div>
      </v-window-item>

      <v-window-item value="title">
        <div class="pub_guide_con">
          
          <h3>상단 타이틀</h3>
          <div class="component" style="background:rgb(68 84 243);">
            <div class="title_box">
              <h2>사업비 입금내역조회</h2>
              <ul class="loc">
                <li>홈</li>
                <li>집행 관리</li>
                <li>사업비 입금내역조회</li>
              </ul>
            </div>
          </div>

          <h3>타이틀</h3>
          <div class="component">
            <h3>h3 금액 정보</h3>
            <h3 class="stit">h3 금액 정보</h3>
            <h3 class="stit">h3 금액 정보<div class="unit">(단위:원)</div></h3>
            <h3 class="stit">h3 지급내역<span class="date">(사업기간:2023-10-10 ~ 2023-10-10)</span><div class="unit">(단위:원)</div></h3>            
            <h3 class="stit">h3 정산 보고서</h3>
            <h3 class="tit_btn stit">
              <span>h3 가상계좌정보</span>
              <div>
                <v-btn class="vbtn line" size="small">잔액 조회</v-btn>
                <span class="unit mt_8">(단위:원)</span>
              </div>
            </h3>
            <h3 class="title">h3 차세대 이관작업 대행 업체 선정 공고</h3>

            <h4>h4 금액 정보</h4>
            <h4 class="stit">h4 사용실적<div class="unit">(단위:원)</div></h4>

             <h5>h5 금액 정보</h5>
          </div>

        </div>
      </v-window-item>

      <v-window-item value="search">
        <div class="pub_guide_con">
          
          <h3>검색</h3>
          <div class="component">

            <!-- 검색영역 -->
            <div class="search_box top other">
              <div class="row">
                <div class="con flex1">
                  <div class="input_flex a_center">
                    <div class="input_flex a_center flex1 mr_20">
                      <span class="tit">TASK</span>
                      <div class="txt tooltip_box">
                        <p v-if="!taskName">선택하세요.</p> <!-- TASK 선택 전 -->
                        <div v-else><!-- TASK 선택 후 활성 -->
                          <p>TASK명 출력 영역 TASK명 출력 영역</p>            
                          <p class="tooltip" @click="layerPopView">TASK 정보</p>
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
                                            <li>김신한(정산 담당자)</li>
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
                      <v-btn class="vbtn line" size="small" @click="taskOpen">선택</v-btn>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="con flex1">
                  <div class="input_flex a_center">
                    <div class="i_calender a_center flex1 mr_20">
                      <span class="tit">기간</span>
                      <ComSelectBox groupCode="01" v-model="comboDate" :items="itemsDate" :isAll="true"  class="s_basics w_145 mr_10 none_details" />
                      <ComDatePicker v-model="startDate" class="i_date w_145" placeholder="날짜선택" />
                      <span>~</span>
                      <ComDatePicker v-model="endDate" class="i_date w_145" placeholder="날짜선택" />
                    </div>
                    <div class="flex1">
                      <div class="input_flex a_center flex1">
                        <span class="tit">세목 명</span>
                        <ComSelectBox groupCode="01" v-model="comboDetail" :items="itemsDetail" class="s_basics flex1 none_details" />
                      </div>
                    </div>
                    <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top other">
              <div class="row">
                <div class="con d_flex">
                  <span class="tit other">TASK 명</span>
                  <div class="txt tooltip_box">
                    <p v-if="!taskName">선택하세요.</p> <!-- TASK 선택 전 -->
                    <div v-else><!-- TASK 선택 후 활성 -->
                      <p>TASK명 출력 영역 TASK명 출력 영역</p>            
                      <p class="tooltip" @click="layerPopView">TASK 정보</p>
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
                                        <li>김신한(정산 담당자)</li>
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
                  <v-btn class="vbtn line" size="small" @click="taskOpen">선택</v-btn>
                </div>
              </div>

              <div class="row">
                <div class="con flex1">
                  <div class="input_flex a_center">
                    <div class="i_calender a_center flex1 mr_20">
                      <span class="tit other">조회 기간</span>
                      <!-- <ComSelectBox groupCode="01" v-model="comboDate" :items="itemsDate" class="s_basics w_150 mr_10 none_details" /> -->
                      <ComDatePicker v-model="startDate" class="i_date" placeholder="날짜선택" />
                      <span>~</span>
                      <ComDatePicker v-model="endDate" class="i_date" placeholder="날짜선택" />
                    </div>
                    <div class="flex1">
                      <div class="input_flex a_center">
                        <span class="tit">구분</span>
                        <ComSelectBox groupCode="01" v-model="comboClass" :items="itemsClass" class="s_basics flex1 none_details" />
                      </div>
                    </div>
                    <v-btn class="vbtn line search ml_5" size="small">조회</v-btn>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top other">
              <div class="row">
                <div class="con flex1">
                  <div class="input_flex a_center">
                    <span class="tit">사업명</span>
                    <ComSelectBox groupCode="01" v-model="businessName" :items="itemsbusinessName" class="s_basics none_details flex1" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="con flex1">
                  <div class="input_flex a_center">
                    <span class="tit">담당자</span>
                    <ComSelectBox groupCode="01" v-model="comboSelected" :items="items" class="s_basics none_details w_170" />
                    <v-text-field label="검색어" v-model="searchTask" :rules="searchTaskRules" placeholder="담당자 이름을 조회하세요." class="i_basics flex1 none_details ml_5"></v-text-field>
                    <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top other">
              <div class="row">
                <div class="con d_flex">
                  <span class="tit other">TASK</span>
                  <div class="txt tooltip_box">
                    <p v-if="!taskName">선택하세요.</p> <!-- TASK 선택 전 -->
                    <div v-else><!-- TASK 선택 후 활성 -->
                      <p>TASK명 출력 영역 TASK명 출력 영역</p>            
                      <p class="tooltip" @click="layerPopView">TASK 정보</p>
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
                  <v-btn class="vbtn line" size="small" @click="taskOpen">선택</v-btn>
                  <v-btn class="vbtn line btn_reset ml_5" size="small">초기화</v-btn>
                </div>
              </div>

              <div class="row">
                <div class="con flex1">
                  <div class="input_flex a_center">
                    <div class="i_calender a_center flex1">
                      <span class="tit other">조회 기간</span>
                      <ComDatePicker v-model="startDate" class="i_date" placeholder="날짜선택" />
                      <span>~</span>
                      <ComDatePicker v-model="endDate" class="i_date" placeholder="날짜선택" />              
                      <v-btn class="vbtn line search ml_5" size="small">조회</v-btn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top other">
              <div class="row">
                <div class="con d_flex">
                  <span class="tit w_85">TASK</span>
                  <div class="txt tooltip_box">
                    <p v-if="!taskName">선택하세요.</p> <!-- TASK 선택 전 -->
                    <div v-else><!-- TASK 선택 후 활성 -->
                      <p>TASK명 출력 영역 TASK명 출력 영역</p>            
                      <p class="tooltip" @click="layerPopView">TASK 정보</p>
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
                  <v-btn class="vbtn line" size="small" @click="taskOpen">선택</v-btn>
                  <v-btn class="vbtn line btn_reset ml_5" size="small">초기화</v-btn>
                </div>
              </div>

              <div class="row">
                <div class="con flex1">
                  <div class="input_flex a_center">
                    <div class="i_calender a_center flex1">
                      <span class="tit w_85">지급취소기간</span>
                      <ComDatePicker v-model="startDate" class="i_date" placeholder="날짜선택" />
                      <span>~</span>
                      <ComDatePicker v-model="endDate" class="i_date" placeholder="날짜선택" />              
                      <v-btn class="vbtn line search ml_5" size="small">조회</v-btn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top other">
              <div class="row">
                <div class="con d_flex">
                  <span class="tit">TASK</span>
                  <div class="txt tooltip_box">
                    <p v-if="!taskName">선택하세요.</p> <!-- TASK 선택 전 -->
                    <div v-else><!-- TASK 선택 후 활성 -->
                      <p>TASK명 출력 영역 TASK명 출력 영역</p>            
                      <p class="tooltip" @click="layerPopView">TASK 정보</p>
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
                                        <li>김신한(정산 담당자)</li>
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
                  <v-btn class="vbtn line" size="small" @click="taskOpen">선택</v-btn>
                  <v-btn class="vbtn line btn_reset ml_5" size="small">초기화</v-btn>
                </div>
              </div>

              <div class="row">
                <div class="con flex1">
                  <div class="input_flex a_center">
                    <div class="i_calender a_center flex1">
                      <span class="tit other">이체 기간</span>
                      <ComSelectBox groupCode="01" v-model="comboDate" :items="itemsDate" :isAll="true"  class="s_basics w_145 mr_10 none_details" />
                      <ComDatePicker v-model="startDate" class="i_date" placeholder="날짜선택" />
                      <span>~</span>
                      <ComDatePicker v-model="endDate" class="i_date" placeholder="날짜선택" />              
                      <v-btn class="vbtn line search ml_5" size="small">조회</v-btn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top other">
              <div class="row">
                <div class="con d_flex flex1">
                  <span class="tit other">TASK</span>
                  <div class="txt tooltip_box flex1">
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

              <div class="row">
                <div class="con flex1">
                  <div class="input_flex a_center">
                    <div class="i_calender a_center flex1 mr_20">
                      <span class="tit other">지급 기간</span>
                      <ComDatePicker v-model="startDate" class="i_date w_145" placeholder="날짜선택" />
                      <span>~</span>
                      <ComDatePicker v-model="endDate" class="i_date w_145" placeholder="날짜선택" />
                    </div>
                    <div class="flex1">
                      <div class="input_flex a_center mr_20">
                        <span class="tit">거래처 명</span>
                        <v-text-field label="거래처 명" v-model="orgName" :rules="orgNameRules" placeholder="거래처 명 입력하세요." class="i_basics flex1 none_details"></v-text-field>            
                      </div>
                    </div>
                    <div class="flex1">
                      <div class="input_flex a_center">
                        <span class="tit">지급 금액</span>
                        <v-text-field label="지급 금액" v-model="amount" :rules="amountRules" placeholder="지급 금액을 입력하세요." class="i_basics w_187 none_details"></v-text-field>            
                        <v-btn class="vbtn line btn_reset ml_20" size="small">초기화</v-btn>
                        <v-btn class="vbtn line search ml_5" size="small">조회</v-btn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top other mb_20">
              <div class="row">
                <div class="con flex1">
                  <div class="input_flex a_center">
                    <span class="tit">사업명</span>
                    <ComSelectBox groupCode="01" v-model="businessName" :items="itemsbusinessName" class="s_basics none_details flex1" />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="con flex1">
                  <div class="d_flex">
                    <div class="flex1">
                      <div class="input_flex a_center">
                        <span class="tit">TASK</span>
                        <ComSelectBox groupCode="01" v-model="taskState" :items="itemsTaskState" class="s_basics none_details flex1" />
                      </div>
                    </div>
                    <div class="flex1 ml_20">
                      <div class="input_flex a_center">
                        <span class="tit">TASK명</span>
                        <v-text-field label="검색어" v-model="taskName" :rules="taskNameRules" placeholder="TASK명을 입력하세요" class="i_basics flex1 none_details"></v-text-field>                
                      </div>
                    </div>
                    <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
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

              <div class="row">
                <div class="con flex1">
                  <div class="input_flex a_center">
                    <div class="i_calender a_center flex1 mr_10">
                      <span class="tit">기간</span>
                      <ComSelectBox groupCode="01" v-model="comboDate" :items="itemsDate" class="s_basics w_150 mr_10 none_details" />
                      <ComDatePicker v-model="startDate" class="i_date w_145" placeholder="날짜선택" />
                      <span>~</span>
                      <ComDatePicker v-model="endDate" class="i_date w_145" placeholder="날짜선택" />
                    </div>
                    <div class="flex1">
                      <div class="input_flex a_center">
                        <span class="tit">입금 금액</span>
                        <v-text-field label="입금금액" v-model="depositAmount" :rules="depositAmountRules" placeholder="입금금액을 입력하세요." class="i_basics flex1 none_details" />              
                      </div>
                    </div>
                    <v-btn class="vbtn line btn_reset ml_20" size="small">초기화</v-btn>
                    <v-btn class="vbtn line search ml_5" size="small">조회</v-btn>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top other noline">
              <div class="row">
                <div class="con flex1">
                  <div class="input_flex a_center">
                    <div class="i_calender a_center flex1">
                        <span class="tit">기간</span>
                        <ComSelectBox groupCode="01" v-model="comboDate" :items="itemsDate" class="s_basics w_145 mr_10 none_details" />
                        <ComDatePicker v-model="startDate" class="i_date w_145" placeholder="날짜선택" />
                        <span>~</span>
                        <ComDatePicker v-model="endDate" class="i_date w_145" placeholder="날짜선택" />
                    </div>
                    <div class="flex1">
                      <div class="input_flex a_center">
                        <ComSelectBox groupCode="01" v-model="comboState" :items="itemsState" class="s_basics w_145 mr_20 none_details" />
                        <span class="tit">수행기관</span>
                        <span class="txt" v-if="true">한국가스</span>
                        <v-btn class="vbtn line" size="small">발주기관 찾기</v-btn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="con flex1">
                  <div class="input_flex a_center">
                    <span class="tit">사업명</span>
                    <ComSelectBox groupCode="01" v-model="comboAll" :items="itemsAll" class="s_basics w_145 mr_10 none_details" />
                    <v-text-field label="검색어" v-model="searchTxt" :rules="searchTxtRules" placeholder="사업명을 입력하세요." class="i_basics flex1 none_details"></v-text-field>            
                    <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top other noline">
              <div class="row">
                <div class="con flex1">
                  <div class="input_flex a_center">
                    <div class="i_calender a_center flex1">
                      <span class="tit">기간</span>
                      <ComSelectBox groupCode="01" v-model="comboSelected" :items="items" class="s_basics w_145 mr_10 none_details" />
                      <ComDatePicker v-model="startDate" class="i_date w_145" placeholder="날짜선택" />
                      <span>~</span>
                      <ComDatePicker v-model="endDate" class="i_date w_145" placeholder="날짜선택" />
                    </div>
                    <div class="flex1">
                      <span class="tit">수행기관</span>
                      <span class="txt" v-if="true">한국가스</span>
                      <v-btn class="vbtn line" size="small">수행기관 찾기</v-btn>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="con flex1">
                  <div class="input_flex a_center">
                    <span class="tit">사업명</span>
                    <v-text-field label="검색어" v-model="searchTxt" :rules="searchTxtRules" placeholder="사업명을 입력하세요." class="i_basics flex1 none_details"></v-text-field>            
                    <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top other noline mt_40">
              <div class="row">
                <div class="con flex1">

                  <div class="input_flex a_center">
                    <div class="i_calender a_center flex1 mr_10">
                      <span class="tit">TASK명</span>
                      <div class="txt tooltip_box flex1">
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
                    <div class="flex1">
                      <span class="tit">수행기관</span>
                      <span class="txt" v-if="true">한국가스</span>
                      <v-btn class="vbtn line" size="small">수행기관 찾기</v-btn>
                    </div>
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="con flex1">
                  <div class="input_flex a_center">
                    <div class="i_calender a_center flex1 mr_20">
                      <span class="tit">기간</span>
                      <ComSelectBox groupCode="01" v-model="comboDate" :items="itemsDate" class="s_basics w_150 mr_10 none_details" />
                      <ComDatePicker v-model="startDate" class="i_date w_145" placeholder="날짜선택" />
                      <span>~</span>
                      <ComDatePicker v-model="endDate" class="i_date w_145" placeholder="날짜선택" />
                    </div>
                    <div class="flex1">
                      <div class="input_flex a_center">
                        <span class="tit">금액</span>
                        <v-text-field label="입금금액" v-model="depositAmount" :rules="depositAmountRules" placeholder="금액을 입력하세요." class="i_basics flex1 none_details" />
                      </div>
                    </div>
                    <v-btn class="vbtn line btn_reset ml_20" size="small">초기화</v-btn>
                    <v-btn class="vbtn line search ml_5" size="small">조회</v-btn>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top other noline">
              <div class="row">
                <div class="con d_flex">
                  <span class="tit">TASK</span>
                  <div class="txt tooltip_box">
                    <p v-if="!taskName">선택하세요.</p> <!-- TASK 선택 전 -->
                    <div v-else><!-- TASK 선택 후 활성 -->
                      <p>TASK명 출력 영역 TASK명 출력 영역</p>            
                      <p class="tooltip" @click="layerPopView">TASK 정보</p>
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
                                        <li>김신한(정산 담당자)</li>
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
                  <v-btn class="vbtn line" size="small" @click="taskOpen">선택</v-btn>
                  <v-btn class="vbtn line btn_reset ml_5" size="small">초기화</v-btn>
                </div>
              </div>

              <div class="row">
                <div class="con flex1">
                  <div class="input_flex a_center">
                    <div class="i_calender a_center mr_20">
                      <span class="tit">기간</span>
                      <ComSelectBox groupCode="01" v-model="comboDate" :items="itemsDate" class="s_basics w_150 mr_10 none_details" />
                      <ComDatePicker v-model="startDate" class="i_date w_145" placeholder="날짜선택" />
                      <span>~</span>
                      <ComDatePicker v-model="endDate" class="i_date w_145" placeholder="날짜선택" />
                    </div>
                    <div class="flex1">
                    <div class="input_flex a_center">
                      <span class="tit">가상계좌번호</span>
                      <v-text-field label="가상계좌번호" v-model="vAcc" :rules="vAccRules" placeholder="가상계좌번호를 입력하세요." class="i_basics flex1 none_details"></v-text-field>                          
                      <v-btn class="vbtn line search ml_5" size="small">조회</v-btn>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top other noline">
              <div class="row">
                <div class="con flex1">
                  <div class="input_flex a_center">
                    <span class="tit">사업명</span>
                    <ComSelectBox groupCode="01" v-model="businessName" :items="itemsbusinessName" class="s_basics none_details flex1" />
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
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
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top other noline">
              <div class="row">
                <div class="con flex1">
                  <div class="input_flex">
                    <span class="tit mt_9">은행/코드</span>
                    <v-text-field label="은행/코드" v-model="bankCode" :rules="bankCodeRules" placeholder="은행/코드를 입력하세요." class="i_basics flex1"></v-text-field>            
                    <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
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
                  <v-btn class="vbtn line btn_reset ml_20" size="small">초기화</v-btn>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top other noline">
              <div class="row">
                <div class="con flex1">
                  <div class="input_flex a_center">
                    <div class="i_calender a_center flex1">
                        <span class="tit">기간</span>
                        <ComSelectBox groupCode="01" v-model="comboDate" :items="itemsDate" class="s_basics w_145 mr_10 none_details" />
                        <ComDatePicker v-model="startDate" class="i_date w_145" placeholder="날짜선택" />
                        <span>~</span>
                        <ComDatePicker v-model="endDate" class="i_date w_145" placeholder="날짜선택" />
                    </div>
                    <div class="flex1">
                      <div class="input_flex a_center">
                        <ComSelectBox groupCode="01" v-model="comboState" :items="itemsState" class="s_basics w_145 mr_20 none_details" />
                        <span class="tit">수행기관</span>
                        <span class="txt" v-if="true">한국가스</span>
                        <v-btn class="vbtn line" size="small">발주기관 찾기</v-btn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top other noline">
              <div class="row">
                <div class="con flex1">
                  <div class="input_flex a_center">
                    <div class="i_calender a_center flex1">
                      <span class="tit">기간</span>
                      <ComSelectBox groupCode="01" v-model="comboSelected" :items="items" class="s_basics w_145 mr_10 none_details" />
                      <ComDatePicker v-model="startDate" class="i_date w_150" placeholder="날짜선택" />
                      <span>~</span>
                      <ComDatePicker v-model="endDate" class="i_date w_150" placeholder="날짜선택" />
                    </div>
                    <div class="flex1">
                      <div class="input_flex">
                        <ComSelectBox groupCode="01" v-model="comboClass" :items="itemsClass" class="s_basics w_150 ml_20 none_details" />
                        <v-text-field label="검색어" v-model="searchTxt" :rules="searchTxtRules" placeholder="검색어를 입력하세요" class="i_basics flex1 none_details ml_5"></v-text-field>
                        <v-btn class="vbtn line search ml_5" size="small">조회</v-btn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top">
              <div class="row">
                <span class="tit">기간검색</span>
                <div class="con">
                  <div class="i_calender">
                    <ComDatePicker v-model="startDate" class="i_date w_150" placeholder="날짜선택" />
                    <span>~</span>
                    <ComDatePicker v-model="endDate" class="i_date w_150" placeholder="날짜선택" />

                    <ComSelectBox groupCode="01" v-model="comboOrg" :items="itemsOrg" class="s_basics w_110 ml_20 none_details" />
                    <v-text-field label="검색어" v-model="searchTxt" :rules="searchTxtRules" placeholder="검색어를 입력하세요" class="i_basics w_220 none_details ml_5"></v-text-field>
                    <div class="input_find w_260">
                      <v-text-field label="검색어" v-model="searchOrg" :rules="searchOrgRules" placeholder="발주기관을 선택하세요" class="i_basics none_details ml_20"></v-text-field>
                      <v-btn class="vbtn" size="small">조회</v-btn>
                    </div>
                    <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box incon">
              <div class="row">
                <span class="tit">기간검색</span>
                <div class="con">
                  <div class="i_calender">
                    <ComDatePicker v-model="startDate" class="i_date w_160" placeholder="날짜선택" />
                    <span>~</span>
                    <ComDatePicker v-model="endDate" class="i_date w_160" placeholder="날짜선택" />

                    <ComSelectBox groupCode="01" v-model="comboMemo" :items="itemsMemo" class="s_basics w_120 ml_20 none_details" />

                    <ComSelectBox groupCode="01" v-model="comboMemoType" :items="itemsMemoType" class="s_basics w_160 ml_5 none_details" />
                    <v-text-field label="검색어" v-model="searchTxt" :rules="searchTxtRules" placeholder="검색어를 입력하세요" class="i_basics w_200 none_details ml_5"></v-text-field>
                    <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top">
              <div class="row">
                <span class="tit">기간검색</span>
                <div class="con">
                  <div class="i_calender">
                    <ComDatePicker v-model="startDate" class="i_date w_150" placeholder="날짜선택" />
                    <span>~</span>
                    <ComDatePicker v-model="endDate" class="i_date w_150" placeholder="날짜선택" />

                    <ComSelectBox groupCode="01" v-model="comboOrg" :items="itemsOrg" class="s_basics w_110 ml_20 none_details" />
                    <v-text-field label="검색어" v-model="searchTxt" :rules="searchTxtRules" placeholder="검색어를 입력하세요" class="i_basics w_300 none_details ml_5"></v-text-field>
                    <v-btn class="vbtn line search ml_5" size="small">조회</v-btn>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top other noline">
              <div class="row">
              <div class="con flex1">
                  <div class="input_flex a_center">
                    <div class="input_flex a_center flex1 mr_20">
                      <span class="tit">TASK</span>
                      <div class="txt tooltip_box">
                        <p v-if="!taskName">선택하세요.</p> <!-- TASK 선택 전 -->
                        <div v-else><!-- TASK 선택 후 활성 -->
                          <p>TASK명 출력 영역 TASK명 출력 영역</p>            
                          <p class="tooltip" @click="layerPopView">TASK 정보</p>
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
                                            <li>김신한(정산 담당자)</li>
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
                      <v-btn class="vbtn line" size="small" @click="taskOpen">선택</v-btn>
                    </div>

                    <div class="input_flex a_center flex1">
                      <span class="tit">세목명</span>
                      <ComSelectBox groupCode="01" v-model="comboDetail" :items="itemsDetail" class="s_basics flex1 none_details" />
                    </div>
                    <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top other noline">
              <div class="row">
                <div class="con flex1">
                  <div class="input_flex a_center">
                    <div class="flex1">
                      <div class="input_flex a_center mr_20">
                        <span class="tit">사업명</span>
                        <ComSelectBox groupCode="01" v-model="businessName" :items="itemsbusinessName" class="s_basics none_details flex1" />
                      </div>
                    </div>
                    <div class="flex1">
                      <div class="input_flex a_center">
                        <span class="tit">TASK명</span>
                        <v-text-field label="검색어" v-model="searchTask" :rules="searchTaskRules" placeholder="TASK명을 입력하세요" class="i_basics flex1 none_details"></v-text-field>
                        <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top other noline">
              <div class="row">
              <div class="con flex1">
                  <div class="input_flex a_center">
                    <div class="input_flex a_center flex1 mr_20">
                      <span class="tit">TASK</span>
                      <div class="txt tooltip_box">
                        <p v-if="!taskName">선택하세요.</p> <!-- TASK 선택 전 -->
                        <div v-else><!-- TASK 선택 후 활성 -->
                          <p>TASK명 출력 영역 TASK명 출력 영역</p>            
                          <p class="tooltip" @click="layerPopView">TASK 정보</p>
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
                                            <li>김신한(정산 담당자)</li>
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
                      <v-btn class="vbtn line" size="small" @click="taskOpen">선택</v-btn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top other noline">
              <div class="row">
                <div class="con d_flex">
                  <span class="tit other">TASK</span>
                  <div class="txt tooltip_box flex1">
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
                  <v-btn class="vbtn line" size="small">지급 내역 업로드</v-btn>
                  <p class="tip_txt ml_10">버튼을 선택 하시면 엑셀업로드하는 화면이 노출됩니다.</p>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top">
              <div class="row">
                <!-- <span class="tit">기간검색</span> -->
                <div class="con">          
                  <div class="i_calender">
                    <ComSelectBox groupCode="01" v-model="comboSelected" :items="items" class="s_basics w_130 mr_10 none_details" />
                    <ComDatePicker v-model="startDate" class="i_date w_150" placeholder="날짜선택" />
                    <span>~</span>
                    <ComDatePicker v-model="endDate" class="i_date w_150" placeholder="날짜선택" />

                    <!-- <ComSelectBox groupCode="01" v-model="comboOrg" :items="itemsOrg" class="s_basics w_110 ml_20 none_details" /> -->
                    <span class="tit">공고 제목</span>
                    <v-text-field label="검색어" v-model="searchTxt" :rules="searchTxtRules" placeholder="검색어를 입력하세요" class="i_basics w_200 none_details"></v-text-field>
                    <div class="input_find w_250">
                      <v-text-field label="검색어" v-model="searchOrg" :rules="searchOrgRules" placeholder="발주기관을 선택하세요" class="i_basics none_details ml_20"></v-text-field>
                      <v-btn class="vbtn" size="small">조회</v-btn>
                    </div>
                    <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <div class="search_box top">
              <div class="row">
                <!-- <span class="tit">기간검색</span> -->
                <div class="con">
                  <div class="i_calender">
                    <ComSelectBox groupCode="01" v-model="comboSelected" :items="items" class="s_basics w_130 mr_10 none_details" />
                    <ComDatePicker v-model="startDate" class="i_date w_150" placeholder="날짜선택" />
                    <span>~</span>
                    <ComDatePicker v-model="endDate" class="i_date w_150" placeholder="날짜선택" />

                    <ComSelectBox groupCode="01" v-model="comboStatus" :items="itemsStatus" class="s_basics w_160 ml_20 none_details" />
                    <!-- <ComSelectBox groupCode="01" v-model="comboOrg" :items="itemsOrg" class="s_basics w_110 ml_20 none_details" /> -->
                    <span class="tit">공고 제목</span>
                    <v-text-field label="검색어" v-model="searchTxt" :rules="searchTxtRules" placeholder="검색어를 입력하세요" class="i_basics w_268 none_details ml_5"></v-text-field>
                    <v-btn class="vbtn line search ml_5" size="small">조회</v-btn>
                  </div>
                </div>
              </div>
            </div>
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <!-- //검색영역 -->

            <!-- 검색영역 -->
            <!-- //검색영역 -->

          </div>

        </div>
      </v-window-item>
      
      <v-window-item value="etc">
        <div class="pub_guide_con">

          <h3>Chart</h3>
          <BarChart :chartData="testData" style="width:500px;height:500px;" />

          <h3>left step</h3>
          <div class="component">
            <div class="step_wrap">
              <div class="step_box">
                <ul class="step_list active_step_1"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3, active_step_4, active_step_5 -->
                  <li class="step1">사업정보</li>
                  <li class="step2">참여기관<br>협약문서정보</li>
                  <li class="step3">사업비 계좌 정보</li>
                  <li class="step4">비목세목 정보</li>
                  <li class="step5">결재선 정보</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>top step - step에 클릭 가능 한 경우 class="click" 추가</h3>
          <div class="component">
            <ul class="top_step_list active_step_1"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3 -->
              <li class="step1"><span>지급 요청</span></li>
              <li class="step2"><span>지급 승인</span></li>
              <li class="step3"><span>지급 실행</span></li>
              <li class="tip_txt">요청 상태만 확인가능</li>
            </ul>
            <ul class="top_step_list active_step_1"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3 -->
              <li class="step1 click"><span>지급 요청</span></li>
              <li class="step2"><span>지급 승인</span></li>
              <li class="step3"><span>지급 실행</span></li>
            </ul>
            <ul class="top_step_list active_step_3"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3 -->
              <li class="step1"><span>지급 요청</span></li>
              <li class="step2 click"><span>지급 승인</span></li>
              <li class="step3"><span>지급 실행</span></li>
            </ul>
          </div>

          <h3>텍스트</h3>
          <div class="component">
            <p class="tip_txt">팁 텍스트 문구</p>
            <div class="t_center"><p class="tip_txt inline_block">팁 텍스트 문구</p></div>
            <div class="caution_box mt_40">
              <p class="tit">안내 및 유의사항</p>
              <ul>
                <li>문서 확장자는 doc, pdf, jpg, tft, png 로 가능합니다.</li>
                <li>최대 10메가까지 파일 첨부가 가능합니다.</li>
                <li>문서명과 업로드한 파일을 일치하여 파일을 업로드 해주세요.</li>
                <li>파일명을 선택하시면 업로드 하신 파일을 뷰어를 통해 보실 수 있습니다.</li>
              </ul>
            </div>

            <div class="authority_box mt_40">
              회원님, 일반회원에서 책임자 권한으로 변경 하시려면 법인인증서를 통해 인증 검증 후 사용이 가능합니다.
              <v-btn class="vbtn blue line" size="m">책임자 권한 변경 신청</v-btn>
            </div>

            <div class="authority_box other single mt_40">
              <ul>
                <li>엑셀 파일을 등록 후 검증 요청 하시면 계좌 검증 후 사용이 가능합니다.</li>
              </ul>
              <v-btn class="vbtn line search single" size="small">조회</v-btn>
            </div>

            <div class="authority_box other mt_40">
              <ul>
                <li>엑셀 파일을 등록 후 검증 요청 하시면 계좌 검증 후 사용이 가능합니다.</li>
                <li>반납 계좌 등록을 하시려면 엑셀파일을 다운로드 후 반납계좌 관리를 통해 등록하세요.</li>
              </ul>
              <v-btn class="vbtn line search" size="small">조회</v-btn>
              <v-btn class="vbtn blue line btn_excel" size="">엑셀파일받기</v-btn>
            </div>

            <div class="authority_box other single multi_btn mt_40">
              <ul>
                <li>엑셀 파일을 등록 후 계좌 검증이 완료되면 일괄집행등록이 가능합니다. 업로드 하시려면 엑셀 파일을 다운로드 후 등록하세요.</li>
              </ul>
              <v-btn class="vbtn blue line" size="">세목정보보기</v-btn>
              <v-btn class="vbtn blue line" size="">은행 코드 보기</v-btn>
              <v-btn class="vbtn blue line btn_excel" size="">엑셀파일받기</v-btn>
            </div>

          </div>

          <h3>약관</h3>
          <div class="component">
            <div class="terms_box">
              <div class="top">
                <v-checkbox v-model="checkbox1" :label="'전체 동의'"/>
              </div>
              <div class="d_flex">
                <v-checkbox v-model="checkbox2">
                  <template v-slot:label>
                    <span class="com">[필수]</span>이용약관
                  </template>
                </v-checkbox>
                <nuxt-link to="pub_guide">보기</nuxt-link>
              </div>
              <div class="d_flex">
                <v-checkbox v-model="checkbox3">
                  <template v-slot:label>
                    <span class="com">[필수]</span>개인정보 수집·이용·제공 동의서
                  </template>          
                </v-checkbox>
                <nuxt-link to="pub_guide">보기</nuxt-link>
              </div>
              <div class="d_flex">
                <v-checkbox v-model="checkbox4">
                  <template v-slot:label>
                    <span class="com">[선택]</span>개인정보 수집·이용 동의서
                  </template>
                </v-checkbox>
                <nuxt-link to="pub_guide">보기</nuxt-link>
              </div>
              <div class="depth">
                <span>안내 매체</span>
                <div class="i_chk">
                  <v-checkbox v-model="checkbox5" :label="'SMS'" />
                  <v-checkbox v-model="checkbox6" :label="'이메일'" />
                </div>
              </div>
            </div>

            <div class="terms_box mt_20">
              <div class="d_flex">
                <v-checkbox v-model="checkbox1">
                  <template v-slot:label>
                    <span class="com">[선택]</span>개인정보 수집·이용 동의서
                  </template>
                </v-checkbox>
                <nuxt-link to="pub_guide">보기</nuxt-link>
              </div>
              <div class="depth">
                <span>안내 매체</span>
                <div class="i_chk">
                  <v-checkbox v-model="checkbox2" :label="'SMS'" />
                  <v-checkbox v-model="checkbox3" :label="'이메일'" />
                </div>
              </div>
            </div>
            <p class="tip_txt mt_10">회원정보와 개인정보 활용 동의 약관을 수정하시는 경우, 인증절차 진행 후 회원정보수정이 가능합니다.</p> 
          </div>

        </div>
      </v-window-item>

      <v-window-item value="css">
        <div class="pub_guide_con">
          
          <h3>로고 css</h3>
          <div class="component">
            <div>
              <p>// 로고 css 주석 부분 참고하여 추가</p>
              
              <pre class="mt_20">
                EX)

                // 로고 class - 추후 여기에 추가해서 적용 - class 명은 logo_발주기관코드명
                // &.logo_발주기관코드 {
                //     a {background-image: url("../images/@logo_발주기관코드.png");}
                // }
                &.logo_SHIN { // 신한은행
                    a{background-image: url("../images/logo/@logo01.png");}
                }
                &.logo_EFM0 { // 한마생명
                    a {background-image: url("../images/logo/@logo02.png");}
                }
                &.logo_HAMA { // 하마
                    a {background-image: url("../images/logo/@logo_HAMA.png");}
                }
                &.logo_HHMM { // 테스트용
                    a {background-image: url("../images/logo/@logo_HHMM.png");}
                }
                &.logo_HHNN { // 테스트용
                    a {background-image: url("../images/logo/@logo_HHNN.png");}
                }

                &.logo_기관코드명 { // 기관명
                    a {background-image: url("../images/logo/@logo_기관코드명.png");}
                }
              </pre>
            </div>
          </div>

          <h3>skin css</h3>
          <div class="component">
            <div>
              <p>// SKIN 적용 css 주석 부분 참고하여 추가</p>
              
              <pre class="mt_20">
                EX)

                스킨 추가 시 skin 적용 css 전체 복사 후 // skin class name 변경, // .... skin 주석부분만 변경
                // START - SKIN - violet ~ // END - SKIN - violet 전체 복사 붙여넣기 후 // skin class name // violet bg skin 주석 부분만 변경

                // START - SKIN - 스킨명
                // ........
                // END - SKIN - 스킨명
              </pre>
            </div>
          </div>

        </div>
      </v-window-item>

      <v-window-item value="svg">
        <div class="pub_guide_con">
          
          <h3>svg icon</h3>
          <div class="component">
            <div class="icon_list">
              <i class="icon_1"></i>
              <i class="icon_2"></i>
              <i class="icon_3"></i>
              <i class="icon_4"></i>
              <i class="icon_5"></i>
              <i class="icon_6"></i>
              <i class="icon_7"></i>
              <i class="icon_8"></i>
              <i class="icon_8 new"></i>
              <i class="icon_9"></i>
              <i class="icon_10"></i>
              <i class="icon_11"></i>
              <i class="icon_12"></i>
              <i class="icon_13"></i>
              <i class="icon_14"></i>
              <i class="icon_15"></i>
              <i class="icon_16"></i>
              <i class="icon_17"></i>
              <i class="icon_18"></i>
              <i class="icon_19"></i>
              <i class="icon_20"></i>
              <i class="icon_21"></i>
              <i class="icon_22"></i>
              <i class="icon_23"></i>
              <i class="icon_24"></i>
              <i class="icon_25"></i>
              <i class="icon_26"></i>
              <i class="icon_27"></i>
              <i class="icon_28"></i>
              <i class="icon_29"></i>
              <i class="icon_30"></i>
              <i class="icon_31"></i>
              <i class="icon_32"></i>
              <i class="icon_33"></i>
              <i class="icon_34"></i>
              <i class="icon_35"></i>
              <i class="icon_36"></i>
              <i class="icon_37"></i>
              <i class="icon_38"></i>
              <i class="icon_39"></i>
              <i class="icon_40"></i>
              <i class="icon_41"></i>
              <i class="icon_42"></i>
              <i class="icon_43"></i>
              <i class="icon_44"></i>
              <i class="icon_45"></i>
              <i class="icon_46"></i>
              <i class="icon_47"></i>
              <i class="icon_48"></i>
              <i class="icon_49"></i>
              <i class="icon_50"></i>
              <i class="icon_51"></i>
              <i class="icon_52"></i>
              <i class="icon_53"></i>
              <i class="icon_54"></i>
              <i class="icon_55"></i>
              <i class="icon_56"></i>
              <i class="icon_57"></i>
              <i class="icon_58"></i>
              <i class="icon_59"></i>
              <i class="icon_60"></i>
              <i class="icon_61"></i>
              <i class="icon_62"></i>
              <i class="icon_63"></i>
              <i class="icon_64"></i>
              <i class="icon_65"></i>
              <i class="icon_66"></i>
              <i class="icon_67"></i>
              <i class="icon_68"></i>
              <i class="icon_69"></i>
              <i class="icon_70"></i>
              <i class="icon_71"></i>
              <i class="icon_72"></i>
              <i class="icon_73"></i>
              <i class="icon_74"></i>
              <i class="icon_75"></i>
              <i class="icon_76"></i>
              <i class="icon_77"></i>
              <i class="icon_78"></i>
              <i class="icon_79"></i>
              <i class="icon_80"></i>
              <i class="icon_81"></i>
              <i class="icon_82"></i>
              <i class="icon_83"></i>
              <i class="icon_84"></i>
              <i class="icon_85"></i>
              <i class="icon_86"></i>
              <i class="icon_87"></i>
              <i class="icon_88"></i>
              <i class="icon_89"></i>
              <i class="icon_90"></i>
              <i class="icon_91"></i>
              <i class="icon_92"></i>
              <i class="icon_101"></i>
              <i class="icon_93"></i>
              <i class="icon_94"></i>        
              <i class="icon_96"></i>
              <i class="icon_97"></i>
              <i class="icon_98"></i>
              <i class="icon_95"></i>
              <i class="icon_102"></i>
              <i class="icon_99"></i>
              <i class="icon_100"></i>        
              <i class="icon_103"></i>
              <i class="icon_104"></i>
              <i class="icon_105"></i>
              <i class="icon_106"></i>
              <i class="icon_107"></i>
              <i class="icon_108"></i>
              <i class="icon_109"></i>
              <i class="icon_110"></i>
              <i class="icon_111"></i>
              <i class="icon_112"></i>
              <i class="icon_113"></i>
              <i class="icon_114"></i>
              <i class="icon_115"></i>
              <i class="icon_116"></i>
              <i class="icon_117"></i>
              <i class="icon_118"></i>
              <i class="icon_119"></i>
              <i class="icon_120"></i>
            </div>
          </div>
        </div>
      </v-window-item>

    </v-window>

  </div>

</template>

<style scoped>
  .pub_guide{min-height:800px;margin-bottom:60px;padding:20px 52px;border-radius: 10px;background: #fff;box-shadow: 0px 8px 12px 0px #2b2f3633;}
  .pub_guide_con{padding:0 10px;}

  .v-tabs.tab_basics .v-slide-group__container .v-slide-group__content .v-tab{padding:10px 30px;}
  .component{margin-bottom:12px;/*padding:5px;*/z-index:0;}
  /* .component:hover:after{content: '';position: absolute;top:-10px;left:-9px;bottom:-10px;right:-9px;border-radius: 5px;box-shadow: 0px 0px 12px 0px #2b2f3633;z-index:-1;} */
  .component > div{margin-top:10px;cursor:auto;}
  .component > div:first-child{margin-top:0;}
  .component .grid_extend{cursor:pointer;}
  .v-window{padding-bottom:100px;}
  .fs_18{font-size:18px;}
  .mt_20{margin-top:20px;}
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComRadioButton from '@/components/common/ComRadioButton.vue'
import ComAgGrid from '~/components/common/ComAgGrid.vue'
import ComAgGridBasic from '~/components/common/ComAgGridBasic.vue'
import ComDatePicker from '@/components/common/ComDatePicker.vue'

const tab = ref('')

/* input */
const ipt = ref('')
const iptRules = [
  (v) => !!v || '다시 입력해주세요.',
  (v) => (v && v.length >= 3) || '3자리 이상 입력해주세요.',
]

const notice = ref('')
const noticeRules = [
  //(v) => !!v || '사용이 불가능합니다. 다시 입력해주세요.',
  //(v) => (v && v.length >= 16) || '영문, 숫자 대소문자 구분없이 6~16 자리',
]

const searchTxt = ref('')
const searchTxtRules = [
  // (v) => !!v || '다시 입력해주세요.',
  //(v) => (v && v.length >= 16) || '영문, 숫자 대소문자 구분없이 6~16 자리',
]

const searchOrg = ref('')
const searchOrgRules = [
  // (v) => !!v || '다시 입력해주세요.',
  //(v) => (v && v.length >= 16) || '영문, 숫자 대소문자 구분없이 6~16 자리',
]

const searchTask = ref('')
const searchTaskRules = [
  //(v) => !!v || '다시 입력해주세요.',
]

const amount = ref('')
const amountRules = [
  //(v) => !!v || '다시 입력해주세요.',  
]

const vAcc = ref('')
const vAccRules = [
  //(v) => !!v || '다시 입력해주세요.',  
]

const bankCode = ref('')
const bankCodeRules = [
  (v) => !!v || '다시 입력해주세요.',
]

const orgName = ref('')
const orgNameRules = [
  //(v) => !!v || '다시 입력해주세요.',  
]

const userName = ref('')
const userNameRules = [

]

const userBirthday = ref('')
const userBirthdayRules = [

]

/* 라디오버튼 */
const selectedValue = ref(null)
const radioOptions = [
  { label: '전화번호', value: 'value1' },
  { label: '이메일', value: 'value2' },
]
const radioValue = ref(null)
const radio = [
  { label: '', value: 'value1' },
]

const transferValue = ref(null)
const transfer = [
  { label: '예', value: '01' },
  { label: '아니오', value: '02' },
]

const selectedOrgChannel = ref(null)
const radioOrgChannel = [
  { label: '공공기관', value: 'value1' },
  { label: '일반기업', value: 'value2' },
  { label: '개인사업자', value: 'value3' },
  { label: '외국기업', value: 'value4' },
]

const selectedChannel = ref(null)
const radioChannel = [
  { label: '미신청', value: 'value1' },
  { label: 'SMS', value: 'value2' },
  { label: '이메일', value: 'value3' },
]

const selectedName = ref('value1')
const radioName = [
  { label: '내국인', value: 'value1' },
  { label: '외국인', value: 'value2' },
]

const selectedSex = ref('value1')
const radioSex = [
  { label: '남', value: 'value1' },
  { label: '여', value: 'value2' },
]

/* 체크박스 */
const checkbox1 = ref(false)
const checkbox2 = ref(false)
const checkbox3 = ref(false)
const checkbox4 = ref(false)
const checkbox5 = ref(false)
const checkbox6 = ref(false)
const checkbox7 = ref(true)

/* 콤보 박스 */
const comboSelected = ref('001')
const items = ref([
  { title: '감자', value: '001' },
  { title: '양파', value: '002' },
  { title: '고구마', value: '003' },
])
const userOrgSearch = ref(null)
const nameOrgSearchRules = [
  (v) => !!v || '조회된 기관이 없습니다. 다시 입력해주세요.',
  (v) => (v && v.length >= 2) || '2자 이상 입력 후 검색하세요.',
]

const userOrgSearch2 = ref(null)
const nameOrgSearchRules2 = [
  
]

const userOrgName = ref('')
const userOrgNameRules = [
  (v) => !!v || '사용이 불가능합니다. 다시 입력해주세요.',
  // (v) => (v && v.length >= 16) || '영문, 숫자 대소문자 구분없이 6~16 자리',
]

const comboDate = ref('001')
const itemsDate = ref([
    { title: 'TASK 시작일', value: '001' },
    { title: 'TASK 종료일', value: '002' },
])

const comboDetail = ref('01')
const itemsDetail = [
  { title: '세목명', value: '01' },
  { title: '세목명', value: '02' },
]

const businessName = ref('001')
const itemsbusinessName = ref([
  { title: '[1234567890]2023 차세대 이관 작업 대행 업체 선정 공고', value: '001' },
  { title: '[1234567891]2023 차세대 이관 작업 대행 업체 선정 공고', value: '002' },
  { title: '[1234567892]2023 차세대 이관 작업 대행 업체 선정 공고', value: '003' },
])

const comboState = ref('001')
const itemsState = ref([
  { title: '신청', value: '001' },
  { title: '진행중(승인)', value: '002' },
  { title: '종료', value: '003' },
  { title: '반려', value: '003' },
])

const comboTaskName = ref('01')
const itemsTaskName = [
  { title: '회원관리 UI/UX 화면 변경 진행 화면', value: '01' },
  { title: 'TASK 명을 기준으로 민간 계좌가 있는 경우 TASK 노출', value: '02' },
]

const comboSelected1 = ref('')
const items1 = ref([
  { title: '계약서', value: '001' },
  { title: '사업자등록증', value: '002' },
])

const comboSelected2 = ref('')
const items2 = ref([
  { title: '계약서', value: '001' },
  { title: '사업자등록증', value: '002' },
])

const comboClass = ref('001')
const itemsClass = ref([
  { title: '전체', value: '001' },
  { title: '사업명', value: '002' },
  { title: 'PMS 관리번호', value: '003' },
])

const comboStatus = ref('001')
const itemsStatus = ref([
  { title: '공고 상태 전체', value: '001' },
  { title: '공고 상태 진행중', value: '002' },
  { title: '사업자선정', value: '003' },
  { title: '종료', value: '004' },
])

const comboOrg = ref('001')
const itemsOrg = ref([
  { title: '전체', value: '001' },
  { title: '공고 제목', value: '002' },
])

const taskState = ref('001')
const itemsTaskState = ref([
  { title: '상태 전체', value: '001' },
  { title: '진행 중', value: '002' },
  { title: '종료', value: '003' },
])

const comboAll = ref('001')
const itemsAll = ref([
  { title: '전체', value: '001' },
  { title: '사업 명', value: '002' },
  { title: '사업자등록번호', value: '003' },
  { title: 'TASK 명', value: '004' },
  { title: 'PMS 관리번호', value: '005' },
])

const comboMemo = ref('001')
const itemsMemo = ref([
  { title: '전체', value: '001' },
  { title: '쪽지 종류', value: '002' },
  { title: '쪽지 내용', value: '003' },
])

const comboMemoType = ref('001')
const itemsMemoType = ref([
  { title: '전체', value: '001' },
  { title: 'TASK제안접수', value: '002' },
  { title: 'TASK제안선정', value: '003' },
  { title: 'TASK신규', value: '004' },
  { title: 'TASK승인', value: '005' },
  { title: '건별지급요청', value: '006' },
  { title: '건별지급승인', value: '007' },
  { title: '정산신청', value: '008' },
  { title: '정산완료', value: '009' },
  { title: '정산확정알림', value: '010' },
  { title: '보낸쪽지', value: '011' },
  { title: '관리자문의', value: '012' },
])


/* textarea */
const textareaRules = [
    (v) => !!v || '결과 사유를 입력하세요.',
]
const textareaRules2 = [
    (v) => !!v || '결과 사유를 입력하세요.',
]

/* 달력 */
const today = new Date() // 현재 날짜와 시간을 포함하는 Date 객체 생성
const year = today.getFullYear() // 년도 가져오기
const month = today.getMonth() + 1 // 월 가져오기 (0부터 시작하므로 1 더하기)
const day = today.getDate() // 일 가져오기
const formattedToday = new Date(
  `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
)
const startDate = ref(formattedToday)
const endDate = ref(formattedToday)

/* 파일 업로드 */
const fileupkoad = ref('')
const fileupkoadRules = [
  (v) => !!v || '업로드된 파일을 다시 확인해주세요.',
  //(v) => (v && v.length >= 3) || 'Name must be at least 3 characters',
]
const tipTxt = ref(false)
const fileChange = () => {
  if (fileupkoad.value.length > 0) {
    tipTxt.value = true
  } else { 
    tipTxt.value = false
  } 
};
const clear = () => {
  tipTxt.value = false
};

const showActive = ref(false)

/* 로딩 */
const loading = ref(false)
const showLoading = () => {
  loading.value = true
};
const hideLoading = () => {
  loading.value = false
};

/* 설치페이지 로딩 */
const installLoading = ref(false)
const showInstallLoading = () => {
  installLoading.value = true
};
const hideInstallLoading = () => {
  installLoading.value = false
};

/* 그리드 */
const comboCnt = ref('001')
const itemsCnt = ref([
  { title: '10개씩', value: '001' },
  { title: '50개씩', value: '002' },
  { title: '100개씩', value: '003' },
])

class tooltipCellRenderer {
  eGui;
  init(params) {
    this.eGui = document.createElement('div');
    const data = params.api.getDisplatedRowAtIndex(params.rowIndex).data
    this.eGui.innerHTML =
      /* html */
      `<div class='gridTooltip'>${params.value}</div>`;
  }
  getGui() {
    return this.eGui;
  }
}

const columnDefsReceive = ref([
  { headerName: 'NO.', field: 'no', width: 80 },
  { headerName: '사업명', field: 'title', width: 356, cellClass: 'ellipsis t_left link',
    tooltipField: 'title',
    // valueFormatter: (params) => $utils.convertRegexToText(params?.value),
    // tooltipField: 'title',
    // tooltipComponent: $agGridUtil.CellRenderer.tooltipCellRenderer,
  },
  { headerName: '수행기관 명', field: 'orgName', width: 160, cellClass:'cell_left ico_new ellipsis' },
  { headerName: '사업자등록번호', field: 'corporateNum', width: 160 },
  { headerName: 'TASK명', field: 'taskName', width: 240 },
  { headerName: 'TASK 시작일', field: 'startDate', width: 120 },
  { headerName: 'TASK 종료일', field: 'endDate', width: 120 },
  { headerName: '상태', field: 'state', width: 120 },
])
const rowDataReceive = [
  {
    no: '999999',
    title: '차세대 이관 작업 대행 업체 선정 공고 차세대 이관 작업 대행 업체 선정 공고 차세대 이관 작업 대행 업체 선정 공고 차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    taskName: '회원관리회원관리회원관리회원관리',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행중(승인)',
  },
  {
    no: '2',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    taskName: '회원관리01',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '신청',
  },
  {
    no: '3',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    taskName: '회원관리01',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '종료',
  },
  {
    no: '4',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    taskName: '회원관리01',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '반려',
  },
  {
    no: '5',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    taskName: '회원관리01',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행중(승인)',
  },
  {
    no: '6',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    taskName: '회원관리01',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행중(승인)',
  },
  {
    no: '7',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    taskName: '회원관리01',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행중(승인)',
  },
  {
    no: '8',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    taskName: '회원관리01',
    state: '진행중(승인)',
    pmsNum: '123456789010000',
  },
  {
    no: '9',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    taskName: '회원관리01',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행중(승인)',
  },
  {
    no: '10',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    taskName: '회원관리01',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행중(승인)',
  },
  {
    no: '11',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    corporateNum: '123-45-68790',
    taskName: '회원관리01',
    startDate: '2023-10-10',
    endDate: '2023-10-10',
    state: '진행중(승인)',
  },
]
const defaultColDefReceive = {
  sortable: true,
  filter: true,
  editable: false,
  resizable: true,
  cellStyle: { textAlign: 'center' },
  // tooltipComponent: {},
  tooltipComponent: 'CustomTooltip',
  // flex:1, // width auto
}
const agrid = ref(null)

class btnPds {
  eGui;
  init(params) {
    this.eGui = document.createElement('div');
    this.eGui.classList.add('my-custom-cell-renderer');
    if (params.value === '') {
      this.eGui.innerHTML =
        `<button type="button" class="btn_vbtn btn_viewer">증빙 자료</button>`;
    } else if (params.value === '오류') {
      this.eGui.innerHTML =
        `<button type="button" disabled class="btn_vbtn btn_viewer">증빙 자료</button>`;
    }
    // this.eGui.innerHTML =
    //   /* html */
    //   `<button type="button" class="btn_vbtn btn_viewer">증빙 자료</button>`;
  }
  getGui() {
    return this.eGui;
  }
  refresh(params) {
    return false;
  }
}
class btnMemo {
  eGui;
  init(params) {
    this.eGui = document.createElement('div');
    this.eGui.classList.add('my-custom-cell-renderer');
    this.eGui.innerHTML =
      /* html */
      `<button type="button" class="btn_vbtn btn_memo">메모 내용 보기</button>`;
  }
  getGui() {
    return this.eGui;
  }
  refresh(params) {
    return false;
  }
}
class checkCel {
  eGui;
  init(params) {
    this.eGui = document.createElement('input');
    this.eGui.type = 'checkbox'
    this.eGui.addEventListener('change', () => {

    });
  }
  getGui() {
    return this.eGui;
  }
}
class btnProgress {
  eGui;
  init(params) {
    this.eGui = document.createElement('div');
    this.eGui.classList.add('my-custom-cell-renderer');
    if (params.value === '진행') {
      this.eGui.innerHTML =
        `<button type="button" class="btn_vbtn btn_progress"></button>`;
    } else if (params.value === '완료') {
      this.eGui.innerHTML =
        `<button type="button" class="btn_vbtn btn_comp"></button>`;
    }
  }
  getGui() {
    return this.eGui;
  }
  refresh(params) {
    return false;
  }
}
class CustomCellRendererBtn {
  eGui;
  init(params) {
    this.eGui = document.createElement('div');
    this.eGui.classList.add('my-custom-cell-renderer');
    this.eGui.innerHTML =
      /* html */
      `<button type="button" class="btn_vbtn">결재 정보</button>`;
  }
  getGui() {
    return this.eGui;
  }
  refresh(params) {
    return false;
  }
}
class btnModify {
  eGui;
  init(params) {
    this.eGui = document.createElement('div');
    this.eGui.classList.add('my-custom-cell-renderer');
    this.eGui.innerHTML =
      /* html */
      `<span class="mr_5">연구 활동비..외 2건</span><button type="button" class="btn_vbtn btn_modify">세목 수정</button>`;
  }
  getGui() {
    return this.eGui;
  }
  refresh(params) {
    return false;
  }
}
const columnDefsReceive2 = ref([
  {
    headerName: '',
    field: 'chkRadio',
    cellRenderer: 'agCheckboxCellRenderer',
    editable: false,
    cellRendererParams: {
      disabled: false,
    },
    cellClass: ['custom-center-align ag_radio'],
    width: 80,
  },
  {
    headerName: '',
    field: 'chk',
    cellRenderer: 'agCheckboxCellRenderer',
    headerComponent: checkCel,
    editable: false,
    cellRendererParams: {
      disabled: false,
    },
    cellClass: ['custom-center-align'],
    width: 80,
  },
  { headerName: 'NO.', field: 'no', width: 80 },
  { headerName: '사업명', field: 'title', width: 250, cellClass: 'ellipsis cell_left' },
  { headerName: '수행기관 명', field: 'orgName', width: 160 },
  { headerName: '세목', field: 'directDetails', width: 200, cellRenderer: btnModify },  
  { headerName: '증빙 자료', field: 'pds', width: 100, cellRenderer: btnPds },
  { headerName: '거래 메모', field: 'memo', width: 100, cellRenderer: btnMemo },
  { headerName: '상태', field: 'state', width: 100, cellRenderer: btnProgress  },
  { headerName: '결재 정보', field: 'appInfo', width: 116, cellRenderer: CustomCellRendererBtn },
  {
    headerName: '정산 결과', field: 'result', width: 120, cellClass: params => {
      if (params.value === '불인정') {
          return 'c_blue'
      }else if (params.value === '재요청') {
          return 'c_red'
      }else if (params.value === '진행') {
          return 'ico_ing'
      }else if (params.value === '중단') {
          return 'ico_fail'
      }else if (params.value === '정산') {
          return 'ico_calculate'
      }else if (params.value === '종료') {
          return 'ico_end'
      }else if (params.value === '완료') {
          return 'ico_success'
      }else if (params.value === '요청') {
          return 'ico_request'
      }
    }
  },
])
const rowDataReceive2 = [
  {
    chkRadio: false,
    chk: false,
    no: '1',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    directDetails: '123-45-68790',
    pds: '',
    memo: '',
    state: '',
    appInfo: '',
    result: '인정',
  },
  {
    chkRadio: false,
    chk: false,
    no: '2',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    directDetails: '123-45-68790',
    pds: '오류',
    memo: '',
    state: '진행',
    appInfo: '',
    result: '불인정',
  },
  {
    chkRadio: false,
    chk: false,
    no: '3',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    directDetails: '123-45-68790',
    pds: '오류',
    memo: '',
    state: '완료',
    appInfo: '',
    result: '재요청',
  },
  {
    chkRadio: false,
    chk: false,
    no: '4',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    directDetails: '123-45-68790',
    pds: '',
    memo: '',
    state: '완료',
    appInfo: '',
    result: '진행',
  },
  {
    chkRadio: false,
    chk: false,
    no: '5',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    directDetails: '123-45-68790',
    pds: '',
    memo: '',
    state: '완료',
    appInfo: '',
    result: '중단',
  },
  {
    chkRadio: false,
    chk: false,
    no: '6',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    directDetails: '123-45-68790',
    pds: '',
    memo: '',
    state: '완료',
    appInfo: '',
    result: '정산',
  },
  {
    chkRadio: false,
    chk: false,
    no: '7',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    directDetails: '123-45-68790',
    pds: '',
    memo: '',
    state: '완료',
    appInfo: '',
    result: '종료',
  },
  {
    chkRadio: false,
    chk: false,
    no: '8',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    directDetails: '123-45-68790',
    pds: '',
    memo: '',
    state: '완료',
    appInfo: '',
    result: '완료',
  },
  {
    chkRadio: false,
    chk: false,
    no: '9',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    directDetails: '123-45-68790',
    pds: '',
    memo: '',
    state: '완료',
    appInfo: '',
    result: '요청',
  },
  {
    chkRadio: false,
    chk: false,
    no: '10',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    directDetails: '123-45-68790',
    pds: '',
    memo: '',
    state: '완료',
    appInfo: '',
    result: '요청',
  },
  {
    chkRadio: false,
    chk: false,
    no: '11',
    title: '차세대 이관 작업 대행 업체 선정 공고',
    orgName: '한마정보통신',
    directDetails: '123-45-68790',
    pds: '',
    memo: '',
    state: '완료',
    appInfo: '',
    result: '요청',
  },
]
const defaultColDefReceive2 = {
  sortable: true,
  filter: true,
  editable: false,
  resizable: true,
  cellStyle: { textAlign: 'center' },
  // flex:1, // width auto
}
const agrid2 = ref(null)

// TASK 정보 레이어 팝업
const taskName = ref(true) // 화면 확인 용
const taskOpen = () => { // 화면 확인 용
  taskName.value = !taskName.value
};
const layerPop = ref(false)
const layerPopView = () => {
  layerPop.value = !layerPop.value
};

const consoleClear = () => {
  console.clear()
};

import { defineComponent } from 'vue';
import { BarChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const testData = {
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
  datasets: [
    {
      data: [30, 40],      
      backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],

      indexAxis: 'y',
    },
  ],
};

const sort = ref(false)
const message = ref('최신순');
const btnSort = () => {
  if(!sort.value){
    sort.value = true
    message.value = '과거순';
  }else{
    sort.value = false
    message.value = '최신순';
  }
};

</script> 