const { connection,errorHandler}  = require('./mysql')
const beersModule = require('./beers')({connection, errorHandler})
const usersMdule  = require('./users')({connection, errorHandler})

module.exports = {
    beers: () => beersModule,
    users: () => usersMdule
}