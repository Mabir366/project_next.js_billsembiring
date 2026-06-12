'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">

        {/* Animated Emoji */}
        <div className="text-8xl mb-6 animate-bounce">🚧</div>

        {/* Error Code */}
        <div className="inline-block bg-blue-100 text-blue-600 text-sm font-bold px-4 py-1 rounded-full mb-4">
          ERROR 404
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
          Halaman Belum Tersedia
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 text-lg mb-2">
          Tenang, halaman ini sedang dalam pengembangan! 🛠️
        </p>
        <p className="text-gray-400 text-sm mb-8">
          Tim kami sedang bekerja keras untuk menghadirkan konten terbaik untukmu.
          Pantau terus ya, tidak akan lama lagi! ✨
        </p>

        {/* Status Badge */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
          <span className="text-yellow-600 text-sm font-semibold">
            Sedang dalam proses pengembangan...
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">

          {/* Tombol Kembali */}
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
          >
            ← Kembali ke Halaman Sebelumnya
          </button>

          {/* Tombol Home */}
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-md"
          >
            🏠 Kembali ke Home
          </Link>

        </div>

        {/* Bottom Divider */}
        <div className="mt-10 pt-6 border-t border-gray-100">
          <p className="text-gray-300 text-xs">
            ⚡ TechBlog — Next.js Dynamic Routing & Navigation
          </p>
        </div>

      </div>
    </div>
  )
}