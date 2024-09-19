import { defineThemeConfig, } from 'vuepress-theme-plume'
import navbar from './navbar.js'

export default defineThemeConfig({
    logo: '/logo.png',
    docsRepo: 'https://github.com/YUN73R/yun73r.github.io',
    docsDir: 'src',

    navbar,
    profile: {
        name: 'YUN73R',
        avatar: '/images/blogger-fav.png',
        description: '世间的美好总是不期而遇',
    },
    social: [
        { icon: 'github', link: 'https://github.com/YUN73R' },
        { icon: 'discord', link: 'https://discord.gg/sx8SYtca' },
    ],

    editLinkText: '在 GitHub 上编辑此页',
    footer: { copyright: 'Copyright © 2024-present YUN73R' },
    externalLinkIcon: false
})