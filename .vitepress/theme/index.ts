import DefaultTheme from 'vitepress/theme'
import { EnhanceAppContext, useRoute, useData } from 'vitepress'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { h } from 'vue'

import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import googleAnalytics from 'vitepress-plugin-google-analytics'
import imageViewer from 'vitepress-plugin-image-viewer'
import {
  DocBox,
  DocLinks,
  DocBoxCube,
  DocVideoLink,
  Announcement,
  DocAsideLogo,
  HomeUnderline,
  HomeFooter,
  Twikoo,
  ShareButton
} from '@theojs/lumen'
import { Aside_Data, Footer_Data, Twikoo_Data } from '../data'
import '@shikijs/vitepress-twoslash/style.css'
import '@theojs/lumen/theme'
import 'viewerjs/dist/viewer.min.css'
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Announcement),
      'aside-ads-before': () => h(DocAsideLogo, { Aside_Data }),
      'layout-bottom': () => h(HomeFooter, { Footer_Data }),
      // 'doc-after': () => h(Twikoo, { Twikoo_Data }),
      'aside-outline-before': () => h(ShareButton)
    })
  },
  enhanceApp: ({ app }: EnhanceAppContext, ctx) => {
    googleAnalytics({ id: 'G-6QN23XNMXB' })
    app.component('Home', HomeUnderline)
    app.component('Box', DocBox)
    app.component('Links', DocLinks)
    app.component('BoxCube', DocBoxCube)
    app.component('VideoLink', DocVideoLink)
    app.use(TwoslashFloatingVue)
  },
  setup() {
    const route = useRoute()
    const { frontmatter } = useData()
    imageViewer(route)
    giscusTalk(
      {
        repo: 'hhd66624/jianfu', //仓库地址
        repoId: 'R_kgDOM5RIig', //仓库ID
        category: 'General', // 默认: `General`
        categoryId: 'DIC_kwDOM5RIis4Ci7SL', //分类ID
        mapping: 'title', // 默认: `pathname`
        strict: '0',
        reactionsEnabled: '0',
        emitMetadata: '0',
        inputPosition: 'top', // 默认: `top`
        lang: 'zh-CN' // 默认: `zh-CN`
      },
      {
        frontmatter,
        route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    )
  }
}
