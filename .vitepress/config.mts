import { defineConfig } from 'vitepress'
import { algolia, head, nav, sidebar, markdown, socialLinks } from './configs'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'

// 导出默认配置
export default defineConfig({
  // 站点名称
  title: '简付支付系统',
  // 站点语言
  lang: 'zh-CN',
  // 站点介绍
  description:
  '简用支付系统,在线支付解决方案,电子支付服务,移动支付平台,金融科技支付,安全支付系统,简用支付费率,简用支付安全性,电子钱包服务,移动支付技术,数字支付平台,便捷支付体验,简用支付用户评价,金融支付创新',
  // 网站头部
  head,
  //'force-dark'强制开启深色模式 false强制开启浅色模式
  // appearance: 'force-dark',

  metaChunk: true,

  // 站点地图
  sitemap: { hostname: 'https://doc.dghhd.top' },

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
    ]
  },

  themeConfig: {
    // logo
    logo: { src: '/backgrounderaser_1726814027.png', width: 24, height: 24 },

    // 社交链接
    socialLinks,

    // false去除网站标题 只显示logo
    // siteTitle: false,

    // GitHub编辑页面
    editLink: {
      pattern:
        'https://github.com/',
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
    }
  }
})
