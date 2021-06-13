const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const pluginSEO = require('eleventy-plugin-seo')

module.exports = function (config) {
  config.addPlugin(syntaxHighlight)
  config.addPassthroughCopy('assets')
  config.addPassthroughCopy({
    './_tmp/style.css': './style.css',
  })
  config.addPassthroughCopy({
    './styles/coldark.css': './coldark.css',
  })

  config.addPlugin(pluginSEO, {
    title: 'Devlog',
    description:
      'Ideas, thought, reminder and things I find interesting in software development',
    url: 'https://devlog.willcodefor.beer',
    author: 'Rickard Natt och Dag',
    twitter: 'rnattochdag',
    image: '/assets/ogimage.png',
    options: {
      imageWithBaseUrl: true,
    },
  })
}
