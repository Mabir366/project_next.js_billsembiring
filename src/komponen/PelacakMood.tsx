'use client'

import { Anchor, Badge, Card, List, Stack, Text, Title } from '@mantine/core'
import type { LacakMood } from '@/pustaka/tipe'
import { warnaMood } from '@/pustaka/mood'

type PropsPelacakMood = {
  pelacakan: LacakMood | null
}

export function PelacakMood({ pelacakan }: PropsPelacakMood) {
  if (!pelacakan) {
    return null
  }
  
  const daftarSolusi: JSX.Element[] = []
  for (const solusi of pelacakan.solusi) {
    daftarSolusi.push(<List.Item key={solusi}>{solusi}</List.Item>)
  }

  const daftarTautan: JSX.Element[] = []
  for (const r of pelacakan.rekomendasi) {
    daftarTautan.push(
      <Anchor key={r.url} href={r.url} target="_blank" size="sm">
        {r.judul}
      </Anchor>,
    )
  }

  return (
    <Card withBorder radius="lg" padding="lg">
      <Stack gap="sm">
        <Title order={4}>🌱 Mood Tracker</Title>

        <Badge color={warnaMood(pelacakan.mood)} size="lg">
          {pelacakan.mood} · {pelacakan.intensitas}/5
        </Badge>

        <Text size="sm">{pelacakan.detail}</Text>

        <Text fw={600} size="sm">Langkah yang bisa dicoba:</Text>
        <List size="sm" spacing="xs">
          {daftarSolusi}
        </List>

        <Text fw={600} size="sm">Rekomendasi buat kamu:</Text>
        <Stack gap={4}>
          {daftarTautan}
        </Stack>
      </Stack>
    </Card>
  )
}