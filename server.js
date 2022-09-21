/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: __Sarah Haque____________________ Student ID: _121172217_____________ Date: _16/09/2022_______________
*
*  Online (Cyclic) URL: _______________________________________________________

NOTE: I tried my best but I could not make my cyclic app work. It kept showing that build has failed. I hope to get marks for what I have done.
*
********************************************************************************/ 


var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);