const express = require('express');
const path = require('path');
const app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser('my secret here'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(express.urlencoded({extended : false}));

app.get('/',(req, res, next) => {
   
    res.render('add',{ cookies: req.cookies });
});

app.post('/add',(req,res,next) => {
    if(req.body.key !== "" && req.body.value !== "") {
        res.cookie(req.body.key, req.body.value, { maxAge: 60000 } );
    }
    res.redirect('back');
   
})

app.listen(3000);