import styles from './page.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Text List',
  description: '',
}

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
    </div>
  )
}
