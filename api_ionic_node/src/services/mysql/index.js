const mysqlServer = require('mysql')
const connection = mysqlServer.createConnection({
    host:       process.env.DB_HOST,   
    user:       process.env.DB_USER,   
    password:   process.env.DB_PWD,
    database:   process.env.DB_DB 
})

module.exports = connection