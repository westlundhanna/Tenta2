const Datastore = require('nedb-promise')
const insults = new Datastore({filename:'insults.db', autoload: true})

let insultsList = require('./insults.json')
console.log(insultsList)

let doc = insultsList.insults //importerar datan från insults.json till insults.db

insults.insert(doc, function (err, newDoc) {   
    
});