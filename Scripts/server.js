const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static('./public'));

app.get('/',(req, res)=>{
    res.render("index");
});

app.get('/products',(req, res)=>{
    res.render("products");
});

app.get('/about-us',(req, res)=>{
    res.render("aboutus");
});

app.get('/contact-us',(req, res)=>{
    res.render("contact");
});

app.get('/customer',(req, res)=>{
    res.render("buyerpage");
});

app.get('/seller',(req, res)=>{
    res.render("sellerpage");
});

app.listen(3000);