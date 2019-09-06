import React from 'react'
import {graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'

export default ({
  data: {
    file: {childMdx}
  }
}) => (
  <>
    <MDXRenderer headings={childMdx.headings}>
      {childMdx.body}
    </MDXRenderer>
  </>
)

export const pageQuery = graphql`
  {
    file(
      sourceInstanceName: {eq: "content"},
      name: {eq: "index"}
    ) {
      childMdx {
        body
        headings {
          depth
          value
        }
      }
    }
  }
`
