<template>

  <div class="title_box">
    <h2>일반 회원가입</h2>
    <ul class="loc">
      <li>홈</li>
      <li>회원관리</li>
      <li>일반 회원정보관리</li>
      <li>비밀번호변경</li>
    </ul>
  </div>

  <div class="conbody">

    <v-tabs v-model="tab" class="tab_basics">
      <v-tab value="one">발주기관 정보</v-tab>
      <v-tab value="two">일반회원 정보</v-tab>
    </v-tabs>

    <v-window v-model="tab" class="tab_con">
      <v-window-item value="one">
        <p class="check_msg mb_20">변경하시려면 플랫폼 운영자에게 연락하시기 바랍니다.</p>
        <!-- 발주기관 정보 -->
        <div class="title_btn">
          <h3>기관 정보</h3>
        </div>
        <v-table class="vtable_list">
          <colgroup>
            <col style="width:12%;"/>
            <col style="width:12%;"/>
            <col style="width:10%;"/>
            <col style="width:12%;"/>
            <col style="width:22%;"/>
            <col style="width:22%;"/>
            <col style="width:10%;"/>
          </colgroup>
          <thead>
            <tr>
              <th>기관ID</th>
              <th>기관 코드</th>
              <th>기업 구분</th>
              <th>기관 명</th>
              <th>사업자등록번호</th>
              <th>회사 이메일 용 도메인</th>
              <th>회원가입일자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12345678900</td>
              <td>12345678900</td>
              <td>개인</td>
              <td>한마정보통신</td>
              <td>12345678901234567</td>
              <td>aaaaaaaaaa@test.com</td>
              <td>2023.01.01</td>
            </tr>
          </tbody>
        </v-table>

        <h3>기관 협약 정보</h3>
        <v-table class="vtable_list">
          <colgroup>
            <col style="width:20%;"/>
            <col style="width:35%;"/>
            <col style="width:45%;"/>
          </colgroup>
          <thead>
            <tr>
              <th>협약 시작일~종료일</th>
              <th>발주기관 협약 기능</th>
              <th>접속 URL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2021.01.01~2030.10.31</td>
              <td>AI-OCR, 계좌이체</td>
              <td>XXXXXXXXXXXXXXXXXXXXXXXX</td>
            </tr>
          </tbody>
        </v-table>

        <h3>책임자 정보</h3>
        <v-table class="vtable_list">
          <colgroup>
            <col style="width:12%;"/>
            <col style="width:12%;"/>
            <col style="width:10%;"/>
            <col style="width:15%;"/>
            <col style="width:27%;"/>
            <col style="width:12%;"/>
            <col style="width:12%;"/>
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
        <!-- //발주기관 정보 -->

        <!-- 수행기관 정보 -->
        <div class="title_btn">
          <h3>기관 정보</h3>
          <div class="btn">
            <v-btn class="vbtn line" size="small">사업자등록증 관리</v-btn>
            <v-btn class="vbtn line" size="small">문서관리</v-btn>
          </div>
        </div>
        <v-table class="vtable_list">
          <colgroup>
            <col style="width:10%;"/>
            <col style="width:15%;"/>
            <col style="width:25%;"/>
            <col style="width:35%;"/>
            <col style="width:15%;"/>
          </colgroup>
          <thead>
            <tr>
              <th>기업 구분</th>
              <th>기관 명</th>
              <th>사업자등록번호</th>
              <th>회사 이메일 용 도메인</th>
              <th>회원가입일자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>개인</td>
              <td>한마정보통신</td>
              <td>12345678901234567</td>
              <td>aaaaaaaaaa@test.com</td>
              <td>2023.01.01</td>
            </tr>
          </tbody>
        </v-table>

        <h3>책임자 정보</h3>
        <v-table class="vtable_list">
          <colgroup>
            <col style="width:12%;"/>
            <col style="width:12%;"/>
            <col style="width:10%;"/>
            <col style="width:15%;"/>
            <col style="width:27%;"/>
            <col style="width:12%;"/>
            <col style="width:12%;"/>
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
        <!-- //수행기관 정보 -->

      </v-window-item>
      <v-window-item value="two">
        <!-- 일반회원 정보 -->
        <div class="tit_cnt_btn">
          <p class="tit_cnt">총 <b>100</b>건</p>
          <div>
            <ComSelectBox groupCode="01" v-model="comboMem" :items="itemsMem" class="s_basics none_details w_180" />
            <v-text-field label="아이디" v-model="userSearch" :rules="userSearchRules" placeholder="" class="i_basics none_details w_200"></v-text-field>
            <v-btn class="vbtn line search white" size="small">조회</v-btn>
          </div>
        </div>
        <ComAgGrid
          ref="agrid"
          :columnDefs="columnDefs"
          style="height: 553px"
          class="grid"
          :rowData="rowData"
          :defaultColDef="defaultColDef"
          :rowHeight="51"
        />
        <v-btn class="vbtn btn_grid_more" size="small">더보기</v-btn>

        <div class="btn_btm_wrap right">
          <v-btn class="vbtn line" size="small">회원 탈퇴</v-btn>
          <v-btn class="vbtn" size="small">승인 진행</v-btn>
        </div>
        <!-- //일반회원 정보 -->

        <!-- 일반회원 정보 -->
        <div class="tit_cnt_btn">
          <p class="tit_cnt">총 <b>100</b>건</p>
          <div>
            <ComSelectBox groupCode="01" v-model="comboMem" :items="itemsMem" class="s_basics none_details w_180" />
            <v-text-field label="아이디" v-model="userSearch" :rules="userSearchRules" placeholder="" class="i_basics none_details w_200"></v-text-field>
            <v-btn class="vbtn line search white" size="small">조회</v-btn>
          </div>
        </div>
        <ComAgGrid
          ref="agrid"
          :columnDefs="columnDefs"
          style="height: 553px"
          class="grid"
          :rowData="rowData"
          :defaultColDef="defaultColDef"
          :rowHeight="51"
        />
        <v-btn class="vbtn btn_grid_more" size="small">더보기</v-btn>

        <div class="btn_btm_wrap right">
          <v-btn class="vbtn line" size="small">회원 탈퇴</v-btn>
          <v-btn class="vbtn" size="small">승인 진행</v-btn>
        </div>
        <!-- //일반회원 정보 -->

      </v-window-item>
    </v-window>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComAgGrid from '~/components/common/ComAgGrid.vue'

