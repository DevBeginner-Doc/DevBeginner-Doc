import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
    lang: 'zh-Hans',
    title: "DevBeginner Doc",
    description: "A help document for programming beginners.",
    themeConfig: {
        //顶部导航栏选项
        nav: nav(),

        //侧边导航栏选项
        sidebar: sidebar(),

        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        footer: {
            message: '基于 MIT 许可发布',
            copyright: `版权所有 © 2024 Frex`
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        { text: 'Home', link: '/' },
        { text: 'Examples', link: '/markdown-examples' }
    ]
}

function sidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Examples',
            items: [
                { text: 'Markdown Examples', link: '/markdown-examples' },
                { text: 'Runtime API Examples', link: '/api-examples' }
            ]
        },
    ]
}

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
    root: {
        translations: {
            button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
            },
            modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                    selectText: '选择',
                    navigateText: '切换'
                }
            }
        }
    }
}