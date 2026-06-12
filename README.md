# ⚡ TechBlog — Next.js Dynamic Routing & Navigation

> Proyek pembelajaran Next.js yang mengimplementasikan konsep **Routing** dan **Navigation** menggunakan App Router modern.

---

## 📌 Deskripsi Proyek

**TechBlog** adalah aplikasi blog teknologi sederhana yang dibangun menggunakan **Next.js 14** dengan tujuan utama mengimplementasikan konsep **dynamic routing** dan **navigasi antar halaman** secara modern dan efisien.

Proyek ini dibuat sebagai bagian dari tugas mata kuliah pengembangan web, dengan fokus pada pemahaman sistem routing Next.js App Router — mulai dari static route, dynamic route, hingga navigasi programatik menggunakan `Link` dan `useRouter`.

---

## 👤 Identitas Mahasiswa

| Keterangan | Detail |
|---|---|
| **Nama** | BillStephen |
| **Topik Tugas** | Routing dan Navigation |
| **Framework** | Next.js 14 (App Router) |
| **Styling** | Tailwind CSS v4 |

---

## 🗂️ Struktur Proyek
src/

└── app/

├── layout.js                  → Root layout + Navbar global

├── page.js                    → Halaman Home (/)

├── not-found.js               → Halaman 404 custom

├── components/

│   ├── Navbar.js              → Komponen navigasi responsif

│   └── BlogCard.js            → Komponen kartu artikel

├── data/

│   └── blogs.js               → Data artikel (dummy)

├── blog/

│   ├── page.js                → Halaman daftar artikel (/blog)

│   └── [id]/

│       └── page.js            → Halaman detail artikel (/blog/:id) ← DYNAMIC

└── about/

└── page.js                → Halaman tentang (/about)

---

## 🚀 Cara Menjalankan Proyek

### Prasyarat
Pastikan sudah terinstall:
- **Node.js** versi 18 ke atas
- **npm** atau **yarn**

### Langkah Instalasi

```bash
# 1. Clone repository
git clone https://github.com/USERNAME/Project_Next.js_BillStephen.git

# 2. Masuk ke folder proyek
cd Project_Next.js_BillStephen

# 3. Install semua dependencies
npm install

# 4. Jalankan development server
npm run dev
```

### Buka di Browser
http://localhost:3000

---

## 🗺️ Daftar Halaman & Route

| Route | Halaman | Jenis Route |
|---|---|---|
| `/` | Home | Static Route |
| `/blog` | Daftar Artikel | Static Route |
| `/blog/1` | Detail Artikel ID 1 | **Dynamic Route** |
| `/blog/2` | Detail Artikel ID 2 | **Dynamic Route** |
| `/blog/3` | Detail Artikel ID 3 | **Dynamic Route** |
| `/about` | Tentang | Static Route |
| `/*` | 404 Not Found | Catch-all |

---

## 🔗 Konsep Routing dan Navigation

Ini adalah inti dari proyek ini. Berikut penjelasan lengkap implementasinya:

---

### 1. Static Routing

Static route adalah halaman dengan URL tetap yang tidak berubah. Di Next.js App Router, setiap folder di dalam `app/` yang memiliki file `page.js` otomatis menjadi sebuah route.
app/page.js         →  /          (Home)

app/blog/page.js    →  /blog      (Blog List)

app/about/page.js   →  /about     (About)

Tidak perlu konfigurasi tambahan — Next.js mendeteksi otomatis berdasarkan struktur folder.

---

### 2. Dynamic Routing ⭐

Dynamic routing memungkinkan satu halaman melayani banyak URL berbeda berdasarkan parameter yang dikirim melalui URL.

**Implementasi di proyek ini:**
app/blog/[id]/page.js

Folder `[id]` dengan kurung siku adalah sintaks dynamic segment di Next.js. Nilai `id` akan berubah sesuai URL yang diakses:
URL: /blog/1   →  params.id = "1"

URL: /blog/2   →  params.id = "2"

URL: /blog/3   →  params.id = "3"

**Kode implementasi di `app/blog/[id]/page.js`:**

```js
export default function BlogDetailPage({ params }) {
  const blog = blogs.find((b) => b.id === Number(params.id))

  if (!blog) return notFound()

  return <div>{blog.title}</div>
}
```

---

### 3. Navigasi dengan Komponen `<Link>`

Komponen `<Link>` dari Next.js digunakan untuk navigasi deklaratif langsung di JSX. Berbeda dengan tag `<a>` HTML biasa, `<Link>` melakukan **client-side navigation** sehingga halaman tidak perlu reload penuh.

**Implementasi di `Navbar.js`:**

```js
import Link from 'next/link'

// Navigasi statis
<Link href="/blog">Blog</Link>
<Link href="/about">About</Link>

// Navigasi dinamis ke detail artikel
<Link href={`/blog/${blog.id}`}>Baca Selengkapnya</Link>
```

**Perbandingan `<Link>` vs `<a>` HTML:**

| `<Link>` Next.js | `<a>` HTML Biasa |
|---|---|
| Client-side navigation | Full page reload |
| Prefetch otomatis | Tidak ada prefetch |
| Lebih cepat | Lebih lambat |
| Terintegrasi App Router | Tidak terintegrasi |

---

### 4. Navigasi Programatik dengan `useRouter`

`useRouter` digunakan ketika navigasi perlu dipicu melalui logika JavaScript, bukan langsung dari elemen JSX.

**Implementasi di `not-found.js`:**

```js
'use client'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <button onClick={() => router.back()}>
      ← Kembali ke Halaman Sebelumnya
    </button>
  )
}
```

**Method `useRouter` yang tersedia:**

| Method | Fungsi |
|---|---|
| `router.push('/blog')` | Navigasi ke halaman baru |
| `router.back()` | Kembali ke halaman sebelumnya |
| `router.forward()` | Maju ke halaman berikutnya |
| `router.refresh()` | Refresh halaman saat ini |
| `router.replace('/login')` | Navigasi tanpa menambah history |

---

### 5. Active Link Detection dengan `usePathname`

`usePathname` digunakan untuk mendeteksi route yang sedang aktif, sehingga bisa memberikan styling berbeda pada link navigasi yang sedang dikunjungi.

**Implementasi di `Navbar.js`:**

```js
'use client'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <Link
      href="/blog"
      className={pathname === '/blog' ? 'font-bold underline' : 'opacity-80'}
    >
      Blog
    </Link>
  )
}
```

---

### 6. Penanganan Route Tidak Ditemukan (404)

Next.js App Router menyediakan file khusus `not-found.js` yang otomatis ditampilkan ketika route tidak ditemukan atau fungsi `notFound()` dipanggil secara manual.

**Implementasi di `app/blog/[id]/page.js`:**

```js
import { notFound } from 'next/navigation'

if (!blog) return notFound()
```

---

## 🛠️ Tech Stack

| Teknologi | Versi | Kegunaan |
|---|---|---|
| **Next.js** | 14+ | Framework utama + App Router |
| **React** | 18+ | Library UI |
| **Tailwind CSS** | v4 | Styling utility-first |
| **ESLint** | Latest | Linting & code quality |

---

## 📚 Referensi

- [Next.js Documentation — App Router](https://nextjs.org/docs/app)
- [Next.js Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [Next.js Link Component](https://nextjs.org/docs/app/api-reference/components/link)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)

---

> ⚡ **TechBlog** — Dibuat dengan Next.js & Tailwind CSS sebagai implementasi tugas Routing dan Navigation.