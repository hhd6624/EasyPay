import type { DefaultTheme } from 'vitepress'

// 导航栏设置
export const nav: DefaultTheme.Config['nav'] = [
  { text: '帮助中心', link: '/Bz/Introduction', activeMatch: '^/Bz/' },
  { text: '通道配置', link: '/TD/Zfb/tutorial', activeMatch: '^/TD/' },
  { text: '挂机配置', link: '/RJ/App/monitor', activeMatch: '^/RJ/' },
  // { text: 'VMware ESXi', link: '/ESXi/Install/guide', activeMatch: '^/ESXi/' },
  // { text: '把玩服务器', link: '/vps/settings/Ubuntu', activeMatch: '^/vps/' },
  // {
  //   text: 'ASUS',
  //   link: '/asus/Flashing-prerequisites',
  //   activeMatch: '^/asus/'
  // },
  // {
  //   text: '流媒体观影',
  //   link: '/streaming/Netflix-guide',
  //   activeMatch: '^/streaming/'
  // },
  // {
  //   text: '服务推荐',
  //   link: '/serve/sharing/Account-sharing-guide',
  //   activeMatch: '^/serve/'
  // },
  // { text: '阿里云盘分享', link: 'https://share.theojs.cn/' }
]
