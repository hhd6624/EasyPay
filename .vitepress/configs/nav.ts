import type { DefaultTheme } from 'vitepress'

// 导航栏设置
export const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/', activeMatch: '^/$|^/guide/' },
  {
    text: '通道配置',
    link: '/thoroughfare/summary/tutorial',
    activeMatch: '^/thoroughfare/'
  },
  {
    text: '监控配置',
    link: '/monitor/pc/three-net-monitor',
    activeMatch: '^/monitor/'
  },
  { text: '系统帮助', link: '/system/introduction', activeMatch: '^/system/' },
  { text: '接入演示', link: '/example/ruleTree', activeMatch: '^/example/' },
  { text: '云端配置', link: '/cloud/tutorial', activeMatch: '^/cloud/' }
]
