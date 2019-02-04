const mysqlServer = require('mysql')
const connection = mysqlServer.createConnection({
    host:   'localhost',
    user:   'root',
    password:   '123',
    database:   'beers'
})
const errorHandler = (error, msg, rejectFunction) => {
    console.error(error)
    rejectFunction({error: msg})
}
const beersModule = require('./beers')({connection, errorHandler})


module.exports = {
    beers: () => beersModule
}