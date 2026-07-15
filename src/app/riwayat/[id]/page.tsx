'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Container, Stack, Title, Text, Button, Group, Loader, ScrollArea, TextInput } from '@mantine/core'
import type { SesiCurhat } from '@/pustaka/tipe'
import { BubbleChat } from '@/komponen/BubbleChat'
import { PelacakMood } from '@/komponen/PelacakMood'
import { ambilSatu, ubahSesi, hapusSesi } from '@/pustaka/TempatCurhat'

export default function HalamanDetailRiwayat() {
  const params = useParams()
  const id = String(params.id)

  const router = useRouter()

  const sesiState = useState<SesiCurhat | null>(null)
  const sesi = sesiState[0]
  const setSesi = sesiState[1]

  const memuatState = useState(true)
  const memuat = memuatState[0]
  const setMemuat = memuatState[1]

  const gagalState = useState(false)
  const gagal = gagalState[0]
  const setGagal = gagalState[1]

  const judulState = useState('')
  const judul = judulState[0]
  const setJudul = judulState[1]

  function ambilData() {
    try {
      const data = ambilSatu(id)
      if (data === undefined) {
        setSesi(null)
      } else {
        setSesi(data)
        setJudul(data.judul)
      }
    } catch {
      setGagal(true)
    }
    setMemuat(false)
  }

  useEffect(function () {
    ambilData()
  }, [id])

  function simpanJudul() {
    if (sesi === null) {
      return
    }
    const sesiBaru = { ...sesi, judul: judul }
    ubahSesi(id, sesiBaru)
    setSesi(sesiBaru)
    router.push('/riwayat')
  }

  function kembaliKeRiwayat() {
    router.push('/riwayat')
  }

  function hapus() {
    hapusSesi(id)
    router.push('/riwayat')
  }

  if (memuat === true) {
    return (
      <Container size="sm" py="lg">
        <Group justify="center">
          <Loader />
        </Group>
      </Container>
    )
  }

  if (gagal === true) {
    return (
      <Container size="sm" py="lg">
        <Text c="red">Gagal memuat sesi. Coba muat ulang halaman ini.</Text>
      </Container>
    )
  }

  if (sesi === null) {
    return (
      <Container size="sm" py="lg">
        <Text>Sesi tidak ditemukan.</Text>
      </Container>
    )
  }

  const gelembung: JSX.Element[] = []
  for (const p of sesi.pesan) {
    gelembung.push(<BubbleChat key={p.id} pesan={p} />)
  }

  let bagianPesan = <Text c="dimmed">Sesi ini belum punya pesan.</Text>
  if (sesi.pesan.length > 0) {
    bagianPesan = (
      <ScrollArea h={280}>
        <Stack gap="sm">{gelembung}</Stack>
      </ScrollArea>
    )
  }

  let bagianPelacakan = <Text c="dimmed">Sesi ini belum punya hasil Mood Tracker.</Text>
  if (sesi.pelacakan !== null) {
    bagianPelacakan = <PelacakMood pelacakan={sesi.pelacakan} />
  }

  return (
    <Container size="sm" py="lg">
      <Stack gap="md">
        <Group>
          <Button variant="subtle" color="gray" size="sm" onClick={kembaliKeRiwayat}>
            ← Kembali ke Riwayat
          </Button>
        </Group>
        <Title order={3}>{sesi.judul}</Title>
        {bagianPesan}
        {bagianPelacakan}

        <TextInput
          label="Ubah judul sesi"
          value={judul}
          onChange={(e) => setJudul((e.currentTarget as unknown as { value: string }).value)}
        />
        <Button onClick={simpanJudul} radius="xl">
          Simpan Perubahan
        </Button>

        <Button color="red" variant="light" onClick={hapus}>
          Hapus sesi ini
        </Button>
      </Stack>
    </Container>
  )
}