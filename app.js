var express = require('express');
var mysql = require('mysql');
var app = express();


app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/style',  express.static(__dirname + '/style'));
app.use('/script',  express.static(__dirname + '/script'));

app.get('/',function(req,res){
	res.sendFile('home.html',{'root': __dirname + '/templates'});
})

app.get('/showSignInPage',function(req,res){
	res.sendFile('signin.html',{'root': __dirname + '/templates'});
})

app.get('/showSignUpPage',function(req,res){
  res.sendFile('signup.html',{'root':__dirname + '/templates'})
})

app.get('/collapseWithDifferentIcons',function(req,res){
    res.sendFile('collapseWithDifferentIcons.html',{'root':__dirname + '/templates'})
})

app.get('/multipleTabs',function(req,res){
    res.sendFile('multipleTabs.html',{'root':__dirname + '/templates'})
})



app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});
