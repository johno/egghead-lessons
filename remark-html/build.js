const fs = require('fs')
const remark = require('remark')
const remarkHtml = require('remark-html')

const doc = fs.readFileSync('document.md', 'utf8')

const result = remark()
  .use(remarkHtml)
  .processSync(doc)

const html = `
<html lang="en">
${result.contents}
</html>
`

fs.writeFileSync('index.html', html)
