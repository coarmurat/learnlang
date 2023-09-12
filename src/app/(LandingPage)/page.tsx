import styles from './page.module.css'

import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Landing Page',
  description: '',
}

export default function Home() {


  return (
    <div className={styles.root}>Landing Page</div>
  )
}
