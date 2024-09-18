export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/JINXIN/MyGithub/yun73r.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"D:/JINXIN/MyGithub/yun73r.github.io/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"页面的标题"} }],
  ["/guide/mine.html", { loader: () => import(/* webpackChunkName: "guide_mine.html" */"D:/JINXIN/MyGithub/yun73r.github.io/docs/.vuepress/.temp/pages/guide/mine.html.js"), meta: {"title":"导航"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/JINXIN/MyGithub/yun73r.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
