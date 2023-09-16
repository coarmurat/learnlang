"use client"

import styles from './styles.module.css'
import useGetText from '@/hooks/useGetText'
import type { Metadata } from 'next'
import { useSearchParams } from 'next/navigation'

export const metadata: Metadata = {
    title: 'Practice',
    description: '',
}

export default function Practice() {
    
    const params = useSearchParams()

    const { text, isLoading } = useGetText(parseInt(params.get('id')!))
    
    if(isLoading) return 'Loading...'
    
    const tmpSentences = text.data.text.split(/(?<=[.!?])/)
    const sentences:any = []
    tmpSentences.forEach((sentence:string) => {
      
        sentences.push(sentence.split(' '))
        
    })

    const decreaseBlur = (e:React.MouseEvent<HTMLDivElement>) => {

        e.currentTarget.style.filter = `blur(${Math.random()*4}px)`
        
    }
    
    return(
        <div className={styles.root}>
            <div className={styles.translatedTextWrapper}>{text.data.translatedText}</div>
            <div className={styles.splitResizer}></div>
            <div className={styles.textWrapper}>
                {
                    sentences.map((sentence:[]) => {

                        return sentence.map((word:string) => {

                            return <div style={{color:`rgb(${Math.floor(Math.random()*124)},${Math.floor(Math.random()*124)},${Math.floor(Math.random()*124)})`}} key={Math.random()} onClick={decreaseBlur}>{word}</div>

                        })

                    })
                }
            </div>
        </div>
    )
}