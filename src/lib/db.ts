import genericPool from 'generic-pool'
import { AsyncDatabase } from 'promised-sqlite3'
import sqlite3 from 'sqlite3'
import { resolve as resolvePath } from 'path'

const factory:genericPool.Factory<AsyncDatabase> = {

    create: async () => {

        return (await AsyncDatabase.open(resolvePath(process.cwd(),process.env.DB_DIR!,process.env.DB_NAME!), sqlite3.OPEN_READWRITE))

    },
    destroy: async (db:AsyncDatabase) => {

        return await db.close()
        
    }
}

const options = {

    max:10,
    min:2

}

const pool = genericPool.createPool(factory,options)
export default pool


