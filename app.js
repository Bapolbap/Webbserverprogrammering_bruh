const express = require('express')
const app = express()
const port = 3000
const clientDir = __dirname + "\\MyFirstServer\\client\\"

//mongoDB saker
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() {
    //
});

const monkeySchema = new mongoose.Schema({
    name: String,
    email: String
});

monkeySchema.methods.speak = () => {
    console.log("MONKEY MONKEY O O A A");
    console.log("monkey name is " + this.name);
}

const Monkey = mongoose.model('Monkey', monkeySchema);

//end of mongoDB saker


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
    console.log(req.body.name)
    console.log(req.body.email)
    res.redirect('/')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))