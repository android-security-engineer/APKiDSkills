import type { JSX } from 'react'

/* ------------------------------------------------------------------ */
/* 小图标库：24x24 线性图标，stroke 风格，随 currentColor 变色          */
/* ------------------------------------------------------------------ */

type IconName =
  | 'shield'
  | 'chip'
  | 'shuffle'
  | 'eye'
  | 'folder'
  | 'json'
  | 'terminal'
  | 'bot'
  | 'plug'
  | 'search'
  | 'flag'
  | 'gauge'
  | 'layers'
  | 'diff'
  | 'spark'
  | 'check'
  | 'x'
  | 'github'
  | 'arrow'

const paths: Record<IconName, JSX.Element> = {
  shield: (
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3" />
    </>
  ),
  shuffle: (
    <>
      <path d="M3 7h4c3 0 4 5 7 10" />
      <path d="M14 5l3 2-3 2" />
      <path d="M3 17h4c1.5 0 2.5-1 3.4-2.2" />
      <path d="M18 15l3 2-3 2" />
      <path d="M21 7h-3" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
      <circle cx="12" cy="12" r="2.6" />
    </>
  ),
  folder: (
    <>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
      <path d="M3 11h18" />
    </>
  ),
  json: (
    <>
      <path d="M9 3l-5 9h6l-5 9" />
      <path d="M15 3l5 9h-6l5 9" />
    </>
  ),
  terminal: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9l3 3-3 3M12.5 15H17" />
    </>
  ),
  bot: (
    <>
      <rect x="5" y="7" width="14" height="11" rx="2.5" />
      <path d="M12 2v3M9 11h.01M15 11h.01" />
      <path d="M9 15c.7.7 1.6 1 3 1s2.3-.3 3-1" />
      <path d="M8 7V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
    </>
  ),
  plug: (
    <>
      <path d="M9 3v6M15 3v6" />
      <rect x="7" y="7" width="10" height="4" rx="1" />
      <path d="M12 11v3M9 14h6l1 5H8l1-5z" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.5-4.5" />
    </>
  ),
  flag: (
    <>
      <path d="M5 21V4" />
      <path d="M5 4h13l-2.5 3.5L18 11H5" />
    </>
  ),
  gauge: (
    <>
      <path d="M5 19a8 8 0 1 1 14 0" />
      <path d="M12 19l4-5" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  diff: (
    <>
      <path d="M4 4h6l-3 3 3 3H4V4z" />
      <path d="M20 20h-6l3-3-3-3h6v6z" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" />
      <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z" />
    </>
  ),
  check: <path d="M4.5 12.5l5 5L20 7" />,
  x: (
    <>
      <path d="M6 6l12 12M18 6L6 18" />
    </>
  ),
  github: (
    <>
      <path d="M12 3a9 9 0 0 0-3 17.5c.5.1.7-.2.7-.5v-1.7c-2.6.6-3.1-1.3-3.1-1.3-.4-1-.1-1.3-.1-1.3-.1-.3-.8-.4-.8-.4-.9-.2.1-1.1.1-1.1.9-.1 1.4 1 1.4 1 1.5 1.2 2.2 1.4 2.8 1.4.5-.4.8-1 .9-1.2-.1-.1-.5-.4-.8-.7-1.5-.2-3.2-.9-3.2-3.9 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.5 7.5 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3-1.7 3.7-3.3 3.9-.3.2-.7.5-.8.8.5.5 1.1 1.5 1.1 2.2v1.6c0 .3.2.6.7.5A9 9 0 0 0 12 3z" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
}

export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* 官网内容数据                                                         */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: '解决的问题', href: '#why' },
  { label: '工作原理', href: '#how' },
  { label: '检测能力', href: '#capabilities' },
  { label: '三种接口', href: '#interfaces' },
  { label: '使用场景', href: '#scenarios' },
]

export const heroStats = [
  { value: '365+', label: 'YARA 检测规则' },
  { value: '6', label: '文件类型' },
  { value: '3', label: '使用接口' },
  { value: '20', label: '检测类别' },
]

