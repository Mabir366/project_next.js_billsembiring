'use client'

import Link from 'next/link'
import { Container, ScrollArea, Stack, Title, Button } from '@mantine/core'
import { useNgobrol } from '@/hooks/useNgobrol'
import { BubbleChat } from '@/komponen/BubbleChat'
import { Balasin } from '@/komponen/Balasin'
import { Chatting } from '@/komponen/Chatting'
import { PelacakMood } from '@/komponen/PelacakMood'

export default function HalamanCurhat() {
  const { pesan, pilihanCepat, selesai, pelacakan, idSesi, kirim } = useNgobrol()

  const gelembung: JSX.Element[] = []
  for (const p of pesan) {
    gelembung.push(<BubbleChat key={p.id} pesan={p} />)
  }

  let bagianBawah = (
    <Stack gap="sm">
      <Balasin pilihan={pilihanCepat} onPilih={kirim} />
      <Chatting onKirim={kirim} aktif={!selesai} />
    </Stack>
  )
  if (selesai === true && pelacakan !== null) {
    let tombolUpdate = (
      <Button color="green" radius="xl" disabled>
        Menyimpan sesi...
      </Button>
    )
    if (idSesi !== null) {
      const alamatDetail = '/riwayat/' + idSesi
      tombolUpdate = (
        <Button component={Link} href={alamatDetail} color="green" radius="xl">
          Update — Ubah Judul Sesi
        </Button>
      )
    }

    bagianBawah = (
      <Stack gap="md">
        <PelacakMood pelacakan={pelacakan} />
        {tombolUpdate}
        <Button component={Link} href="/riwayat" variant="light" color="green" radius="xl">
          Selesai — Lihat Riwayat
        </Button>
      </Stack>
    )
  }

  return (
    <Container size="sm" py="lg">
      <Stack gap="md">
        <Button component={Link} href="/" variant="subtle" color="green" size="xs">
          ← Kembali ke Beranda
        </Button>

        <Title order={3} ta="center">💬 Teman Curhat bareng Rasa</Title>

        <ScrollArea h={380}>
          <Stack gap="sm">{gelembung}</Stack>
        </ScrollArea>

        {bagianBawah}
      </Stack>
    </Container>
  )
}