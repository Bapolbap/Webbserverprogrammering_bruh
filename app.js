const express = require('express');
const mongoose = require('mongoose');
const monkeyModel = require('./monkeyModel');
const messageModel = require('./messageModel');
const dBModule = require('./dBModule');
const app = express();
const port = 3000;
const clientDir = __dirname + "\\MyFirstServer\\client\\";

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(clientDir))

app.get('/', (req, res) => {
    res.render(clientDir + "index.ejs")
});

app.get('/jungleForum', async (req, res) => {
    var messages = await messageModel.getMessages()
    res.render(clientDir + "jungleForum.ejs", {message: messages})
});

app.post('/', (req, res) => {

    dBModule.storeInput(monkeyModel.createMonkey(req.body.name, req.body.email, req.body.age, req.body.location));

    res.redirect('/');
})

app.post('/jungleForum', async (req, res) => {

    var message = messageModel.createMessage(req.body.email, req.body.comment);
    dBModule.storeInput(message);

    var messages = await messageModel.getMessages()
    res.render(clientDir + "jungleForum.ejs", {message: messages});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))