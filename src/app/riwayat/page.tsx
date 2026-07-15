'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Container, Stack, Title, Card, Text, Badge, Group, Loader } from '@mantine/core'
import type { SesiCurhat } from '@/pustaka/tipe'
import { warnaMood } from '@/pustaka/mood'
import { ambilSemua } from '@/pustaka/TempatCurhat'

export default function HalamanRiwayat() {
  const daftarState = useState<SesiCurhat[]>([])
  const daftar = daftarState[0]
  const setDaftar = daftarState[1]

  const memuatState = useState(true)
  const memuat = memuatState[0]
  const setMemuat = memuatState[1]

  const gagalState = useState(false)
  const gagal = gagalState[0]
  const setGagal = gagalState[1]

  function ambilData() {
    try {
      const data = ambilSemua()
      setDaftar(data)
    } catch {
      setGagal(true)
    }
    setMemuat(false)
  }

  useEffect(function () {
    ambilData()
  }, [])

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
        <Text c="red">Gagal memuat riwayat. Coba muat ulang halaman ini.</Text>
      </Container>
    )
  }

  const gayaLink = { textDecoration: 'none', color: 'inherit', display: 'block' }

  const kartu: JSX.Element[] = []
  for (const sesi of daftar) {
    const alamatDetail = '/riwayat/' + sesi.id
    kartu.push(
      <Link key={sesi.id} href={alamatDetail} style={gayaLink}>
        <Card withBorder radius="lg" padding="md">
          <Group justify="space-between">
            <Text fw={600} lineClamp={1}>{sesi.judul}</Text>
            <Badge color={warnaMood(sesi.mood)}>{sesi.mood}</Badge>
          </Group>
          <Text size="xs" c="dimmed" mt={4}>Intensitas {sesi.intensitas}/5</Text>
        </Card>
      </Link>,
    )
  }

  let isi = <Stack gap="sm">{kartu}</Stack>
  if (daftar.length === 0) {
    isi = <Text c="dimmed">Belum ada riwayat. Yuk mulai cerita dulu di halaman Teman Curhat.</Text>
  }

  return (
    <Container size="sm" py="lg">
      <Stack gap="md">
        <Title order={3}>🗂️ Riwayat Curhat</Title>
        {isi}
      </Stack>
    </Container>
  )
}