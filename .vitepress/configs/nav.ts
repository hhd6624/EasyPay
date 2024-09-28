import type { DefaultTheme } from 'vitepress'

// 导航栏设置
export const nav: DefaultTheme.Config['nav'] = [
  { text: '说明文档', link: '/Jj/instructions', activeMatch: '^/Jj/' },
  { text: '通道文档', link: '/TD/Zfb/tutorial', activeMatch: '^/TD/' },
  {
    text: '自挂文档',
    link: '/RJ/App/monitor',
    activeMatch: '^/RJ/'
  },
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
