import { docLinks } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950 py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* 品牌 */}
          <div>
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
                <rect width="32" height="32" rx="7" fill="#3aa675" />
                <path
                  d="M9 22V10l8 8V10"
                  stroke="#07140e"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <span className="text-lg font-bold text-fg-100">APKiD</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-500">
              Android 二进制识别工具 —— 一眼看出 APK / DEX / ELF 被如何构建、加固与保护。开源，由 RedNaga 维护。
            </p>
            <div className="mt-5 flex gap-4 text-sm">
              <a
                href="https://github.com/rednaga/APKiD"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-fg-400 transition-colors hover:text-brand-300"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
                </svg>
                GitHub
              </a>
              <a
                href="interfaces/overview"
                className="text-fg-400 transition-colors hover:text-brand-300"
              >
                接口文档
              </a>
            </div>
          </div>

          {/* 文档链接 */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-fg-300">
              文档
            </h4>
            <ul className="space-y-2.5">
              {docLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-fg-500 transition-colors hover:text-brand-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 资源 */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-fg-300">
              资源
            </h4>
            <ul className="space-y-2.5 text-sm text-fg-500">
              <li>
                <a
                  href="guide/quickstart"
                  className="transition-colors hover:text-brand-300"
                >
                  快速开始
                </a>
              </li>
              <li>
                <a
                  href="rules/overview"
                  className="transition-colors hover:text-brand-300"
                >
                  检测规则总览
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rednaga/APKiD/releases"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-brand-300"
                >
                  版本发布
                </a>
              </li>
              <li>
                <a
                  href="https://raw.githubusercontent.com/rednaga/APKiD/master/LICENSE.md"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-brand-300"
                >
                  许可证（GPL & Commercial）
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 text-xs text-fg-600 sm:flex-row">
          <p>© {new Date().getFullYear()} APKiD · v4.0.0 · Android 版 PEiD</p>
          <p className="font-mono">BlackHat Arsenal 2018 · 2023</p>
        </div>
      </div>
    </footer>
  )
}
