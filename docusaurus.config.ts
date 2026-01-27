import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import { config as dotenvconfig } from 'dotenv'

dotenvconfig()

const BLOG_ENABLED = process.env.BLOG_ENABLED === 'true'

const DEPLOYMENT_URL = process.env.DEPLOYMENT_URL || 'http://localhost:3000'
const BASE_URL = process.env.BASE_URL || '/'
const DEPLOYMENT_BRANCH = process.env.DEPLOYMENT_BRANCH || 'gh-pages'
const GITHUB_ORG = process.env.GITHUB_ORG || 'bodev13'
const GITHUB_PROJECT = process.env.GITHUB_PROJECT || 'devsecops-blog'

const config: Config = {
  title: 'DSO Live Demo Docs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: DEPLOYMENT_URL,
  baseUrl: BASE_URL,

  organizationName: GITHUB_ORG,
  projectName: GITHUB_PROJECT,
  deploymentBranch: DEPLOYMENT_BRANCH,

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
          editUrl: `https://github.com/${GITHUB_ORG}/${GITHUB_PROJECT}`,
        },

        blog: BLOG_ENABLED
          ? {
            showReadingTime: true,
            feedOptions: {
              type: ['rss', 'atom'],
              xslt: true,
            },
            editUrl: `https://github.com/${GITHUB_ORG}/${GITHUB_PROJECT}`,
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
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

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
      darkTheme: prismThemes.github,
      additionalLanguages: ['powershell', 'hcl'],
    },
  } satisfies Preset.ThemeConfig,
}

export default config