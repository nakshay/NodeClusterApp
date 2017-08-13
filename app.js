const cluster = require('cluster');
const express=require("express");

const app=express();


app.get('/',function(req,res){

   res.end("My first Express app deployed on Heroku! -- Akshay Naik\n");
});


app.listen(8000,function(){

    console.log("Running at PORT 8000");

});