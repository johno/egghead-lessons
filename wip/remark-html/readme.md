~/e
❯ mkdir remark-html

~/e
❯ cd remark-html

~/e/remark-html
❯ yarn init -y
yarn init v1.16.0
warning The yes flag has been set. This will automatically answer yes to all questions, which may have security implications.
success Saved package.json
✨  Done in 0.04s.

~/e/remark-html
❯ yarn add remark remark-html
yarn add v1.16.0
info No lockfile found.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 46 new dependencies.
info Direct dependencies
├─ remark-html@10.0.0
└─ remark@11.0.1
info All dependencies
├─ bail@1.0.4
├─ character-entities-html4@1.1.3
├─ character-entities@1.2.3
├─ character-reference-invalid@1.1.3
├─ collapse-white-space@1.0.5
├─ comma-separated-tokens@1.0.7
├─ detab@2.0.2
├─ extend@3.0.2
├─ hast-util-is-element@1.0.3
├─ hast-util-sanitize@2.0.1
├─ hast-util-to-html@6.0.2
├─ hast-util-whitespace@1.0.3
├─ html-void-elements@1.0.4
├─ inherits@2.0.4
├─ is-alphanumeric@1.0.0
├─ is-buffer@2.0.3
├─ is-plain-obj@2.0.0
├─ is-word-character@1.0.3
├─ longest-streak@2.0.3
├─ markdown-table@1.1.3
├─ mdast-util-compact@1.0.3
├─ mdast-util-definitions@1.2.4
├─ mdast-util-to-hast@6.0.1
├─ mdurl@1.0.1
├─ object-assign@4.1.1
├─ parse-entities@1.2.2
├─ property-information@5.2.2
├─ remark-html@10.0.0
├─ remark-parse@7.0.1
├─ remark-stringify@7.0.2
├─ remark@11.0.1
├─ replace-ext@1.0.0
├─ space-separated-tokens@1.1.4
├─ trim-lines@1.1.2
├─ trim-trailing-lines@1.1.2
├─ trough@1.0.4
├─ unified@8.3.2
├─ unist-builder@1.0.4
├─ unist-util-generated@1.1.4
├─ unist-util-position@3.0.3
├─ unist-util-remove-position@1.1.3
├─ unist-util-visit-parents@2.1.2
├─ unist-util-visit@1.4.1
├─ vfile-location@2.0.5
├─ vfile-message@2.0.1
└─ vfile@4.0.1
✨  Done in 2.73s.

~/e/remark-html
❯ git init
Initialized empty Git repository in /Users/johno/e/remark-html/.git/

~/e/remark-html master*
❯ rm -rf .git

~/e/remark-html
❯ vim document.md

~/e/remark-html 4m 10s
❯ ls
document.md     node_modules    package.json    yarn.lock

~/e/remark-html
❯ cat document.md
# Fecunda illa

## Fecit columbas posse viri aevo apri non

Lorem markdownum sorore extulit, non suo putant tritumque amplexa silvis: in,
lascivaque femineam ara etiam! Oppida clipeus formidine, germanae in filia
etiamnunc demisso visa misce, praedaeque protinus communis paverunt dedit, suo.
Sertaque Hyperborea eatque, sed valles novercam tellure exhortantur coegi.

1. Cunctosque plusque
2. Cum ego vacuas fata nolet At dedit
3. Nec legerat ostendisse ponat sulcis vincirem cinctaque

Letali media quod color furtim generosam, huic fudi consule fila vidit videri
animos pomaria iuncosaque dum sic visa regina. Innuba nubila *sole tum* rex est
occiduae diversi: tot illius.

![](https://cloud.githubusercontent.com/assets/1424573/4785631/dc5ddcd2-5d82-11e4-88a2-06fdabbe4fb8.png)

## Manus tenus cum

In faciat qua doctior veluti, dictae iam! Quae salici, illic? Diurnos quod: ore
attonitusque Colchis iam parte adamanta: ignes ab, subiit Maenalon: est.

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

~/e/remark-html
❯ ls
document.md     node_modules    package.json    yarn.lock

~/e/remark-html
❯ vim build.js

~/e/remark-html 1m 33s
❯ cat build.js
const fs = require('fs')
const remark = require('remark')
const remarkHtml = require('remark-html')

const doc = fs.readFileSync('document.md', 'utf8')

const { contents } =
  remark()
    .use(remarkHtml)
    .processSync(doc)

fs.writeFileSync('index.html', contents)

~/e/remark-html
❯ vim package.json

~/e/remark-html 15s
❯ yarn start
yarn run v1.16.0
$ node build
✨  Done in 0.41s.

~/e/remark-html
❯ cat package.json
{
  "name": "remark-html",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "start": "node build"
  },
  "dependencies": {
    "remark": "^11.0.1",
    "remark-html": "^10.0.0"
  }
}

~/e/remark-html
❯ ls
build.js        document.md     index.html      node_modules    package.json    yarn.lock

~/e/remark-html
❯ cat index.html
<h1>Fecunda illa</h1>
<h2>Fecit columbas posse viri aevo apri non</h2>
<p>Lorem markdownum sorore extulit, non suo putant tritumque amplexa silvis: in,
lascivaque femineam ara etiam! Oppida clipeus formidine, germanae in filia
etiamnunc demisso visa misce, praedaeque protinus communis paverunt dedit, suo.
Sertaque Hyperborea eatque, sed valles novercam tellure exhortantur coegi.</p>
<ol>
<li>Cunctosque plusque</li>
<li>Cum ego vacuas fata nolet At dedit</li>
<li>Nec legerat ostendisse ponat sulcis vincirem cinctaque</li>
</ol>
<p>Letali media quod color furtim generosam, huic fudi consule fila vidit videri
animos pomaria iuncosaque dum sic visa regina. Innuba nubila <em>sole tum</em> rex est
occiduae diversi: tot illius.</p>
<p><img src="https://cloud.githubusercontent.com/assets/1424573/4785631/dc5ddcd2-5d82-11e4-88a2-06fdabbe4fb8.png"></p>
<h2>Manus tenus cum</h2>
<p>In faciat qua doctior veluti, dictae iam! Quae salici, illic? Diurnos quod: ore
attonitusque Colchis iam parte adamanta: ignes ab, subiit Maenalon: est.</p>
<pre><code class="language-js">exports.onCreateNode = ({ node, actions, getNode, createNodeId }) => {
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
      !isIndexPath(node.name) &#x26;&#x26; node.name
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

  if (node.internal.type === `Mdx` &#x26;&#x26; source === contentPath) {
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
</code></pre>

~/e/remark-html
❯ open index.html

~/e/remark-html
❯ ls
build.js        document.md     index.html      node_modules    package.json    yarn.lock


const { contents } =
  remark()
    .use(remarkHtml)
    .processSync(doc)

const html = `
<html lang="en">
<link rel="stylesheet" type="text/css" href="http://markdowncss.github.io/splendor/css/splendor.css" />
${contents}
`
