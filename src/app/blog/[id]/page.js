import { blogs } from '../../data/blogs'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function BlogDetailPage({ params }) {
  const blog = blogs.find((b) => b.id === Number(params.id))

  if (!blog) return notFound()

  const categoryColor = {
    'Next.js':    'bg-black text-white',
    'Routing':    'bg-purple-100 text-purple-700',
    'Navigation': 'bg-green-100 text-green-700',
    'Styling':    'bg-pink-100 text-pink-700',
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-blue-600 hover:underline text-sm mb-6"
      >
        ← Kembali ke Semua Artikel
      </Link>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColor[blog.category]}`}>
            {blog.category}
          </span>
          <span className="text-5xl">{blog.emoji}</span>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-800">{blog.title}</h1>
        <p className="text-gray-400 text-sm mt-2">📅 {blog.date}</p>
        <hr className="my-6" />
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {blog.content}
        </p>
      </div>

      {/* Navigasi antar artikel */}
      <div className="flex justify-between mt-8 gap-4">
        {blog.id > 1 && (
          <Link
            href={`/blog/${blog.id - 1}`}
            className="flex-1 bg-white border rounded-xl p-4 hover:shadow-md transition text-sm"
          >
            ← Artikel Sebelumnya
          </Link>
        )}
        {blog.id < blogs.length && (
          <Link
            href={`/blog/${blog.id + 1}`}
            className="flex-1 bg-white border rounded-xl p-4 hover:shadow-md transition text-sm text-right"
          >
            Artikel Berikutnya →
          </Link>
        )}
      </div>
    </div>
  )
}