"use client"

import styles from './styles.module.css'
import { useSearchParams } from 'next/navigation'
import useGetText from '@/hooks/useGetText'

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
        
        
        e.currentTarget.style.filter = `blur(${parseFloat(e.currentTarget.style.filter.match(/\d+(\.\d+)?/)![0])- .56}px)`
        
    }
    
    return(
        <div className={styles.root}>
            <div className={styles.translatedTextWrapper}>{text.data.translatedText}</div>
            <div className={styles.splitResizer}></div>
            <div className={styles.textWrapper}>
                {
                    sentences.map((sentence:[]) => {

                        return sentence.map((word:string) => {

                            return <div onClick={decreaseBlur} style={{filter:`blur(6px)`}} key={Math.random()}>{word}</div>

                        })

                    })
                }
            </div>
        </div>
    )

} 