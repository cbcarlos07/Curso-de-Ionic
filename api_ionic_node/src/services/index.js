const mysqlServer = require('mysql')
var fs = require('fs');
const connection = mysqlServer.createConnection({
    host:   'localhost',
    user:   'root',
    password:   '123',
    database:   'beers'
})
const errorHandler = (error, msg, rejectFunction) => {
    console.error(error)    
    fs.writeFile("log.txt",error, function(erro) {
        if(erro) {
            throw erro;
        }
        console.log("Arquivo salvo");
    }); 
    rejectFunction({error: msg})
}
const beersModule = require('./beers')({connection, errorHandler})


module.exports = {
    beers: () => beersModule
}