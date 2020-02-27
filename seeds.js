const Datastore = require('nedb')
const insults = new Datastore({filename:'insults.db', autoload: true})

let json = require('./insults.json')
console.log(json)

let doc = json.insults //importerar datan från insults.json till insults.db

insults.insert(doc, function (err, newDoc) {   
    
});