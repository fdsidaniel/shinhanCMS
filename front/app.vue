<template>
  <ComSpinner v-if="loadingStore().isLoading()" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template> 
<script setup>
import ComSpinner from '@/components/common/ComSpinner.vue'
import { loadingStore } from '~/store/loadingStore'

onMounted(() => {
  setInterval($fx.checkLoginTime, 60000) // 1분마다 체크
})
</script> 