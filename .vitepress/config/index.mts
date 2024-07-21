import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import { zh, search as zhSearch } from './zh.ts'
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite'

export default defineConfig({
  outDir: 'dist',
  srcDir: 'docs',
  lastUpdated: true,

  locales: {
    root: { label: "简体中文", ...zh }
  },

  themeConfig: {
    logo: '/svg/main-img.svg',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FrexCheat/DevBeginner-Doc' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: { ...zhSearch }
      }
    },
  },

  markdown: {
    math: true,
    lineNumbers: true,
    config: (md) => {
      md.use(footnote)
    }
  },

  vite: {
    plugins: [
      GitChangelog({
        repoURL: () => 'https://github.com/FrexCheat/DevBeginner-Doc',
      }),
      GitChangelogMarkdownSection({
        exclude: (id) => id.endsWith('index.md'),
        sections: {
          disableContributors: true,
        },
      }),
    ],

    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
      ],
    },

    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
        '@nolebase/ui'
      ],
    },
  },

  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.loli.net' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://gstatic.loli.net', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.loli.net/css2?family=Noto+Sans+SC:wght@400..900&display=swap', rel: 'stylesheet' }
    ],
    [
      'link',
      { href: 'https://fonts.loli.net/css2?family=Fira+Code:wght@500&display=swap', rel: 'stylesheet' }
    ],
    [
      'link',
      { rel: 'icon', href: '/svg/main-img.svg' }
    ],
  ]
})