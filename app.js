const express = require('express')
const app = express()
const port = 3000
const clientDir = __dirname + "\\MyFirstServer\\client\\"

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