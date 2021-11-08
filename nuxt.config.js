export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Moritz Kronberger',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes:'180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes:'16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes:'32x32', href: '/favicon-32x32.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main',
        '~/assets/css/transitions',
        'animate.css/animate.compat.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/meta', 
            '~plugins/date_filter',
            '~plugins/hide_on_scrolldown'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  hooks: {
    // replace markdown image syntax with reference to global ContentImg component
    // and static_[p1](p2) syntax with global StaticResource component
    'content:file:beforeParse': (file) => {
      if(file.extension === '.md'){
        function replaceImage (match, p1, p2) {
          const referencedFileExtension = p2.split('.')[p2.split('.').length-1]; 
          if(['png', 'jpg', 'jpeg', 'webp'].includes(referencedFileExtension)){
            const relativeDirectory = '..'
            const baseDirectory = 'content'
            // split on / or \ or multiples (path formatting can change on dev server restart)
            const baseFilePath = file.path.split(/(?:\/|\\)/)
            const subDirectory = baseFilePath[baseFilePath.indexOf(baseDirectory)+1]
            p2 = p2.replace(relativeDirectory, subDirectory)
            return `<content-img src="${p2}" alt="${p1}"></content-img>`
          } else {
            return match
          }
        }
        function replaceDownload (match, p1, p2) {
          return `<static-resource href="${p2}" desc="${p1}"></static-resource>`
        } 
        // matches markdown image syntax ![p1](p2)
        file.data = file.data.replace(/!\[(.*?)\]\((.*?)\)/g, replaceImage)
        // matches markdown image syntax d[p1](p2)
        file.data = file.data.replace(/static_\[(.*?)\]\((.*?)\)/g, replaceDownload)
        return file.data 
      }
    }
  },

  // Svg module configuration: https://github.com/nuxt-community/svg-module
  svg: {
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // webpack ignore .md files from: https://github.com/nuxt/content/issues/106#issuecomment-666283547
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.md$/i,
        loader: 'ignore-loader'
      })
    }
  },

  loading: false,

  pageTransition: { 
    name: 'slideDown',
    appear: true
  },

  generate: {
    cache: false
  }
}
