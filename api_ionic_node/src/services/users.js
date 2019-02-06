users = deps => {
    return {
        login: ( objUser ) => {
            return new Promise((resolve, reject) => {
                const { connection, errorHandler } = deps
                const query = 'SELECT * FROM users WHERE email = ? AND password = ?'
                const data = [ objUser.email, objUser.password ]
                connection.query(query, data, (error, results) => {
                    if( error ){
                        errorHandler( error, 'Falha ao buscar usuário', reject )
                        return false
                    }
                    resolve( results )
                })
            })
        }
    }
}

module.exports = users