"use client"

import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  

  return (
    <div className={styles.listWrapper}>
      <ul className={styles.textList}>
        <li>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia earum a ipsum ea tempora harum debitis distinctio voluptatem suscipit, dolorem nemo quam doloribus? Hic incidunt nihil voluptas itaque est. Qui.</p>
        </li>
        <li>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia earum a ipsum ea tempora harum debitis distinctio voluptatem suscipit, dolorem nemo quam doloribus? Hic incidunt nihil voluptas itaque est. Qui.</p>
        </li>
        <li>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia earum a ipsum ea tempora harum debitis distinctio voluptatem suscipit, dolorem nemo quam doloribus? Hic incidunt nihil voluptas itaque est. Qui.</p>
        </li>
        <li>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia earum a ipsum ea tempora harum debitis distinctio voluptatem suscipit, dolorem nemo quam doloribus? Hic incidunt nihil voluptas itaque est. Qui.</p>
        </li>
        <li>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia earum a ipsum ea tempora harum debitis distinctio voluptatem suscipit, dolorem nemo quam doloribus? Hic incidunt nihil voluptas itaque est. Qui.</p>
        </li>
        <li>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia earum a ipsum ea tempora harum debitis distinctio voluptatem suscipit, dolorem nemo quam doloribus? Hic incidunt nihil voluptas itaque est. Qui.</p>
        </li>
        <li>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia earum a ipsum ea tempora harum debitis distinctio voluptatem suscipit, dolorem nemo quam doloribus? Hic incidunt nihil voluptas itaque est. Qui.</p>
        </li>
        <li>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia earum a ipsum ea tempora harum debitis distinctio voluptatem suscipit, dolorem nemo quam doloribus? Hic incidunt nihil voluptas itaque est. Qui.</p>
        </li>        
      </ul>
      <div className={styles.pagination}>
        <button type='button'></button>
        <ul>
          <li><Link href=''>1</Link></li>
          <li><Link href=''>2</Link></li>
          <li><Link href=''>3</Link></li>
          <li><Link href=''>4</Link></li>
          <li><Link href=''>5</Link></li>
          <li><Link href=''>6</Link></li>
        </ul>
        <button type='button'></button>
      </div>
    </div>
  )
}
