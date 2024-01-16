const express = require("express");
const app = express();

app.listen(8888, () =>{
console.log('Aplikacja wystartowała');
});

app.get('/', (req, res) => {
    res.send('Działa');
});
