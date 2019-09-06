const postcss = require('postcss')

const plugin = require('.')

const FIXTURE = `
.flex {
  display: -webkit-flex;
  display: -moz-flex;
  display: flex;
  -webkit-flex: 1;
  flex: 1;
}
`

const EXPECTED = `
.flex {
  display: flex;
  flex: 1;
}
`

test('removes vendor prefixes', () => {
  const result = postcss([plugin()])
    .process(FIXTURE)

  expect(result.css).toEqual(EXPECTED)
})
