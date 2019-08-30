const fs = require('fs')
const remark = require('remark')
const remarkHtml = require('remark-html')

const doc = fs.readFileSync('document.md', 'utf8')

const { contents } =
  remark()
    .use(remarkHtml)
    .processSync(doc)

const html = `
<html lang="en">
<link rel="stylesheet" type="text/css" href="http://markdowncss.github.io/splendor/css/splendor.css" />
${contents}
`

fs.writeFileSync('index.html', html)
