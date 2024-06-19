import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
    lang: 'zh-Hans',
    title: "DevBeginner Doc",
    description: "面向编程初学者的帮助文档",
    themeConfig: {
        //顶部导航栏选项
        nav: nav(),

        //侧边导航栏选项
        sidebar: sidebar(),

        editLink: {
            pattern: 'https://github.com/FrexCheat/DevBeginner-Doc/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
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
        { text: '首页', link: '/' },
        { text: '初衷', link: '/Foreword/intention' },
        { text: '入门须知', link: '/Foreword/prerequisites' },
    ]
}

function sidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '序言',
            collapsed: false,
            items: [
                { text: '编写初衷', link: '/Foreword/intention', },
                { text: '入门须知', link: '/Foreword/prerequisites', },
            ]
        },
        {
            text: '环境搭建',
            collapsed: false,
            items: [
                { text: '引入', link: '/Environment/introduction' },
                { text: '前置知识', link: '/Environment/pre-knowledges' },
                {
                    text: 'C/C++',
                    collapsed: true,
                    items: [
                        { text: '概述', link: '/Environment/c-cpp/overview' },
                        { text: 'Dev C++', link: '/Environment/c-cpp/bloodshed-devcpp' },
                        { text: '小熊猫Dev C++', link: '/Environment/c-cpp/red-panda' },
                        { text: 'CodeBlocks', link: '/Environment/c-cpp/codeblocks' },
                        { text: 'Visual Studio', link: '/Environment/c-cpp/visual-studio' },
                        { text: 'Visual Studio Code', link: '/Environment/c-cpp/vs-code' },
                        { text: 'Sublime Text', link: '/Environment/c-cpp/sublime-text' },
                        { text: 'Vim/Neovim', link: '/Environment/c-cpp/vim-neovim' },
                    ]
                },
                {
                    text: 'Java',
                    collapsed: true,
                    items: [
                        { text: '概述', link: '/Environment/java/overview' },
                        { text: 'Eclipse', link: '/Environment/java/eclipse' },
                        { text: 'IntelliJ IDEA', link: '/Environment/java/idea' },
                        { text: 'Visual Studio Code', link: '/Environment/java/vs-code' },
                        { text: 'Sublime Text', link: '/Environment/java/sublime-text' },
                        { text: 'Vim/Neovim', link: '/Environment/java/vim-neovim' },
                    ]
                },
                {
                    text: 'Python',
                    collapsed: true,
                    items: [
                        { text: '概述', link: '/Environment/python/overview' },
                        { text: 'Thonny', link: '/Environment/python/thonny' },
                        { text: 'PyCharm', link: '/Environment/python/pycharm' },
                        { text: 'Python IDLE', link: '/Environment/python/py-idle' },
                        { text: 'Visual Studio Code', link: '/Environment/python/vs-code' },
                        { text: 'Sublime Text', link: '/Environment/python/sublime-text' },
                        { text: 'Vim/Neovim', link: '/Environment/python/vim-neovim' },
                    ]
                },
            ]
        },
        {
            text: '语法基础&基础数据结构',
            collapsed: false,
            items: [
                { text: '引入', link: '/Grammar-DataStructure/introduction', },
                {
                    text: 'C语言',
                    collapsed: true,
                    items: [
                        { text: '概述', link: '/Grammar-DataStructure/c/overview', },
                    ]
                },
                {
                    text: 'C++',
                    collapsed: true,
                    items: [
                        { text: '概述', link: '/Grammar-DataStructure/cpp/overview', },
                    ]
                },
                {
                    text: 'Python',
                    collapsed: true,
                    items: [
                        { text: '概述', link: '/Grammar-DataStructure/python/overview', },
                    ]
                },
                {
                    text: 'Java',
                    collapsed: true,
                    items: [
                        { text: '概述', link: '/Grammar-DataStructure/java/overview', },
                        { text: '初步体验', link: '/Grammar-DataStructure/java/primer', },
                        { text: '注释', link: '/Grammar-DataStructure/java/annotation', },
                        { text: '变量与运算符', link: '/Grammar-DataStructure/java/变量与运算符', },
                    ]
                },
            ]
        },
        {
            text: '算法基础',
            collapsed: false,
            items: [
                { text: '引入', link: '/Algorithm/introduction' },
                { text: 'Hello Algo' },
                { text: 'Oi Wiki' },
            ]
        },
        {
            text: 'Linux初阶',
            collapsed: false,
            items: [
                { text: '引入', link: '/Linux/introduction' },
                { text: '安装', link: '/Linux/install' },
                { text: '包管理器', link: '/Linux/package-mgr' },
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
                    navigateText: '切换',
                    closeText: '关闭',
                }
            }
        }
    }
}
