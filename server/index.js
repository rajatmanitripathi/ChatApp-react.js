const express = require("express");
const app = express();
const mysql = require("mysql");
const db = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'test_schema',
})
app.get("/",(req,res)=>{
    const insert = "INSERT INTO  identification (name,password) VALUES ('dream','rajat');"
    db.query(insert, (err , result)=>{
        res.send("hello,dream");
    });
  
})
app.listen(3001 , ()=>{
    console.log("runnin on server 3001");
});