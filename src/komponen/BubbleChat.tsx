'use client'

import { Paper, Text } from '@mantine/core'
import type { Pesan } from '@/pustaka/tipe'

type PropsBubbleChat = {
  pesan: Pesan
}

export function BubbleChat({ pesan }: PropsBubbleChat) {
  const dariRasa = pesan.dari === 'rasa'

  let ml = 'auto'
  let mr = '0'
  let warnaLatar = 'green.6'
  let warnaTeks = 'white'

  if (dariRasa === true) {
    ml = '0'
    mr = 'auto'
    warnaLatar = 'gray.1'
    warnaTeks = 'dark'
  }

  return (
    <Paper p="sm" radius="lg" maw="80%" ml={ml} mr={mr} bg={warnaLatar}>
      <Text size="sm" c={warnaTeks}>
        {pesan.teks}
      </Text>
    </Paper>
  )
}