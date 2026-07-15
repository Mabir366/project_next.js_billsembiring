import type { Mood, Rekomendasi } from './tipe'

export interface Materi {
  id: string
  judul: string
  ringkasan: string
  mood: Mood
  url: string
}

export const daftarMateri: Materi[] = [
  {
    id: 'edu-1',
    judul: 'Cara Tenang Saat Deadline Numpuk',
    ringkasan: 'Teknik simpel membagi tugas besar jadi langkah kecil.',
    mood: 'Stress',
    url: '/edukasi/edu-1',
  },
  {
    id: 'edu-2',
    judul: 'Menghentikan Pikiran yang Berputar',
    ringkasan: 'Latihan grounding 5-4-3-2-1 buat meredakan OVT.',
    mood: 'OVT',
    url: '/edukasi/edu-2',
  },
  {
    id: 'edu-3',
    judul: 'Kenali Tanda Kelelahan (Burnout)',
    ringkasan: 'Kapan capek biasa berubah jadi kelelahan berat.',
    mood: 'Kelelahan',
    url: '/edukasi/edu-3',
  },
  {
    id: 'edu-4',
    judul: 'Berdamai dengan Rasa Ga Pede',
    ringkasan: 'Berhenti membandingkan diri sama orang lain.',
    mood: 'Ga Pede',
    url: '/edukasi/edu-4',
  },
]

function cariMateri(mood: Mood): Materi | undefined {
  for (const m of daftarMateri) {
    if (m.mood === mood) {
      return m
    }
  }
  return undefined
}

export function cariRekomendasi(mood: Mood): Rekomendasi[] {
  const kunci = encodeURIComponent('cara mengatasi ' + mood)

  const eksternal: Rekomendasi[] = [
    { judul: 'Cari di Google', tipe: 'internet', url: 'https://www.google.com/search?q=' + kunci },
    { judul: 'Video di YouTube', tipe: 'video', url: 'https://www.youtube.com/results?search_query=' + kunci },
  ]

  const materi = cariMateri(mood)
  if (materi) {
    const internal: Rekomendasi = { judul: materi.judul, tipe: 'edukasi', url: materi.url }
    return [internal, ...eksternal]
  }
  return eksternal
}