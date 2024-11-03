<!-- src/components/BookCard.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Book } from '@/types/book'
import { DEFAULT_COVER_SVG } from '@/constants'

const props = defineProps<{
  book?: Book
}>()

const isExpanded = ref(false)
const isShaking = ref(false)
const isRotating = ref(false)

const handleTap = () => {
  isShaking.value = true
  setTimeout(() => {
    isShaking.value = false
  }, 200)
}

const handleLongTap = () => {
  isExpanded.value = true
}

const handleDoubleTap = () => {
  isRotating.value = true
  setTimeout(() => {
    isRotating.value = false
  }, 500)
}

const handleSwipe = (direction: string) => {
  if (direction === 'left') {
    isExpanded.value = false
  }
}

const coverImage = computed(() => {
  if (!props.book) return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(DEFAULT_COVER_SVG)}`
  return props.book.coverUrl || `data:image/svg+xml;charset=utf-8,${encodeURIComponent(DEFAULT_COVER_SVG)}`
})
</script>

<template>
  <div 
    v-if="book"
    class="book-card"
    :class="{
      'is-expanded': isExpanded,
      'is-shaking': isShaking,
      'is-rotating': isRotating
    }"
    v-touch:tap="handleTap"
    v-touch:longtap="handleLongTap"
    v-touch:doubletap="handleDoubleTap"
    v-touch:swipe="handleSwipe"
  >
    <img 
      :src="coverImage" 
      class="cover-image" 
      :alt="`${book.title} cover`"
      loading="lazy"
    >
    <h5>{{ book.title }}</h5>
    <p>{{ book.author }}</p>
    <div class="progress">
      <div class="bar" :style="{ width: book.progress + '%' }"></div>
    </div>
    <button class="button">詳細</button>
  </div>
</template>

<style scoped>
.book-card {
  padding: 1rem;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
}

.cover-image {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  background: #f0f0f0;
  border-radius: 2px;
  transition: transform 0.3s ease;
}

.progress {
  width: 100%;
  height: 4px;
  background: #f0f0f0;
  border-radius: 2px;
  margin: 0.5rem 0;
}

.progress .bar {
  height: 100%;
  background: #33C3F0;
  border-radius: 2px;
  transition: width 0.3s ease;
}

@keyframes shake {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-2deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(2deg); }
  100% { transform: rotate(0deg); }
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.is-shaking {
  animation: shake 0.2s ease-in-out;
}

.is-rotating {
  animation: rotate 0.5s ease-in-out;
}

.is-expanded {
  transform: scale(1.05);
  z-index: 1;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.book-card:hover .cover-image {
  transform: translateY(-5px);
}

@media (hover: none) {
  .book-card {
    -webkit-tap-highlight-color: transparent;
  }
}
</style>