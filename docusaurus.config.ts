import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import { config as dotenvconfig } from 'dotenv'

dotenvconfig()

const BLOG_ENABLED = process.env.BLOG_ENABLED === 'true'

if (!process.env.DEPLOYMENT_URL) throw new Error('DEPLOYMENT_URL is missing')
if (!process.env.BASE_URL) throw new Error('BASE_URL is missing')
if (!process.env.DEPLOYMENT_BRANCH) throw new Error('DEPLOYMENT_BRANCH is missing')
if (!process.env.GITHUB_ORG) throw new Error('GITHUB_ORG is missing')
if (!process.env.GITHUB_PROJECT) throw new Error('GITHUB_PROJECT is missing')

const config: Config = {
  title: 'DSO Live Demo Docs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: process.env.DEPLOYMENT_URL,
  baseUrl: process.env.BASE_URL,

  organizationName: process.env.GITHUB_ORG,
  projectName: process.env.GITHUB_PROJECT,
  deploymentBranch: process.env.DEPLOYMENT_BRANCH,

  trailingSlash: false,

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
          editUrl: `https://github.com/${process.env.GITHUB_ORG}/${process.env.GITHUB_PROJECT}`,
        },

        blog: BLOG_ENABLED
          ? {
            showReadingTime: true,
            feedOptions: {
              type: ['rss', 'atom'],
              xslt: true,
            },
            editUrl: `https://github.com/${process.env.GITHUB_ORG}/${process.env.GITHUB_PROJECT}`,
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

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

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
      darkTheme: prismThemes.github,
      additionalLanguages: ['powershell', 'hcl'],
    },
  } satisfies Preset.ThemeConfig,
}

export default config
