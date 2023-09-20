import { NextResponse } from 'next/server'
import pool from '@/lib/db'

//Get 
export async function GET(request:Request) {
        
    let db

    try {
    
        db = await pool.acquire()
    
        if(!db) return  NextResponse.json({ status:false })

        const data = await db.all(`select id, title from texts`)

        return NextResponse.json({ status:true, data })  

    } catch (err) {
        
        return  NextResponse.json({ status:false })

    } finally{
        
        pool.release(db!)
        
    }
      
}

export async function POST( request:Request ){
    
    const data = await request.json().catch( err => false )

    if(!data || !data.title || !data.translatedText || !data.text) return NextResponse.json({ status:false })

    let db
    let lastID
    try {
        
        db = await pool.acquire()

        if(!db) return NextResponse.json({ status:false })

        const stmt = await db.prepare('insert into texts (title,translatedText,text) values(?,?,?)')
        
        const result = await stmt.run([data.title,data.translatedText,data.text])
        
        stmt.finalize()
        
        if(result.changes !== 1) return NextResponse.json({ status:false })
        
        lastID = result.lastID

    } catch (err) {

        return  NextResponse.json({ status:false })

    } finally{
        
        pool.release(db!)
        
    }

    return NextResponse.json({ status:true, id:lastID, title:data.title })

}
