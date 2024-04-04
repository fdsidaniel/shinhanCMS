<template>
  
  <!-- popup size width:500 height:632 -->
  <div class="popup_body">
    <h2 class="poptit">서비스 시간 관리 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>
    
    <ul class="pop_view_list">
      <li>
        <p class="tit">기관명</p>
        <div class="con">군인공제회</div>
      </li>
      <li>
        <p class="tit">서비스 시작 시간</p>
        <div class="con"><v-text-field label="서비스 시작 시간" v-model="startTime" :rules="startTimeRules" required placeholder="00:00" class="i_basics none_details" /></div>
      </li>
      <li>
        <p class="tit">서비스 종료 시간</p>
        <div class="con"><v-text-field label="서비스 종료 시간" v-model="endTime" :rules="endTimeRules" required placeholder="00:00" class="i_basics none_details" /></div>
      </li>
      <li>
        <p class="tit">수정자</p>
        <div class="con">김신한</div>
      </li>
      <li>
        <p class="tit">수정일</p>
        <div class="con">2024-03-15 16:15:33</div>
      </li>
    </ul>

    <div class="btm_btn_wrap">
      <v-btn class="vbtn">수정</v-btn>
    </div>
    
  </div>

</template>

<style scoped>
  
</style>

<script setup >

const startTime = ref('09:00')
const startTimeRules = [
  
]

const endTime = ref('23:50')
const endTimeRules = [
  
]

</script> 