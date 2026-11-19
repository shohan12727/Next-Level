import express from "express"
import { Pool } from "pg"
const app = express();
const port = 5000;

const pool = new Pool({
    connectionString: 
       "postgresql://neondb_owner:npg_8KyjcDBCmoA4@ep-still-bird-aodg4ts0-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});

const initDB = async () => {
    try{
        await pool.query(`
            CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            is_Active BOOLEAN,
            age INT,
            created_at  TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
            )
            `)
    } catch (error) {
        console.log(error);
    }
}



initDB();



app.listen(port, () => {
    console.log(`This express server is running on the server ${port}`);
})