import { defineConfig } from 'vitepress'
import { zh, search as zhSearch } from './zh.ts'

export default defineConfig({
  cleanUrls: true,
  outDir: 'dist',
  srcDir: 'docs',

  locales: {
    root: { label: "简体中文", ...zh }
  },

  vite: {
    optimizeDeps: {
      include: [
        '@nolebase/vitepress-plugin-enhanced-readabilities > @nolebase/ui > @rive-app/canvas',
      ],
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

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/FrexCheat/DevBeginner-Doc' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: { ...zhSearch }
      }
    },

  }
})