import React from 'react'

import styles from './index.module.scss'

const Field = ({ name, label, rows = 0, ...rest }) =>
  !rows ? (
    <input
      type="text"
      {...rest}
      name={name}
      className={styles.ContactForm__field__input}
      placeholder={label}
    />
  ) : (
    <textarea
      {...rest}
      rows={rows}
      name={name}
      className={styles.ContactForm__field__input}
      placeholder={label}
    />
  )

const ContactForm = () => (
  <form method="post" action="mailto:benedikt.kusemann@gmail.com">
    <Field name="name" label="Name" required />
    <Field name="email" label="Email" type="email" required />
    <Field name="message" label="Nachricht" required rows="4" />
    <input type="submit" className={styles.ContactForm__submit} value="Senden" />
  </form>
)

export default ContactForm
