'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '/',      label: 'Home',  emoji: '🏠' },
    { href: '/blog',  label: 'Blog',  emoji: '📰' },
    { href: '/about', label: 'About', emoji: '👤' },
  ]

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-lg">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
          ⚡ <span>TechBlog</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1
                  ${pathname === link.href
                    ? 'bg-white text-blue-700 shadow'
                    : 'hover:bg-blue-600'
                  }`}
              >
                <span>{link.emoji}</span>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 px-3 rounded-lg my-1 transition
                ${pathname === link.href
                  ? 'bg-white text-blue-700 font-bold'
                  : 'hover:bg-blue-600'
                }`}
            >
              {link.emoji} {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}