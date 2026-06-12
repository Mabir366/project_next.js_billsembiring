export default function AboutPage() {
  const techStack = [
    { name: 'Next.js 14', desc: 'App Router & Server Components', emoji: '⚡' },
    { name: 'Tailwind CSS', desc: 'Utility-first styling', emoji: '🎨' },
    { name: 'Dynamic Routing', desc: 'URL params dengan [id]', emoji: '🔗' },
    { name: 'Navigation', desc: 'Link & useRouter', emoji: '🧭' },
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center py-10">
        <div className="text-7xl mb-4">👨‍💻</div>
        <h1 className="text-3xl font-extrabold text-gray-800">Tentang TechBlog</h1>
        <p className="text-gray-500 mt-3 leading-relaxed">
          TechBlog adalah project Next.js yang dibangun untuk mengimplementasikan
          konsep <strong>dynamic routing</strong> dan <strong>navigasi modern</strong>
          menggunakan App Router.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {techStack.map((tech) => (
          <div key={tech.name} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <div className="text-3xl mb-2">{tech.emoji}</div>
            <h3 className="font-bold text-gray-800">{tech.name}</h3>
            <p className="text-gray-500 text-sm mt-1">{tech.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 rounded-2xl p-6 text-center border border-blue-100">
        <p className="text-blue-700 font-semibold">🎓 Dibuat sebagai tugas pembelajaran</p>
        <p className="text-blue-500 text-sm mt-1">
          Routing & Navigation — Next.js Dynamic Routing
        </p>
      </div>
    </div>
  )
}