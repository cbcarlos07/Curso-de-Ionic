require('dotenv').config()
const mysqlServer = require('mysql')
const connection = mysqlServer.createConnection({
    host:       process.env.DB_HOST,   
    user:       process.env.DB_USER,   
    password:   process.env.DB_PWD,
    database:   process.env.DB_DB 
})
const errorHandler = (error, msg, rejectFunction) => {
    console.error(error)    
    rejectFunction({error: msg})
}
module.exports = { connection, errorHandler }