import { capabilities } from '../data'
import Reveal from './Reveal'

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            检测能力
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-fg-100 md:text-4xl">
            365+ 条规则，覆盖 <span className="text-brand-400">20 个检测类别</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-fg-300">
            从加固、保护器到混淆器、编译器，再到恶意软件常用的对抗技术，按文件类型（APK / DEX / ELF / DLL / RES）组织成规则库。
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal key={c.tag} delay={(i % 4) * 70}>
              <div className="group h-full rounded-xl border border-white/8 bg-ink-850/70 p-5 transition-all duration-300 hover:border-brand-500/40 hover:bg-ink-800">
                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-brand-500/12 px-2 py-1 font-mono text-xs font-semibold text-brand-300">
                    {c.tag}
                  </span>
                  <h3 className="font-bold text-fg-100">{c.label}</h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-fg-400">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-sm text-fg-500">
            想了解每条规则的匹配细节？查看{' '}
            <a href="rules/overview" className="text-brand-300 underline decoration-brand-500/40 underline-offset-4 hover:text-brand-200">
              检测规则总览
            </a>
            ，或运行 <code className="rounded bg-ink-800 px-1.5 py-0.5 font-mono">apkid-ai-cli list-tags</code> 直接查看。
          </p>
        </Reveal>
      </div>
    </section>
  )
}
