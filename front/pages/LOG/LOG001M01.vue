<template>
  <v-card>
    <v-tabs v-model="tabType" centered>
      <v-tab value="ID"> 아이디 </v-tab>
      <v-tab value="PW"> 비밀번호 </v-tab>
    </v-tabs>
    <v-window v-model="tabType">
      <v-window-item value="ID">
        <v-card>
          <!-- <LOG001C00 /> -->
        </v-card>
      </v-window-item>
      <v-window-item value="PW">
        <v-card>
          <!-- <LOG001C00 /> -->
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>
<script setup>
const tabType = ref('ID')
</script>