import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import 'normalize.css'

const TemplateWrapper = ({ data: { site }, children }) => (
  <div>
    <Helmet
      title={site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header title={site.siteMetadata.title} />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  # inject sitedata into the data-prop
  query SiteDataQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
