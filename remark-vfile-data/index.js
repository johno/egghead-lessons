const visit = require('unist-util-visit')

module.exports = () => (tree, file) => {
  file.data.headings = []

  visit(tree, 'heading', node => {
    const depth = node.depth
    let text = ''

    visit(node, 'text', textNode => {
      text += textNode.value
    })

    file.data.headings.push({ text, depth })
  })
}
