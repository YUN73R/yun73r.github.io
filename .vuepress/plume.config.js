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
    <svg style="display: inline-block" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 128 128"><path fill="#014847" d="M80.46 82.605h-8.777l-.734-.733V61.326c0-3.656-1.436-6.489-5.844-6.588c-2.269-.06-4.864 0-7.638.11l-.416.425v26.589l-.733.733H47.54l-.733-.733V46.764l.733-.733h19.753c7.677 0 13.899 6.22 13.899 13.898v21.943z"/><path fill="#05bdba" d="M58.942 119.902v-26.33l.733-.734h8.797l.733.733v26.331l-.733.733h-8.796zm0-84.838V8.734L59.675 8h8.797l.733.733v26.331l-.733.733h-8.796zm68.335 34.385H92.169l-.733-.733V59.92l.733-.733h35.108l.733.733v8.797zm-91.436 0H.733L0 68.716V59.92l.733-.733h35.108l.733.733v8.797zm-8.49-35.633v-1.209l6.034-6.033h1.208l9.223 9.223v6.39l-.852.852h-6.39zm7.242 68.235h-1.208l-6.033-6.033v-1.209l9.223-9.222h6.39l.851.851v6.39z"/></svg>
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