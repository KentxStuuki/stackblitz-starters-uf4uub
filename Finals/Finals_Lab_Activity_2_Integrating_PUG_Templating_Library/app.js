//Name: Mark Erolle D. Quiambao
//Section: WD 303 
//Class Code: 2164-6WCSERVER

const express = require('express');
const app = express();

app.use(express.static('css'));

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/:name', (req, res) => {
    const name = req.params.name;
    res.render('index', {
        title: 'Pug Demo',
        message: `Hello, ${name}! Welcome to Pug.`
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})