import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'UClaw Docs',
  tagline: 'UClaw 用户与开发者文档',
  favicon: 'img/logo.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DepartureZSH', // Usually your GitHub org/user name.
  projectName: 'UClaw', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'UClaw Docs',
      logo: {
        alt: 'UClaw Docs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        {to: '/uclaw', label: '产品页', position: 'left'},
        {
          href: 'https://github.com/DepartureZSH/UClaw',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '文档中心',
              to: '/docs/intro',
            },
            {
              label: '用户使用手册',
              to: '/docs/user-manual',
            },
            {
              label: '开发者便携版制作手册',
              to: '/docs/developer-portable-manual',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'UClaw 产品页',
              to: '/uclaw',
            },
            {
              label: 'GitHub Releases',
              href: 'https://github.com/DepartureZSH/UClaw/releases',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/DepartureZSH/UClaw',
            },
            {
              label: 'GitHub Releases',
              href: 'https://github.com/DepartureZSH/UClaw/releases',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UClaw Docs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
