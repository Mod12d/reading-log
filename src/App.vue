<!-- src/App.vue -->
<script setup lang="ts">
import { RouterView } from 'vue-router'
import GhostIcon from './components/GhostIcon.vue'
</script>

<template>
  <header class="app-header">
    <div class="container">
      <div class="header-content">
        <h1>Reading Log</h1>
        <GhostIcon />
      </div>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
/* グローバルスタイル */
html, body {
  background: #f5f5f5;
  min-height: 100vh;
  margin: 0;
}

.container {
  padding: 0 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* ヘッダースタイル */
.app-header {
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem 0;
  margin-bottom: 2rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-content h1 {
  margin: 0;
  font-size: 2.4rem;
  color: #333;
}

/* レスポンシブ調整 */
@media (max-width: 768px) {
  .header-content h1 {
    font-size: 2rem;
  }
}
</style>