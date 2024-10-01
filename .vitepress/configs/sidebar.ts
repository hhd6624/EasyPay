import type { DefaultTheme } from 'vitepress'

// 侧边栏配置
export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/Bz/': { base: '/Bz/', items: Sidebar_Bz() },
  '/RJ/': { base: '/RJ/', items: Sidebar_RJ() },
  '/TD/': { base: '/TD/', items: Sidebar_TD() }
}

export function Sidebar_RJ() {
  return [
    {
      text: 'PC端软件监控配置',
      collapsed: false,
      base: '/RJ/Pc/',
      items: [{ text: 'PC监控配置', link: 'pc-monitor' }]
    },
    {
      text: '手机APP监控配置',
      collapsed: false,
      base: '/RJ/App/',
      items: [{ text: 'APP监控配置', link: 'app-monitor' }]
    }
  ]
}

export function Sidebar_Bz() {
  return [
    {
      text: '系统帮助',
      collapsed: false,
      base: '/Bz/',
      items: [
        { text: '系统介绍', link: 'Introduction' },
        { text: '收费标准', link: 'charge' },
        { text: '通道解答', link: 'channel' },
        { text: '赞助我们', link: 'donate' }
      ]
    }
  ]
}

export function Sidebar_TD() {
  return [
    {
      text: '微信支付通道配置',
      collapsed: false,
      base: '/TD/Wx/',
      items: [
        { text: '微信个人码-监控端', link: 'personal-code' },
        { text: '微信赞赏码-监控端', link: 'reward-code' },
        { text: '微信店员-监控端', link: 'store-staff' },
        { text: '微信经营码-监控端', link: 'merchant-code' },
        { text: '微信收款单-监控端', link: 'receipt-code' },
        { text: '微信易支付通道', link: 'easy-pay' },
        { text: '微信V免签通道', link: 'v-sign' },
        { text: '微信店员-代挂', link: 'store-staff-sub' },
        { text: '微信-NativeV3', link: 'NativeV3' }
      ]
    },
    {
      text: '支付宝支付通道配置',
      collapsed: false,
      base: '/TD/Zfb/',
      items: [
        { text: '支付宝公私匙申请', link: 'currency' },
        { text: '支付宝个人码-监控端', link: 'personal-code' },
        { text: '支付宝商家账单通道', link: 'merchant-bill' },
        { text: '支付宝当面付通道', link: 'face-to-face' },
        { text: '支付宝电脑网站支付通道', link: 'computer-website' },
        { text: '支付宝预授权支付通道', link: 'advance-authorization' },
        { text: '支付宝手机网站支付通道', link: 'mobile-website' },
        { text: '支付宝易支付通道', link: 'easy-pay' },
        { text: '支付宝V免签通道', link: 'v-sign' }
      ]
    },
    {
      text: 'QQ支付通道配置',
      collapsed: false,
      base: '/TD/Qq/',
      items: [
        { text: 'QQ个人码-监控端', link: 'personal-code' },
        { text: 'QQ易支付通道', link: 'easy-pay' },
        { text: 'QQV免签', link: 'v-sign' }
      ]
    },
    {
      text: '网银支付通道配置',
      collapsed: false,
      base: '/TD/Wy/',
      items: [
        { text: '京东收银台-监控端', link: 'JD-pay' },
        { text: '网银易支付通道', link: 'easy-pay' },
        { text: '网银京东收银台', link: 'JD-pay-boxjs' },
        { text: '银联前置', link: 'Union-pre-front' },
        { text: '虎皮椒', link: 'HuaPi' }
      ]
    },
    {
      text: 'USDT 支付通道配置',
      link: 'Markdown',
      collapsed: false,
      base: '/TD/Usdt/',
      items: [{ text: 'Usdt-Trc20', link: 'Trc20' }]
    },
    {
      text: 'PayPal 支付通道配置',
      link: 'Vercel-CLI',
      collapsed: false,
      base: '/TD/PayPal/',
      items: []
    }
  ]
}
