import { defineConfig } from 'vitepress'
import { algolia, head, nav, sidebar, markdown, socialLinks } from './configs'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'

// 导出默认配置
export default defineConfig({
  // 站点名称
  title: '简付系统',
  // 站点语言
  lang: 'zh-CN',
  // 站点介绍
  description:
    '简付支付,免签码支付,易支付,彩虹易支付,云支付,优码支付,简付支付系统,码支付官网,扫码支付,支付宝即时到账,微信即时到账,免签约支付,三方支付,四方支付,码支付,SH支付,SH码支付,shmpay扫码支付,易支付,支付平台,云支付,聚合支付,微信支付,源支付,支付接口,第三方支付,收款码,收款平台,支付系统,简付支付系统-行业领先的即时到账支付平台-全网最稳最安全的即时到账支付平台-提供最优质最稳定的在线支付平台，通道轮训，励志打造最稳定最安全的支付系统，提供24小时全天候售后，三网免输金额秒回调，无需挂机，三网免挂会员免费送，0费率，国内高防机房不拉闸秒回调!',
  // 网站头部
  head,
  //'force-dark'强制开启深色模式 false强制开启浅色模式
  // appearance: 'force-dark',

  metaChunk: true,

  // 站点地图
  sitemap: { hostname: 'https://docs.hhddg.top' },

  // markdown-it插件配置
  markdown,

  // 源目录
  srcDir: 'content',

  // 上次更新时间戳
  lastUpdated: true,

  // 开启后网址后缀无'html'
  cleanUrls: true,

  // vite插件
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          debian: 'vscode-icons:file-type-debian',
          bun: 'logos:ubuntu',
          centos: 'logos:centos-icon',
          windows: 'logos:microsoft-windows-icon',
          homebrew: 'logos:homebrew',
          mac: 'logos:apple',
          linux: 'logos:linux-tux',
          rhel: 'logos:redhat-icon',
          android: 'logos:android-icon'
        }
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
    }
  },

  themeConfig: {
    // logo
    logo: { src: '/avatar.png', width: 24, height: 24 },

    // 社交链接
    socialLinks,

    // false去除网站标题 只显示logo
    // siteTitle: false,

    // GitHub编辑页面
    editLink: {
      pattern: 'https://github.com/hhd66624/jianfu/edit/main/content/:path',
      text: '为此页提供修改建议'
    },

    // 目录设置
    outline: 'deep', // 索引级别
    outlineTitle: '本页目录', // 目录文本

    // 上次更新
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'full',
        hourCycle: 'h24'
      }
    },

    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '文章',

    // 主题模式切换
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    darkModeSwitchLabel: '主题模式',

    // markdown 外部链接图标
    // externalLinkIcon: true,
    // 语言切换
    langMenuLabel: '切换语言',

    // 导航栏
    nav,

    // 侧边栏
    sidebar,

    // algolia搜索
    search: {
      provider: 'algolia',
      options: algolia
    },

    // 404
    notFound: {
      title: '找不到页面',
      quote: '页面不见了，也许它去找寻新的冒险了！',
      linkLabel: '返回首页重新探索',
      linkText: '返回首页',
      code: '404'
    }
  }
})