export const whyItems = [
  {
    icon: 'shield' as IconName,
    title: '看不出样本被加固了',
    body: '被 360、腾讯乐固、梆梆、爱加密等加固的 APK，classes.dex 只是空壳，真正的代码加密在 lib/*.so 里。每家厂商特征各异，靠肉眼根本记不住。',
  },
  {
    icon: 'chip' as IconName,
    title: '不知道编译器，就用不对工具',
    body: 'dx 编译的 dex 可以用 baksmali，D8/R8 的结构略有不同，Jack 带有 -set0/-get0 匿名方法特征。不识别编译器，反编译工具链的选择就是瞎猜。',
  },
  {
    icon: 'shuffle' as IconName,
    title: 'OLLVM 混淆直接抬高逆向成本',
    body: 'libfoo.so 若被 OLLVM 做了控制流平坦化、虚假控制流和字符串加密，IDA 打开就是一片雪花。提前知道是不是 OLLVM、是哪个版本，决定直接逆还是先脱混淆。',
  },
  {
    icon: 'eye' as IconName,
    title: '对抗技术在细节里藏着',
    body: '反虚拟机、反调试、反 Root、反 Hook 样本会在 dex 里检查 Build 指纹、SIM、QEMU 文件、ptrace。沙箱跑不起来时，APKiD 能直接列出它检测了哪些环境特征。',
  },
]

export const howSteps = [
  {
    icon: 'json' as IconName,
    title: '特征入库',
    body: '每个加固 / 混淆 / 编译器方案，都提炼出独有指纹（字符串、路径、结构特征），写成一条 YARA 规则。',
  },
  {
    icon: 'chip' as IconName,
    title: '统一引擎匹配',
    body: '用 YARA 引擎一次匹配全部规则，通过带 DEX 模块的 yara-python-dex 直接读取 DEX 结构字段，无需手写 if/else。',
  },
  {
    icon: 'folder' as IconName,
    title: '递归解包',
    body: 'APK 本质是 ZIP——自动解压，对 classes.dex、lib/*.so 分别匹配对应规则，嵌套包递归扫描（含 XZ 压缩与 ZIP 炸弹防护）。',
  },
  {
    icon: 'json' as IconName,
    title: '结构化输出',
    body: '把 YARA 匹配整理成带 category、identifier、confidence、source 的 finding 列表，既给人看，也给 AI 看。',
  },
]

export const scanTree = [
  { indent: 0, text: 'app.apk', dim: true },
  { indent: 1, text: '├─ classes.dex → ', node: 'compiler :: dx' },
  { indent: 1, text: '├─ lib/.../libfoo.so → ', node: 'obfuscator :: ollvm_v8' },
  { indent: 1, text: '├─ assets/libjiagu.so → ', node: 'packer :: jiagu_360_v5' },
  { indent: 1, text: '└─ AndroidManifest.xml → ', node: 'packer :: bangcle' },
]

export const capabilities = [
  { tag: 'packer', label: '加固', desc: '360、腾讯乐固、梆梆、爱加密等 75+ 方案' },
  { tag: 'protector', label: '保护器', desc: 'Vkey、Verimatrix、Denuvo、FreeRASP 等 50+ RASP SDK' },
  { tag: 'obfuscator', label: '混淆器', desc: 'OLLVM v3~v9、DexGuard、Arxan、StringFog 等 70+' },
  { tag: 'compiler', label: '编译器', desc: 'dx、D8/R8、Jack、dexlib1/2 等 15 种' },
  { tag: 'anti_vm', label: '反虚拟机', desc: 'Build 指纹、SIM、QEMU 文件检测 28+' },
  { tag: 'anti_debug', label: '反调试', desc: 'ptrace、调试器进程与端口检测' },
  { tag: 'anti_root', label: '反 Root', desc: 'RootBeer、Magisk、su 路径检测' },
  { tag: 'anti_hook', label: '反 Hook', desc: 'Frida / Xposed 特征检测' },
  { tag: 'anticheat', label: '反作弊', desc: '游戏 / 金融应用防作弊 SDK 识别' },
  { tag: 'signer', label: '签名器', desc: '签名与重打包痕迹识别' },
  { tag: 'abnormal', label: '异常结构', desc: '非法类名、map 后注入数据' },
  { tag: 'dropper', label: '释放器', desc: '恶意释放与二次打包行为指纹' },
]

