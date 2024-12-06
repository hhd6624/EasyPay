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
    link: '/monitor/windows/windows-monitor',
    activeMatch: '^/monitor/'
  },
  { text: '系统配置', link: '/system/introduction', activeMatch: '^/system/' },
  { text: '规则配置', link: '/example/ruleTree', activeMatch: '^/example/' },
  { text: '云端服务', link: '/cloud/tutorial', activeMatch: '^/cloud/' }
]
