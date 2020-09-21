const express = require('express');
const app = require('../config/custom/custom-express');
const routesToDo = require('./routes/todo-routes');

const port = 3000;

routesToDo(app, express);

app.listen(3000, console.log('servidor rodando!'));

