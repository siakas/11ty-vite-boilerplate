const pugIncludeGlob = require('pug-include-glob')

module.exports = (eleventyConfig) => {
  global.f = eleventyConfig.javascriptFunctions
  eleventyConfig.setPugOptions({
    plugins: [pugIncludeGlob()],
  })

  return {
    dir: {
      includes: '../includes',
      data: '../data',
    },
  }
}
