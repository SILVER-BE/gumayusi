<!-- App.vue -->
<template>
  <div class="fixed-wrapper">

    <div class="app-container">
      <!-- 여기에 라우터로 연결된 페이지가 표시됨 -->
      <router-view />
    </div>
    
  </div>
</template>

<script setup lang="ts">
// 글로벌 로직이 필요하면 여기에
</script>

<style scoped>
.fixed-wrapper {
  width: 100vw;
  height: 100vh;
  background: #000; /* 배경색 선택 */
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  /* 스크롤 가능하게 */
  overflow-y: auto;
}

.app-container {
  width: 1920px;
  height: 100vh;
  background: #000; /* 원하는 배경색 */
  transform-origin: top left;
  transform: scale(calc(100vw / 1920));
}

header {
  text-align: center;
  margin-bottom: 2rem;
}

footer {
  text-align: center;
  margin-top: 4rem;
  color: #aaa;
  font-size: 0.9rem;
}
</style>
