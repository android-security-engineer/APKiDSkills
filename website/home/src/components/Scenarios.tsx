import { Icon, scenarios } from '../data'
import Reveal from './Reveal'

export default function Scenarios() {
  return (
    <section id="scenarios" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            典型场景
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-fg-100 md:text-4xl">
            一次扫描，出现在每一次分析的起点
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <div className="group h-full rounded-xl border border-white/8 bg-ink-850/70 p-6 transition-all duration-300 hover:border-brand-500/40">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-300">
                  <Icon name={s.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-fg-100">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-400">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
