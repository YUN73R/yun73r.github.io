import { plumeTheme } from 'vuepress-theme-plume'

export default plumeTheme({
    hostname: 'https://yun73r.netlify.app',
    plugins: {
        shiki: {
            twoslash: true,
            lineNumbers: 10,
        },
        markdownEnhance: { demo: true, include: true },
        markdownPower: { caniuse: true, jsfiddle: true, iconify: true, bilibili: true },

        docsearch: {
            appId: 'KRJOJ00KBL',
            apiKey: '3f3b13613235873fbcbc9d304de18126',
            indexName: 'pengzhanbo',
        },
    },
})