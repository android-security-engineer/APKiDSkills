import { boundary } from '../data'
import Reveal from './Reveal'

export default function Boundary() {
  return (
    <section id="boundary" className="relative border-y border-white/5 bg-ink-900/50 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            能力边界
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-fg-100 md:text-4xl">
            它能做什么，<span className="text-brand-400">不做什么</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-fg-300">
            诚实的能力边界，比夸大的承诺更有用 —— 它是起点，不是终点。
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal delay={80}>
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-fg-100">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300">
                  <CheckIcon />
                </span>
                能做什么
              </h3>
              <ul className="space-y-4">
                {boundary.does.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-fg-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-fg-100">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(224,162,78,0.15)] text-[#e0a24e]">
                  <XIcon />
                </span>
                不做什么
              </h3>
              <ul className="space-y-4">
                {boundary.not.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-fg-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e0a24e]/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 8l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
    </svg>
  )
}
