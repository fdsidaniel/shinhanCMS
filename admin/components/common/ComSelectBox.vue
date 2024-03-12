<template>
  <v-select
    :value="props.selected"
    :items="bindItems"
    item-title="title"
    item-value="value"
    label="Select an option"
    @update:model-value="updateValue"
  ></v-select>
</template>
<script setup>
const emit = defineEmits()
const props = defineProps({
  groupCode: {
    type: String,
    default: '',
  },
  selected: {
    type: String,
    default: '001',
  },
  items: {
    type: Object,
    default: null,
  },
  isDefault: {
    type: Boolean,
    default: true,
  },
})
const searchItems = ref([])
const bindItems = computed(() => {
  let returnData = []
  if (props.items) {
    returnData = props.items
  } else {
    returnData = searchItems.value
  }
  const copiedArray = [...returnData]
  if (props.isDefault) {
    copiedArray.unshift({ title: '선택하세요', value: '' })
  }
  return copiedArray
})

const updateValue = (value) => {
  emit('update:modelValue', value)
}

onMounted(() => {
  //api호출
  //props.groupCode
  //searchItems.value = 결과값..
})
</script>




