import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const blogEnabled = process.env.BLOG_ENABLED === 'true';

const config: Config = {
  title: 'DSO Live Demo Docs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: 'https://bodev13.github.io',
  baseUrl: '/devsecops-blog/',

  organizationName: 'bodev13',
  projectName: 'devsecops-blog',
  deploymentBranch: 'gh-pages',


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

    // Minimal navbar to ensure theme loads (visually unobtrusive)
    navbar: {
      title: '',
      logo: {
        alt: '',
        src: 'img/logo.svg',
      },
      items: [],
    },

    // Footer present but visually empty (prevents theme crash)
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
