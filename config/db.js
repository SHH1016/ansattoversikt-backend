//Mysql database connection
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';


dotenv.config();

const pool = mysql.createPool({
    host: 'mysql-16cfe5d8-olsen-3654.k.aivencloud.com',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
    port: 14888,
    ssl: {
    rejectUnauthorized: false,
  },
});

try{
    const connection = await pool.getConnection()
    console.log('Connected to MySql');
    connection.release();
}catch (err){
    console.error('MySql connection error', err)
}

export default pool;