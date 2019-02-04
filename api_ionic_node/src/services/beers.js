
const beers = deps => {
    return {
        all: () => {
            return new Promise((resolve, reject) => {
                const { connection, errorHandler } = deps
                connection.query('SELECT * FROM beers', (error, results) => {
                    if(error){
                        errorHandler(error, 'Falha ao listar as categorias', reject)
                        return false
                    }
                    resolve( { results } )
                })
            })
        },
        save: (  ) => {},
        /*update: (id, name) => {},
        del   : ( id ) */
    }
}
module.exports = beers