import type { DefaultTheme } from 'vitepress'

// 导航栏设置
export const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/', activeMatch: '^/$|^/guide/' },
  { text: '通道配置', link: '/TD/Zfb/tutorial', activeMatch: '^/TD/' },
  { text: '监控配置', link: '/RJ/App/monitor', activeMatch: '^/RJ/' },
  { text: '系统帮助', link: '/Bz/Introduction', activeMatch: '^/Bz/' },
  {
    text: '接入实例',
    link: '/AccessInstance/RuleProject/RuleTree',
    activeMatch: '^/AccessInstance/'
  }
]
