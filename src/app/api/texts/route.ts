import { NextResponse } from 'next/server'
import pool from '@/lib/db'


export async function GET( request:Request ) {

    let db

    try {
    
        db = await pool.acquire()
    
        if(!db) return  NextResponse.json({ status:false })

        const data = await db.all('select id, text from texts')

        console.log(data)

        return NextResponse.json({ status:true, data })  

    } catch (err) {
        
        console.log(err)

        return  NextResponse.json({ status:false })

    } finally{
        
        pool.release(db!)
        
    }
      
}

