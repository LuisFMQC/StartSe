const express = require('express');
const app = express();

const index = require('./routes/index');
const studentRoute = require('./routes/studentRoute');
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/', index);
app.use('/student', studentRoute);

module.exports = app;