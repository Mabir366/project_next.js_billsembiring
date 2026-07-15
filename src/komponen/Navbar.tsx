'use client' 

import type { ReactNode } from 'react' 
import Link from 'next/link' 
import { Burger, Button, Drawer, Group, Stack, Text, Anchor } from '@mantine/core' 
import { useDisclosure } from '@mantine/hooks' 


const MENU: { label: string; href: string }[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Riwayat', href: '/riwayat' },
]

type PropsKerangka = {
  children: ReactNode 
}


export function Navbar({ children }: PropsKerangka) {
 
  const disclosure = useDisclosure(false)
  const terbuka = disclosure[0]
  const aksi = disclosure[1]


  const gayaLinkDesktop =
    'rounded-full px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-green-100 hover:text-green-700'

 
  const gayaLinkMobile =
    'block rounded-lg px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-green-100 hover:text-green-700'

  
  const linkDesktop: JSX.Element[] = []
  for (const item of MENU) {
    linkDesktop.push(
      <Anchor
        key={item.href}
        component={Link}
        href={item.href}
        underline="never"
        className={gayaLinkDesktop}
      >
        {item.label}
      </Anchor>,
    )
  }

  
  const linkMobile: JSX.Element[] = []
  for (const item of MENU) {
    linkMobile.push(
      <Anchor
        key={item.href}
        component={Link}
        href={item.href}
        onClick={aksi.close}
        underline="never"
        className={gayaLinkMobile}
      >
        {item.label}
      </Anchor>,
    )
  }

  return (
    <>
      
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
        <Group h={60} px="md" justify="space-between" wrap="nowrap">
         
          <Anchor component={Link} href="/" underline="never" c="dark">
            <Text fw={700} size="lg">🤍 RuangRasa</Text>
          </Anchor>

          
          <Group gap="lg" visibleFrom="sm">
            {linkDesktop}
          </Group>

         
          <Group gap="xs" visibleFrom="sm">
            <Button component={Link} href="/curhat" color="green" size="sm" radius="xl">
              💬 Mulai Curhat
            </Button>
          </Group>

        
          <Burger opened={terbuka} onClick={aksi.toggle} hiddenFrom="sm" size="sm" aria-label="Menu" />
        </Group>
      </header>

   
      <Drawer opened={terbuka} onClose={aksi.close} title="Menu" hiddenFrom="sm" size="xs" position="right">
        <Stack gap="md">
          {linkMobile}
          <Button component={Link} href="/curhat" color="green" radius="xl" fullWidth onClick={aksi.close}>
            💬 Mulai Curhat
          </Button>
        </Stack>
      </Drawer>

     
      <main className="mx-auto w-full max-w-5xl px-4 py-6 md:px-8 md:py-10">{children}</main>
    </>
  )
}