import type { Metadata } from 'next'
import Practice from './practice'

export const metadata: Metadata = {
    title: 'Practice',
    description: '',
}

export default function PracticePage() {
    
    return <Practice/>
}