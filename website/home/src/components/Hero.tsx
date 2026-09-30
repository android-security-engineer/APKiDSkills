import { Icon } from '../data'

/** Hero 右侧的终端 mockup：展示一次真实扫描的结构化输出。 */
function Terminal() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-3xl bg-brand-500/10 blur-2xl" aria-hidden="true" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800/90 shadow-2xl shadow-black/50">
        {/* 标题栏 */}
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-fg-500">apkid-ai-cli scan app.apk</span>
        </div>

        {/* 输出内容 */}
        <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed">
          <p>
            <span className="term-dim">$ </span>
            <span className="term-ok">apkid-ai-cli</span>
            <span className="text-fg-300"> scan app.apk</span>
          </p>
          <p className="term-dim pt-1">scanned in 0.42s · rules 365+</p>

          <div className="pt-1">
            <p className="term-dim">[findings]</p>
            <p className="pl-3">
              <span className="term-key">compiler</span>
              <span className="term-dim"> :: </span>
              <span className="term-ok">dx</span>
              <span className="term-dim">  ← app.apk!classes.dex</span>
            </p>
            <p className="pl-3">
              <span className="term-key">packer</span>
              <span className="term-dim"> :: </span>
              <span className="term-ok">jiagu_360_v5</span>
              <span className="term-dim">  ← app.apk!assets/libjiagu.so</span>
            </p>
            <p className="pl-3">
              <span className="term-key">obfuscator</span>
              <span className="term-dim"> :: </span>
              <span className="term-ok">ollvm_v8</span>
              <span className="term-dim">  ← app.apk!lib/arm64-v8a/libfoo.so</span>
            </p>
          </div>

          <div className="pt-1">
            <p className="term-dim">[summary]</p>
            <p className="pl-3">
              <span className="term-arrow">→</span>
              <span className="term-str"> 加固于 360 v5 · dex 由 dx 编译 · 原生层 OLLVM 混淆</span>
            </p>
          </div>
        </div>
      </div>

      {/* 浮动徽标 */}
      <div className="absolute -right-4 -top-5 rounded-xl border border-brand-500/30 bg-ink-850 px-3 py-2 shadow-lg shadow-black/40">
        <p className="text-xs font-bold text-brand-300">Android 版 PEiD</p>
        <p className="text-[10px] text-fg-500">BlackHat Arsenal 入选</p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* 背景光晕 + 网格 */}
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 55% at 70% 10%, rgba(58,166,117,0.16) 0%, transparent 60%), radial-gradient(45% 45% at 15% 60%, rgba(58,166,117,0.08) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-32 md:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* 左：文案 */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
              </span>
              Android 二进制识别工具 · Android 版的 PEiD
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-fg-100 sm:text-5xl md:text-[3.4rem]">
              一眼识别 APK
              <br />
              是怎么{' '}
              <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
                构建、加固与保护
              </span>
              的
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-300">
              拿到一个陌生的 APK，你是想直接看二进制数据，还是想知道{' '}
              <span className="text-fg-100">它用了哪个编译器、被哪家加固包裹、是否被 OLLVM 混淆、有没有在检测模拟器与 Root</span>{' '}
              —— APKiD 用 365+ 条 YARA 规则替你回答。
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#quickstart"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-base font-semibold text-ink-950 shadow-[0_8px_30px_rgba(58,166,117,0.35)] transition-all hover:-translate-y-0.5 hover:bg-brand-400"
              >
                快速开始
                <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a
                href="guide/what-is-apkid"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-base text-fg-100 transition-colors hover:border-brand-500/40 hover:text-brand-300"
              >
                深入文档
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg-400">
              <span className="inline-flex items-center gap-1.5">
                <Icon name="check" className="h-4 w-4 text-brand-400" />
                免费 · 开源（GPL & Commercial）
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="check" className="h-4 w-4 text-brand-400" />
                支持 CLI / AI CLI / MCP 三接口
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="check" className="h-4 w-4 text-brand-400" />
                BlackHat Arsenal 2018 · 2023
              </span>
            </div>
          </div>

          {/* 右：终端 */}
          <div className="mt-4 lg:mt-0">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  )
}
