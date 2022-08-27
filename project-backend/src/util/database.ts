import mysql from 'mysql2';

export const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: '6fDSUsA8@FNDgKZFT4HKvMTd4$yUubhMs*t'
}).promise();

// module.exports = pool.promise();