import { NextResponse } from 'next/server'
import pool from '@/lib/db'
import { isRowId } from '@/lib/RowIdChecker'

export async function GET(request:Request, {params}:{params:{id:string}}) {

    const rowId = isRowId(params.id)

    if(!rowId)  return  NextResponse.json({ status:false })

    let db    

    try {
    
        db = await pool.acquire()
    
        if(!db) return  NextResponse.json({ status:false })

        const data = await db.get(`select id, text from texts where id = ${rowId}`).then( data => data === undefined ? data = {} : data )

        
        console.log(data)

        return NextResponse.json({ status:true, data })  

    } catch (err) {
        
        console.log(err)

        return  NextResponse.json({ status:false })

    } finally{
        
        pool.release(db!)
        
    }
      
}

