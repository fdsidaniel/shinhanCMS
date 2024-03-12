<template>
  
  <!-- popup size width:1000 height:500 -->
  <div class="popup_body">
    <h2 class="poptit">결재 정보 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <v-table class="vtable_list">
      <colgroup>
        <col style="width:12%;"/>
        <col style="width:12%;"/>
        <col style="width:12%;"/>
        <col style="width:8%;"/>
        <col style="width:56%;"/>
      </colgroup>
      <thead>
        <tr>
          <th>차수</th>
          <th>승인 자</th>
          <th>승인 일자</th>
          <th>상태</th>
          <th>사유</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1차 승인자</td>
          <td>김신한은행</td>
          <td>23-10-10</td>
          <td><span class="ico_suc">승인</span></td>
          <td></td>
        </tr>
        <tr>
          <td>2차 승인자</td>
          <td>이한마</td>
          <td>23-10-10</td>
          <td><span class="ico_fail">반려</span></td>
          <td>반려사유에 대한 내용</td>
        </tr>
        <tr>
          <td>3차 승인자</td>
          <td>손한신</td>
          <td>-</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </v-table>

    <!-- <div class="btm_btn_wrap">
      <v-btn class="vbtn blue">삭제</v-btn>
      <v-btn class="vbtn">재신청</v-btn>
    </div> -->
  </div>

</template>

<style scoped>
  
</style>

<script setup >



</script> 