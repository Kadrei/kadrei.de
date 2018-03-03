import React from 'react'
import SmallPost from '../components/Blog/Post/post-small'

const BlogPostListPage = ({ data: { allMarkdownRemark } }) => {
  const { edges: posts } = allMarkdownRemark

  const postView = posts.map(({ node: post }) => <SmallPost {...post} />)

  return <div className="blog-posts">{postView}</div>
}

export default BlogPostListPage

export const pageQuery = graphql`
  query PostListQuery {
    allMarkdownRemark(
      sort: {
        # order descending by frontmatter.date
        order: DESC
        fields: [frontmatter___date]
      }
    ) {
      # edge = "array of records"
      edges {
        # node = record/data
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
