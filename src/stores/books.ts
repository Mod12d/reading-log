import { defineStore } from 'pinia'
import type { Book } from '@/types/book'

export const useBookStore = defineStore('books', {
  state: () => ({
    books: [] as Book[]
  }),
  actions: {
    addBook(book: Book) {
      this.books.push(book)
    },
    updateBook(updatedBook: Book) {
      const index = this.books.findIndex(book => book.id === updatedBook.id)
      if (index !== -1) {
        this.books[index] = updatedBook
      }
    }
  }
})