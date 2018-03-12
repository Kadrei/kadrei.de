import React from 'react'
import GatsbyLink from 'gatsby-link'
import classnames from 'classnames'

import styles from './index.module.scss'

import ContactForm from './ContactForm/ContactForm'
import SocialLinks from './SocialLinks/SocialLinks'

const Footer = () => (
  <footer className={classnames(styles.spiked, styles.footer)}>
    <div className={styles.footer__top}>
      <div className={styles.footer__top__child}>
        <SocialLinks />
      </div>
      <div className={styles.footer__top__child}>
        <ContactForm />
      </div>
    </div>
    <ul className={styles.footer__bottom}>
      <li>&copy; 2018 Benedikt Kusemann. All rights reserved.</li>
      <li>
        <GatsbyLink to="/impressum">Impressum</GatsbyLink>
      </li>
      <li>Design by myself</li>
    </ul>
  </footer>
)

export default Footer
