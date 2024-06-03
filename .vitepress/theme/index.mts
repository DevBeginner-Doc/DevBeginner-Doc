import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import { NolebaseEnhancedReadabilitiesMenu, NolebaseEnhancedReadabilitiesScreenMenu } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { NolebaseHighlightTargetedHeading } from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'
import { NolebaseGitChangelog } from '@nolebase/vitepress-plugin-git-changelog/client'
import type { Options as NolebaseReadOptions } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { InjectionKey as NolebaseReadInjectionKey } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
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
      'doc-footer-before': () => h(NolebaseGitChangelog),
    })
  },

  enhanceApp({ app, router, siteData }) {
    // app.use(NolebaseGitChangelogPlugin);
    app.provide(NolebaseReadInjectionKey, {
      layoutSwitch: {
        defaultMode: 5,
        contentLayoutMaxWidth: {
          defaultMaxWidth: 90
        },
        pageLayoutMaxWidth: {
          defaultMaxWidth: 80
        }
      }
    } as NolebaseReadOptions)
  }
} satisfies Theme