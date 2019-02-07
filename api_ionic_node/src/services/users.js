const sha1 = require('sha1')
const jwt  = require('jsonwebtoken')
users = deps => {
    return {
        login: ( objUser ) => {
            return new Promise((resolve, reject) => {
                const { connection, errorHandler } = deps
                const query = 'SELECT * FROM users WHERE email = ? AND password = ?'
                const data = [ objUser.email, sha1( objUser.password ) ]
                connection.query(query, data, (error, results) => {
                    if( error || !results.length ){
                        errorHandler( error, 'Falha ao buscar usuário', reject )
                        return false
                    }
                    const { email, id } = results[0]
                    const token = jwt.sign({ email, id }, process.env.JWT_TOKEN,{ expiresIn: 60 * 60 * 24 })
                    resolve( { token } )
                })
            })
        }
    }
}

module.exports = users