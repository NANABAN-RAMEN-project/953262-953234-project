const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { redirect } = require("express/lib/response");
const res = require("express/lib/response");
const _ = require('lodash');


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


    
app.listen(3000, function() {
    console.log("Server started on port 3000");
  });