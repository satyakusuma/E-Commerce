const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); 

const app = express();

app.use(cors());

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

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API Berjalan!');
});

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
