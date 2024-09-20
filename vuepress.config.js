import { getDirname, path } from 'vuepress/utils'
import { defineUserConfig } from 'vuepress'
import theme from './.vuepress/theme'
import { viteBundler } from '@vuepress/bundler-vite'

const __dirname = getDirname(import.meta.url)
const resolve = (...dirs) => path.resolve(__dirname, ...dirs)

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'YUN73R',
    locales: {
        '/': { lang: 'zh-CN', title: 'YUN73R', description: '热爱生活' },
    },
    dest: 'dist',
    public: resolve('public'),
    temp: resolve('.vuepress/.temp'),
    cache: resolve('.vuepress/.cache'),
    head: [
        ['link', { rel: 'icon', type: 'image/ico', sizes: '32x32', href: '/favicon.ico' }],
        ['link', { rel: 'icon', type: 'image/ico', sizes: '16x16', href: '/favicon.ico' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.ico' }],
        ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
        ['meta', { name: 'keywords', content: 'YUN73R,前端,front-end' }],
        ['meta', { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=edg' }],
        ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }]
    ],
    plugins: [],
    bundler: viteBundler(),
    theme,
})