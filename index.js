const express = require("express");
const app = express();
const db = require('./db.js');

app.listen(8888, () =>{
console.log('Aplikacja wystartowała');
});

app.use(express.static('static'));

app.get('/', async (req, res) => {
    //res.redirect(302, '/hotwheels.html');
    const result = await db.query('SELECT * FROM car');
    res.json(result.rows);
});

