const express = require('express');
const path = require("path");
const app = express();

app.use(express.urlencoded({extended : false}));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/',(req, res, next) => {
    const date = new Date();
    const hour = date.getHours();
    const mycss = hour >= 6 && hour <= 18 ? 'day.css' : 'night.css';
    res.send(`<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <link rel="stylesheet" href="/css/${mycss}">
            <title>My Form</title>
        </head>
        <body>
        <form action="/result" method="POST"> Name<input name ="name"> Age<input name="age"> <button type ="submit">Submit Query</button></form>
        </body>
        </html>`);
});

app.get('/output', (req, res) => {
    const {name, age} = req.query;
    const response =`Welcome ${name ? name : "person"}, you are ${age ? age : "unknow"}`;
    res.send(response);
})

app.post('/result', (req, res) => {
    const {name, age} = req.body;
    res.redirect(303, `/output?name=${name}&age=${age}`);
})


app.listen(3000);