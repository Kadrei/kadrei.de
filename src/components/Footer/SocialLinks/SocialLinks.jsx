import React from 'react'

import styles from './index.module.scss'

import GithubIcon from 'react-icons/lib/fa/github'
import XingIcon from 'react-icons/lib/fa/xing'
import LinkedInIcon from 'react-icons/lib/fa/linkedin'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import LastFMIcon from 'react-icons/lib/fa/lastfm'

const Icon = ({ icon, label, url, ...rest }) => (
  <a href={url} className={styles.SocialLinks__Link}>
    {icon()} <span>{label}</span>
  </a>
)

const SocialLinks = () => (
  <div className={styles.SocialLinks}>
    <Icon icon={LastFMIcon} label="Last.fm" url="https://lastfm.de/user/Kus3nuss" />
    <Icon icon={TwitterIcon} label="Twitter" url="https://twitter.com/kadrei" />
    <Icon icon={XingIcon} label="Xing" url="https://www.xing.com/profile/benedikt_kusemann" />
    <Icon icon={GithubIcon} label="GitHub" url="https://github.com/Kadrei" />
    <Icon
      icon={LinkedInIcon}
      label="LinkedIn"
      url="https://www.linkedin.com/in/benedikt-kusemann"
    />
  </div>
)

export default SocialLinks
