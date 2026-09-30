# 网站本地构建

<span class="badge badge-info">React</span>
<span class="badge badge-info">VitePress</span>
<span class="badge badge-info">本地预览</span>

本站点由两部分组成：

- **官网首页** — `website/home/`，基于 React + TypeScript + Tailwind 的产品介绍页，部署后作为站点根页面（`/`），对应 "产品是什么 / 解决什么问题 / 如何解决 / 解决得怎么样"。
- **文档站** — `website/`，VitePress 编写，承载功能指南、接口、规则等文档。

部署时（`deploy-docs.yml`）先分别构建，再把官网产物合并到文档站构建结果的根目录作为首页。本节讲怎么在本地跑起这两部分，预览改动后再 push。

## 📋 前置

- **Node.js** ≥ 18（VitePress 要求）。推荐 20。
- 仓库已 clone。

## 📦 安装依赖

```bash
cd website
npm install
```

这会装 `vitepress`（devDependencies 里声明的 `^1.5.0`）。建议生成 `package-lock.json` 后提交，让 CI 用 `npm ci`：

```bash
npm install   # 生成 package-lock.json
git add package-lock.json
git commit -m "chore(website): add package-lock.json"
```

## 🚀 本地开发服务器

```bash
cd website
npm run dev
```

等价 `vitepress dev`。启动后访问 `http://localhost:5173`。**热更新**：改 Markdown 立即刷新。

按 `Ctrl+C` 停止。

### 官网首页（React）

```bash
cd website/home
npm install
npm run dev      # http://localhost:5175，改 src/ 立即热更新
```

官网是独立 Vite 工程，`vite.config.ts` 里开了 `base: './'`（相对路径），保证合并进文档站根目录后资源引用不失效。常用命令：

```bash
npm run build    # 产物在 home/dist/，可被复制并包进站点根
```

> 💡 想同时看官网 + 文档的整体效果，按下面"生产构建"合并即可。

## 🏗️ 生产构建

```bash
# 1. 文档站
cd website && npm run build          # → .vitepress/dist/

# 2. 官网（若未构建过）
cd home && npm run build             # → home/dist/

# 3. 合并：官网作为站点首页
cp -r home/dist/. .vitepress/dist/

# 4. 预览整体效果
npm run preview                      # http://localhost:4173
```

等价 CI 中 `deploy-docs.yml` 的构建过程。注意第 3 步会把文档站原本的 `index.html` 覆盖为官网首页，文档站其余页面（`/guide/**` 等）保持原样。

## 👁️ 预览构建产物

```bash
npm run preview
```

等价 `vitepress preview`。用本地服务器跑 `dist/` 里的构建结果，模拟线上效果（含路由、cleanUrls 等）。访问 `http://localhost:4173`。

## 📁 目录结构

```
website/
├── .vitepress/
│   ├── config.ts          # ★ 站点配置 + 侧边栏
│   └── theme/
│       ├── index.ts        # 主题入口
│       └── custom.css      # 自定义样式（badge、品牌色）
├── home/                   # ● 官网首页（React + TS + Tailwind）
│   ├── src/components/      # 各区块组件（Hero / How / Capabilities …）
│   ├── src/data.tsx         # 页面内容数据 + 内联图标库
│   └── package.json
├── public/
│   └── favicon.svg         # 站点图标
├── index.md                # 文档站首页（被官网合并覆盖）
├── guide/                  # 指南文档
├── interfaces/             # 接口文档
├── modules/                # 代码模块文档
├── rules/                  # 检测规则文档
├── deploy/                 # 部署文档
└── package.json
```

## ✏️ 改文档的流程

```bash
# 1. 开发服务器
cd website && npm run dev

# 2. 改 Markdown（浏览器实时刷新）
# 编辑 website/guide/xxx.md

# 3. 加新页要同步改侧边栏
# 编辑 .vitepress/config.ts 的 sidebar

# 4. 本地构建确认无误
npm run build

# 5. 提交
cd ..
git add website/
git commit -m "docs: 完善xxx文档"
git push   # → 触发 deploy-docs.yml
```

::: warning 加新页要改 config.ts
VitePress 不会自动把新 `.md` 加进侧边栏。新建文档后，必须在 `.vitepress/config.ts` 的 `sidebar` 里加对应链接，否则用户从侧边栏点不到（但能通过直接 URL 访问）。
:::

## 🎨 自定义样式

改 `.vitepress/theme/custom.css` 调整：

- `--vp-c-brand-1/2/3`：品牌主色（绿）。
- `--vp-custom-block-*`：提示框颜色。
- `.badge-*`：徽章样式。

改完 `npm run dev` 立即看效果。

## 🔍 检查死链

VitePress 构建时会警告指向不存在 `.md` 的链接。构建后看输出：

```bash
npm run build 2>&1 | grep -i "dead\|not found\|warn"
```

有死链就修 `config.ts` 或链接路径。

## 🐳 不装 Node 也能预览？

如果你只想看效果不想装 Node，可以等 push 后让 CI 部署，去 GitHub Pages URL 看。但本地预览迭代快得多，推荐装。

## 📍 相关

- [GitHub Actions 工作流](./github-actions) — CI 怎么构建。
- [GitHub Pages 部署](./github-pages) — 线上部署。
- [config.ts 解读](../deploy/cicd) — 配置结构。
