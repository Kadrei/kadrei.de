/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

/**
 * @see https://www.gatsbyjs.org/docs/node-apis/#createPages
 * @see https://www.gatsbyjs.org/docs/bound-action-creators/#createPage
 */
exports.createPages = ({ boundActionCreators: { createPage }, graphql }) => {
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tmpl.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: {
          # order descending by frontmatter.date
          order: DESC
          fields: [frontmatter___date]
        }
        limit: 1000
      ) {
        # edge = "array of records"
        edges {
          # node = record/data
          node {
            excerpt(pruneLength: 250)
            frontmatter {
              date
              path
              title
            }
          }
        }
      }
    }
  `).then(({ errors, data: { allMarkdownRemark } }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    allMarkdownRemark.edges.forEach(({ node: { frontmatter } }) => {
      createPage({
        path: frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
