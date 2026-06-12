export const blogs = [
  {
    id: 1,
    title: "Mengenal Next.js App Router",
    category: "Next.js",
    date: "10 Juni 2025",
    emoji: "🚀",
    summary:
      "App Router adalah sistem routing terbaru di Next.js 13+ yang membawa banyak fitur modern.",
    content: `App Router hadir di Next.js 13 sebagai pengganti Pages Router. Dengan App Router, kita bisa menggunakan Server Components secara default, nested layouts, dan dynamic routing yang lebih fleksibel.

Fitur utama App Router:
→ Server Components by default
→ Nested Layouts yang powerful  
→ Dynamic Routes dengan folder [id]
→ Loading & Error states bawaan
→ Streaming & Suspense support`,
  },
  {
    id: 2,
    title: "Dynamic Routing di Next.js",
    category: "Routing",
    date: "11 Juni 2025",
    emoji: "🔗",
    summary:
      "Dynamic routing memungkinkan URL yang fleksibel berdasarkan data, seperti /blog/1 atau /blog/intro.",
    content: `Dynamic Routing adalah fitur yang memungkinkan kita membuat halaman dengan URL yang bersifat dinamis. Misalnya /blog/1, /blog/2, /blog/abc.

Caranya cukup buat folder dengan nama [id] di dalam App Router, lalu Next.js akan otomatis menangkap nilai dari URL tersebut dan mengirimkannya sebagai params ke komponen halaman.

Contoh struktur folder:
→ app/blog/[id]/page.js
→ URL /blog/1 → params.id = "1"
→ URL /blog/abc → params.id = "abc"`,
  },
  {
    id: 3,
    title: "Navigasi dengan Link dan useRouter",
    category: "Navigation",
    date: "12 Juni 2025",
    emoji: "🧭",
    summary:
      "Cara melakukan navigasi antar halaman di Next.js secara efisien tanpa reload.",
    content: `Di Next.js ada dua cara utama untuk navigasi antar halaman:

1. Komponen <Link>
   Digunakan untuk navigasi deklaratif langsung di JSX.
   Contoh: <Link href="/about">About</Link>

2. Hook useRouter
   Digunakan untuk navigasi programatik via JavaScript.
   Contoh: router.push('/blog') setelah suatu aksi/event.

Keduanya melakukan client-side navigation sehingga halaman tidak perlu reload penuh — membuat pengalaman pengguna jauh lebih cepat dan smooth.`,
  },
  {
    id: 4,
    title: "Tailwind CSS dalam Next.js",
    category: "Styling",
    date: "13 Juni 2025",
    emoji: "🎨",
    summary:
      "Tailwind CSS mempercepat proses styling dengan utility classes langsung di JSX.",
    content: `Tailwind CSS adalah utility-first CSS framework yang sangat cocok dipadukan dengan Next.js.

Keunggulan Tailwind di Next.js:
→ Tidak perlu buat file CSS terpisah
→ Class langsung ditulis di JSX
→ Purge otomatis — hanya CSS yang dipakai yang di-bundle
→ Responsive design mudah dengan prefix sm: md: lg:
→ Dark mode support bawaan

Contoh penggunaan:
<div className="bg-blue-500 text-white p-4 rounded-xl hover:bg-blue-600">
  Hello Tailwind!
</div>`,
  },
]