import BlogCard from '../components/BlogCard'
import { blogs } from '../data/blogs'

export default function BlogListPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">📰 Semua Artikel</h1>
        <p className="text-gray-500 mt-1">
          Menampilkan {blogs.length} artikel tersedia
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  )
}