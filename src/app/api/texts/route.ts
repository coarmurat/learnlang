import { NextResponse } from 'next/server'
import pool from '@/lib/db'
import { isRowId as isPageNumber } from '@/lib/RowIdChecker'

export async function GET(request:Request) {

    const { searchParams } = new URL(request.url)
    
    const offset = searchParams.get('page')
    
    let queryString = `select id, text from texts`

    if(offset && isPageNumber(offset)){
     
        queryString += ` LIMIT ${8} OFFSET ${ (parseInt(offset) - 1) * 8 }`

    }        

    let db

    try {
    
        db = await pool.acquire()
    
        if(!db) return  NextResponse.json({ status:false })

        const data = await db.all(queryString)

        return NextResponse.json({ status:true, data })  

    } catch (err) {
        
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

        return  NextResponse.json({ status:false })

    } finally{
        
        pool.release(db!)
        
    }

    return NextResponse.json({ status:true })

}