export const interfaces = [
  {
    icon: 'terminal' as IconName,
    name: '经典 CLI',
    cmd: 'apkid',
    target: '人类分析师 · 终端',
    output: '彩色终端表格 / JSON',
    desc: 'argparse 实现的经典界面，人类可读的彩色输出，适合手动分析样本与批量写结果到目录。',
    links: [
      { label: '使用文档', href: 'interfaces/classic-cli' },
    ],
  },
  {
    icon: 'bot' as IconName,
    name: 'AI CLI',
    cmd: 'apkid-ai-cli',
    target: '脚本 / AI 智能体',
    output: '结构化 JSON（schema_version 1.0.0）',
    desc: 'Typer + Rich，输出专为 AI 设计的 structured JSON，提供 scan / batch / diff / type 等高级命令。',
    links: [
      { label: '使用文档', href: 'interfaces/ai-cli' },
    ],
  },
  {
    icon: 'plug' as IconName,
    name: 'MCP 服务器',
    cmd: 'apkid-mcp',
    target: 'Claude / Cursor 等 MCP 客户端',
    output: '标准 MCP 协议（stdio）',
    desc: 'FastMCP 实现，AI 在对话里直接调 scan_file、batch_scan，配合 skills / info / list_tags 自发现能力。',
    links: [
      { label: '使用文档', href: 'interfaces/mcp' },
    ],
  },
]

export const scenarios = [
  {
    icon: 'search' as IconName,
    title: '恶意软件分析',
    body: '快速判断样本是否加固、是否带反虚拟机 / 反调试，决定沙箱与脱壳策略。',
  },
  {
    icon: 'flag' as IconName,
    title: '防盗版 / 应用溯源',
    body: '识别应用是否被二次打包、用了哪种加固方案，追溯盗版与仿冒。',
  },
  {
    icon: 'gauge' as IconName,
    title: '应用安全评估',
    body: '列出样本使用的保护 SDK，量化评估保护强度，供合规与审计参考。',
  },
  {
    icon: 'layers' as IconName,
    title: '批量样本分类',
    body: 'batch 命令扫一整个目录，按加固方案 / 编译器聚类，快速掌握样本集构成。',
  },
  {
    icon: 'diff' as IconName,
    title: '版本对比',
    body: 'diff 命令对比新旧版本，发现新增或移除的保护与混淆手段。',
  },
  {
    icon: 'spark' as IconName,
    title: 'AI 智能体分析',
    body: '通过 MCP / AI CLI 让 AI 直接调用，把"识别"作为自动化分析流水线的一环。',
  },
]

export const boundary = {
  does: [
    '识别加固 / 保护 / 混淆 / 编译器的来源指纹',
    '列出反虚拟机、反调试、反 Root、反 Hook 等对抗技术',
    '递归解包扫描 APK / DEX / ELF / DLL / RES',
    '输出带 confidence 的结构化结论（人 + AI 双读）',
  ],
  not: [
    '不脱壳 / 还原原始 dex —— 交给 FRIDA-DEXDump 等工具',
    '不反编译 —— dex 还原用 jadx、apktool',
    '不挖掘逻辑漏洞',
    '不运行样本 —— 只做静态指纹匹配',
  ],
}

export const quickstartCommands = [
  {
    prefix: '$',
    cmd: 'pip install apkid',
    comment: '# 安装（内置预编译规则）',
    output: '✔ installed apkid 4.0.0 (rules compiled)',
  },
  {
    prefix: '$',
    cmd: 'apkid-ai-cli scan app.apk',
    comment: '# 扫描，输出结构化 JSON',
    output: '{"findings": [{"category": "compiler", ...}], "summary": "360 v5 + dx"}',
  },
  {
    prefix: '$',
    cmd: 'apkid app.apk',
    comment: '# 经典 CLI，彩色终端输出',
    output: '└─ app.apk!classes.dex [compiler] dx',
  },
]

export const docLinks = [
  { label: 'APKiD 是什么', href: 'guide/what-is-apkid' },
  { label: '快速开始', href: 'guide/quickstart' },
  { label: '工作原理', href: 'guide/how-it-works' },
  { label: '接口对比', href: 'interfaces/overview' },
  { label: '检测规则', href: 'rules/overview' },
  { label: '代码模块', href: 'modules/core-apkid' },
]
