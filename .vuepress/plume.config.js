import { defineThemeConfig, } from 'vuepress-theme-plume'
import navbar from './navbar.js'

const footer_massage = `
    Power by &nbsp;<a target="_blank" href="https://v2.vuepress.vuejs.org/" style="display: inline-block">
    <img style="display: inline-block; width: 15px" src="https://skillicons.dev/icons?i=vue&perline=3" alt="" >
    VuePress</a> 
    &nbsp;&&nbsp;
    <a target="_blank" href="https://theme-plume.vuejs.press">
    <img style="display: inline-block; width: 15px" src="https://theme-plume.vuejs.press/plume.png" alt="" >
    vuepress-theme-plume
    </a>
    <br />
    Hosted on &nbsp;
    <a target="_blank" href="https://yun73r.github.io">
    <img style="display: inline-block; width: 15px" src="https://skillicons.dev/icons?i=github&erline=3" alt="" >
    Github
    </a>
    &nbsp;&&nbsp;
    <a target="_blank" href="https://yun73r.netlify.app/">
    <img style="display: inline-block; height: 13px" src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg" alt="" >
    Netlify
    </a>
`

export default defineThemeConfig({
    logo: '/images/basic/yun73r.png',
    profile: {
        name: 'YUN73R',
        avatar: '/images/basic/yun73r.png',
        description: '夜阑卧听风吹雨，\n 铁马冰河入梦来',
        location: '中国甘肃·兰州',
        layout: 'right',
    },
    social: [
        { icon: 'github', link: 'https://github.com/YUN73R' },
        { icon: 'discord', link: 'https://discord.gg/sx8SYtca' },
        { icon: 'bilibili', link: 'https://space.bilibili.com/27716243' }
    ],
    navbarSocialInclude: ['github', 'bilibili', 'discord'],
    navbar,
    sidebar: 'auto',
    footer: {
        message: footer_massage,
        copyright: 'Copyright © 2024-present YUN73R'
    },
    editLinkText: '在 GitHub 上编辑此页',
    docsRepo: 'https://github.com/YUN73R/yun73r.github.io',
    docsDir: 'src',
    externalLinkIcon: true,
    notFound: {
        code: '404',
        title: '页面被偷走了~~',
        quote: '即使慢，驰而不息，纵会落后，纵会失败，但必须能够到达他所向的目标。',
        linkText: '去探索'
    }
})