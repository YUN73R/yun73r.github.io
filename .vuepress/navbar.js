import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
    { text: '首页', link: '/', icon: 'emojione:house' },
    {
        text: '博客',
        link: '/blog/',
        activeMatch: '^/(blog|article)/',
        icon: 'noto:books',
    },
    {
        text: '更多',
        icon: 'fluent:textbox-more-20-filled',
        items: [
            {
                text: '书籍推荐',
                link: '/ebooks/',
                icon: 'material-symbols:recommend',
                activeMatch: '^/ebooks/',
            },
            {
                text: '站点导航',
                link: '/sites-collect/',
                icon: 'mdi:roadmap',
                activeMatch: '^/sites-collect',
            },
            {
                text: 'Command-Line Interface',
                link: '/cli/',
                icon: 'grommet-icons:cli',
                activeMatch: '^/cli',
            },
        ],
    },
])