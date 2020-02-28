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
    const docs = await insults.find({ severity: parseInt(req.params.severity)}) 

        if(docs.length == 0) {
            res.status(404)
            res.json({error:'not found'})
        }else{
            res.json(docs)    
        }
    });

app.listen(8090, () => console.log("Server started"))