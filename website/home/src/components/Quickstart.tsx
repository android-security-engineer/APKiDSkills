import { quickstartCommands } from '../data'
import Reveal from './Reveal'

export default function Quickstart() {
  return (
    <section id="quickstart" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            快速开始
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-fg-100 md:text-4xl">
            三步，从零到第一条扫描结果
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-ink-850 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-fg-500">terminal</span>
            </div>
            <div className="space-y-5 p-6 font-mono text-[14px] leading-relaxed">
              {quickstartCommands.map((block, i) => (
                <div key={i}>
                  {block.comment && <p className="term-dim">{block.comment}</p>}
                  <p className="break-all">
                    <span className="term-ok">{block.cmd}</span>
                  </p>
                  {block.output && <p className="term-dim pt-0.5">{block.output}</p>}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 text-center text-sm text-fg-500">
            详细安装、批量扫描、与安全工具链集成，见{' '}
            <a href="guide/quickstart" className="text-brand-300 underline decoration-brand-500/40 underline-offset-4 hover:text-brand-200">
              快速上手文档
            </a>
            。
          </p>
        </Reveal>
      </div>
    </section>
  )
}
