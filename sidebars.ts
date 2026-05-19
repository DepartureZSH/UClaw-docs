import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '入门指南',
      items: ['installation', 'setup-wizard'],
    },
    {
      type: 'category',
      label: '核心功能',
      items: [
        'features/chat',
        'features/channels',
        'features/cron',
        'features/models',
        'features/skills',
      ],
    },
    {
      type: 'category',
      label: '配置',
      items: [
        'configuration/ai-providers',
        'configuration/proxy',
        'configuration/settings',
      ],
    },
    {
      type: 'category',
      label: '高级功能',
      items: [
        'advanced/developer-mode',
        'advanced/portable-usb',
      ],
    },
    {
      type: 'category',
      label: '参考',
      items: ['faq', 'troubleshooting'],
    },
    {
      type: 'category',
      label: '完整手册',
      items: ['user-manual', 'developer-portable-manual'],
    },
  ],
};

export default sidebars;
