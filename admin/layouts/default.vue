<template>
  
  <Left v-if="isShowLeft" />
  <!-- <Header v-if="isShowHeader" /> -->
  <div class="container">    
    <div class="content">
      <!-- <template v-if="isShowNavigator"> 메뉴명 및 네이게이터 </template> -->
      <slot />
    </div>
  </div>
  
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
const isShowHeader = computed(() => menuStore().isShowHeader())
const isShowFooter = computed(() => menuStore().isShowFooter())
const isShowLeft = computed(() => menuStore().isShowLeft())
const isShowNavigator = computed(() => menuStore().isShowNavigator())
const dialogList = computed(() => useDialogStore().getDialogList())
</script>
