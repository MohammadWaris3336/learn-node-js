const express = require('express');
const app= express();

app.get('',(req, res)=>{
    res.send(`<h1>Hello! This is Home Page</h1>
            <a href="/about">Got TO About Page</a>
            <a href="/help">Got TO Help Page</a>
    `);
});

app.get('/about', (req, res)=>{
    // console.log("welcome, "+req.query.name);
    // res.send("welcome, "+req.query.name);
    res.send(`
    <input type="text" placeholder="Name" value="${req.query.name}">
    <input type="submit" value="Submit">
    <a href="/">Got TO Home Page</a>
    <a href="/help">Got TO Help Page</a>
    `);
});

app.get('/help', (req, res)=>{
    res.send([{
        name: "Ali", age: 22, Education: "BSCS"
    },
    {name: "umer", age: 32, Education: "BSCa"}
]
    );
});

app.listen(3305);