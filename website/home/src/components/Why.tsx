import { Icon, whyItems } from '../data'
import Reveal from './Reveal'

export default function Why() {
  return (
    <section id="why" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            为什么需要它
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-fg-100 md:text-4xl">
            逆向一个陌生样本，最难的往往不是技术，而是{' '}
            <span className="text-brand-400">"它被怎么处理过"</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-fg-300">
            在开始任何分析之前，这个问题的答案决定了你后续所有的工具选择。没有 APKiD 之前，每一步都是黑盒。
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {whyItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="group h-full rounded-2xl border border-white/8 bg-ink-850/80 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-[0_12px_40px_rgba(58,166,117,0.12)]">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/25 bg-brand-500/10 text-brand-300 transition-colors group-hover:bg-brand-500/20">
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-fg-100">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-fg-400">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
