
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./axis-image.cjs.production.min.js')
} else {
  module.exports = require('./axis-image.cjs.development.js')
}
