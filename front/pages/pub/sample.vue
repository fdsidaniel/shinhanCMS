<template>

    <div>
        <div class="title_box">
            <h2>샘플</h2>
            <ul class="loc">
                <li>홈</li>
                <li>원화(펌뱅킹)</li>
                <li>당행 이체 내역 조회</li>
            </ul>
        </div>

        <div class="conbody">
            <ComInput 
                v-model="inputValue" 
                type="text" 
                placeholder="Enter your name..." 
                :rules="nameValidationRules"
                class="comipt"
            />
            <p>Entered value: {{ inputValue }}</p>
        </div>
    </div>

</template>

<style scoped>
    .comipt input{padding:5px;border:1px solid #000;}
</style>

<script setup >

import ComInput from '@/components/common/ComInput.vue'

const inputValue = ref('');

const nameValidationRules = [
  {
    validator: (value) => !!value.trim(),
    message: 'Name is required'
  },
  {
    validator: (value) => value.length <= 10,
    message: 'Name must be less than or equal to 10 characters'
  }
];

// const userOrgName = ref('')
// const userOrgNameRules = [
//   (v) => !!v || '사용이 불가능합니다. 다시 입력해주세요.',
//   // (v) => (v && v.length >= 16) || '영문, 숫자 대소문자 구분없이 6~16 자리',
// ]

</script> 