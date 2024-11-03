<!-- src/views/HomeView.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import BookCard from '@/components/BookCard.vue'
import type { Book } from '@/types/book'

const books = ref<Book[]>([
  {
    id: '1',
    title: '風の谷のナウシカ',
    author: '宮崎駿',
    progress: 75,
    status: 'reading' as const
  },
  {
    id: '2',
    title: '銀河鉄道の夜',
    author: '宮沢賢治',
    progress: 100,
    status: 'completed' as const
  }
])
</script>

<template>
  <div class="container">
    <div class="books-container">
      <div v-if="books.length" class="books-grid">
        <div 
          class="book-item" 
          v-for="book in books" 
          :key="book.id"
        >
          <BookCard :book="book" />
        </div>
      </div>
      <div v-else class="empty-state">
        <p>本が登録されていません</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.books-container {
  margin-top: 2rem;
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.book-item {
  display: flex;
  flex-direction: column;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.empty-state p {
  color: #666;
  font-size: 1.2rem;
  margin: 0;
}

@media (max-width: 768px) {
  .books-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    padding: 0.5rem;
  }
}
</style>