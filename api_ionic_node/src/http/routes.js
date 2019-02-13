
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
    server.get('/v1/beers/:id', async (req, res, next) => {
        const { id } = req.params
        
        try{
            res.send( await db.beers().getBeer( id ) )
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
    server.put('/v1/beers', async (req, res, next) => {       
        
        try{
            res.send( await db.beers().update( req.body ) )
        }catch(error){
            res.send(error)
        }
        next()
    })
    server.del('/v1/beers/:id', async (req, res, next) => {       
        const { id } = req.params
        try {
            res.send( await db.beers().del( id ) )
        } catch (error) {
            res.send( error )
        }
        next()
    })
    server.post('/v1/auth/login', async (req, res, next) => {       
        try {
            res.send( await db.users().login( req.body ) )
        } catch (error) {
            res.send( error )
        }
        next()
    }) 
}

module.exports = routes

