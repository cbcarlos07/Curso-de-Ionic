
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
        save: ( beer ) => {
            return new Promise((resolve, reject) => {
                const { connection, errorHandler } = deps
                const query = 'INSERT INTO beers (name, price, type, mark, img, created_at, updated_at)'+
                              '            VALUES(?,?,?,?,?, NOW(),NOW())'
                const data = [beer.name, beer.price, beer.type, beer.mark, beer.img]              
                           
                
                connection.query(query, data, (error, results) => {
                    if(error){
                        errorHandler(error, 'Falha ao cadastrar', reject)
                        return false
                    }
                    resolve( { results, msg: 'Salvo com sucesso!' } )
                    
                })
            })
        },
        /*update: (id, name) => {},
        del   : ( id ) */
    }
}
module.exports = beers