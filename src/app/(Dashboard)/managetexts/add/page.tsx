"use client"

import styles from './styles.module.css'
import { useState } from 'react'

export default function AddText() {

    const [text, setText] = useState('')
    const [title, setTitle] = useState('')

    const saveTextEventHandler = async (e:React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault()

        const response = await fetch('http://localhost:3000/api/texts',
        {
            method:'POST',
            body:JSON.stringify({title,text})
        }
        ).then(res => res.json())
        
        console.log(response)
    }
    
    const textAreaOnChangeEventHandler = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    
        setText( () => e.target.value )

    }
    const inputOnChangeEventHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    
        setTitle( () => e.target.value )

    }

    return(
        <form className={styles.root} onSubmit={saveTextEventHandler} >
            <div className={styles.titleRow}>
                <label htmlFor="title">Title</label>
                <input type="text" value={title} name='title' id="title" onChange={inputOnChangeEventHandler} />
            </div>
            <div className={styles.textRow}>
                <label htmlFor="text">Text</label>
                <textarea cols={30} rows={10} value={text} name='text' id="text" onChange={textAreaOnChangeEventHandler}></textarea>
            </div>
            <div className={styles.buttonRow}>
                <button type='submit'>Save</button>
            </div>
        </form>
    )
}