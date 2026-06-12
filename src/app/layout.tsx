import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechBlog — Next.js Dynamic Routing',
  description: 'Blog teknologi dengan Next.js App Router',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode   // ← Tambahan ini yang fix error-nya!
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 py-10">
          {children}
        </main>
        <footer className="text-center text-gray-400 text-sm py-6 border-t mt-10">
          ⚡ TechBlog — Dibuat dengan Next.js & Tailwind CSS
        </footer>
      </body>
    </html>
  )
}