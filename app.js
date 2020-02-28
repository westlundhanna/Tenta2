const express = require('express')
const Datastore = require('nedb')
const app = express()
const insults = new Datastore({filename:'insults.db', autoload: true})

app.use( express.json() )

app.get('/Hello', (req, res) => {
    res.send("Hello world")
})

app.get('/insults/:severity', (req, res) => {
    insults.find({ severity: parseInt(req.params.severity) }, function (err, docs) {
        res.json({"insults": docs})

        if(docs.length == 0) {
            res.status(404)
        }else{
            res.json(docs)
        }
    });
})
//ska konverteras till async/await

app.listen(8080, () => console.log("Server started"))