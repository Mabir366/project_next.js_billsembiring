export interface LangkahCurhat {
  id: string
  pertanyaan: string
  pilihanCepat: string[]
}

export const MIN_LANGKAH_SELESAI = 3

const namaMood: string[] = ['Stress', 'OVT', 'Kelelahan', 'Ga Pede', 'Lainnya']

export const alurCurhat: LangkahCurhat[] = [
  {
    id: 'sapa',
    pertanyaan: 'Hai, aku Rasa 🤍 Lagi ada perasaan apa nih hari ini?',
    pilihanCepat: namaMood,
  },
  {
    id: 'cerita',
    pertanyaan: 'Boleh cerita lebih lanjut? Apa yang bikin kamu ngerasa gitu?',
    pilihanCepat: [],
  },
  {
    id: 'intensitas',
    pertanyaan: 'Seberapa berat rasanya, dari 1 (santai) sampai 5 (berat banget)?',
    pilihanCepat: ['1', '2', '3', '4', '5'],
  },
]

export const PESAN_PENUTUP =
  'Makasih ya udah cerita. Aku rangkum kondisimu di Mood Tracker di bawah.'