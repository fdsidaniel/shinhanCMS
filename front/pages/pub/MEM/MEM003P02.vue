<template>
  
  <!-- popup size width:500 height:300 -->
  <div class="popup_body">
    <h2 class="poptit">쪽지 쓰기 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <h3>쪽지 쓰기</h3>
    <ul class="pop_view_list">
      <li>
        <p class="tit">받는 분</p>
        <div class="con">김신한</div>
      </li>
      <li>
        <p class="tit">내용</p>
        <div class="con"><v-textarea class="h_150 mt_10" placeholder="쪽지 내용을 입력해주세요."></v-textarea></div>
        <p class="txt_limit">0/1,000 자</p>
      </li>
    </ul>

    <div class="btn_btm_wrap mt_20">
      <v-btn class="vbtn" size="">쪽지 보내기</v-btn>
    </div>
    
  </div>

</template>

<style scoped>
  
</style>

<script setup >

const receiver = ref('')
const receiverRules = [
  (v) => !!v || '받는 분을 입력해주세요.',
]

</script> 