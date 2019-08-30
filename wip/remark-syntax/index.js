const visit = require('unist-util-visit')

module.exports = options => {

  return function() {
    const parser = this.Parser

    if (parser && parser.prototype && parser.prototype.blockTokenizers) {
      attachParser(parser)
    }

  }
}
