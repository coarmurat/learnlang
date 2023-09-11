"use client"

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function useTitle() {
    
    const [title, setTitle] = useState(() => '')
    const pathname = usePathname()

    useEffect(() => {
        
        setTitle(() => document.title)

    },[pathname])

    return title
}