const express = require('express');
const app = express();
console.log(app);
app.createServer(function(req, res){
    req.url('/');
    res.end (console.log('Olá Mundo'));
    });

app.listen(3000);
    