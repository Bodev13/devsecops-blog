import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { config as dotenvconfig } from 'dotenv';

dotenvconfig();

const blogEnabled = process.env.BLOG_ENABLED === 'true';

const config: Config = {
  title: 'DSO Live Demo Docs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: 'https://bodev13.github.io',
  baseUrl: '/devsecops-blog/',


  organizationName: process.env.GITHUB_ORG ?? 'Bodev13',
  projectName: process.env.GITHUB_PROJECT ?? 'devsecops-blog',
  deploymentBranch: process.env.DEPLOYMENT_BRANCH ?? 'gh-pages',

  onBrokenLinks: 'throw',
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
          editUrl: 'https://github.com/Bodev13/devsecops-blog',
        },
        blog: blogEnabled
          ? {
            showReadingTime: true,
            feedOptions: {
              type: ['rss', 'atom'],
              xslt: true,
            },
            editUrl: 'https://github.com/spmse/dev-blog-template',
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


    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell', 'hcl'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
