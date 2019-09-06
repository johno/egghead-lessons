const postcss = require('postcss')
const isVendorPrefixed = require('is-vendor-prefixed')

module.exports = postcss.plugin('postcss-remove-prefixes', options => {
  return root => {
    root.walkDecls(declaration => {
      if (isVendorPrefixed(declaration.prop)) {
        declaration.remove()
      }

      if (isVendorPrefixed(declaration.value)) {
        declaration.remove()
      }
    })
  }
})
