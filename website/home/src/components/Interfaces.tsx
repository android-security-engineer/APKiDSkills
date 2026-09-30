import { Icon, interfaces } from '../data'
import Reveal from './Reveal'

export default function Interfaces() {
  return (
    <section id="interfaces" className="relative border-y border-white/5 bg-ink-900/50 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            接入方式
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-fg-100 md:text-4xl">
            同一颗引擎，三种打开方式
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-fg-300">
            命令行、AI Agent、MCP —— 扫描逻辑始终只有一份，想怎么用都由你决定。
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {interfaces.map((iface, i) => (
            <Reveal key={iface.name} delay={i * 100}>
              <div className="group flex h-full flex-col rounded-2xl border border-white/8 bg-ink-850/80 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-[0_12px_40px_rgba(58,166,117,0.1)]">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand-500/25 bg-brand-500/10 text-brand-300">
                  <Icon name={iface.icon} className="h-6 w-6" />
                </div>
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="text-lg font-bold text-fg-100">{iface.name}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-fg-400">{iface.desc}</p>

                <div className="mt-5 flex-1 rounded-xl border border-white/8 bg-ink-900/70 p-4 font-mono text-[13px] leading-relaxed">
                  <p className="text-fg-500">
                    <span className="term-key">{iface.target}</span>
                    <span className="term-dim"> → </span>
                  </p>
                  <p className="mt-1 break-all text-brand-300">{iface.cmd}</p>
                  <p className="mt-2 text-fg-400">{iface.output}</p>
                </div>

                {iface.links && (
                  <div className="mt-5 flex gap-5 text-sm">
                    {iface.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-brand-300 hover:text-brand-200 hover:underline"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
