import React from 'react'
import Link from 'gatsby-link'

const Header = ({ title }) => (
  <h1>
    <Link to="/">{title}</Link>
  </h1>
)

export default Header
