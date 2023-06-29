const pugIncludeGlob = require('pug-include-glob')

module.exports = (eleventyConfig) => {
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
