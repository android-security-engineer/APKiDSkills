import { Icon, howSteps, scanTree } from '../data'
import Reveal from './Reveal'

export default function How() {
  return (
    <section id="how" className="relative border-y border-white/5 bg-ink-900/50 py-24">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 60% at 20% 20%, rgba(58,166,117,0.08) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            它如何工作
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-fg-100 md:text-4xl">
            把"识别二进制来源"这件事，<span className="text-brand-400">规则化</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-2">
          {/* 左侧：四条流水线步骤 */}
          <div className="space-y-6">
            {howSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div className="flex gap-5">
                  <div className="relative flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-500/25 bg-ink-800 text-brand-300">
                      <Icon name={step.icon} className="h-5 w-5" />
                    </div>
                    {i < howSteps.length - 1 && (
                      <div className="mt-2 h-full w-px bg-gradient-to-b from-brand-500/30 to-transparent" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="text-lg font-bold text-fg-100">
                      <span className="mr-2 font-mono text-sm text-brand-400">0{i + 1}</span>
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-fg-400">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 右侧：扫描路径示意 */}
          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-5 rounded-3xl bg-brand-500/8 blur-xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-850 p-6 font-mono text-sm leading-relaxed">
                <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-widest text-fg-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                  一次扫描的路径
                </p>
                {scanTree.map((row, i) => (
                  <p key={i} className="py-0.5" style={{ paddingLeft: `${row.indent * 2}rem` }}>
                    {row.text}
                    {row.node && (
                      <span className="text-brand-300">{row.node}</span>
                    )}
                  </p>
                ))}
                <div className="mt-5 rounded-lg border border-brand-500/20 bg-brand-500/8 px-4 py-3 text-fg-300">
                  <span className="term-arrow">→ </span>
                  结论：<span className="text-fg-100">被 360 加固 v5 包裹，dex 用 dx 编译</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <p className="mt-12 text-sm text-fg-500">
            引擎基于带 DEX 模块的{' '}
            <code className="rounded bg-ink-800 px-1.5 py-0.5 font-mono text-brand-300">yara-python-dex</code>
            ，能直接读取 DEX 的 <code className="rounded bg-ink-800 px-1.5 py-0.5 font-mono text-brand-300">map_list</code>{' '}
            结构排列来区分 dx / D8 / dexlib 等编译器 —— 这正是"结构指纹"的能力来源。
          </p>
        </Reveal>
      </div>
    </section>
  )
}
