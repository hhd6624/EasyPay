import type { HeadConfig } from 'vitepress'

// 导出head配置
export const head: HeadConfig[] = [
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
  [
    'meta',
    { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }
  ],
  ['meta', { name: 'manifest', href: '/manifest.json' }],
  [
    'link',
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
  ],
  ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  [
    'link',
    { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' }
  ],
  [
    'link',
    { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' }
  ],
  [
    'link',
    { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' }
  ],
  [
    'link',
    { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' }
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      href: '/apple-icon-114x114.png'
    }
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      href: '/apple-icon-120x120.png'
    }
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      href: '/apple-icon-144x144.png'
    }
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      href: '/apple-icon-152x152.png'
    }
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-icon-180x180.png'
    }
  ],
  [
    'link',
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png'
    }
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png'
    }
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '36x36',
      href: '/android-icon-36x36.png'
    }
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '48x48',
      href: '/android-icon-48x48.png'
    }
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '72x72',
      href: '/android-icon-72x72.png'
    }
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: '/android-icon-96x96.png'
    }
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '144x144',
      href: '/android-icon-144x144.png'
    }
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: '/android-icon-192x192.png'
    }
  ],
  ['meta', { name: 'author', content: 'Theo-Messi' }],
  ['meta', { name: 'copyright', content: 'Theo-Messi' }],
  ['meta', { name: 'og:type', content: 'website' }],
  ['meta', { name: 'og:locale', content: 'zh-CN' }],
  ['meta', { name: 'og:site_name', content: 'Theo Docs' }],
  ['meta', { name: 'og:title', content: 'Theo Docs' }],
  ['meta', { name: 'og:url', content: 'https://doc.theojs.cn/' }],
  ['meta', { name: 'og:image', content: 'https://doc.theojs.cn/avatar.png' }],
  ['meta', { name: 'robots', content: 'index, follow' }],
  ['meta', { name: 'evisit-after', content: '1 day' }],
  [
    'meta',
    {
      name: 'description',
      content:
        '简付支付,免签码支付,易支付,彩虹易支付,云支付,优码支付,简付支付系统,码支付官网,扫码支付,支付宝即时到账,微信即时到账,免签约支付,三方支付,四方支付,码支付,SH支付,SH码支付,shmpay扫码支付,易支付,支付平台,云支付,聚合支付,微信支付,源支付,支付接口,第三方支付,收款码,收款平台,支付系统'
    }
  ],
  ['meta', { name: 'format-detection', content: 'telephone=no' }],
  [
    'meta',
    { name: 'google-site-verification', content: '16826854815998093032' }
  ],
  [
    'meta',
    {
      name: 'og:description',
      content:
        '简付支付,免签码支付,易支付,彩虹易支付,云支付,优码支付,简付支付系统,码支付官网,扫码支付,支付宝即时到账,微信即时到账,免签约支付,三方支付,四方支付,码支付,SH支付,SH码支付,shmpay扫码支付,易支付,支付平台,云支付,聚合支付,微信支付,源支付,支付接口,第三方支付,收款码,收款平台,支付系统'
    }
  ],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@TheoMessi_' }],
  ['meta', { name: 'twitter:title', content: 'Theo-Docs' }],
  [
    'meta',
    {
      name: 'twitter:description',
      content:
        '简付支付,免签码支付,易支付,彩虹易支付,云支付,优码支付,简付支付系统,码支付官网,扫码支付,支付宝即时到账,微信即时到账,免签约支付,三方支付,四方支付,码支付,SH支付,SH码支付,shmpay扫码支付,易支付,支付平台,云支付,聚合支付,微信支付,源支付,支付接口,第三方支付,收款码,收款平台,支付系统。'
    }
  ],
  [
    'meta',
    { name: 'twitter:image', content: 'https://doc.theojs.cn/avatar.png' }
  ],
  [
    'script',
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: 'https://docs.hhddg.top/',
        name: 'Theo-Docs',
        description:
          '简付支付,免签码支付,易支付,彩虹易支付,云支付,优码支付,简付支付系统,码支付官网,扫码支付,支付宝即时到账,微信即时到账,免签约支付,三方支付,四方支付,码支付,SH支付,SH码支付,shmpay扫码支付,易支付,支付平台,云支付,聚合支付,微信支付,源支付,支付接口,第三方支付,收款码,收款平台,支付系统',
        author: {
          '@type': 'Person',
          name: '晚风知我意'
        }
      })
    }
  ]
]
