import type { Mood } from './tipe'

export const List_Mood: { nama: Mood; warna: string; emoji: string }[] = [
  { nama: 'Stress', warna: 'red', emoji: '📚' },
  { nama: 'OVT', warna: 'yellow', emoji: '🌀' },
  { nama: 'Kelelahan', warna: 'orange', emoji: '🔥' },
  { nama: 'Ga Pede', warna: 'grape', emoji: '🫥' },
  { nama: 'Lainnya', warna: 'blue', emoji: '💭' },
]

export function warnaMood(mood: Mood): string {
  for (const item of List_Mood) {
    if (item.nama === mood) {
      return item.warna
    }
  }
  return 'gray'
}

export function emojiMood(mood: Mood): string {
  for (const item of List_Mood) {
    if (item.nama === mood) {
      return item.emoji
    }
  }
  return '💭'
}