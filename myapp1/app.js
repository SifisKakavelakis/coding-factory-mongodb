const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=> {
    res.send("Hello World");
})

app.get('/about', (req, res) => {
    console.log("About page");
    res.send("This is about page");
})

app.get('/help', (req, res)=> {
    console.log("Help page");
    res.send("This is help page");
})

app.get('user', (req, res)=> {
    let query = req.query;
    let name = query.name;
    let surname = query.surname;
    console.log("Query Parameters", query.name, query.surname);
    res.send("This is user page with query, name:" + name + ', surname: ' + surname);
})

app.get('/user/:name/:surname', (req, res)=> {
    let query = req.params;

    let name = query.name
    let surname = query.surname

    console.log("Query Parameters", query.name, query.surname);
    res.send("This is user page with params, name:" + name + ', surname: ' + surname);
})

app.listen(port, ()=> {
    console.log("Server is up");
})