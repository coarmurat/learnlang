import styles from './styles.module.css'
import Link from 'next/link'

export default function Header() {
    

    return(
        <header className={styles.root}>
            <div className={styles.container}>
                <div className={styles.hamburgerIcon}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.pageIndicator}>Layout</div>
                <div className={styles.logo}></div>
                <nav className={styles.nav}>
                    <ul>
                        <li><Link href=''>Text List</Link></li>
                        <li><Link href=''>Training</Link></li>
                        <li><Link href=''>Manage Texts</Link></li>
                        <li><Link href=''>How Works</Link></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.shadowLine}></div>
        </header>
    )
}