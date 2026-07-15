export type Mood = 'Stress' | 'OVT' | 'Kelelahan' | 'Ga Pede' | 'Lainnya'

export interface Pesan {
  id: string
  dari: 'rasa' | 'user'
  teks: string
  waktu: string
}

export interface Rekomendasi {
  judul: string
  tipe: 'edukasi' | 'internet' | 'video'
  url: string
}

export interface LacakMood {
  mood: Mood
  intensitas: number
  detail: string
  solusi: string[]
  rekomendasi: Rekomendasi[]
}

export interface SesiCurhat {
  id: string
  judul: string
  mood: Mood
  intensitas: number
  pesan: Pesan[]
  pelacakan: LacakMood | null
  selesai: boolean
  tanggal: string
}