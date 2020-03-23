const { join } = require('path')
const { description } = require('../../package')

module.exports = {
  /**
   * Build 输出目录夹，Basement 要求，不能修改。
   */
  dest: 'dist',
  /**
   * 网站的标题，ref：https://v1.vuepress.vuejs.org/zh/config/#title
   */
  title: 'Antmove - 小程序转换器',
  /**
   * 网站的描述，ref：https://v1.vuepress.vuejs.org/zh/config/#description
   */
  description: description,

  /**
   * 额外的要插入 HTML <head> 中的 tags，ref：https://vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: 'https://cache.amap.com/ecology/tool/antmove/logo.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * 注册全局 Stylus 文件，ref: https://v1.vuepress.vuejs.org/zh/config/#stylus
   */
  stylus: {
    import: [join(__dirname, './styles/global.styl')]
  },

  // nav: [
  //   {
  //     text: '指南',
  //     link: '/guide/',
  //   },
  //   {
  //     text: '配置',
  //     link: '/config/'
  //   },
  // ],

  /**
   * 主题配置，这里是 VuePress 默认主题的配置，ref：https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html
   */
  themeConfig: {
    logo: 'https://cache.amap.com/ecology/tool/antmove/logo.png',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: '',
    nav: [
      {
        text: '指南',
        link: '/guide/',
      },
      {
        text: '配置',
        link: '/config/'
      },
      {
        text: 'API',
        link: '/api/'
      },
      // {
      //   text: '生态',
      //   link: '/tools/'
      // },
      {
        text: 'Q&A',
        link: '/qa/'
      },
      {
        text: '更新日志',
        link: '/changelog/'
      },
      // {
      //   text: 'Amove 结构化编程',
      //   link: '/amove/'
      // },
      {
        text: '博客',
        link: '/blog/'
      },
      {
        text: 'Github',
        link: 'https://github.com/ant-move/Antmove'
      }
    ],
    sidebar: {
      //'/guide/': [
        //{
          //title: '指南',
          //collapsable: false,
          // children: [
          //   '',
          //   'using-vue',
          // ]
        //}
      //],
    }
  },

  /**
   * 应用插件，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',

/**
 * [WARNING]
 *
 * 为了确保部署后所有的静态资源能够正常引用，你需要自行更新 `projectPath` 的配置。
 * 这和 Basement Site 的多环境部署机制有关。
 *
 * 举例来说，如果你的静态站点的 Basement URL 是 "https://basement.alipay.com/chair/chair-docs"
 * 那么你应该将 "projectPath" 设置为 "/chair/chair-docs/"
* */
    ['@alipay/vuepress-plugin-basement', {
      // projectPath: ''
    }]
  ]
}
