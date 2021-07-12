const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(express.urlencoded({extended : false}));

app.get('/',(req, res, next) => {
    res.render(`index`);
});

app.post('/result',(req,res,next) => {
    const name = req.body.nameText;
    const age = req.body.ageText;
    let content = "";
    if(!name && !age){
        content += "Please enter name and age!";
    }else{
        content = `Your name is ${name} You have ${age} years old`;
    }
    res.render('result', {result:content}); 
})

app.listen(3000);