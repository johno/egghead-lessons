const fs = require('fs')
const remark = require('remark')
const remarkHtml = require('remark-html')
const matter = require('gray-matter')

const doc = fs.readFileSync('document.md', 'utf8')

const { content, data } = matter(doc)

const { contents } =
  remark()
    .use(remarkHtml)
    .processSync(content)

const html = `
<html lang="en">
  <title>${data.title}</title>
  <link rel="stylesheet" type="text/css" href="http://markdowncss.github.io/splendor/css/splendor.css" />

  <h1>${data.title}</h1>
  <p>by ${data.author} on ${data.date}</p>
${contents}
`

fs.writeFileSync('index.html', html)
