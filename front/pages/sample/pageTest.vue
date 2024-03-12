<template>
  <div>
    <!-- <Text title="hello" />
    <BigTitle title="hello" /> -->
    <li v-for="(step, idx) in steps" v-bind:key="idx">
      show component{{ step.component }}
      <component
        :is="step.component"
        :key="step.component + idx"
        :title="step.title"
      />
    </li>
  </div>
</template>

<script setup lang="ts">
const steps = [
  {
    component: 'LazyCommonComAgGrid',
    title: 'Go to Url',
  }, 
];

//const bigtitle = resolveComponent('Test-Test');
</script>