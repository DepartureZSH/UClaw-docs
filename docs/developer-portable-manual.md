---
sidebar_position: 3
title: 开发者便携版制作手册
description: 面向开发者的 UClaw 便携版构建、校验、打包和发布检查指南。
---

# UClaw 开发者便携版制作手册

资料来源：`/Users/zsh/Documents/UClaw/docs/requirements.md`、`/Users/zsh/Documents/UClaw/docs/changelog.md`、`/Users/zsh/Documents/UClaw/docs/user-guide.md`  
当前基线：UClaw v0.2.11、OpenClaw 2026.4.15

这份手册面向负责构建和发布 UClaw 的开发者，重点说明如何制作可放入移动盘使用的便携版，并如何验证便携版不会污染或错误继承用户本机旧数据。

> 当前 `/Users/zsh/Documents/UClaw` 本地目录不是完整源码检出，只包含文档和截图。下面的命令以远程 UClaw 完整源码仓库为前提；在只有文档目录的环境中不能直接执行构建。

## 1. 便携版目标

便携版应满足这些目标：

- 用户可以把压缩包解压到 U 盘、移动硬盘或任意稳定目录后运行。
- 数据根目录由包内启动器显式指定，不默认导入旧的 `Roaming/UClaw` 数据。
- 工作区、配置、会话和日志可以跟随移动盘移动。
- Windows 包内应包含稳定的 `node.exe` 入口，用于运行内置 OpenClaw CLI/TUI。
- macOS 不建议直接从 ExFAT 分区运行 `.app`；应用可放在 APFS 分区或本机应用目录，数据和工作区放在移动盘。
- Linux 移动盘使用时应保持挂载路径稳定，并确保启动脚本具有执行权限。

## 2. 环境准备

完整源码环境需要：

| 项目 | 要求 |
| --- | --- |
| Node.js | 22+ |
| pnpm | 9+；项目声明包管理器为 `pnpm@10.31.0` |
| 系统 | macOS 11+、Windows 10+、Linux Ubuntu 20.04+ |
| 内存 | 最低 4GB，推荐 8GB |
| 磁盘 | 至少 1GB 可用空间，打包机建议预留更多缓存空间 |

首次检出完整源码后执行：

```bash
pnpm run init
pnpm install
```

如果仓库已经通过 `pnpm run init` 处理依赖和运行时准备，则按项目 README 中的最新初始化说明执行。不要在只包含文档的 `/Users/zsh/Documents/UClaw` 目录中运行打包命令。

## 3. 构建前检查

制作便携版前先完成基础质量检查：

```bash
pnpm lint
pnpm typecheck
pnpm test
```

涉及 Electron 启动、Gateway 生命周期、窗口、托盘、更新、代理或通信路径时，再运行：

```bash
pnpm run test:e2e
pnpm run comms:replay
pnpm run comms:compare
```

如果 `comms:*` 脚本在当前分支不存在，以源码仓库 README 或 `package.json` 中的实际脚本为准，并在发布记录中说明替代验证方式。

## 4. 平台打包命令

项目文档记录的打包命令如下：

```bash
pnpm package
pnpm package:mac
pnpm package:win
pnpm package:linux
```

推荐按目标平台分别执行：

| 平台 | 命令 | 产物重点 |
| --- | --- | --- |
| macOS | `pnpm package:mac` | `.app`、压缩包或安装镜像；确认 Gatekeeper 提示和启动器说明 |
| Windows | `pnpm package:win` | 安装包和便携压缩包；确认包内 `node.exe` 与启动器 |
| Linux | `pnpm package:linux` | AppImage、压缩包或发行包；确认执行权限和运行脚本 |

跨平台产物最好在对应系统上构建和验证。Electron 产物常依赖平台签名、权限、可执行位和系统安全策略；不要只在一个系统上看文件存在就发布。

## 5. 便携版目录建议

便携压缩包建议让用户看到清晰的目录结构：

```text
UClaw-Portable/
  UClaw.exe 或 UClaw.app 或 uclaw
  Launch UClaw.command 或 launch-uclaw.sh
  resources/
  data/
  workspace/
  logs/
  README-portable.txt
```

目录职责：

- `data/`：便携版应用数据根目录，由启动器显式指定。
- `workspace/`：推荐默认工作区，用于保存 OpenClaw 配置、会话和用户数据。
- `logs/`：便于用户反馈问题时定位日志。
- `README-portable.txt`：写明启动方式、移动盘注意事项和常见问题。

如果实际构建系统已有固定目录名，以源码中的实现为准；但发布说明要明确数据根目录和工作区是否随包移动。

## 6. 启动器行为要求

便携启动器至少要做到：

- 显式指定 UClaw 数据根目录，避免默认使用系统全局用户数据目录。
- 显式指定或引导选择工作区目录。
- 使用包内运行时启动 OpenClaw Gateway。
- 保持 Gateway 端口单 owner，默认检查 `127.0.0.1:18789`。
- 在移动盘路径变化时，仍能让用户重新选择工作区。
- 失败时提供可复制的错误信息和日志位置。

Windows 重点：

