"use client"

import { usePathname } from 'next/navigation'

export default function useTitle() {
    
    const pathname = usePathname()


    return  pathname === '/'                             ? 'Landing Page' : 
            pathname === '/login'                        ? 'Login' : 
            pathname === '/textlist'                     ? 'Text List' : 
            pathname === '/practice'                     ? 'Practice' : 
            pathname === '/managetexts'                  ? 'Manage Texts' : 
            pathname === '/managetexts/add'              ? 'Manage Texts' : 
            pathname === '/managetexts/deleteupdate'     ? 'Manage Texts' : 
            pathname === '/howworks'                     ? 'How Works' :''
                                
}