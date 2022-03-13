const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { redirect } = require("express/lib/response");
const res = require("express/lib/response");
const _ = require('lodash');

const page_indicate = ["","SELECT TABLE:","ORDER ONLINE:","ORDER STATUS:"];
const Product = require('./model/products');
const Table = require('./model/table_num');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
  res.render('home',{page_indicate:page_indicate[0]});
})

app.get("/select-table", function(req,res){
  res.render('select-table',{page_indicate:page_indicate[1]});

})
var currentTable = 1;
app.post("/select-table", function(req,res){
    currentTable = req.body.table;
    res.redirect('/order-online');
})
app.get("/order-online", function(req,res){
  const products = Product.findApetizer();
  const table = Table.getTableById(currentTable);
  res.render('order-online',{page_indicate:page_indicate[2],products:products,table:table[0],currentTable:currentTable});
})

//Order Online Page. (MENU)
app.get("/appetizers", function(req,res){
  const products = Product.findApetizer();
  const table = Table.getTableById(currentTable);
  res.render('order-online',{page_indicate:page_indicate[2],products:products,table:table[0],currentTable:currentTable});
})
app.get("/main", function(req,res){
  const products = Product.findMain();
  const table = Table.getTableById(currentTable);
  res.render('order-online',{page_indicate:page_indicate[2],products:products,table:table[0],currentTable:currentTable});
})
app.get("/beverage", function(req,res){
  const products = Product.findBeverage();
  const table = Table.getTableById(currentTable);
  res.render('order-online',{page_indicate:page_indicate[2],products:products,table:table[0],currentTable:currentTable});
})

//Add to table/cart.
app.post("/add-to-cart", function(req,res){
  const productId = req.body.id;
  Table.save(productId,currentTable);
  res.redirect('/order-online');
})
app.post("/delete-cart", function(req,res){
  const productId = req.body.id;
  Table.delete(productId,currentTable);
  res.redirect('/order-online');
})
    
app.listen(3000, function() {
    console.log("Server started on port 3000");
  });