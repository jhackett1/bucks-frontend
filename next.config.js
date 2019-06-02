console.log("This is prototype code. Exercise care before reusing.")

const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
module.exports = withImages(withSass({
  sassLoaderOptions: {
    includePaths: []
  }
}))