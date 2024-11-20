const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_ecommerce'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Terhubung ke database MySQL');
});

module.exports = db;