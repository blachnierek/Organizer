const express = require("express");
const app = express();
const db = require('./db.js');
const bodyParser = require('body-parser');
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));


app.get('/', async (req, res) => {
    //res.redirect(302, '/hotwheels.ejs');
    const result = await db.query('SELECT * FROM car'); //wyświetlenie wszystkich pozycji z tabeli car
    res.render('hotwheels', {cars: result.rows})
});



app.listen(8888, () =>{
    console.log('Aplikacja wystartowała');
    });
