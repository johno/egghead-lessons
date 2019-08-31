const remove = require('unist-util-remove')
const visit = require('unist-util-visit')

module.exports = () => tree => {
  visit(tree, 'heading', headingNode => {
    remove(headingNode, 'image')
  })
}
