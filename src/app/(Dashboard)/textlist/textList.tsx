"use client"

import styles from './page.module.css'
import useList from '@/hooks/useList'
import Link from 'next/link'


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
