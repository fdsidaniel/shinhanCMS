<template>
  
  <!-- popup size width:1024 height:780 -->
  <div class="popup_body">
    <h2 class="poptit">민간 계좌 입금 취소 정보 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    
    <h3>사업비 취소 정보
      <div class="unit">(단위:원)</div>
    </h3>
    <v-table class="vtable_view bg">
      <colgroup>
        <col style="width:10%;"/>
        <col style="width:40%;"/>
        <col style="width:10%;"/>
        <col style="width:40%;"/>
      </colgroup>
      <tbody>
        <tr>
          <th>책임자</th>
          <td>김수행</td>
          <th>입금 된 일자</th>
          <td>2023-10-10</td>
        </tr>
        <tr>
          <th>입금 된 계좌번호</th>
          <td>신한은행 562911835234701</td>          
          <th>사업비 취소 금액</th>
          <td>10,000,000</td>
        </tr>
      </tbody>
    </v-table>

    <h3>사업비 취소 정보</h3>
    <v-table class="vtable_view bg">
      <colgroup>
        <col style="width:10%;"/>
        <col style="width:40%;"/>
        <col style="width:10%;"/>
        <col style="width:40%;"/>
      </colgroup>
      <tbody>
        <tr>
          <th>출금 계좌번호</th>
          <td class="pr_0">신한은행 562911835234701</td>
          <th>입금 금액</th>
          <td>10,000,000</td>
        </tr>
        <tr>          
          <th>입금 계좌정보</th>
          <td colspan="3">신한은행 562911835234701</td>
        </tr>
        <tr>
          <th>입금 취소 사유</th>
          <td colspan="3">
            <v-textarea placeholder="" class="h_100"></v-textarea>
            <p class="txt_limit">0/50 자</p>
          </td>
        </tr>
      </tbody>
    </v-table>

    <p class="tip_txt mt_10">민간 계좌 입금 취소 승인 후 이체되는 계좌정보 입니다.</p>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">민간 계좌 입금 취소 요청</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >



</script> 