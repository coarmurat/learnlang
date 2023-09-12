"use client"

import styles from './styles.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'


export default function ManageButtons() {


    return(
        <div className={styles.root}>
            <div className={styles.shadowLine}/>
            <div className={styles.wrapper}>
                <Link href='/managetexts/add'>
                    <div className={styles.addImage}></div>
                    <div>Add</div>
                </Link>
                <Link href='/managetexts/deleteupdate'>
                    <div className={styles.listImage}></div>
                    <div>Delete/Update</div>
                </Link>
            </div>
        </div>
    )
}