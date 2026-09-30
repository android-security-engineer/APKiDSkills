import { heroStats } from '../data'
import Reveal from './Reveal'

export default function Stats() {
  return (
    <section className="relative border-y border-white/5 bg-ink-900/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4">
        {heroStats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <div className="text-center">
              <p className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-4xl font-extrabold text-transparent">
                {s.value}
              </p>
              <p className="mt-1.5 text-sm text-fg-400">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
