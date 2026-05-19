import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './uclaw.module.css';

const features = [
  {
    title: '零配置门槛',
    description:
      '通过图形界面完成安装、初始化和第一次 AI 交互。无需终端命令、YAML 编辑，也不用四处查找环境变量。',
    icon: '⚡',
  },
  {
    title: '智能聊天界面',
    description:
      '在现代桌面界面中与 AI Agent 对话，管理上下文、渲染 Markdown 内容，并将请求直接路由给指定 Agent。',
    icon: '💬',
  },
  {
    title: '多渠道管理',
    description:
      '连接微信、Telegram、Discord、飞书、钉钉、企业微信、QQ Bot 等渠道，支持账号级绑定和 Agent 路由。',
    icon: '📡',
  },
  {
    title: '定时自动化',
    description:
      '直接在桌面应用中安排 AI 任务、周期报告、监控作业和外部推送流程。',
    icon: '⏰',
  },
  {
    title: '可扩展技能系统',
    description:
      '集中浏览、安装、启用和管理 OpenClaw 技能，包括内置的文档处理与搜索相关技能。',
    icon: '🧩',
  },
  {
    title: '安全的模型服务集成',
    description:
      '配置 OpenAI、Anthropic、自定义 OpenAI 兼容网关等服务，凭据通过系统原生安全机制保存。',
    icon: '🔐',
  },
];

const useCases = [
  {
    title: '个人 AI 助手',
    description:
      '将 UClaw 作为日常问答、写作、总结和 Agent 生产力任务的桌面中枢。',
  },
  {
    title: '自动化监控',
    description:
      '创建定时 Agent 来跟踪信息、监听事件，并把结果推送到已连接的渠道。',
  },
  {
    title: '开发者效率',
    description:
      '用于代码审查、文档生成、流程测试，以及编排 AI 辅助开发任务。',
  },
  {
    title: '工作流自动化',
    description:
      '将渠道、Agent、定时任务和技能组合成可视化自动化流程。',
  },
];

const capabilityCards = [
  '内置 OpenClaw 运行时',
  '跨平台桌面应用',
  '浅色 / 深色 / 跟随系统主题',
  '开机自动启动',
  '服务商与模型配置',
  'Gateway 生命周期管理',
  '代理设置与诊断',
  '多语言界面',
];

export default function UClawPage(): ReactNode {
  return (
    <Layout
      title="UClaw"
      description="UClaw 是面向 OpenClaw AI Agent 的桌面端图形界面。"
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />

          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.badge}>OpenClaw AI Agent 的桌面端图形界面</div>

                <Heading as="h1" className={styles.heroTitle}>
                  让强大的 AI Agent
                  <span>走进日常使用。</span>
                </Heading>

                <p className={styles.heroSubtitle}>
                  UClaw 将命令行里的 AI 编排能力，变成精致、易上手的桌面体验。
                  你可以在可视化界面中配置模型服务、管理渠道、安排自动化任务，并与 Agent 协同工作。
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
                    to="https://github.com/DepartureZSH/UClaw"
                  >
                    查看 GitHub
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
                        <em>Gateway 已连接</em>
                      </div>

                      <div className={styles.messageIncoming}>
                        总结今天的更新，并发送到我选择的渠道。
                      </div>

                      <div className={styles.messageOutgoing}>
                        任务已安排。我会生成摘要，通过已配置的 Agent 处理，并使用选定的渠道账号发送。
                      </div>

                      <div className={styles.composer}>
                        <span>@agent</span>
                        <div>向 UClaw 提问...</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.floatingCardTop}>
                  <strong>定时自动化</strong>
                  <span>周期性 Agent 工作流</span>
                </div>

                <div className={styles.floatingCardBottom}>
                  <strong>已启用技能</strong>
                  <span>pdf · docx · xlsx · pptx</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>为什么选择 UClaw</span>
              <Heading as="h2">
                没有命令行门槛的 AI Agent 编排
              </Heading>
              <p>
                UClaw 将 OpenClaw 运行时封装进桌面应用，并提供可视化配置、进程管理、
                Agent 工作流，以及更清爽的终端用户体验。
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

        <section className={`${styles.section} ${styles.capabilitySection}`}>
          <div className="container">
            <div className={styles.capabilityLayout}>
              <div>
                <span className={styles.sectionEyebrow}>为真实桌面场景而构建</span>
                <Heading as="h2">
                  OpenClaw 的图形化控制中心
                </Heading>
                <p className={styles.capabilityText}>
                  UClaw 专注于让 OpenClaw 更容易安装、配置、监控和扩展。
                  它把 Gateway 控制、服务商设置、技能、自动化、诊断和原生桌面行为整合到一个地方。
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

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>使用场景</span>
              <Heading as="h2">
                一个桌面应用，承载多种 Agent 工作流
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

        <section className={styles.architectureSection}>
          <div className="container">
            <div className={styles.architectureBox}>
              <div>
                <span className={styles.sectionEyebrow}>架构</span>
                <Heading as="h2">
                  Electron 界面 + OpenClaw Gateway
                </Heading>
                <p>
                  UClaw 由 Electron 主进程、React 渲染进程、统一 Host API 和 OpenClaw Gateway 运行时组成。
                  渲染进程避免直接耦合 Gateway，主进程负责通信、代理、生命周期控制和兜底行为。
                </p>
              </div>

              <div className={styles.architectureFlow}>
                <div>React 渲染进程</div>
                <span>↓</span>
                <div>Host API / 主进程代理</div>
                <span>↓</span>
                <div>OpenClaw Gateway</div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBox}>
              <Heading as="h2">
                开始使用 UClaw
              </Heading>
              <p>
                下载最新版本，启动设置向导，并连接你的第一个 AI Agent 工作流。
              </p>

              <div className={styles.heroActions}>
                <Link
                  className="button button--primary button--lg"
                  to="https://github.com/DepartureZSH/UClaw/releases"
                >
                  获取最新版本
                </Link>

                <Link
                  className="button button--secondary button--lg"
                  to="https://github.com/DepartureZSH/UClaw/blob/main/user-guide.md"
                >
                  阅读用户指南
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
