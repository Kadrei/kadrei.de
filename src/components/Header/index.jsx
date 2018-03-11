import React from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'

import styles from './index.module.scss'

const navItemClass = classnames(styles.header__nav__item, styles.header__link)

const Header = ({ title }) => (
  <header className={styles.spiked}>
    <div className={styles.header}>
      <h1 className={styles.header__logo}>
        <Link to="/" className={styles.header__link}>
          .k3
        </Link>
      </h1>
      <nav className={styles.header__nav}>
        <Link to="#about-me" className={navItemClass}>
          About Me
        </Link>
        <Link to="/blog" className={navItemClass}>
          Blog
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
