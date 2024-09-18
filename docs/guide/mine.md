---
lang: zh-CN
title: 导航
description: 页面的描述
---
<!-- 相对路径 -->
# 第一个路径
VuePress 2 已经发布 :tada: ！
```js title=".vuepress/config.ts"
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

```ts
// 行号默认是启用的
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// 行号被禁用
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />

![VuePress Logo](/hero.png)