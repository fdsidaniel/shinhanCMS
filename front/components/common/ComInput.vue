<template>
    <input :value="modelValue" @input="update" />
</template>

<script setup>


const props = defineProps({
  modelValue: { type: String }
})
const emit = defineEmits(['input'])

const update = e => {
    context.emit('update:modelValue', e.target.value)
};

</script>
