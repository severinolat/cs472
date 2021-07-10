const express = require('express');
const app = express();

app.use(express.urlencoded({extended : false}));

app.get('/',(req, res, next) => {
    res.send('<form action="/result" method="POST"> Name<input name ="name"> Age<input name="age"> <button type ="submit">Submit Query</button></form>')
});

app.post('/result',(req,res,next) => {
    const {name,age} = req.body;
    res.send(`Welcome ${name ? name : "person"}, you are ${age ? age : "unknow"}`);
})

app.listen(3000);