'use client'

import { useState } from 'react'
import type { SesiCurhat, Pesan, Mood, LacakMood } from '@/pustaka/tipe'
import { List_Mood } from '@/pustaka/mood'
import { alurCurhat, PESAN_PENUTUP } from '@/pustaka/AlurCurhat'
import { bikinSaran } from '@/pustaka/saran'
import { tambahSesi } from '@/pustaka/TempatCurhat'

let nomorId = 0
function buatId(): string {
  nomorId = nomorId + 1
  return 'id-' + nomorId
}

function waktuSekarang(): string {
  return new Date().toISOString()
}

function buatPesan(dari: 'rasa' | 'user', teks: string): Pesan {
  return {
    id: buatId(),
    dari: dari,
    teks: teks,
    waktu: waktuSekarang(),
  }
}

export function useNgobrol() {
  const pesanState = useState<Pesan[]>([buatPesan('rasa', alurCurhat[0].pertanyaan)])
  const pesan = pesanState[0]
  const setPesan = pesanState[1]

  const langkahState = useState(0)
  const langkah = langkahState[0]
  const setLangkah = langkahState[1]

  const ceritaState = useState('')
  const cerita = ceritaState[0]
  const setCerita = ceritaState[1]

  const pelacakanState = useState<LacakMood | null>(null)
  const pelacakan = pelacakanState[0]
  const setPelacakan = pelacakanState[1]

  const idSesiState = useState<string | null>(null)
  const idSesi = idSesiState[0]
  const setIdSesi = idSesiState[1]

  const moodPilihanState = useState<Mood | null>(null)
  const moodPilihan = moodPilihanState[0]
  const setMoodPilihan = moodPilihanState[1]

  const selesai = pelacakan !== null

  let pilihanCepat: string[] = []
  if (selesai === false) {
    pilihanCepat = alurCurhat[langkah].pilihanCepat
  }

  function kirim(teks: string) {
    if (selesai === true) {
      return
    }

    const langkahSekarang = alurCurhat[langkah]
    const pesanUser = buatPesan('user', teks)
    const daftarSetelahUser = [...pesan, pesanUser]

    if (langkahSekarang.id === 'sapa') {
      for (const m of List_Mood) {
        if (m.nama === teks) {
          setMoodPilihan(m.nama)
        }
      }
    }

    if (langkahSekarang.id === 'cerita') {
      setCerita(teks)
    }

    if (langkahSekarang.id === 'intensitas') {
      const angka = Number(teks)
      const hasil = bikinSaran(cerita, angka, moodPilihan)

      const pesanPenutup = buatPesan('rasa', PESAN_PENUTUP)
      const daftarLengkap = [...daftarSetelahUser, pesanPenutup]

      setPesan(daftarLengkap)
      setPelacakan(hasil)

      let judul = 'Sesi curhat'
      if (cerita !== '') {
        judul = cerita
      }

      const idBaru = buatId()

      const sesiBaru: SesiCurhat = {
        id: idBaru,
        judul: judul,
        mood: hasil.mood,
        intensitas: angka,
        pesan: daftarLengkap,
        pelacakan: hasil,
        selesai: true,
        tanggal: waktuSekarang(),
      }
      tambahSesi(sesiBaru)
      setIdSesi(idBaru)
    } else {
      const nomorBerikut = langkah + 1
      const pertanyaanBerikut = alurCurhat[nomorBerikut].pertanyaan
      const pesanRasa = buatPesan('rasa', pertanyaanBerikut)

      setPesan([...daftarSetelahUser, pesanRasa])
      setLangkah(nomorBerikut)
    }
  }

  return { pesan, pilihanCepat, selesai, pelacakan, idSesi, kirim }
}