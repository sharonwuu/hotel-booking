
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hotel-booking/'
    : '/'
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('vue-svg-loader')
        .loader('vue-svg-loader')
  },

  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_variables.scss";
        `
      }
    }
  }

}