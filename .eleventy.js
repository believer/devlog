const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

module.exports = function (config) {
  config.addPlugin(syntaxHighlight)
  config.addPassthroughCopy('assets')
  config.addPassthroughCopy({
    './_tmp/style.css': './style.css',
  })
  config.addPassthroughCopy({
    './styles/coldark.css': './coldark.css',
  })
}
