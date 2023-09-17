import styles from './page.module.css'

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Landing Page',
  description: '',
}

export default function LandingPage() {


  return (
    <div className={styles.root}>
      <h1>Landing Page</h1>
      <Link href='/login'>Login</Link>
      <Link href='/howworks'>How works</Link>
    </div>
  )
}
