<template>
  
  <!-- popup size width:500 height:632 -->
  <div class="popup_body">
    <h2 class="poptit">반려 사유 내역 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>
    
    <v-table class="vtable_view bg">
        <colgroup>
            <col style="width:;"/>
            <col style="width:;"/>
        </colgroup>
        <tbody>
            <tr>
                <th>반려 사유</th>
                <td><v-textarea class="h_100" placeholder="반려 사유를 입력해 주세요." /></td>
            </tr>
        </tbody>
    </v-table>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">저장</v-btn>
    </div>
    
  </div>

</template>

<style scoped>
  
</style>

<script setup >



</script> 