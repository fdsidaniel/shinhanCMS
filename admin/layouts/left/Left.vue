<template>
  <div class="left" :class="{ 'left_hide': leftHide }">
    <h1>
      <nuxt-link to="/pub/admin/LOG001M00" class=""><img src="@/assets/images/logo.svg" alt="AICMS" /></nuxt-link>
    </h1>

    <div class="user_info">
      <div class="img_user"><img src="@/assets/images/img_user.svg" alt="사용자 이미지" /></div>
      <p class="user_name">김신한신한</p>
      <p class="btn_logout"><v-btn class="vbtn">로그아웃</v-btn></p>
      <!-- <p class="user_org"><span>소속 : </span>OOO 기관</p> -->

      <v-btn class="vbtn btn_left_view" @click="leftView">left 메뉴 접기</v-btn>
    </div>

    <ul class="user_info_util">
      <li class="user_org">소속 : <span>신한은행(외부개발팀) 신한은행(외부개발팀)</span></li>
      <li>최종 로그인 : 2022.01.01 13:13</li>
      <!-- <li>유효 로그인 : 30:00 <v-btn class="vbtn">연장</v-btn></li>
      <li>최종접속 IP : 10.11..000.32</li> -->
      <!-- <li>최종접속 IP : 10.11..000.32</li> -->
      <li>현재 접속 IP : 10.12.234.115</li>
    </ul>

    <div class="left_menu">
      <v-expansion-panels variant="accordion">
        <v-expansion-panel class="ico_member">
          <v-expansion-panel-title> 회원관리 </v-expansion-panel-title>
          <v-expansion-panel-text>
            <nuxt-link to="/pub/admin/LOG001M00" class="">2depth</nuxt-link>
            <nuxt-link to="/pub/admin/LOG001M00" class="">2depth</nuxt-link>
            <nuxt-link to="/pub/admin/LOG001M00" class="">2depth</nuxt-link>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel title="시스템관리" class="ico_system nodepth"></v-expansion-panel>

        <v-expansion-panel title="프레임워크관리자" class="nodepth"></v-expansion-panel>

        <v-expansion-panel title="배치관리" class="nodepth"></v-expansion-panel>

        <v-expansion-panel title="통계관리" class="nodepth"></v-expansion-panel>

        <v-expansion-panel class="ico_member">
          <v-expansion-panel-title> 회원관리 </v-expansion-panel-title>
          <v-expansion-panel-text>
            <nuxt-link to="/pub/admin/LOG001M00" class="">2depth</nuxt-link>
            <nuxt-link to="/pub/admin/LOG001M00" class="">2depth</nuxt-link>
            <nuxt-link to="/pub/admin/LOG001M00" class="">2depth</nuxt-link>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel class="ico_member">
          <v-expansion-panel-title> 회원관리 </v-expansion-panel-title>
          <v-expansion-panel-text>
            <nuxt-link to="/pub/admin/LOG001M00" class="">2depth</nuxt-link>
            <nuxt-link to="/pub/admin/LOG001M00" class="">2depth</nuxt-link>
            <nuxt-link to="/pub/admin/LOG001M00" class="">2depth</nuxt-link>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel class="ico_member">
          <v-expansion-panel-title> 회원관리 </v-expansion-panel-title>
          <v-expansion-panel-text>
            <nuxt-link to="/pub/admin/LOG001M00" class="">2depth</nuxt-link>
            <nuxt-link to="/pub/admin/LOG001M00" class="">2depth</nuxt-link>
            <nuxt-link to="/pub/admin/LOG001M00" class="">2depth</nuxt-link>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel class="ico_member">
          <v-expansion-panel-title> 회원관리 </v-expansion-panel-title>
          <v-expansion-panel-text>
            <nuxt-link to="/pub/admin/LOG001M00" class="">2depth</nuxt-link>
            <nuxt-link to="/pub/admin/LOG001M00" class="">2depth</nuxt-link>
            <nuxt-link to="/pub/admin/LOG001M00" class="">2depth</nuxt-link>
          </v-expansion-panel-text>
        </v-expansion-panel>
        
      </v-expansion-panels>
    </div>

    <div class="btn_manual">
      <nuxt-link to="/pub/publist_admin" class="btn_manual_down">메뉴얼 다운로드</nuxt-link>
    </div>
  </div>
</template>

<script setup>

const leftHide = ref(false)
const leftView = () => {
  leftHide.value = !leftHide.value
};

</script>