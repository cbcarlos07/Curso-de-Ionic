const mysqlServer = require('mysql')
var fs = require('fs');
const connection = mysqlServer.createConnection({
    host:       process.env.DB_HOST,   
    user:       process.env.DB_USER,   
    password:   process.env.DB_PWD,
    database:   process.env.DB_DB 
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
const usersMdule  = require('./users')({connection, errorHandler})

module.exports = {
    beers: () => beersModule,
    users: () => usersMdule
}