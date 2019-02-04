
const db = require('../services')
const routes = (server) => {
    server.get('/v1', (req, res, next) => {
        res.send('Engoy the silence')
        next()
    })

    server.get('/v1/beers', async (req, res, next) => {
        try{
            res.send( await db.beers().all() )
        }catch(error){
            res.send(error)
        }
        next()
    })
    server.post('/v1/beers', async (req, res, next) => {       
        
        try{
            res.send( await db.beers().save( req.body ) )
        }catch(error){
            res.send(error)
        }
        next()
    })
    /*server.put('/v1/beers', (req, res, next) => {       
        const { name } = req.body
        res.send( name )
        next()
    })
    server.delete('/v1/beers', (req, res, next) => {       
        const { name } = req.body
        res.send( name )
        next()
    }) */
}

module.exports = routes