const comboMem = ref('001')
const itemsMem = ref([
  { title: '전체 회원정보', value: '001' },
  { title: '승인 대상 회원 정보', value: '002' },
])

const userSearch = ref('')
const userSearchRules = [
  
]

const columnDefs = ref([
  {
    headerName: '선택',
    field: 'chk',
    cellRenderer: 'agCheckboxCellRenderer',
    editable: false,
    cellRendererParams: {
      disabled: false,
    },
    cellClass: ['custom-center-align'],
    width: 60,
  },
  { headerName: 'NO.', field: 'no', width: 80 },
  { headerName: '구분', field: 'class', width: 80 },
  { headerName: '성명', field: 'name', width: 80 },
  { headerName: '내외국인', field: 'foreign', width: 90 },
  { headerName: '생년월일', field: 'birthday', width: 90 },
  { headerName: '성별', field: 'sex', width: 60 },
  { headerName: '전화번호', field: 'phone', width: 140 },
  { headerName: '이메일 주소', field: 'email', width: 185 },
  { headerName: '안내 채널', field: 'channel', width: 90 },
  { headerName: '가입 일자', field: 'joindate', width: 100 },
  { headerName: '최종 접속일', field: 'accessdate', width: 100 },
])
const rowData = [
  {
    chk: false,
    no: 999999,
    class: '책임자',
    name: '김기관기관',
    foreign: '내국인',
    birthday: '99.09.09',
    sex: '여',
    phone: '010-0000-0000',
    email: 'aaaaaaaaaa@test.com',
    channel: '이메일',
    joindate: '2023.01.01',
    accessdate: '2023.01.01',
  },
  {
    chk: false,
    no: 999999,
    class: '책임자',
    name: '김기관기관',
    foreign: '내국인',
    birthday: '99.09.09',
    sex: '여',
    phone: '010-0000-0000',
    email: 'aaaaaaaaaa@test.com',
    channel: '이메일',
    joindate: '2023.01.01',
    accessdate: '2023.01.01',
  },
  {
    chk: false,
    no: 3,
    class: '책임자',
    name: '김기관기관',
    foreign: '내국인',
    birthday: '99.09.09',
    sex: '여',
    phone: '010-0000-0000',
    email: 'aaaaaaaaaa@test.com',
    channel: '이메일',
    joindate: '2023.01.01',
    accessdate: '2023.01.01',
  },
  {
    chk: false,
    no: 3,
    class: '책임자',
    name: '김기관기관',
    foreign: '내국인',
    birthday: '99.09.09',
    sex: '여',
    phone: '010-0000-0000',
    email: 'aaaaaaaaaa@test.com',
    channel: '이메일',
    joindate: '2023.01.01',
    accessdate: '2023.01.01',
  },
  {
    chk: false,
    no: 3,
    class: '책임자',
    name: '김기관기관',
    foreign: '내국인',
    birthday: '99.09.09',
    sex: '여',
    phone: '010-0000-0000',
    email: 'aaaaaaaaaa@test.com',
    channel: '이메일',
    joindate: '2023.01.01',
    accessdate: '2023.01.01',
  },
  {
    chk: false,
    no: 3,
    class: '책임자',
    name: '김기관기관',
    foreign: '내국인',
    birthday: '99.09.09',
    sex: '여',
    phone: '010-0000-0000',
    email: 'aaaaaaaaaa@test.com',
    channel: '이메일',
    joindate: '2023.01.01',
    accessdate: '2023.01.01',
  },
  {
    chk: false,
    no: 3,
    class: '책임자',
    name: '김기관기관',
    foreign: '내국인',
    birthday: '99.09.09',
    sex: '여',
    phone: '010-0000-0000',
    email: 'aaaaaaaaaa@test.com',
    channel: '이메일',
    joindate: '2023.01.01',
    accessdate: '2023.01.01',
  },
  {
    chk: false,
    no: 3,
    class: '책임자',
    name: '김기관기관',
    foreign: '내국인',
    birthday: '99.09.09',
    sex: '여',
    phone: '010-0000-0000',
    email: 'aaaaaaaaaa@test.com',
    channel: '이메일',
    joindate: '2023.01.01',
    accessdate: '2023.01.01',
  },
  {
    chk: false,
    no: 3,
    class: '책임자',
    name: '김기관기관',
    foreign: '내국인',
    birthday: '99.09.09',
    sex: '여',
    phone: '010-0000-0000',
    email: 'aaaaaaaaaa@test.com',
    channel: '이메일',
    joindate: '2023.01.01',
    accessdate: '2023.01.01',
  },
  {
    chk: false,
    no: 3,
    class: '책임자',
    name: '김기관기관',
    foreign: '내국인',
    birthday: '99.09.09',
    sex: '여',
    phone: '010-0000-0000',
    email: 'aaaaaaaaaa@test.com',
    channel: '이메일',
    joindate: '2023.01.01',
    accessdate: '2023.01.01',
  },
]
const defaultColDef = {
  sortable: true,
  filter: true,
  editable: true,
  resizable: true,
  cellStyle: { textAlign: 'center' },
  // flex:1, // width auto
}
const agrid = ref(null)

const tab = ref('')

</script> 