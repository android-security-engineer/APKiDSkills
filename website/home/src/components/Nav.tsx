import { useEffect, useState } from 'react'
import { Icon, navLinks } from '../data'

function Logo() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 shadow-[0_0_18px_rgba(58,166,117,0.5)]">
      <svg viewBox="0 0 64 64" className="h-6 w-6">
        <path d="M20 14h16l10 10v26a2 2 0 0 1-2 2H20a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2z" fill="#0b0f0d" />
        <path d="M36 14l10 10H36V14z" fill="#d5f0e2" />
        <g fill="none" stroke="#0b0f0d" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="32" cy="40" r="6" />
          <path d="M32 28v3M32 49v3M20 40h3M41 40h3M24 32l2 2M40 48l-2-2M24 48l2 2M40 32l-2 2" />
        </g>
      </svg>
    </span>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-white/5 bg-ink-950/85 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo />
          <span className="text-lg font-bold tracking-tight text-fg-100">
            APKiD
            <span className="ml-2 rounded-md border border-brand-500/25 bg-brand-500/10 px-1.5 py-0.5 text-[10px] font-medium text-brand-300">
              官网
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-fg-300 transition-colors hover:text-brand-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="guide/what-is-apkid"
            className="hidden rounded-lg border border-white/10 px-3.5 py-2 text-sm text-fg-300 transition-colors hover:border-brand-500/40 hover:text-brand-300 sm:inline-flex"
          >
            文档
          </a>
          <a
            href="https://github.com/rednaga/APKiD"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-3.5 py-2 text-sm font-semibold text-ink-950 transition-colors hover:bg-brand-400"
          >
            <Icon name="github" className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </nav>
    </header>
  )
}
