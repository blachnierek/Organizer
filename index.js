const express = require("express");
const app = express();
const db = require('./db.js');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('static'));

app.get('/', async (req, res) => {
    //res.redirect(302, '/hotwheels.html');
    const result = await db.query('SELECT * FROM car');
    res.json(result.rows);
});



app.listen(8888, () =>{
    console.log('Aplikacja wystartowała');
    });
