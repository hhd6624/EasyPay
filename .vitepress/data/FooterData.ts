import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  beian: {
    icp: '鄂ICP备2024060426号',
    police: '粤公网安备44200102445449号',
    showIcon: true
  },
  author: {
    name: 'Theo-Messi',
    link: '#'
  },
  group: [
    {
      title: 'GitHub Source',
      icon: 'mdi:github',
      links: [
        {
          name: 'Theo-Docs',
          href: '#'
        },
        {
          name: '玄学宝典',
          href: '#'
        },
        {
          name: '常用配置文件',
          href: '#'
        },
        {
          name: 'Lumen',
          href: '#'
        }
      ]
    },
    {
      title: '合作伙伴',
      icon: 'mdi:partnership',
      links: [
        {
          name: '青云梯',
          icon: 'el:fire',
          style: 'rgba(255, 87, 51, 1)',
          href: '#'
        },
        { name: '银河录像局', href: '#' },
        { name: '奈飞小铺', href: '#' },
        {
          name: 'FlyingBird',
          href: '#'
        },
        {
          name: '飞兔云',
          href: '#'
        },
        {
          name: 'SMS-Activate',
          href: '#'
        }
      ]
    },
    {
      title: '观影指南',
      target: '_self',
      icon: 'mdi:local-movies',
      links: [
        { name: 'Netflix', href: '#' },
        { name: 'Disney+', href: '#' },
        { name: 'Spotify Premium', href: '#' },
        { name: 'YouTube Premium', href: '#' },
        { name: 'Hulu', href: '#' },
        { name: 'HBO Max', href: '#' }
      ]
    },
    {
      title: '相关链接',
      icon: 'mdi:link-variant',
      links: [
        { name: 'Theo-Docs', href: '#' },
        { name: '玄学宝典', href: '#' },
        { name: 'VitePress', href: '#' }
      ]
    }
  ]
}
