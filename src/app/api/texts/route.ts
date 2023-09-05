import { NextResponse } from 'next/server'
import pool from '@/lib/db'


export async function GET() {

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

export async function POST( request:Request ){
    
    const data = await request.json().catch( err => false )

    if(!data || !data.text) return NextResponse.json({ status:false })

    let db

    try {
        
        db = await pool.acquire()

        if(!db) return NextResponse.json({ status:false })

        const stmt = await db.prepare('insert into texts (text) values(?)')
        
        const result = await stmt.run(data.text)

        if(result.changes !== 1) return NextResponse.json({ status:false })

    } catch (err) {
        
        console.log(err)

        return  NextResponse.json({ status:false })

    } finally{
        
        pool.release(db!)
        
    }

    return NextResponse.json({ status:true })

}
