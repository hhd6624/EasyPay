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
      text: 'Windows监控配置',
      collapsed: false,
      base: '/monitor/windows/',
      items: [{ text: '三网监控配置', link: 'windows-monitor' }]
    },
    {
      text: 'Android监控配置',
      collapsed: false,
      base: '/monitor/android/',
      items: [{ text: 'APP监控配置', link: 'android-monitor' }]
    }
  ]
}

export function Sidebar_example(): SidebarItem[] {
  return [
    {
      text: 'RuleProject社区应用',
      collapsed: false,
      base: '/example/',
      items: [
        { text: '支付演示', link: 'ruletree' },
        { text: '配置演示', link: 'gz-config' }
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
        { text: '费用说明', link: 'charge' }
      ]
    }
  ]
}

export function Sidebar_thoroughfare(): SidebarItem[] {
  return [
    {
      text: '支付通用配置',
      collapsed: true,
      base: '/thoroughfare/summary/',
      items: [
        { text: '系统支付配置', link: 'tutorial' },
        { text: '支付宝应用及接口私匙申请', link: 'currency' },
        { text: 'v免签源码', link: 'v-sign' },
        { text: '银联前置', link: 'union-pre-front' },
        { text: '京东收银台', link: 'jd-pay' }
      ]
    },
    {
      text: '支付宝通道配置',
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
        { text: '支付宝-XD', link: 'XD' },
        { text: '支付宝拉卡拉-XD监控端', link: 'lakala-XD' },
        { text: '支付宝新生易-XD监控端', link: 'new-easy-pay-XD' }
      ]
    },
    {
      text: '微信通道配置',
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
        { text: '微信-UOS-XD', link: 'UOS-XD' },
        { text: '微信新生易-XD监控端', link: 'new-easy-pay-XD' },
        { text: '微信拉卡拉-XD监控端', link: 'lakala-XD' }
      ]
    },
    {
      text: '网银通道配置',
      collapsed: true,
      base: '/thoroughfare/bank/',
      items: [
        { text: '京东收银台-监控端', link: 'JD-pay' },
        { text: '网银京东收银台', link: 'JD-pay-boxjs' },
        { text: '拉卡拉-监控端', link: 'Lakala' },
        { text: '银联前置', link: 'Union-pre-front' },
        { text: '虎皮椒', link: 'HuaPi' },
        { text: '计全Plus', link: 'JinQuanPlus' },
        { text: '汇付斗拱平台', link: 'HuiFuDou' },
        { text: '银盛支付监控端', link: 'YinShengPay' },
        { text: '易支付', link: 'easy-pay' }
      ]
    },
    {
      text: 'QQ通道配置',
      collapsed: true,
      base: '/thoroughfare/qqpay/',
      items: [
        { text: 'QQ个人码-监控端-PC', link: 'personal-code-windows' },
        { text: 'QQ个人码-监控端-手机', link: 'personal-code-mobile' },
        { text: 'QQ钱包-Y', link: 'Y' },
        { text: 'QQ易支付', link: 'easy-pay' },
        { text: 'QQV免签', link: 'v-sign' }
      ]
    }
  ]
}
