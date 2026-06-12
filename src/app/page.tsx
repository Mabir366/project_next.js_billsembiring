import Link from 'next/link'
import { blogs } from './data/blogs'
import BlogCard from './components/BlogCard'

export default function HomePage() {
  const recentBlogs = blogs.slice(0, 2) // Tampilkan 2 artikel terbaru

  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
          🚀 Next.js Dynamic Routing & Navigation
        </div>
        <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
          Selamat Datang di<br />
          <span className="text-blue-600">⚡ TechBlog</span>
        </h1>
        <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
          Temukan artikel teknologi seputar Next.js, Routing, dan Web Development modern.
        </p>
        <div className="flex gap-3 justify-center mt-8">
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow"
          >
            📰 Lihat Semua Artikel
          </Link>
          <Link
            href="/about"
            className="bg-white text-blue-600 border border-blue-200 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition shadow"
          >
            👤 Tentang Kami
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-3 gap-4 my-8">
        {[
          { label: 'Artikel',   value: blogs.length, emoji: '📄' },
          { label: 'Kategori',  value: '4',          emoji: '🏷️' },
          { label: 'Framework', value: '1',          emoji: '⚡' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl">{stat.emoji}</div>
            <div className="text-2xl font-bold text-blue-600 mt-1">{stat.value}</div>
            <div className="text-gray-500 text-sm">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Recent Articles */}
      <section className="mt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">📌 Artikel Terbaru</h2>
          <Link href="/blog" className="text-blue-600 hover:underline text-sm font-medium">
            Lihat Semua →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {recentBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </div>
  )
}