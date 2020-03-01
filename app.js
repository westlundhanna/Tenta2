const express = require('express')
const Datastore = require('nedb-promise')
const app = express()
const cors = require('cors')
const insults = new Datastore({filename:'insults.db', autoload: true})

app.use(cors())

app.use( express.json() )

app.get('/Hello', (req, res) => {
    res.send("Hello world")
})

app.get('/insults', async (reg, res) => {
    const insultsJSON = await insults.find({})
    res.json({'insultsJSON': insultsJSON})
})

app.get('/insults/:severity', async (req, res) => {
    const severity = await insults.find({severity: parseInt(req.params.severity)})

    if(severity.length > 0) {
        res.json({"severity": severity})
    }else{
        res.status(404).json("error")
    }
})

app.listen(8090, () => console.log("Server started"))