const express = require('express');
const mongoose = require('mongoose');
const monkeyModel = require('./monkeyModel');
const dBModule = require('./dBModule');
const app = express();
const port = 3000;
const clientDir = __dirname + "\\MyFirstServer\\client\\";

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(clientDir + "index.html")
})

app.get('/style', (req, res) => {
    res.sendFile(clientDir + "style.css")
})

app.get('/image', (req, res) => {
    res.sendFile(`${clientDir}acension.jpg`)
})

app.post('/', (req, res) => {

    dBModule.storePerson(monkeyModel.createMonkey(req.body.name, req.body.email, req.body.age, req.body.location))

    res.redirect('/')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))