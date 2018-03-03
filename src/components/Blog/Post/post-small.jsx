import React from 'react'

import Link from 'gatsby-link'
const SmallPost = ({ id, frontmatter, excerpt }) => (
  <div className="blog-post-preview" key={id}>
    <h1>
      <Link to={frontmatter.path}>{frontmatter.title}</Link>
    </h1>
    <h2>{frontmatter.date}</h2>
    <p>{excerpt}</p>
  </div>
)

export default SmallPost
