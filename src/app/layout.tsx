import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import './globals.css'

import type { Metadata } from 'next'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { tema } from '@/pustaka/tema'
import { Navbar } from '@/komponen/Navbar'

export const metadata: Metadata = {
  title: 'RuangRasa',
  description: 'Ruang aman buat cerita bareng Rasa',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={tema}>
          <Notifications />
          <Navbar>{children}</Navbar>
        </MantineProvider>
      </body>
    </html>
  )
}