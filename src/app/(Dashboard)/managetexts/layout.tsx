
import ManageButtons from '@/components/ManageButtons'
import styles from './layout.module.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Manage Texts',
  description: '',
}

export default function ManageTextsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.root}>
      <div className={styles.main}>{children}</div>
      <ManageButtons/>
    </div>
  )
}
