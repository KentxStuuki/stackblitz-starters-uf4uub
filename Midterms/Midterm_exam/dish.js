/* 
Name: Mark Erolle D. Quiambao
Section: WD - 303 
Class Code: 2164-6WCSERVER
*/
const express = require('express');
const app = express();

const dishes = [
    { type: 'Adobo', province: 'Cavite', price: 150},
    {type: 'Sinigang', province: 'Bulacan', price: 180},
    {type: 'Bagnet', province: 'Ilocos', price: 370},
];

app.get('/dishes', (req, res) => {
    res.send(dishes);
});

app.get('/dishes/:type', (req, res) => {
    const dishType = req.params.type;
    const dish = dishes.find(d =>
        d.type.toLowerCase() === dishType.toLowerCase()
    );
    if (dish){
        res.send(dish)
    } else {
        res.status(404).json({message: "Record not found"});
    }
});

app.use((req, res) => {
    res.status(404).json({
        message: "Record not found"
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});