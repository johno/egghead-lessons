module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        remarkPlugins: [require('remark-slug')]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'content',
        name: 'content'
      }
    }
  ]
}
