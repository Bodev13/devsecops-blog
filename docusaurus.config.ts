import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { config as dotenvconfig } from "dotenv";

dotenvconfig();

const blogEnabled = Boolean(process.env.BLOG_ENABLED === 'true')

const config: Config = {
  title: 'DSO Live Demo Docs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: process.env.DEPLOYMENT_URL ?? "https://Bodev13.github.io",
  baseUrl: process.env.BASE_URL ?? "/devsecops-blog/",

  organizationName: process.env.GITHUB_ORG ?? "Bodev13", // Usually your GitHub org/user name.
  projectName: process.env.GITHUB_PROJECT ?? "devsecops-blog", // Usually your repo name.

  deploymentBranch: process.env.DEPLOYMENT_BRANCH ?? "gh-pages",

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
          editUrl:
            'https://github.com/Bodev13/devsecops-blog',

        },
        blog: blogEnabled ?
          {
            showReadingTime: true,
            feedOptions: {
              type: ['rss', 'atom'],
              xslt: true,
            },
            editUrl:
              'https://github.com/spmse/dev-blog-template',
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
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/Bodev13/devsecops-blog',
          label: 'Github',
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
              label: 'Tutorial',
              to: '/docs/guides/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sven Patrick Meier (spmse). Built with Docusaurus and 💚.`,
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
}


if (blogEnabled) {
  (config.themeConfig.navbar as any).items.push({ to: '/blog', label: 'Blog', position: 'left' });
  (
    config.themeConfig.footer as any
  ).links[2].items.push({
    to: '/blog',
    label: 'Blog',
  });
}

export default config;
