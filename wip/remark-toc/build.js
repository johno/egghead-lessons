const fs = require('fs')
const remark = require('remark')
const remarkHtml = require('remark-html')
const remarkToc = require('remark-toc')

const doc = fs.readFileSync('document.md', 'utf8')

const { contents } =
  remark()
    .use(remarkToc)
    .use(remarkHtml)
    .processSync(doc)

const html = `
<html lang="en">
  <style>
    body {
      font-family: system-ui;
      font-size: 18px;
      margin: 80px auto;
      max-width: 800px;
    }
    p {
      line-height: 1.6;
    }
  </style>
  <body>
    ${contents}
  </body>
`

fs.writeFileSync('index.html', html)
