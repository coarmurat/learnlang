import { NextResponse } from 'next/server'
import pool from '@/lib/db'
import { isRowId } from '@/lib/RowIdChecker'

export async function GET(request:Request,{ params }:{params:{id:string} }) {

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

export async function DELETE(request:Request,{ params }:{params:{id:string} }) {
    
    const rowId = isRowId(params.id)

    if(!rowId)  return  NextResponse.json({ status:false })

    let db        
    
    try {
    
        db = await pool.acquire()
    
        if(!db) return  NextResponse.json({ status:false })

        const result = await db.get(`delete from texts where id = ${rowId}`).then( (res:any) => res === undefined ? res = {} : res )

        
        console.log(result)

        return NextResponse.json({ status:true, rowId })  

    } catch (err) {
        
        console.log(err)

        return  NextResponse.json({ status:false })

    } finally{
        
        pool.release(db!)
        
    }

}

export async function PUT(request:Request,{ params }:{params:{id:string} }) {
    
    const rowId = isRowId(params.id)

    if(!rowId)  return  NextResponse.json({ status:false })

    const data = await request.json().catch( err => false )

    if(!data || !data.text) return NextResponse.json({ status:false })

    let db        
    
    try {
    
        db = await pool.acquire()
    
        if(!db) return  NextResponse.json({ status:false })

        const stmt = await db.prepare('update texts set text = ? where id = ?')
        
        const result = await stmt.run(data.text, rowId)

        console.log(result)

        if(result.changes !== 1) return NextResponse.json({ status:false })

        return NextResponse.json({ status:true, rowId })  

    } catch (err) {
        
        console.log(err)

        return  NextResponse.json({ status:false })

    } finally{
        
        pool.release(db!)
        
    }

}
