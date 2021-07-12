const express = require('express');
const path = require('path');
const app = express();

const routeHandler = require('./routeHandlers');

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'view'));


app.use('/css', express.static(path.join(__dirname,"css"))); 
app.use(express.urlencoded({extended : false}));

app.get('/',routeHandler.home);
app.post('/addtocart',routeHandler.productDetails);
app.get('/productlist', routeHandler.productList);
app.get('/shoppingcart', routeHandler.shoppingCart);
app.get('/itemsincart', routeHandler.cartItems);
app.listen(3000,routeHandler.serverMessage);

