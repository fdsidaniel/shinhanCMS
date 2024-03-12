<template>
<div class="">

  <div class="mt_30 mb_30">
    <nuxt-link to="../pub/publist_front">사용자 퍼블 목록</nuxt-link>
  </div>

   <v-card class="mt-5" outlined>
    <v-card-title>그리드 - 가로 스크롤 X class fixed 추가 / head 라인 삭제 class none_head_line 추가 </v-card-title>
    <v-card-text>
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
      />
      <v-btn class="vbtn btn_grid_more" size="small">더보기</v-btn>
    </v-card-text>
  </v-card>

  <v-card class="mt-5" outlined>
      <v-card-title>그리드 - 수정 가능한 그리드는 세로 라인이 있음. class vline 추가</v-card-title>
      <v-card-text>
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
          class="grid vline"
          :rowData="rowDataReceive"
          :defaultColDef="defaultColDefReceive2"
          :rowHeight="51"
        />
        <v-btn class="vbtn btn_grid_more" size="small">더보기</v-btn>
      </v-card-text>
    </v-card>

  <v-card class="mt-5" outlined>
      <v-card-title>조회</v-card-title>
      <v-card-text>
        <div class="search_box top other noline">
          <div class="row">
            <div class="con flex1">
              <div class="input_flex a_center">
                <div class="i_calender a_center flex1">
                  <span class="tit">기간</span>
                  <ComSelectBox groupCode="01" v-model="comboSelected" :isAll="true"  class="s_basics w_145 mr_10 none_details" />
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
                <div class="flex1">
                  <span class="tit">수행기관</span>
                  <span class="txt" v-if="true">한국가스</span>
                  <v-btn class="vbtn line" size="small">수행기관 찾기</v-btn>
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

        <div class="search_box top">
          <div class="row other">
            <div class="con">
              <div class="slt_box">
                <span class="tit">사업명</span>
                <ComSelectBox groupCode="01" v-model="businessName" :items="itemsbusinessName" class="s_basics none_details" />
              </div>
              <div>
                <v-checkbox v-model="checkbox1" :label="`정산 반납금 계좌 미 등록건`" />
              </div>
            </div>        
          </div>
          <div class="row">
            <div class="con flex1">
              <div class="input_flex a_center">
                <div class="input_find flex1">
                  <v-text-field label="검색어" v-model="searchOrg" :rules="searchOrgRules" placeholder="수행기관 입력" class="i_basics none_details ml_5"></v-text-field>
                  <v-btn class="vbtn" size="small">조회</v-btn>
                </div>
                <span class="tit">TASK명</span>
                <v-text-field label="검색어" v-model="searchTask" :rules="searchTaskRules" placeholder="TASK명을 입력하세요" class="i_basics flex1 none_details"></v-text-field>
                <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
              </div>
            </div>
          </div>
        </div>

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

        <div class="search_box top">
          <div class="row other">
            <div class="con">
              <div class="slt_box">
                <span class="tit">사업명</span>
                <ComSelectBox groupCode="01" v-model="businessName" :items="itemsbusinessName" class="s_basics none_details" />
              </div>
            </div>        
          </div>
          <div class="row">
            <div class="con flex1">
              <div class="input_flex a_center">
                <span class="tit">담당자 선택</span>
                <ComSelectBox groupCode="01" v-model="comboSelected" :items="items" class="s_basics none_details w_170" />
                <v-text-field label="검색어" v-model="searchTask" :rules="searchTaskRules" placeholder="담당자 이름을 조회하세요." class="i_basics flex1 none_details ml_5"></v-text-field>
                <v-btn class="vbtn line search ml_20" size="small">조회</v-btn>
              </div>
            </div>
          </div>
        </div>

        <div class="search_box top other">
          <!-- <div class="row other">
          <div class="con">
            <div class="slt_box">
              <span class="tit">사업명</span>
              <ComSelectBox groupCode="01" v-model="businessName" :items="itemsbusinessName" class="s_basics none_details" />
            </div>
            <div>
              <v-checkbox v-model="checkbox1" :label="`정산 반납금 계좌 미 등록건`" />
            </div>
          </div>
        </div> -->
        
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
                <div class="flex1">
                  <span class="tit">수행기관</span>
                  <span class="txt">한국가스</span>
                  <v-btn class="vbtn line" size="small">수행기관 찾기</v-btn>
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
      </v-card-text>
  </v-card>

  <v-card class="mt-5" outlined>
    <v-card-title>테이블 목록</v-card-title>
    <v-card-text>
      <v-card class="mt-5" outlined>
      
       <v-table class="vtable_list">
        <colgroup>
          <col style="width:;"/>
          <col style="width:;"/>
          <col style="width:;"/>
          <col style="width:;"/>
          <col style="width:;"/>
          <col style="width:;"/>
          <col style="width:;"/>
        </colgroup>
        <thead>
          <tr>
            <th>성명</th>
            <th>생년월일</th>
            <th>성별</th>
            <th>전화번호</th>
            <th>이메일 주소</th>
            <th>안내 채널</th>
            <th>회원가입일자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>김기관기관</td>
            <td>99.09.09</td>
            <td>여</td>
            <td>010-9999-5555</td>
            <td>aaaaaaaaaa@test.com</td>
            <td>이메일</td>
            <td>2021.01.01</td>
          </tr>
        </tbody>
      </v-table>

      </v-card>
    </v-card-text>
  </v-card>

  <v-card class="mt-5" outlined>
    <v-card-title>테이블 뷰</v-card-title>
    <v-card-text>
      <v-card class="mt-5" outlined>
        
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
          </tbody>
        </v-table>

      </v-card>
    </v-card-text>
  </v-card>
  
  <v-card class="mt-5" outlined>
    <v-card-title>달력</v-card-title>
    <v-card-text>
      <v-card class="mt-5" outlined>
        <ComDatePicker v-model="startDate" class="i_date" />
      </v-card>
      <v-card class="mt-5" outlined>
        <ComDatePicker v-model="startDate" />
      </v-card>
    </v-card-text>
  </v-card>

  <v-card class="mt-5" outlined>
    <v-file-input
      v-show="true"
      id="fileElement"
      label="파일찾기"
    ></v-file-input>
  </v-card>

  <v-card class="mt-5" outlined>
    <v-file-input v-show="true" id="fileElement" label="파일 업로드하기" v-model="fileupkoad" :rules="fileupkoadRules" class="file_upload mt_20"></v-file-input>
  </v-card>
  
  <v-card class="mt-5" outlined>
    <v-card-title>Textarea</v-card-title>
    <v-card-text>
      <v-textarea></v-textarea>
    </v-card-text>
  </v-card>  

  <v-card class="mt-5" outlined>
    <v-card-title>라디오버튼</v-card-title>
    <v-card-text>
      <v-card class="mt-5" outlined>
        <ComRadioButton :options="radioOptions" v-model="selectedValue" :isInline="true" />
      </v-card>
      <v-card class="mt-5" outlined>
        <ComRadioButton :options="radioOptions" v-model="selectedValue" disabled />
      </v-card>
      <p>Selected: {{ selectedValue }}</p>
    </v-card-text>
  </v-card>

  <v-card class="mt-5" outlined>
    <v-card-title>체크박스</v-card-title>
    <v-card-text>
      <div class="d_flex">
        <div>
          <v-checkbox v-model="checkbox1" :label="`체크체크체크: ${checkbox1.toString()}`" />
        </div>
        <v-btn class="vbtn line ml_20" size="small">버튼</v-btn>
      </div>
      <v-checkbox v-model="checkbox2" :label="`체크체크체크: ${checkbox2.toString()}`" />
      <v-checkbox v-model="checkbox3" :label="`체크체크체크: ${checkbox3.toString()}`" disabled />
      <v-checkbox v-model="checkbox4" :label="`체크체크체크: ${checkbox4.toString()}`" disabled />
    </v-card-text>
  </v-card>

  <v-card class="mt-5" outlined>
    <v-card-title>콤보박스</v-card-title>
    <v-card-text>
      <ComSelectBox groupCode="01" v-model="comboSelected" :items="items" class="s_basics" />
      <ComSelectBox groupCode="01" v-model="comboSelected" :items="items" :isDefault="false" class="s_basics" />
      <ComSelectBox groupCode="01" v-model="comboSelected" :items="items" disabled class="s_basics" />
    </v-card-text>
  </v-card>

  <v-card class="mt-5" outlined>
    <v-card-title>input</v-card-title>
    <v-card-text>
      <div class="d-flex">      
        <v-text-field label="Your Name" v-model="name" :rules="nameRules" required placeholder="Placeholder" class="i_basics"></v-text-field>
        &nbsp;&nbsp;&nbsp;
        <v-text-field label="Your Name" v-model="name" focused placeholder="Placeholder" class="i_basics"></v-text-field>
        &nbsp;&nbsp;&nbsp;
        <v-text-field label="Your Name" v-model="name" :rules="nameRules" error placeholder="Placeholder" class="i_basics"></v-text-field>
        &nbsp;&nbsp;&nbsp;
        <v-text-field label="Your Name" v-model="name" success placeholder="Placeholder" class="i_basics"></v-text-field>
        &nbsp;&nbsp;&nbsp;
        <v-text-field label="Your Name" v-model="name" disabled placeholder="Placeholder" class="i_basics"></v-text-field>
      </div>
    </v-card-text>
  </v-card>

  <v-card class="mt-5" outlined>
    <v-card-title>input</v-card-title>
    <v-card-text>
      <div class="d-flex">
        <div class="input_find">
          <v-text-field label="Your Name" v-model="name" :rules="nameRules" required placeholder="Placeholder" class="i_basics"></v-text-field>
          <v-btn class="vbtn" size="small">조회</v-btn>
        </div>
      </div>
    </v-card-text>
  </v-card>
  
  <v-card class="mt-5" outlined>
    <v-card-title>FONT</v-card-title>
    <v-card-text>
      <p style="font-size:48px;font-weight:400;">Pretendard Regular</p>
      <p style="font-size:48px;font-weight:500;">Pretendard Medium</p>
      <p style="font-size:48px;font-weight:600;">Pretendard SemiBold</p>
      <p style="font-size:48px;font-weight:700;">Pretendard Bold</p>

      <p style="font-size:36px;font-weight:700;">헤더타이틀</p>
      <p style="font-size:18px;font-weight:700;">동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세.</p>
    </v-card-text>
  </v-card>

  <v-card class="mt-5" outlined>
    <v-card-title>Large(H56)</v-card-title>
    <v-card-text>
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
    </v-card-text>

    <v-card-title>Medium(H48)</v-card-title>
    <v-card-text>
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
    </v-card-text>

    <v-card-title>Small(H40)</v-card-title>
    <v-card-text>
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
        <v-btn class="vbtn line btn_reset" size="small">초기화</v-btn>
      </div>
      <div class="d-flex mt_10">
        <v-btn class="vbtn btn_file_del" size="small">삭제</v-btn>
      </div>
      <div class="d-flex mt_10">
        <v-btn class="vbtn btn_viewer" size="small">뷰어</v-btn>
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
    </v-card-text>

    <v-card-title>Text Button</v-card-title>
    <v-card-text>
      <div class="d-flex">
        <nuxt-link to="/sample/Template" class="vlink basic">Text Button</nuxt-link>
        &nbsp;&nbsp;&nbsp;
        <nuxt-link to="/sample/Template" class="vlink">Text Button</nuxt-link>
        &nbsp;&nbsp;&nbsp;
        <nuxt-link to="/sample/Template" class="vlink blue">Text Button</nuxt-link>
        &nbsp;&nbsp;&nbsp;
        <nuxt-link to="/sample/Template" class="vlink blue line">Text Button</nuxt-link>
      </div>
    </v-card-text>

    <v-btn class="vbtn" size="large" @click="showLoading">로딩</v-btn>

    <v-card-title class="mt_20">아이콘 svg</v-card-title>
    <v-card-text>
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
    </v-card-text>
  </v-card>

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

