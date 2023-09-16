"use client"

import styles from './page.module.css'
import type { Metadata } from 'next'
import useList from '@/hooks/useList'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Text List',
  description: '',
}

export default function TextList() {

  const { list, isLoading } = useList()

  if(isLoading){
    
    return 'Loading...'
  }
  
  return (
    <div className={styles.listWrapper}>
      <ul className={styles.textList}>
        { 
          list.data.map((row:any) => (
            
            <li key={row.id}>
              <Link href={`/practice?id=${row.id}`}>{row.title}</Link>
            </li>
            
          ))
        }
      </ul>
    </div>
  )
}
