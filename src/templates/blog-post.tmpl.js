import React, { Fragment } from 'react'

export default function Template({ data: { markdownRemark: markdown } }) {
  const { frontmatter, html } = markdown
  return (
    <Fragment>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Fragment>
  )
}

export const pageQuery = graphql`
  # query <name> ($path: urlpath): name must be unique
  query BlogPostByPath($path: String!) {
    # find md-file where frontmatter.path = path
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