- 启动器应优先使用包内 `node.exe`。
- 不应默认导入旧的 `%APPDATA%/UClaw` 或 Roaming 数据。
- 在安全软件扫描未完成时，首次启动可能变慢；发布说明中应提醒用户等待解压和扫描完成。

macOS 重点：

- 推荐应用放在 APFS 分区或“应用程序”中。
- 数据和工作区可以放移动盘。
- 若提供 `Launch UClaw.command`，需要确认可执行权限和路径中空格处理。
- 不建议直接从 ExFAT 分区运行 `.app`。

Linux 重点：

- 启动脚本和 AppImage 需要可执行权限。
- 移动盘挂载路径变化会影响工作区复用，文档中应提醒用户保持路径稳定。

## 7. 便携隔离验证

发布前至少做一次干净环境验证：

1. 准备一台没有 UClaw 用户数据的系统，或创建隔离测试用户。
2. 解压便携包到包含空格的路径，例如 `UClaw Portable Test`。
3. 通过包内启动器启动应用。
4. 完成 Setup，选择包内 `workspace/`。
5. 发送一次普通对话请求。
6. 打开模型页，刷新模型列表并检测 web-search。
7. 打开设置页，确认 Gateway 已连接，日志入口可打开。
8. 关闭应用后移动整个目录，再次启动并确认会话和工作区仍可访问。
9. 检查系统默认用户数据目录，确认没有被错误写入便携数据。

如需模拟旧安装污染，再执行：

1. 在系统全局用户数据目录准备一份旧 UClaw 数据。
2. 启动便携版。
3. 确认便携版不会自动导入旧 Roaming 或全局用户数据。
4. 确认用户仍可以手动选择旧工作区，但这是显式选择而不是默认迁移。

## 8. 功能验收清单

| 验收项 | 通过标准 |
| --- | --- |
| 首次启动 | 新用户不打开终端即可完成设置 |
| 数据根目录 | 便携版写入包内或启动器指定的数据目录 |
| 工作区 | 工作区可随移动盘迁移，路径变化时可重新选择 |
| Gateway | 默认端口 `127.0.0.1:18789` 单 owner，状态在界面可见 |
| 模型 | New API 配置、模型 ID、API Key 状态、模型列表刷新可用 |
| 联网搜索 | web-search 配置检测可用，搜索模型可选择 |
| 渠道 | 频道页可保存账号并绑定 Agent；非法账号 ID 会被拒绝 |
| 定时任务 | 可创建、启用、停用和手动触发任务 |
| 技能 | 技能页显示来源位置和实际安装路径 |
| 代理 | 保存代理后 Electron 网络层和 Gateway 重新应用 |
| 日志 | 日志目录可打开，错误信息可复制 |
| 更新 | 移动盘使用时更新流程不会误写系统旧目录 |

## 9. 发布包检查

发布前检查：

- `package.json` 版本号已更新。
- README、中文 README、用户手册和更新文档中的版本号一致。
- `docs/user-guide.md` 或本文档已同步用户可见变化。
- `docs/requirements.md` 已同步新增或变更需求。
- `docs/changelog.md` 已追加版本记录。
- Windows 包内包含 `node.exe`，并能运行内置 OpenClaw CLI/TUI。
- 便携包不默认导入旧 Roaming/UClaw 数据。
- 压缩包解压后没有多余的构建缓存、临时文件或本机绝对路径。
- 截图、离线手册和 Release Notes 中的链接可访问。

## 10. 交付给用户的说明

便携版 Release Notes 建议包含：

```text
1. 下载对应系统的便携压缩包。
2. 完整解压后再启动，不要直接在压缩包内运行。
3. Windows 用户优先运行包内启动器或 UClaw.exe。
4. macOS 用户建议把应用放在“应用程序”或 APFS 分区，工作区可放移动盘。
5. Linux 用户如无法启动，请先给启动脚本或 AppImage 添加执行权限。
6. 移动盘使用时，建议把工作区放在包内 workspace 文件夹。
7. 拷贝未完成、移动盘同步中或系统安全软件扫描中时，不要立即启动。
```

## 11. 故障排查

### 便携版启动后进入 Setup

通常是数据根目录为空、工作区路径不存在、移动盘盘符变化，或者启动器没有正确传入便携数据路径。确认启动器参数、工作区目录和日志。

### Gateway 启动慢

首次启动会准备本地运行环境并检查组件。慢速 U 盘、老电脑或安全软件扫描都可能拖慢启动。先确认文件已经完整解压，再查看 Gateway 日志。

### Windows 找不到 node.exe

确认便携包内是否包含 `node.exe`，启动器是否使用包内路径，以及压缩包是否被安全软件隔离了部分文件。

### 便携版读取了旧数据

检查启动器是否显式指定数据根目录。便携构建的验收标准是不会默认导入旧 Roaming/UClaw 数据；如果需要迁移旧工作区，应让用户手动选择。

### 自动更新很慢

Windows 安装包、压缩包和运行时包含较多小文件。慢速 U 盘写入小文件会非常慢，建议使用速度更好的 U 盘或移动 SSD，并在更新前确认剩余空间。
