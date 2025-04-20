<template>

  <AppHeader/>

  <v-container class="v-con">

    <FirstSection />
    <SecondSection />

  </v-container>

  <AppFooter/>

</template>

<script setup lang="ts">
import AppFooter from '../app/AppFooter.vue';
import AppHeader from '../app/AppHeader.vue';
import FirstSection from './component/FirstSection.vue';
import SecondSection from './component/SecondSection.vue';
</script>

<style scoped>

.v-con {
  padding: 0 !important; 
  margin: 0 !important;
  max-width: 1900px;
}

</style>