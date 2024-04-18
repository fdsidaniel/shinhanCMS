<template>

    <div>
        <div class="title_box">
            <h2>
                샘플
                <v-btn class="ico_bookmark" size="small" :class="{ 'on': bookMark }" @click="btnBookmark">즐겨찾기 설정</v-btn>
                <span class="msg" :class="{ 'clear': bookMarkMsg }">{{ bookMarkTxt }}</span>
            </h2>
            <ul class="loc">
                <li>홈</li>
                <li>원화(펌뱅킹)</li>
                <li>당행 이체 내역 조회</li>
            </ul>
            <v-btn class="btn_bookmark" size="small" :class="{ 'on': bookMark }" @click="btnBookmark">즐겨찾기</v-btn>
        </div>

        <div class="conbody">
            <ComInput type="number" v-model="data" class="comipt" />
        </div>
    </div>

</template>

<style scoped>
    .comipt{padding:5px;border:1px solid #000;}
</style>

<script setup >

import ComInput from '@/components/common/ComInput.vue'

const userOrgName = ref('')
const userOrgNameRules = [
  (v) => !!v || '사용이 불가능합니다. 다시 입력해주세요.',
  // (v) => (v && v.length >= 16) || '영문, 숫자 대소문자 구분없이 6~16 자리',
]

</script> 