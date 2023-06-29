const prettier = require('prettier')

let prettierOptions

module.exports = (eleventyConfig) => {
  eleventyConfig.addTransform('formatHTML', async (content, outputPath) => {
    if (!outputPath?.endsWith('.html')) {
      return content
    }

    if (!prettierOptions) {
      prettierOptions = await prettier.resolveConfig('test.html', {
        editorconfig: true,
      })
    }

    return prettier.format(content, {
      ...prettierOptions,
      parser: 'html',
    })
  })

  return {
    dir: {
      includes: '../includes',
      data: '../data',
    },
  }
}
