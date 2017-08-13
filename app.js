const cluster = require('cluster');
const express=require("express");

const app=express();

app.set('port', (process.env.PORT || 5000));


app.get('/',function(req,res){

   res.end("My first Express app deployed on Heroku! -- Akshay Naik\n");
});


app.listen(app.get('port'),function(){

    console.log("Running at PORT ",app.get('port'));

});