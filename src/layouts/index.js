import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'normalize.css'

import '../static/global.scss'

import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'

const TemplateWrapper = ({ data: { site }, children }) => (
  <Fragment>
    <Helmet title={site.siteMetadata.title} meta={[]} />
    <Header />
    <Content render={children} />
    <Footer />
  </Fragment>
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
