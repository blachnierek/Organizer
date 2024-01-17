const express = require("express");
const app = express();

app.listen(8888, () =>{
console.log('Aplikacja wystartowała');
});

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.redirect(302, '/hotwheels.html');
});

