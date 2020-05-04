const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')


let staticConfig = {
    exportTrailingSlash: true,
    exportPathMap: function() {
      return {
        '/': { page: '/' },
		'/about': { page: '/about' },
        '/team': { page: '/team' },
        '/services': { page: '/services' },
        '/contact': { page: '/contact' }
      }
    }
};


module.exports = withPlugins([
	withCSS,
	withSass,
  withImages,
  staticConfig
])
