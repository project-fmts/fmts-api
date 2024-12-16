const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const data = {
        id: 1,
        name: 'NodeJS JSON API',
        version: '1.0.0',
    };
    res.json(data);
});

app.get('/users', (req, res) => {
    res.json(
        { 
            id: 1,
            userName: 'admin',
            passowrd: '12345',
            email: 'admin@fmts.tr'
        }
    );
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});
