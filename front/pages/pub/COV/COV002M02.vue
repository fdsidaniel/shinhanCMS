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
        <ul class="step_list active_step_2"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3, active_step_4, active_step_5 -->
          <li class="step1">사업정보</li>
          <li class="step2">참여기관<br>협약문서정보</li>
          <li class="step3">사업비 계좌 정보</li>
          <li class="step4">비목세목 정보</li>
          <li class="step5">결재선 정보</li>
        </ul>
      </div>

      <div class="step_con">

        <!-- <p class="stit">참여기관 협약문서정보</p>
        <h3>차세대 이관 작업 대행 선정 공고 사업을 시작합니다.</h3> -->
        <div class="row">
          <div class="tit">
            <div>
                이 사업을 내부사업으로 수행하십니까?
                <div class="tooltip">
                <p class="txt">PMS관리번호란 발주기관 내부 관리번호를 의미 합니다.</p>
                </div>
            </div>
          </div>
          <div class="con">
            <ComRadioButton :options="radioOptions" v-model="selectedValue" :isInline="true" class="type_chk_big" />
          </div>
        </div>

        <div v-if="org">
          
          <div class="row">
            <div class="tit">이 사업에 참여할 기관을 선택하세요.
              <div class="right">
                <v-btn class="vbtn line" size="small">행추가</v-btn>
              </div>
            </div>
            <div class="con">
              <v-table class="vtable_list inbtn inipt scroll h_197 none_head_line">
                <colgroup>
                  <col style="width:80px;"/>
                  <col style="width:355px;"/>
                  <col style="width:355px;"/>
                  <col style="width:72px;"/>
                </colgroup>
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>사업자등록번호</th>
                    <th>참여기관 명</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td><v-text-field label="Your Name" v-model="orgNum" :rules="orgNumRules" readonly class="i_basics"/></td>
                    <td><v-text-field label="Your Name" v-model="nameOrg" :rules="nameOrgRules" readonly class="i_basics"/></td>
                    <td><v-btn class="vbtn btn_file_del" size="small">삭제</v-btn></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td><v-text-field label="Your Name" v-model="orgNum" :rules="orgNumRules" readonly class="i_basics"/></td>
                    <td><v-text-field label="Your Name" v-model="nameOrg" :rules="nameOrgRules" readonly class="i_basics"/></td>
                    <td><v-btn class="vbtn btn_file_del" size="small">삭제</v-btn></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td><v-text-field label="Your Name" v-model="orgNum" :rules="orgNumRules" readonly class="i_basics"/></td>
                    <td><v-text-field label="Your Name" v-model="nameOrg" :rules="nameOrgRules" readonly class="i_basics"/></td>
                    <td><v-btn class="vbtn btn_file_del" size="small">삭제</v-btn></td>
                  </tr>
                </tbody>
              </v-table>
              <div class="tip_txt_btn">
                <p class="tip_txt">사업등록번호 여러 개인 경우, 일괄 등록 버튼을 선택 후 등록하세요.</p>
                <v-btn class="vbtn blue" size="small">일괄등록</v-btn>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="tit">수행기관에서 작성할 TASK 협약 문서를 선택 하세요.
              <!-- <div class="right">
                <v-btn class="vbtn blue" size="small">TASK 협약 문서 선택</v-btn>
              </div> -->
            </div>
            <div class="con">
              <ComAgGrid
                ref="agrid"
                :columnDefs="columnDefsReceive"
                style="height: 298px"
                class="grid fixed vline none_head_line"
                :rowData="rowDataReceive"
                :defaultColDef="defaultColDefReceive"
                :rowHeight="51"                
              />
            </div>
          </div>

        </div>

        <div class="btn_btm_wrap">
          <v-btn class="vbtn blue" size="large">이전</v-btn>
          <v-btn class="vbtn" size="large">다음</v-btn>
        </div>
        
      </div>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

import ComRadioButton from '@/components/common/ComRadioButton.vue'
import ComAgGrid from '~/components/common/ComAgGrid.vue'

const selectedValue = ref(null)
const radioOptions = [
  { label: '예', value: 'value1' },
  { label: '아니오', value: 'value2' },
]

const org = ref(true)

const orgNum = ref('1234567890')
const orgNumRules = [
  
]

const nameOrg = ref('한마정보통신')
const nameOrgRules = [

]

const columnDefsReceive = ref([
  { headerName: 'NO.', field: 'no', width: 80 },
  { headerName: '구분', field: 'class', width: 400 },
  { headerName: '문서 명', field: 'docName', width: 382 },
])
const rowDataReceive = [
  {
    no: '1',
    class: 'AI-OCR 문서',
    docName: '재무 재표',
  },
  {
    no: '2',
    class: 'AI-OCR 문서',
    docName: '재무 재표',
  },
  {
    no: '3',
    class: 'AI-OCR 문서',
    docName: '재무 재표',
  },
  {
    no: '4',
    class: 'AI-OCR 문서',
    docName: '재무 재표',
  },
  {
    no: '5',
    class: 'AI-OCR 문서',
    docName: '재무 재표',
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

</script> 