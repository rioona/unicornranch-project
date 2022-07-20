module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'practice',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'homepage' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ["~/static/scss/style.scss"],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: process.env.NODE_ENV === "production" ? true : false,
    postcss: {
      plugins: {
        autoprefixer: {
          grid: process.env.NODE_ENV === "production" ? true : false,
          flexbox: process.env.NODE_ENV === "production" ? true : false,
        },
      },
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  buildModules: [
    "@nuxt/postcss8",
  ]
}

