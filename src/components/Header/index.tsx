"use client"

import styles from './styles.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
    
    const [isNavShowing, setIsNavShowing] = useState(false)

    const toggleNavMenu = () => {
        
        setIsNavShowing((previous)=> !previous)

    }

    return(
        <header className={styles.root}>
            <div className={styles.container}>
                <button tabIndex={0} type={'button'} className={styles.hamburgerIcon} onClick={toggleNavMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <div className={styles.pageIndicator}>Layout</div>
                <div className={styles.logo}></div>
                <nav className={`${styles.nav} ${isNavShowing?styles.showNav:''}`}>
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