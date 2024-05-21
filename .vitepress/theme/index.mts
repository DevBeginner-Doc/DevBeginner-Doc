import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import { NolebaseEnhancedReadabilitiesMenu, NolebaseEnhancedReadabilitiesScreenMenu } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { NolebaseHighlightTargetedHeading } from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'
import './style.css'

export default {
  extends: DefaultTheme,

  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'layout-top': () => h(NolebaseHighlightTargetedHeading),
    })
  },

  enhanceApp({ app, router, siteData }) {
    app.use(NolebaseGitChangelogPlugin);
  }
} satisfies Theme