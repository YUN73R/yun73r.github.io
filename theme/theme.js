import { defaultTheme } from '@vuepress/theme-default'
import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default options => app => ({
    name: 'vuepress-theme-global',
    extends: defaultTheme(),
    clientConfigFile: path.resolve(__dirname, 'client.js'),
})