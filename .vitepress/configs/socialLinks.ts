import type { DefaultTheme } from 'vitepress'
// 社交链接设置

export const socialLinks: DefaultTheme.SocialLink[] = [
  {
    icon: 'github',
    link: '#',
    ariaLabel: 'Github'
  },
  {
    icon: 'gmail',
    link: '#',
    ariaLabel: 'Gmail'
  },
  {
    icon: 'telegram',
    link: '#',
    ariaLabel: 'Telegram'
  },
  {
    icon: {
      svg: '<iconify-icon icon="twemoji:red-heart" style="margin-right: 0.125em; margin-bottom: 0.125rem; font-size:1.2em" alt="Github Sponsors"></iconify-icon>'
    },
    link: '#',
    ariaLabel: 'Github Sponsors'
  }
]
