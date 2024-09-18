import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import customTheme from '../../theme/theme'
import { defineUserConfig } from 'vuepress'

import navBar from '../../config/navbar'


export default defineUserConfig({
    //站点配置
    hostname: 'https://yun73r.github.io',
    lang: 'zh-CN',
    title: 'YUN73R',
    description: '这是我的第一个 VuePress 站点',
    public: 'public',//静态资源文件目录
    //主题配置
    // theme: defaultTheme({
    //     navbar: navBar,
    //     logo: 'https://vuejs.org/images/logo.png',
    //     repo: 'https://github.com/yun73r/yun73r.github.io',
    //     sidebar: 'heading',
    // }),
    theme: customTheme({
        navbar: navBar,
    }),
    //打包工具配置
    bundler: viteBundler(),
    //通用配置项
    // dest: 'dist',//打包输出目录
    
})