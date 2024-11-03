export interface Book {
    id: string
    title: string
    author: string
    coverUrl?: string  // オプショナルに
    progress: number
    status: 'unread' | 'reading' | 'completed'
    startDate?: Date
    completionDate?: Date
    notes?: string
  }