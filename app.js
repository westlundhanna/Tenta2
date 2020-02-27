const express = require('express')
const app = express()
const session = require('express-session')

const fs = require('fs')


app.use( express.json() )

app.use(session({
    secret: "thisisweakkey", //key for encrypting cookies
    cookie: {},
    saveUninitialized: false,
    resave: false
}))

app.get('/Hello', (req, res) => {
    res.send("Hello world")
})

app.listen(8080, () => console.log("Server started"))