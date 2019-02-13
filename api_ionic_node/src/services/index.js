const connection = require('./mysql')
var fs = require('fs');

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