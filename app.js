const express = require('express')
const app = express()
const port = 3000
const clientDir = __dirname + "\\MyFirstServer\\client\\"

app.get('/', (req, res) => {
    res.sendFile(clientDir + "index.html")
})

app.get('/style', (req, res) => {
    res.sendFile(clientDir + "style.css")
})

app.get('/image', (req, res) => {
    res.sendFile(`${clientDir}acension.jpg`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))