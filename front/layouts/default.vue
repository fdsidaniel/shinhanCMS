<template>
  <Header v-if="isShowHeader" />
  <div class="container main"><!-- 로그인 페이지 class login 추가 / 아이디 찾기, 비밀번호 재설정 class before 추가 / 메인 class main -->
    <!-- <Left v-if="isShowLeft" /> -->
    <div class="content">
      <!-- <template v-if="isShowNavigator"> 메뉴명 및 네이게이터 </template> -->
      <slot />
    </div>
  </div>
  <Footer v-if="isShowFooter" />
  <div v-for="dialog in dialogList" :key="dialog._id">
    <LayerPopup v-bind="dialog" />
  </div>
</template>
<script setup>
import Header from '@/layouts/header/Header'
import Left from '@/layouts/left/Left'
import Footer from '@/layouts/footer/Footer'
import { menuStore } from '@/store/menuStore'
import { useDialogStore } from '~/store/dialogStore'
import LayerPopup from '@/components/common/LayerPopup'
// const isShowHeader = computed(() => menuStore().isShowHeader())
// const isShowFooter = computed(() => menuStore().isShowFooter())
const isShowHeader = ref(true)
const isShowFooter = ref(true)
const isShowLeft = computed(() => menuStore().isShowLeft())
const isShowNavigator = computed(() => menuStore().isShowNavigator())
const dialogList = computed(() => useDialogStore().getDialogList())
</script>
