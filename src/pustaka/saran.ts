import type { Mood, LacakMood } from './tipe'
import { cariRekomendasi } from './edukasi'

const kataKunci: { mood: Mood; kata: string[] }[] = [
  { mood: 'Stress', kata: ['tugas', 'kuliah', 'deadline', 'ujian', 'skripsi', 'dosen'] },
  { mood: 'OVT', kata: ['mikir', 'overthinking', 'cemas', 'khawatir', 'takut'] },
  { mood: 'Kelelahan', kata: ['lelah', 'capek', 'burnout', 'jenuh', 'gak semangat'] },
  { mood: 'Ga Pede', kata: ['minder', 'insecure', 'iri', 'membandingkan'] },
]

const daftarSolusi: { mood: Mood; solusi: string[] }[] = [
  {
    mood: 'Stress',
    solusi: [
      'Pecah tugas besar jadi 3 langkah kecil yang bisa dikerjakan hari ini.',
      'Coba teknik Pomodoro: fokus 25 menit, istirahat 5 menit.',
    ],
  },
  {
    mood: 'OVT',
    solusi: [
      'Tuliskan isi pikiranmu supaya lebih ringan di kepala.',
      'Latihan grounding 5-4-3-2-1 untuk kembali ke saat ini.',
    ],
  },
  {
    mood: 'Kelelahan',
    solusi: [
      'Izinkan dirimu istirahat tanpa merasa bersalah.',
      'Tidur cukup malam ini dan kurangi satu beban esok hari.',
    ],
  },
  {
    mood: 'Ga Pede',
    solusi: [
      'Tulis 3 hal yang kamu syukuri tentang dirimu.',
      'Batasi waktu scrolling media sosial hari ini.',
    ],
  },
  {
    mood: 'Lainnya',
    solusi: [
      'Tarik napas perlahan beberapa kali.',
      'Ceritakan perasaanmu ke orang yang kamu percaya.',
    ],
  },
]

function ambilSolusi(mood: Mood): string[] {
  for (const item of daftarSolusi) {
    if (item.mood === mood) {
      return item.solusi
    }
  }
  return []
}

function tebakMood(cerita: string): Mood {
  const teks = cerita.toLowerCase()
  for (const item of kataKunci) {
    for (const kata of item.kata) {
      if (teks.includes(kata)) {
        return item.mood
      }
    }
  }
  return 'Lainnya'
}

export function bikinSaran(cerita: string, intensitas: number, moodPilihan: Mood | null): LacakMood {
  let mood: Mood = 'Lainnya'
  if (moodPilihan !== null) {
    mood = moodPilihan
  } else {
    mood = tebakMood(cerita)
  }

  return {
    mood,
    intensitas,
    detail: 'Kamu sepertinya lagi ngerasa ' + mood + ' di level ' + intensitas + '/5. Itu wajar kok, kamu ga sendirian.',
    solusi: ambilSolusi(mood),
    rekomendasi: cariRekomendasi(mood),
  }
}