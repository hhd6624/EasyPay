import type { DefaultTheme } from 'vitepress'

type SidebarItem = DefaultTheme.SidebarItem

// 侧边栏配置
export const sidebar: DefaultTheme.SidebarMulti = {
  '/system/': { base: '/system/', items: Sidebar_system() },
  '/monitor/': { base: '/monitor/', items: Sidebar_monitor() },
  '/thoroughfare/': { base: '/thoroughfare/', items: Sidebar_thoroughfare() },
  '/example/': { base: '/example/', items: Sidebar_example() }
}

export function Sidebar_monitor(): SidebarItem[] {
  return [
    {
      text: 'PC监控通道配置',
      collapsed: false,
      base: '/monitor/pc/',
      items: [{ text: '三网监控配置', link: 'three-net-monitor' }]
    },
    {
      text: 'APP监控配置',
      collapsed: false,
      base: '/monitor/app/',
      items: [{ text: 'APP监控配置', link: 'app-monitor' }]
    }
  ]
}

export function Sidebar_example(): SidebarItem[] {
  return [
    {
      text: '产品实例',
      collapsed: false,
      base: '/example/',
      items: [
        { text: '规则支付演示', link: 'ruletree' },
        { text: '规则支付配置', link: 'gz-config' }
      ]
    }
  ]
}

export function Sidebar_system(): SidebarItem[] {
  return [
    {
      text: '系统简介',
      collapsed: false,
      base: '/system/',
      items: [
        { text: '系统介绍', link: 'introduction' },
        { text: '收费方式', link: 'charge' },
        { text: '赞助我们', link: 'donate' }
      ]
    }
  ]
}

export function Sidebar_thoroughfare(): SidebarItem[] {
  return [
    {
      text: '支付通用配置',
      collapsed: false,
      base: '/thoroughfare/summary/',
      items: [
        { text: '支付通道概览', link: 'tutorial' },
        { text: 'v免签', link: 'v-sign' },
        { text: '银联前置', link: 'union-pre-front' },
        { text: '京东收银台', link: 'jd-pay' },
        { text: '支付宝公私匙申请', link: 'currency' }
      ]
    },
    {
      text: '支付宝支付通道配置',
      collapsed: true,
      base: '/thoroughfare/alipay/',
      items: [
        { text: '支付宝个人码-监控端', link: 'personal-code' },
        { text: '支付宝商家账单', link: 'merchant-bill' },
        { text: '支付宝手机网站支付', link: 'mobile-website' },
        { text: '支付宝当面付', link: 'face-to-face' },
        { text: '拉卡拉-监控端', link: 'lakala' },
        { text: '支付宝电脑网站支付', link: 'computer-website' },
        { text: '支付宝预授权支付', link: 'advance-authorization' },
        { text: '支付宝易支付', link: 'easy-pay' },
        { text: '支付宝V免签', link: 'v-sign' },
        { text: '支付宝-XD', link: 'XD' }
      ]
    },
    {
      text: '微信支付通道配置',
      collapsed: true,
      base: '/thoroughfare/wxpay/',
      items: [
        { text: '微信-IMAC', link: 'IMAC' },
        { text: '微信个人码-监控端', link: 'personal-code' },
        { text: '微信赞赏码-监控端', link: 'reward-code' },
        { text: '微信店员-监控端', link: 'store-staff' },
        { text: '微信经营码-监控端', link: 'merchant-code' },
        { text: '微信收款单-监控端', link: 'receipt-code' },
        { text: '拉卡拉-监控端', link: 'lakala' },
        { text: '微信-JSAPI', link: 'JSAPI' },
        { text: '微信易支付通道', link: 'easy-pay' },
        { text: '微信V免签通道', link: 'v-sign' },
        { text: '微信店员-代挂', link: 'store-staff-sub' },
        { text: '微信-NativeV3', link: 'NativeV3' },
        { text: '微信-UOS', link: 'UOS' },
        { text: '微信-XD', link: 'XD' },
        { text: '微信-UOS-XD', link: 'UOS-XD' }
      ]
    },
    {
      text: 'QQ支付通道配置',
      collapsed: true,
      base: '/thoroughfare/qqpay/',
      items: [
        { text: 'QQ个人码-监控端-PC', link: 'personal-code-pc' },
        { text: 'QQ个人码-监控端-手机', link: 'personal-code-mobile' },
        { text: 'QQ钱包-Y', link: 'Y' },
        { text: 'QQ易支付', link: 'easy-pay' },
        { text: 'QQV免签', link: 'v-sign' }
      ]
    },
    {
      text: '网银支付通道配置',
      collapsed: true,
      base: '/thoroughfare/bank/',
      items: [
        { text: '京东收银台-监控端', link: 'JD-pay' },
        { text: '网银京东收银台', link: 'JD-pay-boxjs' },
        { text: '拉卡拉-监控端', link: 'Lakala' },
        { text: '银联前置', link: 'Union-pre-front' },
        { text: '虎皮椒', link: 'HuaPi' },
        { text: '易支付', link: 'easy-pay' }
      ]
    },
    {
      text: 'USDT 支付通道配置',
      collapsed: true,
      base: '/thoroughfare/usdt/',
      items: [
        { text: 'usdt-Trc20', link: 'Trc20' },
        { text: 'Easy Payment usdt', link: 'Easy-Payment-usdt' }
      ]
    },
    {
      text: 'paypal 支付通道配置',
      collapsed: true,
      base: '/thoroughfare/paypal/',
      items: [{ text: 'paypal', link: 'personal-code' }]
    }
  ]
}
