import type { SesiCurhat } from './tipe'

const KUNCI_SIMPAN = 'ruangrasa:riwayat'

const daftarAwal: SesiCurhat[] = [
  {
    id: 'seed-2',
    judul: 'Overthinking sebelum tidur',
    mood: 'OVT',
    intensitas: 3,
    pesan: [
      { id: 'p2-1', dari: 'rasa', teks: 'Hai, aku Rasa 🤍 Lagi ada perasaan apa nih hari ini?', waktu: '2026-07-11T22:00:10.000Z' },
      { id: 'p2-2', dari: 'user', teks: 'OVT', waktu: '2026-07-11T22:00:25.000Z' },
      { id: 'p2-3', dari: 'rasa', teks: 'Boleh cerita lebih lanjut? Apa yang bikin kamu ngerasa gitu?', waktu: '2026-07-11T22:00:35.000Z' },
      { id: 'p2-4', dari: 'user', teks: 'Pikiran ke mana-mana pas mau tidur, jadi susah pejam mata', waktu: '2026-07-11T22:00:55.000Z' },
      { id: 'p2-5', dari: 'rasa', teks: 'Seberapa berat rasanya, dari 1 (santai) sampai 5 (berat banget)?', waktu: '2026-07-11T22:01:05.000Z' },
      { id: 'p2-6', dari: 'user', teks: '3', waktu: '2026-07-11T22:01:20.000Z' },
      { id: 'p2-7', dari: 'rasa', teks: 'Makasih ya udah cerita. Aku rangkum kondisimu di Mood Tracker di bawah.', waktu: '2026-07-11T22:01:30.000Z' },
    ],
    pelacakan: {
      mood: 'OVT',
      intensitas: 3,
      detail: 'Pikiran berputar terus saat mau tidur.',
      solusi: ['Tulis isi pikiran sebelum tidur.', 'Coba latihan napas 4-7-8.'],
      rekomendasi: [],
    },
    selesai: true,
    tanggal: '2026-07-11T22:00:00.000Z',
  },
  {
    id: 'seed-1',
    judul: 'Deadline tugas numpuk',
    mood: 'Stress',
    intensitas: 4,
    pesan: [
      { id: 'p1-1', dari: 'rasa', teks: 'Hai, aku Rasa 🤍 Lagi ada perasaan apa nih hari ini?', waktu: '2026-07-10T09:00:10.000Z' },
      { id: 'p1-2', dari: 'user', teks: 'Stress', waktu: '2026-07-10T09:00:25.000Z' },
      { id: 'p1-3', dari: 'rasa', teks: 'Boleh cerita lebih lanjut? Apa yang bikin kamu ngerasa gitu?', waktu: '2026-07-10T09:00:35.000Z' },
      { id: 'p1-4', dari: 'user', teks: 'Deadline tugas UAS banyak banget, kayak numpuk semua nggak ada abisnya', waktu: '2026-07-10T09:00:55.000Z' },
      { id: 'p1-5', dari: 'rasa', teks: 'Seberapa berat rasanya, dari 1 (santai) sampai 5 (berat banget)?', waktu: '2026-07-10T09:01:05.000Z' },
      { id: 'p1-6', dari: 'user', teks: '4', waktu: '2026-07-10T09:01:20.000Z' },
      { id: 'p1-7', dari: 'rasa', teks: 'Makasih ya udah cerita. Aku rangkum kondisimu di Mood Tracker di bawah.', waktu: '2026-07-10T09:01:30.000Z' },
    ],
    pelacakan: {
      mood: 'Stress',
      intensitas: 4,
      detail: 'Banyak tugas menumpuk menjelang UAS.',
      solusi: ['Pecah tugas jadi langkah kecil.', 'Kerjakan satu per satu tanpa panik.'],
      rekomendasi: [],
    },
    selesai: true,
    tanggal: '2026-07-10T09:00:00.000Z',
  },
]

type PenyimpanLokal = {
  getItem(kunci: string): string | null
  setItem(kunci: string, nilai: string): void
}

function ambilPenyimpan(): PenyimpanLokal | null {
  const g = globalThis as { localStorage?: PenyimpanLokal }
  if (g.localStorage === undefined) {
    return null
  }
  return g.localStorage
}

function bacaSemua(): SesiCurhat[] {
  const penyimpan = ambilPenyimpan()
  if (penyimpan === null) {
    return daftarAwal
  }
  const teks = penyimpan.getItem(KUNCI_SIMPAN)
  if (teks === null) {
    tulisSemua(daftarAwal)
    return daftarAwal
  }
  return JSON.parse(teks) as SesiCurhat[]
}

function tulisSemua(daftar: SesiCurhat[]): void {
  const penyimpan = ambilPenyimpan()
  if (penyimpan === null) {
    return
  }
  penyimpan.setItem(KUNCI_SIMPAN, JSON.stringify(daftar))
}

export function ambilSemua(): SesiCurhat[] {
  return bacaSemua()
}

export function ambilSatu(id: string): SesiCurhat | undefined {
  const daftar = bacaSemua()
  for (const sesi of daftar) {
    if (sesi.id === id) {
      return sesi
    }
  }
  return undefined
}

export function tambahSesi(sesi: SesiCurhat): void {
  const daftar = bacaSemua()
  const daftarBaru: SesiCurhat[] = [sesi]
  for (const s of daftar) {
    daftarBaru.push(s)
  }
  tulisSemua(daftarBaru)
}

export function ubahSesi(id: string, dataBaru: SesiCurhat): void {
  const daftar = bacaSemua()
  const hasil: SesiCurhat[] = []
  for (const sesi of daftar) {
    if (sesi.id === id) {
      hasil.push(dataBaru)
    } else {
      hasil.push(sesi)
    }
  }
  tulisSemua(hasil)
}

export function hapusSesi(id: string): void {
  const daftar = bacaSemua()
  const hasil: SesiCurhat[] = []
  for (const sesi of daftar) {
    if (sesi.id !== id) {
      hasil.push(sesi)
    }
  }
  tulisSemua(hasil)
}