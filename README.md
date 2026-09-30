# APKiD — Skills for AI Agents

[![Release](https://img.shields.io/github/v/release/android-security-engineer/APKiDSkills?include_prereleases)](https://github.com/android-security-engineer/APKiDSkills/releases/)
[![Python](https://img.shields.io/badge/python-%E2%89%A53.8-blue)](https://github.com/android-security-engineer/APKiDSkills)
[![License](https://img.shields.io/github/license/android-security-engineer/APKiDSkills)](LICENSE.GPL)
[![Website](https://img.shields.io/badge/website-APKiDSkills-3aa675)](https://android-security-engineer.github.io/APKiDSkills/)

**APKiD** — *PEiD for Android* — identifies compilers, packers, protectors, obfuscators, signers and other artifacts in Android **APK / DEX / ELF** files using 365+ YARA rules.

This distribution is built **for AI agents** (Claude Code, Codex, MCP hosts). Every capability is exposed through structured, machine-readable interfaces — no fragile output parsing required.

| | |
|---|---|
| 🌐 **Website** | https://android-security-engineer.github.io/APKiDSkills/ |
| 📚 **Docs** | https://android-security-engineer.github.io/APKiDSkills/guide/what-is-apkid |

---

## Quick Reference

| You want to… | Run |
|---|---|
| Scan one file (structured JSON) | `apkid-ai-cli scan app.apk` |
| Batch scan a directory | `apkid-ai-cli batch samples/ -r` |
| Diff two builds / samples | `apkid-ai-cli diff v1.apk v2.apk` |
| Identify file type (fast, no rules) | `apkid-ai-cli type file` |
| List all detection tags | `apkid-ai-cli list-tags` |
| Self-discover every command | `apkid-ai-cli skills` |
| Serve tools over MCP (stdio) | `apkid-mcp` |
| Scan inside Claude Code | skill `/apkid-scan` |

**Protocol contract** (see [Output Format](#output-format)):

* Every machine-readable response is a JSON envelope with `"schema_version": "1.0.0"`.
* Errors are written to **stderr** as `{"error": true, "message": ..., "detail": ...}`.
* All interfaces share one scanning core (`apkid.cli.common.make_scanner()` + `apkid.ai_output.AIOutputFormatter`), so CLI and MCP behave identically.

## Interfaces

| # | Interface | Entry point | Output |
|---|---|---|---|
| 1 | Classic CLI | `apkid` | human-readable text |
| 2 | AI CLI | `apkid-ai-cli` | structured JSON |
| 3 | MCP server | `apkid-mcp` | MCP tools (stdio) |

---

## Install

Install from source (this repo publishes source tarballs on GitHub Releases, not PyPI):

```bash
git clone https://github.com/android-security-engineer/APKiDSkills
cd APKiDSkills
pip install -e .
```

Optional MCP server support:

```bash
pip install -e ".[mcp]"
```

Or from a release tarball:

```bash
wget https://github.com/android-security-engineer/APKiDSkills/releases/download/v4.0.0/apkid-4.0.0.tar.gz
tar xzf apkid-4.0.0.tar.gz
cd apkid-4.0.0
pip install -e .
```

### Docker

```bash
git clone https://github.com/android-security-engineer/APKiDSkills
cd APKiDSkills/
docker build . -t apkid

# Classic CLI
docker/apkid.sh ~/reverse/targets/android/example/example.apk

# AI CLI (structured JSON output)
docker run --rm -v /path/to/samples:/input:ro apkid apkid-ai-cli scan /input/app.apk

# MCP server (stdio transport)
docker run --rm -i apkid apkid-mcp
```

---

## AI CLI (`apkid-ai-cli`)

Typer-based CLI emitting structured JSON, designed for agent consumption.

### Commands

| Command | Description |
|---------|-------------|
| `scan <file>` | Scan an APK, DEX, or ELF file |
| `batch <dir>` | Batch scan files in a directory (`-r` recursive) |
| `diff <f1> <f2>` | Compare scan results of two files |
| `type <file>` | Identify file type via magic bytes |
| `info` | Version, rules hash, rules count |
| `list-tags` | All detection tags + descriptions |
| `rules list` / `rules compile` | Manage YARA rules |
| `skills` | Self-discovery: list every available command |

### Examples

```bash
apkid-ai-cli scan /path/to/app.apk                 # JSON (default)
apkid-ai-cli scan /path/to/app.apk --format text   # human text
apkid-ai-cli batch samples/ -r --pattern "*.apk"   # batch scan
apkid-ai-cli diff app-v1.apk app-v2.apk            # protection diff
apkid-ai-cli type /path/to/file                    # magic-bytes type
apkid-ai-cli info
apkid-ai-cli list-tags
apkid-ai-cli skills                                # self-discover
```

### Output Format

Every command returns a structured JSON envelope:

```json
{
  "schema_version": "1.0.0",
  "error": false,
  "target": "/path/to/app.apk",
  "findings": [
    {
      "tag": "packer",
      "category": "packer",
      "description": "Detects APK packing/obfuscation tools",
      "source": "classes.dex",
      "identifier": "bangcle",
      "rule_detail": "Bangcle packer"
    }
  ],
  "summary": {
    "total_findings": 1,
    "categories": { "packer": 1 }
  },
  "scanned_at": "2026-01-01T00:00:00+00:00"
}
```

Errors go to **stderr**:

```json
{"error": true, "message": "File not found", "detail": "FileNotFoundError"}
```

### Detection Categories (20)

| Category | Description |
|----------|-------------|
| `compiler` | Compiler or build tool fingerprints |
| `packer` | APK packing/obfuscation tools (Bangcle, 360, Tencent Legu…) |
| `protector` | App protection/shielding SDKs |
| `obfuscator` | Code obfuscation tools (ProGuard, DexGuard…) |
| `signer` | APK signing certificates and signers |
| `anti_vm` | Anti-VM / anti-emulator techniques |
| `anti_debug` | Anti-debugging techniques |
| `anti_disassembly` | Anti-disassembly techniques |
| `anti_root` | Anti-root techniques |
| `anti_hook` | Anti-hooking techniques (anti-Frida, anti-Xposed) |
| `hook` | Hooking frameworks (Xposed, Frida…) |
| `root` | Root detection or root-related libraries |
| `anticheat` | Anti-cheat SDKs |
| `dropper` | Dropper / loader behavior patterns |
| `embedded` | Embedded payloads |
| `manipulator` | APK manipulation tools |
| `abnormal` | Abnormal or suspicious modifications |
| `file_type` | File type information |
| `internal` | Internal / development artifacts |
| `yara_issue` | YARA engine issues (DEX recognized by APKiD but not the YARA module) |

---

## MCP Server (`apkid-mcp`)

Exposes scanning as standards-compliant [MCP](https://modelcontextprotocol.io/) tools over stdio.

### Install & run

```bash
pip install -e ".[mcp]"
apkid-mcp                        # stdio transport (Claude Code, other MCP hosts)
# or: python -m apkid.mcp
```

### Tools

| Tool | Description |
|------|-------------|
| `scan_file` | Scan an APK, DEX, or ELF file |
| `batch_scan` | Batch scan a directory |
| `diff_files` | Compare two files |
| `type_file` | Identify file type via magic bytes |
| `info` | Version and rules info |
| `list_tags` | All detection tags |
| `rules` | List or compile YARA rules |
| `skills` | Self-discovery: list all MCP tools |

### Claude Code config

`.claude/settings.json` or `settings.local.json`:

```json
{
  "mcpServers": {
    "apkid": { "command": "apkid-mcp", "args": [] }
  }
}
```

Installed in a venv: point `command` at `/path/to/venv/bin/apkid-mcp`.

---

## Claude Code Skills

This repo is also a **Claude Code Skills** package: ready-made agent instructions for scanning workflows.

### Install

```bash
claude skills add --source https://github.com/android-security-engineer/APKiDSkills
# or locally:
claude skills add --source /path/to/APKiDSkills
```

### Skills

| Skill | Command | Description |
|-------|---------|-------------|
| `apkid-scan` | `/apkid-scan` | Scan one APK/DEX/ELF file |
| `apkid-batch` | `/apkid-batch` | Batch scan a directory |
| `apkid-diff` | `/apkid-diff` | Diff two files for protection changes |
| `apkid-type` | `/apkid-type` | File type via magic bytes |
| `apkid-rule-dev` | `/apkid-rule-dev` | Develop and test YARA rules |
| `apkid-skills` | `/apkid-skills` | Self-discover available commands |

Skills are defined in `.claude/skills/` as `SKILL.md` with YAML frontmatter. Development notes: the plugin loader `.claude/plugins/ai-apkid.js` must list every skill, and each skill needs a matching `apkid/cli/cmd_*.py` typer command registered in `apkid/cli/app.py`.

---

## Classic CLI (`apkid`)

Argparse CLI with human-readable output:

```bash
apkid app.apk
apkid aft-v13.elf --typing magic -j -o out.json
```

```
usage: apkid [-h] [-v] [-t TIMEOUT] [-r] [--scan-depth SCAN_DEPTH]
             [--entry-max-scan-size ENTRY_MAX_SCAN_SIZE] [--typing {magic,filename,none}] [-j]
             [-o DIR]
             [FILE [FILE ...]]
```

---

## How It Works

YARA rule-based multi-layer signature matching across three layers:

| Layer | Scan target | Matches |
|-------|-------------|---------|
| APK | the APK as a ZIP archive | native lib paths, assets paths, META-INF signatures |
| DEX | classes.dex and other DEX files | class names, string constants, Dalvik bytecode |
| ELF | .so native libraries | compiler version strings, symbol names, instructions |

Notable techniques: native library path matching (`lib/arm64-v8a/libjiagu.so` → 360 Jiagu), stub class name matching (`Lcom/stub/StubApp;`), `attachBaseContext()` unpacking-loop bytecode patterns, crypto-loop fingerprinting (XOR/AES), OLLVM version strings in the `.comment` ELF section, and obfuscation patterns (control-flow flattening, bogus control flow).

## Submitting New Packers / Compilers / Obfuscators

Open an issue with:

* what you think it is — obfuscated, packed, etc.
* the file hash (MD5 / SHA1 / SHA256)

Anything detectable is welcome — anti-disassembler, anti-VM, anti-* tricks included. For rule PRs, include a sample file hash for verification.

## License

Dual-licensed: commercial (closed-source-friendly) or GPL. See [LICENSE.COMMERCIAL](LICENSE.COMMERCIAL) and [LICENSE.GPL](LICENSE.GPL).

## Development

```bash
git clone https://github.com/android-security-engineer/APKiDSkills
cd APKiDSkills
python prep-release.py      # compile YARA rules → rules.yarc
pip install -e .[dev,test]
pytest tests/ -q
```

Always re-run `prep-release.py` after editing rules (`rules.yarc` is gitignored). Updating rules is testing locally and validated in CI.

## For Package Maintainers

Bump the version in `apkid/__init__.py`, regenerate README + rules, build, and publish:

```bash
./prep-release.py readme
rm -f dist/*
python setup.py sdist bdist_wheel
twine upload --repository-url https://upload.pypi.org/legacy/ dist/*
```

---

# 简体中文文档

[**English**](#apkid--skills-for-ai-agents)

**APKiD** —— *Android 版的 PEiD* —— 用 365+ 条 YARA 规则识别 Android **APK / DEX / ELF** 中的编译器、加壳器、保护器、混淆器、签名器等痕迹。

本发行版专为 **AI Agent**（Claude Code、Codex、MCP 宿主）设计，所有能力都以结构化、机器可读的接口暴露，无需脆弱地解析文本输出。

| | |
|---|---|
| 🌐 **官网** | https://android-security-engineer.github.io/APKiDSkills/ |
| 📚 **文档** | https://android-security-engineer.github.io/APKiDSkills/guide/what-is-apkid |

## 快速参考

| 需求 | 命令 |
|---|---|
| 扫描单个文件（结构化 JSON） | `apkid-ai-cli scan app.apk` |
| 批量扫描目录 | `apkid-ai-cli batch samples/ -r` |
| 对比两个样本 / 版本 | `apkid-ai-cli diff v1.apk v2.apk` |
| 快速识别文件类型 | `apkid-ai-cli type file` |
| 列出全部检测标签 | `apkid-ai-cli list-tags` |
| 自发现全部命令 | `apkid-ai-cli skills` |
| 以 MCP（stdio）提供工具 | `apkid-mcp` |
| 在 Claude Code 中扫描 | skill：`/apkid-scan` |

**协议约定**（见下方「输出格式」）：

* 所有机器可读响应均为 JSON 信封，含 `"schema_version": "1.0.0"`。
* 错误输出到 **stderr**：`{"error": true, "message": ..., "detail": ...}`。
* CLI 与 MCP 共用同一扫描核心（`apkid.cli.common.make_scanner()` + `apkid.ai_output.AIOutputFormatter`），行为完全一致。

## 接口

| # | 接口 | 入口 | 输出 |
|---|---|---|---|
| 1 | 经典 CLI | `apkid` | 人性化文本 |
| 2 | AI CLI | `apkid-ai-cli` | 结构化 JSON |
| 3 | MCP 服务器 | `apkid-mcp` | MCP 工具（stdio） |

## 安装

从源码安装（本仓库在 GitHub Releases 发布源码包，而非 PyPI）：

```bash
git clone https://github.com/android-security-engineer/APKiDSkills
cd APKiDSkills
pip install -e .
```

可选 MCP 支持：

```bash
pip install -e ".[mcp]"
```

或从发布包安装：

```bash
wget https://github.com/android-security-engineer/APKiDSkills/releases/download/v4.0.0/apkid-4.0.0.tar.gz
tar xzf apkid-4.0.0.tar.gz
cd apkid-4.0.0
pip install -e .
```

### Docker

```bash
git clone https://github.com/android-security-engineer/APKiDSkills
cd APKiDSkills/
docker build . -t apkid

docker/apkid.sh ~/samples/example.apk                                  # 经典 CLI
docker run --rm -v /path/to/samples:/input:ro apkid apkid-ai-cli scan /input/app.apk
docker run --rm -i apkid apkid-mcp                                     # MCP（stdio）
```

## AI CLI（`apkid-ai-cli`）

基于 Typer，输出结构化 JSON，面向 Agent 消费。

### 命令

| 命令 | 说明 |
|---|---|
| `scan <file>` | 扫描 APK / DEX / ELF 文件 |
| `batch <dir>` | 批量扫描目录（`-r` 递归） |
| `diff <f1> <f2>` | 对比两个文件的加固差异 |
| `type <file>` | 按魔数识别文件类型 |
| `info` | 版本、规则哈希、规则数 |
| `list-tags` | 列出全部检测标签及说明 |
| `rules list` / `rules compile` | 管理 YARA 规则 |
| `skills` | 自发现：列出全部可用命令 |

### 示例

```bash
apkid-ai-cli scan /path/to/app.apk                 # JSON（默认）
apkid-ai-cli scan /path/to/app.apk --format text   # 文本
apkid-ai-cli batch samples/ -r --pattern "*.apk"   # 批量
apkid-ai-cli diff app-v1.apk app-v2.apk            # 差异对比
apkid-ai-cli type /path/to/file
apkid-ai-cli info
apkid-ai-cli list-tags
apkid-ai-cli skills                                # 自发现
```

### 输出格式

所有命令返回统一 JSON 信封：

```json
{
  "schema_version": "1.0.0",
  "error": false,
  "target": "/path/to/app.apk",
  "findings": [
    {
      "tag": "packer",
      "category": "packer",
      "description": "Detects APK packing/obfuscation tools",
      "source": "classes.dex",
      "identifier": "bangcle",
      "rule_detail": "Bangcle packer"
    }
  ],
  "summary": { "total_findings": 1, "categories": { "packer": 1 } },
  "scanned_at": "2026-01-01T00:00:00+00:00"
}
```

错误输出到 **stderr**：

```json
{"error": true, "message": "File not found", "detail": "FileNotFoundError"}
```

### 检测类别（20 类）

| 类别 | 说明 |
|---|---|
| `compiler` | 编译器 / 构建工具指纹 |
| `packer` | APK 加壳 / 混淆工具（Bangcle、360、腾讯乐固…） |
| `protector` | 应用保护 / 加固 SDK |
| `obfuscator` | 代码混淆工具（ProGuard、DexGuard…） |
| `signer` | APK 签名证书与签名工具 |
| `anti_vm` | 反虚拟机 / 反模拟器 |
| `anti_debug` | 反调试 |
| `anti_disassembly` | 反反汇编 |
| `anti_root` | 反 Root |
| `anti_hook` | 反 Hook（反 Frida、反 Xposed） |
| `hook` | Hook 框架（Xposed、Frida…） |
| `root` | Root 检测或相关库 |
| `anticheat` | 反作弊 SDK |
| `dropper` | Dropper / 加载器行为模式 |
| `embedded` | 内嵌载荷 |
| `manipulator` | APK 篡改工具 |
| `abnormal` | 异常或可疑修改 |
| `file_type` | 文件类型信息 |
| `internal` | 内部 / 开发产物 |
| `yara_issue` | YARA 引擎问题（APKiD 识别出 DEX 但 YARA 模块未能识别） |

## MCP 服务器（`apkid-mcp`）

以标准 [MCP](https://modelcontextprotocol.io/) 协议通过 stdio 暴露扫描能力。

```bash
pip install -e ".[mcp]"
apkid-mcp          # stdio（Claude Code 及其他 MCP 宿主）
```

| 工具 | 说明 |
|---|---|
| `scan_file` | 扫描 APK / DEX / ELF |
| `batch_scan` | 批量扫描目录 |
| `diff_files` | 对比两个文件 |
| `type_file` | 按魔数识别文件类型 |
| `info` | 版本与规则信息 |
| `list_tags` | 全部检测标签 |
| `rules` | 列出 / 编译 YARA 规则 |
| `skills` | 自发现全部 MCP 工具 |

在 Claude Code 中配置（`.claude/settings.json`）：

```json
{
  "mcpServers": {
    "apkid": { "command": "apkid-mcp", "args": [] }
  }
}
```

## Claude Code Skills

本仓库同时是一个 **Claude Code Skills** 包。

```bash
claude skills add --source https://github.com/android-security-engineer/APKiDSkills
```

| Skill | 命令 | 说明 |
|---|---|---|
| `apkid-scan` | `/apkid-scan` | 扫描单个文件 |
| `apkid-batch` | `/apkid-batch` | 批量扫描 |
| `apkid-diff` | `/apkid-diff` | 对比加固差异 |
| `apkid-type` | `/apkid-type` | 魔数识别文件类型 |
| `apkid-rule-dev` | `/apkid-rule-dev` | 开发与测试 YARA 规则 |
| `apkid-skills` | `/apkid-skills` | 自发现可用命令 |

## 经典 CLI（`apkid`）

```bash
apkid app.apk
apkid aft-v13.elf --typing magic -j -o out.json
```

## 工作原理

YARA 规则驱动的多层签名匹配，扫描三个层面：

| 层 | 扫描目标 | 匹配内容 |
|---|---|---|
| APK | 作为 ZIP 归档的 APK | 原生库路径、assets 路径、META-INF 签名 |
| DEX | classes.dex 等 | 类名、字符串常量、Dalvik 字节码 |
| ELF | .so 原生库 | 编译器版本串、符号名、指令模式 |

常见手法：原生库路径匹配（`lib/arm64-v8a/libjiagu.so` → 360 加固）、桩 Application 类名匹配（`Lcom/stub/StubApp;`）、`attachBaseContext()` 脱壳循环的字节码模式、加解密循环指纹（XOR/AES）、ELF `.comment` 段里的 OLLVM 版本串、混淆模式（控制流平坦化 CFF、虚假控制流 BCF）。

## 提交新的加壳 / 编译器 / 混淆器

在 issue 中提供：

* 你判断的类型——混淆、加壳等
* 文件哈希（MD5 / SHA1 / SHA256）

任何可检测的有趣痕迹都欢迎（反汇编、反 VM、反各种防御技巧）。提交规则 PR 时请附带样本文件哈希以便验证。

## License

双许可：商用（适合闭源项目）或 GPL。详见 [LICENSE.COMMERCIAL](LICENSE.COMMERCIAL) 与 [LICENSE.GPL](LICENSE.GPL)。

## 开发

```bash
python prep-release.py      # 编译 YARA 规则 → rules.yarc
pip install -e .[dev,test]
pytest tests/ -q
```

编辑规则后务必重新运行 `prep-release.py`（`rules.yarc` 已被 gitignore）。

## 包维护者

在 `apkid/__init__.py` 中更新版本号，然后：

```bash
./prep-release.py readme
rm -f dist/*
python setup.py sdist bdist_wheel
twine upload --repository-url https://upload.pypi.org/legacy/ dist/*
```