import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { config as dotenvconfig } from 'dotenv';

dotenvconfig();

const blogEnabled = 'true';

const DEPLOYMENT_URL = process.env.DEPLOYMENT_URL ?? 'https://bodev13.github.io';
const BASE_URL = process.env.BASE_URL ?? '/devsecops-blog/';

const config: Config = {
  title: 'DSO Live Demo Docs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: DEPLOYMENT_URL,
  baseUrl: BASE_URL,

  organizationName: process.env.GITHUB_ORG ?? 'bodev13',
  projectName: process.env.GITHUB_PROJECT ?? 'devsecops-blog',
  deploymentBranch: process.env.DEPLOYMENT_BRANCH ?? 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl: 'https://github.com/bodev13/devsecops-blog',
        },

        blog: blogEnabled
          ? {
            showReadingTime: true,
            feedOptions: {
              type: ['rss', 'atom'],
              xslt: true,
            },
            editUrl: 'https://github.com/bodev13/devsecops-blog',
            onInlineTags: 'warn',
            onInlineAuthors: 'warn',
            onUntruncatedBlogPosts: 'warn',
          }
          : false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    navbar: {
      title: '',
      logo: {
        alt: '',
        src: 'img/logo.svg',
      },
      items: [],
    },

    footer: {
      style: 'dark',
      links: [],
      copyright: ' ',
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell', 'hcl'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
