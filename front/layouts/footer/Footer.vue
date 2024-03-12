<template>
  <div class="footer">
    <div class="footer_box">
      <div class="footer_con">
        <div class="footer_btn">
          <nuxt-link to="../HOM/HOM001M00">이용약관</nuxt-link>
          <nuxt-link to="../HOM/HOM001M00">개인정보 수집·이용·제공 동의서</nuxt-link>
          <nuxt-link to="../HOM/HOM001M00">개인정보처리방침</nuxt-link>
          <nuxt-link to="../HOM/HOM001M00">보안프로그램</nuxt-link>
          <nuxt-link to="../HOM/HOM001M00">전자민원</nuxt-link>
          <nuxt-link to="../HOM/HOM001M00">고객센터</nuxt-link>
        </div>
        <p class="copyright">© SHINHAN BANK. All rights reserved.</p>

        <div class="footer_slt">
          <ComSelectBox groupCode="01" v-model="comboSelected" :items="items" :isDefault="false" class="s_basics" />
        </div>
      </div>
    </div>     
  </div>
</template>

<script setup>
import ComSelectBox from '@/components/common/ComSelectBox.vue'

/* 콤보 박스 */
const comboSelected = ref('001')

const items = ref([
  { title: '패밀리사이트', value: '001' },
  { title: '신한은행', value: '002' },
  { title: '신한기업뱅킹', value: '003' },
  { title: '신한개인뱅킹', value: '004' },
])

</script>

<style>

</style>