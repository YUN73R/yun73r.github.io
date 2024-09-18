import comp from "E:/PROGRAME/YUN73R_GITHUB/yun73r.github.io/docs/.vuepress/.temp/pages/guide/mine.html.vue"
const data = JSON.parse("{\"path\":\"/guide/mine.html\",\"title\":\"导航\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"导航\",\"description\":\"页面的描述\"},\"headers\":[],\"git\":{\"updatedTime\":1726653610000,\"contributors\":[{\"name\":\"Yunter_\",\"email\":\"599526934@qq.com\",\"commits\":2}]},\"filePathRelative\":\"guide/mine.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
