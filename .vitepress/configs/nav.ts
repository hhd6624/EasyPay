import type { DefaultTheme } from 'vitepress'

// 导航栏设置
export const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/', activeMatch: '^/$|^/guide/' },
  {
    text: '通道配置',
    link: '/thoroughfare/tutorial',
    activeMatch: '^/thoroughfare/'
  },
  {
    text: '监控配置',
    link: '/monitor/monitoring-configuration',
    activeMatch: '^/monitor/'
  },
  { text: '云端配置', link: '/cloud/tutorial', activeMatch: '^/cloud/' },
  { text: '系统帮助', link: '/system/introduction', activeMatch: '^/system/' },
  { text: '接入实例', link: '/example/ruleTree', activeMatch: '^/example/' }
]
