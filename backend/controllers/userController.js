const db = require('../config/db');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    console.log(`Data yang diterima:`, req.body); 
    console.log(`Password ter-hash: ${hashedPassword}`);
    db.query(sql, [username, email, hashedPassword], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Pengguna berhasil didaftarkan' });
    });
};

const loginUser = (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            const user = results[0];
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                res.json({ message: 'Login berhasil', user });
            } else {
                res.status(401).json({ message: 'Password salah' });
            }
        } else {
            res.status(404).json({ message: 'Pengguna tidak ditemukan' });
        }
    });
};

module.exports = {
    registerUser,
    loginUser
};
