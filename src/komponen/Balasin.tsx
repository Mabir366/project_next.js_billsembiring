'use client'

import { Button, Group } from '@mantine/core'

type PropsBalasin = {
  pilihan: string[]
  onPilih: (teks: string) => void
}

export function Balasin({ pilihan, onPilih }: PropsBalasin) {
  if (pilihan.length === 0) {
    return null
  }

  const tombol: JSX.Element[] = []
  for (const teks of pilihan) {
    tombol.push(
      <Button key={teks} size="xs" variant="light" radius="xl" onClick={() => onPilih(teks)}>
        {teks}
      </Button>,
    )
  }

  return <Group gap="xs">{tombol}</Group>
}