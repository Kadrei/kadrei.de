import React from 'react'

import styles from './index.module.scss'

const Content = ({ render }) => <main className={styles.content}>{render()}</main>

export default Content
