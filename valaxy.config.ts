import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '达拉崩吧的城堡',
    },
    fireworks: {//鼠标点击特效
      enable: true,
      colors: ['#FFE57D', '#FFCD88', '#E6F4AD']
    },
    

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],

    footer: {
      since: 2021,
      icon: {
        enable: true,
        name: 'i-ri-heart-line',
        animated: true,
        color: '#d69b54',
        url: 'https://shifulong7.github.io',	//图标链接
        title: '回到首页'		//鼠标悬停注释
      },
      beian: {
        enable: true,
        icp: '暂无',	// 备案
      },
    },
  },

  unocss: { safelist },
})
