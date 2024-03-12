<template>
  <select v-model="selectedValue">
    <option v-for="option in options" :key="option" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      selectedValue: '',
      options: [
        { label: '사자', value: '01' },
        { label: '뱀', value: '02' },
      ],
    }
  },

  // 에디터 초기화
  agInit(params) {
    this.selectedValue = params.value
  },

  // 에디터 값을 저장하고 에디터를 닫음
  getValue() {
    return this.selectedValue
  },

  // 에디터가 포커스를 잃을 때 호출
  // 필요한 경우, 수정 중인 값을 검증할 수 있음
  // 여기서는 간단한 예제이므로 생략
  focusIn() {},

  // 에디터를 닫을 때 호출
  // 필요한 경우, 수정 중인 값을 검증하고 에러 처리할 수 있음
  // 여기서는 간단한 예제이므로 생략
  focusOut() {},
}
</script>