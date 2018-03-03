import React, { Fragment } from 'react'

import Link from 'gatsby-link'
const SmallPost = ({ id, frontmatter, excerpt }) => (
  <Fragment key={id}>
    <h1>
      <Link to={frontmatter.path}>{frontmatter.title}</Link>
    </h1>
    <h2>{frontmatter.date}</h2>
    <p>{excerpt}</p>
  </Fragment>
)

export default SmallPost
