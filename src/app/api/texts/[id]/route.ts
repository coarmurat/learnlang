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

        const data = await db.get(`select id, text, translatedText from texts where id = ${rowId}`).then( data => data === undefined ? data = {} : data )

        

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

    if(!data || !data.title || !data.text || !data.translatedText) return NextResponse.json({ status:false })

    let db        
    
    try {
    
        db = await pool.acquire()
    
        if(!db) return  NextResponse.json({ status:false })

        const stmt = await db.prepare('update texts set title = ?, text = ?, translatedText = ? where id = ?')
        
        const result = await stmt.run(data.title, data.text, data.translatedText, rowId)

        stmt.finalize()
        
        if(result.changes !== 1) return NextResponse.json({ status:true })

        return NextResponse.json({ status:true, id:rowId, title:data.title })  

    } catch (err) {
        
        console.log(err)

        return  NextResponse.json({ status:false })

    } finally{
        
        pool.release(db!)
        
    }

}
