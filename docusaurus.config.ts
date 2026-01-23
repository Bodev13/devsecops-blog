import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const blogEnabled = process.env.BLOG_ENABLED === 'true';

const config: Config = {
  title: 'DSO Live Demo Docs',
  tagline: 'DevSecOps Portfolio & Documentation',
  favicon: 'img/favicon.ico',

  // GitHub Pages URL
  url: 'https://bodev13.github.io',

  // MUST match repo name exactly
  baseUrl: '/devsecops-blog/',

  // GitHub repo config
  organizationName: 'Bodev13',
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
          editUrl: 'https://github.com/Bodev13/devsecops-blog',
        },

        blog: blogEnabled
          ? {
            showReadingTime: true,
            feedOptions: {
              type: ['rss', 'atom'],
              xslt: true,
            },
            editUrl: 'https://github.com/Bodev13/devsecops-blog',
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
      title: 'DevSecOps Docs',
      logo: {
        alt: 'DevSecOps Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },

        ...(blogEnabled
          ? [{ to: '/blog', label: 'Blog', position: 'left' }]
          : []),

        {
          href: 'https://github.com/Bodev13/devsecops-blog',
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
            { label: 'Guides', to: '/docs/intro' },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Bodev13',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Repository',
              href: 'https://github.com/Bodev13/devsecops-blog',
            },
            ...(blogEnabled
              ? [{ label: 'Blog', to: '/blog' }]
              : []),
          ],
        },
      ],
      copyright: `
        © ${new Date().getFullYear()} Bodev13<br/>
        DevSecOps Portfolio & Docs<br/>
        Built with Docusaurus ❤️
      `,
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
