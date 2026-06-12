import Link from 'next/link'

export default function BlogCard({ blog }) {
  const categoryColor = {
    'Next.js':   'bg-black text-white',
    'Routing':   'bg-purple-100 text-purple-700',
    'Navigation':'bg-green-100 text-green-700',
    'Styling':   'bg-pink-100 text-pink-700',
  }

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColor[blog.category] || 'bg-blue-100 text-blue-700'}`}>
          {blog.category}
        </span>
        <span className="text-3xl">{blog.emoji}</span>
      </div>

      <h2 className="text-xl font-bold mt-3 text-gray-800">{blog.title}</h2>
      <p className="text-gray-400 text-xs mt-1">📅 {blog.date}</p>
      <p className="text-gray-600 mt-3 text-sm leading-relaxed">{blog.summary}</p>

      <Link
        href={`/blog/${blog.id}`}
        className="inline-flex items-center gap-1 mt-4 text-blue-600 hover:text-blue-800 text-sm font-semibold transition"
      >
        Baca Selengkapnya <span>→</span>
      </Link>
    </div>
  )
}