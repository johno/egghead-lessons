const fs = require('fs')
const remark = require('remark')

const plugin = require('.')

const doc = fs.readFileSync('fixture.md', 'utf8')

test('adds headings to the vfile data', () => {
  const result = remark()
    .use(plugin)
    .processSync(doc)

  const { headings } = result.data

  expect(headings).toEqual([
    { text: 'Hello, world!', depth: 1 },
    { text: "I'm an h2", depth: 2 }
  ])
})
