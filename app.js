const express = require('express')
const Datastore = require('nedb')
const app = express()
const insults = new Datastore({filename:'insults.db', autoload: true})

app.use( express.json() )

app.get('/Hello', (req, res) => {
    res.send("Hello world")
})

app.get('/insults/:severity', async (req, res) => {
    res.set("Content-Type", "application/json")
    let result = await insults.find({ severity: parseInt(req.params.severity) }, function (err, docs) {
        res.json({"insults": result})
    });
})

app.listen(8080, () => console.log("Server started"))