</div>
</template>

<style scoped>
  .tmp_wrap{padding:20px;background: #fff;}
  hr{margin:20px 0;}
  .v-card{padding:15px;overflow: visible}
  .v-card .v-card-title{padding:0 15px 0 0;}
  .v-card .v-card-text{padding:10px 0 20px;line-height:1;}
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComRadioButton from '@/components/common/ComRadioButton.vue'
import ComAgGrid from '~/components/common/ComAgGrid.vue'

///////////////// 라디오 버튼용 /////////////////
const selectedValue = ref(null)

const radioOptions = [
  { label: 'label 1', value: 'value1' },
  { label: 'label 2', value: 'value2' },
]

/* 체크박스 */
const checkbox1 = ref(true)
const checkbox2 = ref(false)
const checkbox3 = ref(false)
const checkbox4 = ref(true)

/* 콤보 박스 */
const comboSelected = ref('004')

const items = ref([
  { title: '감자', value: '001' },
  { title: '양파', value: '002' },
  { title: '고구마', value: '003' },
])

const name = ref('')

const nameRules = [
  (v) => !!v || '다시 입력해주세요.',
  (v) => (v && v.length >= 3) || 'Name must be at least 3 characters',
]

import ComDatePicker from '@/components/common/ComDatePicker.vue'

const today = new Date() // 현재 날짜와 시간을 포함하는 Date 객체 생성
const year = today.getFullYear() // 년도 가져오기
const month = today.getMonth() + 1 // 월 가져오기 (0부터 시작하므로 1 더하기)
const day = today.getDate() // 일 가져오기
const formattedToday = new Date(
  `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
)
const startDate = ref(formattedToday)

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

const businessName = ref('001')
const itemsbusinessName = ref([
  { title: '[1234567890]2023 차세대 이관 작업 대행 업체 선정 공고', value: '001' },
  { title: '[1234567891]2023 차세대 이관 작업 대행 업체 선정 공고', value: '002' },
  { title: '[1234567892]2023 차세대 이관 작업 대행 업체 선정 공고', value: '003' },
])

const loading = ref(false)
const showLoading = () => {
  loading.value = true
};
const hideLoading = () => {
  loading.value = false
};

const comboCnt = ref('001')
const itemsCnt = ref([
  { title: '10개씩', value: '001' },
  { title: '50개씩', value: '002' },
  { title: '100개씩', value: '003' },
])

const columnDefsReceive = ref([
  { headerName: 'NO.', field: 'no', width: 80 },
  { headerName: '사업명', field: 'title', width: 356, cellClass: 'ellipsis t_left' },
  { headerName: '수행기관 명', field: 'orgName', width: 160 },
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
  // flex:1, // width auto
}
const agrid = ref(null)

const defaultColDefReceive2 = {
  sortable: true,
  filter: true,
  editable: true,
  resizable: true,
  cellStyle: { textAlign: 'center' },
  flex:1, // width auto
}

</script> 