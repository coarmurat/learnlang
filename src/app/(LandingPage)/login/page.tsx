import styles from './page.module.css'

import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Login',
  description: '',
}

export default function Login() {


  return (
    <div className={styles.root}>Login</div>
  )
}
