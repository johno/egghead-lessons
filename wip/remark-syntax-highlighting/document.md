# Fecunda illa

```js
exports.onCreateNode = ({ node, actions, getNode, createNodeId }) => {
  const { createNode, createParentChildLink, createRedirect } = actions

  const isReadme = name => /readme/i.test(name)
  const isIndexPath = name => name === 'index' || isReadme(name)

  const toOriginalDocsPath = node => {
    const { dir } = path.parse(node.relativePath)
    const fullPath = [
      basePath,
      dir,
      node.name
    ]
    return path.join(...fullPath)
  }
  const toDocsPath = node => {
    const { dir } = path.parse(node.relativePath)
    const fullPath = [
      basePath,
      dir,
      !isIndexPath(node.name) && node.name
    ].filter(Boolean)
    return path.join(...fullPath)
  }

  // Make sure it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return
  }

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  if (node.internal.type === `Mdx` && source === contentPath) {
    const slug = toDocsPath(fileNode)

    // Redirect file/path/readme to file/path/ in order to handle
    // potential links that are meant to work with GitHub-style index
    // pages.
    if (isReadme(fileNode.name)) {
      createRedirect({
        fromPath: toOriginalDocsPath(fileNode),
        toPath: toDocsPath(fileNode),
        isPermanent: true
      })
    }

    const title = node.frontmatter.title
    const description = node.frontmatter.description

    const fieldData = { title, description, slug }

    createNode({
      ...fieldData,
      id: createNodeId(`${node.id} >>> Docs`),
      parent: node.id,
      children: [],
      internal: {
        type: `Docs`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(fieldData))
          .digest(`hex`),
        content: JSON.stringify(fieldData),
        description: `Docs`,
      },
    })

    createParentChildLink({ parent: fileNode, child: node })
  }
}
```
