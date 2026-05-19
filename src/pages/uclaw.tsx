import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './uclaw.module.css';

const features = [
  {
    title: '内嵌运行时，开箱即用',
    description:
      'Windows 安装包自带 Python 3.12 运行时，无需提前配置环境。五步设置向导完成语言、工作区、网关检查、AI 配置和技能安装，首次启动后即可开始对话。',
    icon: '🚀',
  },
  {
    title: '8 大消息渠道，账号级路由',
    description:
      '一处接入微信、WhatsApp、Telegram、Discord、飞书/Lark、钉钉、企业微信、QQ 机器人。每个账号独立绑定智能体——同一应用内，不同账号的消息可路由到不同的 AI 智能体。',
    icon: '📡',
  },
  {
    title: '定时任务 + 渠道自动推送',
    description:
      '用 Cron 表达式或简单时间间隔安排 AI 任务，结果自动推送到已连接渠道的指定联系人。接收目标从渠道会话历史中自动发现，无需手动查找 ID 或编辑配置文件。',
    icon: '⏰',
  },
  {
    title: '联网搜索，对话直达实时信息',
    description:
      '通过 New API 集成 Kimi/Moonshot 搜索模型，在聊天提示词中直接触发联网搜索，无需配置独立搜索服务。明确要求附上来源，即可获得有据可查的实时回答。',
    icon: '🔍',
  },
  {
    title: '预装文档处理与搜索技能',
    description:
      'PDF、XLSX、DOCX、PPTX 文档处理技能开箱即用，无需额外安装。Brave Search 和 Tavily Search 可选配置。技能页一键启用或禁用，更改对新对话立即生效。',
    icon: '🧩',
  },
  {
    title: 'API 密钥存入系统密钥链',
    description:
      'API 密钥和凭据存储在 macOS Keychain、Windows 凭据管理器或 Linux Secret Service 中，从不以明文落盘，也不包含在任何导出的配置文件里。',
    icon: '🔐',
  },
];

const channels = [
  { name: '微信', note: '扫码' },
  { name: 'WhatsApp', note: '扫码' },
  { name: 'Telegram', note: 'Bot Token' },
  { name: 'Discord', note: 'Bot Token' },
  { name: '飞书 / Lark', note: '应用凭据' },
  { name: '钉钉', note: '应用凭据' },
  { name: '企业微信', note: '应用凭据' },
  { name: 'QQ 机器人', note: '应用凭据' },
];

const skills = [
  { name: 'pdf', note: '文档处理' },
  { name: 'xlsx', note: '文档处理' },
  { name: 'docx', note: '文档处理' },
  { name: 'pptx', note: '文档处理' },
  { name: 'find-skills', note: '智能体工具' },
  { name: 'self-improving-agent', note: '智能体工具' },
  { name: 'tavily-search', note: '网络搜索' },
  { name: 'brave-web-search', note: '网络搜索' },
];

const useCases = [
  {
    title: '消息中台',
    description:
      '微信私聊、Telegram 频道、Discord 服务器统一接入，不同账号各绑定专属智能体——客服、助手、通知机器人各司其职，互不干扰。',
  },
  {
    title: '定时情报推送',
    description:
      '每天早上 8 点搜索最新科技新闻，汇总为要点摘要，自动发送到你的微信或 Telegram。一次配置，持续运行，无需手动触发。',
  },
  {
    title: '跨设备便携工作区',
    description:
      '工作区、对话历史和智能体配置保存在 USB 驱动器上。插入任何 Windows、macOS 或 Linux 电脑，通过内置启动器即可从上次停止的地方继续。',
  },
  {
    title: '文档智能分析',
    description:
      '将 PDF 报告、Excel 数据表或 PowerPoint 演示文稿直接上传到对话，预装文档处理技能让智能体直接读取内容、提取数据并生成分析。',
  },
];

const capabilityCards = [
  'Windows 包内自带 Python 3.12',
  '跨平台：macOS / Windows / Linux',
  'USB 双分区便携模式',
  '每智能体独立模型覆盖',
  'Token 使用历史（7 天 / 30 天）',
  '代理：Electron + 网关 + 渠道同步',
  'OpenClaw Doctor 诊断工具',
  '浅色 / 深色 / 跟随系统主题',
  '开机自动启动',
  '多语言界面',
];

