'use client'

import Link from 'next/link' 
import { Container, Title, Text, Button, SimpleGrid, Card, Stack } from '@mantine/core' 


const FITUR: { emoji: string; judul: string; teks: string }[] = [
  { emoji: '💬', judul: 'Teman Curhat', teks: 'Cerita ke Rasa lewat chat yang ramah dan tanpa dihakimi.' },
  { emoji: '🌱', judul: 'Mood Tracker', teks: 'Dapat ringkasan perasaan plus langkah kecil yang bisa dicoba.' },
  { emoji: '🗂️', judul: 'Riwayat', teks: 'Lihat lagi sesi-sesi curhat sebelumnya kapan pun dibutuhkan.' },
]


export default function HalamanBeranda() {
  
  const kolom = { base: 1, sm: 2, md: 3 }

 
  const kartu: JSX.Element[] = []
  for (const f of FITUR) {
    kartu.push(
      <Card key={f.judul} withBorder radius="lg" padding="lg">
        <Text size="xl">{f.emoji}</Text>
        <Text fw={600} mt="sm">{f.judul}</Text>
        <Text size="sm" c="dimmed" mt={4}>{f.teks}</Text>
      </Card>,
    )
  }

  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Stack gap="sm" align="center" ta="center">
          <Title order={1}>Ruang aman untuk bercerita 🤍</Title>
          <Text c="dimmed" maw={520}>
            RuangRasa membantu kamu mengenali perasaan, bercerita tanpa takut dihakimi,
            dan menemukan langkah kecil untuk merasa lebih baik.
          </Text>
          <Button component={Link} href="/curhat" size="md" radius="xl" mt="sm">
            Mulai Curhat
          </Button>
        </Stack>

        <SimpleGrid cols={kolom} spacing="md">
          {kartu}
        </SimpleGrid>
      </Stack>
    </Container>
  )
}