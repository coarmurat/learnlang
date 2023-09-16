"use client"

import styles from './styles.module.css'
import { useState } from 'react'

export default function AddText() {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [translatedText, setTranslatedText] = useState('')
    


    const saveTextEventHandler = async (e:React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault()

        const response = await fetch('/api/texts',
        {
            method:'POST',
            body:JSON.stringify({title,translatedText,text})
        }
        ).then(res => res.json())
        
    }
    const inputOnChangeEventHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    
        setTitle( () => e.target.value )

    }
    const translatedTextOnChangeEventHandler = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    
        setTranslatedText( () => e.target.value )

    }    
    const textOnChangeEventHandler = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    
        setText( () => e.target.value )

    }

    return(
        <form className={styles.root} onSubmit={saveTextEventHandler} >
            <div className={styles.titleRow}>
                <label htmlFor="title">Title</label>
                <input type="text" value={title} name='title' id="title" onChange={inputOnChangeEventHandler} />
            </div>
            <div className={styles.textRow}>
                <label htmlFor="text">Translated Text</label>
                <textarea value={translatedText} name='translatedText' id="translatedText" onChange={translatedTextOnChangeEventHandler}></textarea>
            </div>
            <div className={styles.textRow}>
                <label htmlFor="text">Text</label>
                <textarea value={text} name='text' id="text" onChange={textOnChangeEventHandler}></textarea>
            </div>
            <div className={styles.buttonRow}>
                <button type='submit'>Save</button>
            </div>
        </form>
    )
}