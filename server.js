const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(
    express.static(
        path.join(__dirname, 'public')
    )
);

app.post('/enviar', (req, res) => {

    console.log('RECIBIDO');

    console.log(req.body);

    res.json({
        ok: true
    });

});

app.listen(3000, () => {

    console.log(
        '✅ PREMIER RD iniciado en http://localhost:3000'
    );

});