export default function UClawPage(): ReactNode {
  return (
    <Layout
      title="UClaw"
      description="UClaw 是 OpenClaw AI 智能体的跨平台桌面界面。无需命令行，连接 8 大消息渠道，内置联网搜索与文档处理技能，支持 USB 便携运行。"
    >
      <main className={styles.page}>
        {/* ── Hero ───────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />

          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.badge}>OpenClaw AI 智能体的桌面界面</div>

                <Heading as="h1" className={styles.heroTitle}>
                  AI 智能体，
                  <span>无需命令行。</span>
                </Heading>

                <p className={styles.heroSubtitle}>
                  UClaw 将 OpenClaw 运行时直接内嵌进桌面应用。安装后启动设置向导，
                  几分钟内完成配置，即可开始聊天、连接消息渠道、安排定时任务。
                  全程可视化操作，无需终端，无需编辑配置文件。
                </p>

                <div className={styles.heroActions}>
                  <Link
                    className="button button--primary button--lg"
                    to="https://github.com/DepartureZSH/UClaw/releases"
                  >
                    下载 UClaw
                  </Link>

                  <Link
                    className="button button--secondary button--lg"
                    to="/docs/intro"
                  >
                    查看文档
                  </Link>
                </div>

                <div className={styles.quickFacts}>
                  <div>
                    <strong>macOS</strong>
                    <span>已支持</span>
                  </div>
                  <div>
                    <strong>Windows</strong>
                    <span>已支持</span>
                  </div>
                  <div>
                    <strong>Linux</strong>
                    <span>已支持</span>
                  </div>
                  <div>
                    <strong>便携 USB</strong>
                    <span>双分区模式</span>
                  </div>
                </div>
              </div>

              <div className={styles.heroPanel}>
                <div className={styles.mockWindow}>
                  <div className={styles.windowBar}>
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className={styles.mockBody}>
                    <div className={styles.sidebar}>
                      <div className={styles.sideItemActive}>对话</div>
                      <div className={styles.sideItem}>模型</div>
                      <div className={styles.sideItem}>渠道</div>
                      <div className={styles.sideItem}>定时</div>
                      <div className={styles.sideItem}>技能</div>
                    </div>

                    <div className={styles.chatArea}>
                      <div className={styles.chatHeader}>
                        <span>OpenClaw Agent</span>
                        <em>● Gateway 已连接</em>
                      </div>

                      <div className={styles.messageIncoming}>
                        搜索今天 AI 领域的重要新闻，附上来源，并通过 Telegram 发送摘要。
                      </div>

                      <div className={styles.messageOutgoing}>
                        已联网搜索。找到 5 条相关资讯，摘要如下……<br/>
                        <small style={{opacity: 0.72}}>正在通过 Telegram Bot 推送 →</small>
                      </div>

                      <div className={styles.composer}>
                        <span>@agent</span>
                        <div>向 UClaw 提问...</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.floatingCardTop}>
                  <strong>8 大消息渠道</strong>
                  <span>微信 · Telegram · Discord · 飞书…</span>
                </div>

                <div className={styles.floatingCardBottom}>
                  <strong>预装技能</strong>
                  <span>pdf · docx · xlsx · pptx · 联网搜索</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why UClaw ───────────────────────────────────── */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>为什么选择 UClaw</span>
              <Heading as="h2">
                让 OpenClaw 真正走入日常使用
              </Heading>
              <p>
                从安装到第一次对话，UClaw 消除了所有命令行门槛。
                运行时内嵌、技能预装、渠道可视化配置——你专注于用，它负责跑。
              </p>
            </div>

            <div className={styles.featureGrid}>
              {features.map((feature) => (
                <article className={styles.featureCard} key={feature.title}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <Heading as="h3">{feature.title}</Heading>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Channels ────────────────────────────────────── */}
        <section className={`${styles.section} ${styles.capabilitySection}`}>
          <div className="container">
            <div className={styles.capabilityLayout}>
              <div>
                <span className={styles.sectionEyebrow}>消息渠道</span>
                <Heading as="h2">
                  8 大平台，账号级智能体绑定
                </Heading>
                <p className={styles.capabilityText}>
                  渠道页面将外部消息平台连接到智能体。微信和 WhatsApp 扫码接入，
                  无需 API 申请；Telegram、Discord、飞书、钉钉等平台填写凭据即可。
                  每个渠道可配置多个账号，每个账号独立绑定到不同的智能体——
                  传入消息自动路由，无需手动转发。
                </p>
                <Link className="button button--primary" to="/docs/features/channels">
                  查看渠道配置文档 →
                </Link>
              </div>

              <div className={styles.capabilityGrid}>
                {channels.map((ch) => (
                  <div className={styles.capabilityCard} key={ch.name}>
                    <span>{ch.name}</span>
                    <small style={{display: 'block', fontWeight: 400, opacity: 0.65, marginTop: '0.2rem'}}>{ch.note}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Skills ──────────────────────────────────────── */}
        <section className={styles.section}>
          <div className="container">
              <div className={styles.capabilityLayout}>
              <div>
                <span className={styles.sectionEyebrow}>技能系统</span>
                <Heading as="h2">
                  预装 8 个技能，一键启用
                </Heading>
                <p className={styles.capabilityText}>
                  UClaw 首次安装时自动部署全部内置技能，无需单独下载或使用包管理器。
                  文档处理技能（PDF / Word / Excel / PPT）无需 API 密钥，安装即用。
                  网络搜索技能在技能页输入 API 密钥后立即生效。
                  每个技能均可在技能页独立启用或禁用，更改对新对话即时生效。
                </p>
                <Link className="button button--primary" to="/docs/features/skills">
                  查看技能管理文档 →
                </Link>
              </div>

              <div className={styles.capabilityGrid}>
                {skills.map((sk) => (
                  <div className={styles.capabilityCard} key={sk.name}>
                    <code style={{fontSize: '0.9rem'}}>{sk.name}</code>
                    <small style={{display: 'block', fontWeight: 400, opacity: 0.65, marginTop: '0.2rem'}}>{sk.note}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Use Cases ────────────────────────────────────── */}
        <section className={`${styles.section} ${styles.capabilitySection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>使用场景</span>
              <Heading as="h2">
                一个桌面应用，承载多种真实工作流
              </Heading>
            </div>

            <div className={styles.useCaseGrid}>
              {useCases.map((item) => (
                <article className={styles.useCaseCard} key={item.title}>
                  <Heading as="h3">{item.title}</Heading>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── All Capabilities ─────────────────────────────── */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.capabilityLayout}>
              <div>
                <span className={styles.sectionEyebrow}>完整能力概览</span>
                <Heading as="h2">
                  桌面应用应有的一切
                </Heading>
                <p className={styles.capabilityText}>
                  UClaw 不只是一个聊天窗口。它管理网关生命周期、同步代理到渠道、
                  提供诊断工具、支持 USB 便携模式，并在系统密钥链中安全存储所有凭据。
                  这是一个为长期日常使用而设计的生产工具。
                </p>
              </div>

              <div className={styles.capabilityGrid}>
                {capabilityCards.map((item) => (
                  <div className={styles.capabilityCard} key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Architecture ─────────────────────────────────── */}
        <section className={styles.architectureSection}>
          <div className="container">
            <div className={styles.architectureBox}>
              <div>
                <span className={styles.sectionEyebrow}>架构</span>
                <Heading as="h2">
                  Electron 界面 + OpenClaw Gateway
                </Heading>
                <p>
                  UClaw 由 React 渲染进程、Electron 主进程和 OpenClaw Gateway 三层组成。
                  渲染进程通过统一 Host API 与主进程通信，主进程负责 Gateway 生命周期、
                  代理配置、系统托盘和自动更新。Gateway 以独立进程运行，
                  默认监听 <code>127.0.0.1:18789</code>，处理 AI 执行、渠道路由和技能调用。
                  API 密钥由主进程写入操作系统原生密钥链，渲染进程不直接持有任何凭据。
                </p>
              </div>

              <div className={styles.architectureFlow}>
                <div>React 渲染进程</div>
                <span>↕</span>
                <div>Host API · Electron 主进程</div>
                <span>↕</span>
                <div>OpenClaw Gateway <small style={{display:'block', fontWeight:400, opacity:0.7}}>:18789</small></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBox}>
              <Heading as="h2">
                立即开始使用 UClaw
              </Heading>
              <p>
                从 GitHub Releases 下载最新版本，运行设置向导，几分钟内完成配置并开始第一次对话。
              </p>

              <div className={styles.heroActions}>
                <Link
                  className="button button--primary button--lg"
                  to="https://github.com/DepartureZSH/UClaw/releases"
                >
                  下载最新版本
                </Link>

                <Link
                  className="button button--secondary button--lg"
                  to="/docs/intro"
                >
                  阅读完整文档
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
