const fs = require('fs')
const postcss = require('postcss')

const removePrefixes = require('.')

const css = fs.readFileSync('fixture.css', 'utf8')

test('removes vendor prefixes', () => {
  const result = postcss([ removePrefixes() ])
    .process(css)

  expect(result.css).toEqual(`.flex {
  display: flex;
  flex: 1;
}
`)
})
