'use client'

import { useState } from 'react'
import { ActionIcon, Group, TextInput } from '@mantine/core'
import { IconSend } from '@tabler/icons-react'

type PropsChatting = {
  onKirim: (teks: string) => void
  aktif: boolean
}

export function Chatting({ onKirim, aktif }: PropsChatting) {
  const [teks, setTeks] = useState('')

  function kirim() {
    const bersih = teks.trim()
    if (bersih === '') {
      return
    }
    onKirim(bersih)
    setTeks('')
  }

  return (
    <Group gap="xs">
      <TextInput
        flex={1}
        placeholder="Tulis perasaanmu di sini..."
        value={teks}
        disabled={!aktif}
        onChange={(e) => setTeks((e.currentTarget as unknown as { value: string }).value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            kirim()
          }
        }}
      />
      <ActionIcon size="lg" onClick={kirim} disabled={!aktif}>
        <IconSend size={18} />
      </ActionIcon>
    </Group>
  )
}