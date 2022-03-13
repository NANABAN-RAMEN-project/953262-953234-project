const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { redirect } = require("express/lib/response");
const res = require("express/lib/response");
const _ = require('lodash');

const page_indicate = ["","SELECT TABLE:","ORDER ONLINE:","ORDER STATUS:"];

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
    
app.listen(3000, function() {
    console.log("Server started on port 3000");
  });