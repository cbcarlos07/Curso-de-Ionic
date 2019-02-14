const test = require('ava');
const { connection, errorHandler } = require('./setup')
const beersModule = require('../beers')({connection, errorHandler})
const create = () => 
     beersModule.save(  { 
        name: 'Test Beer',
        price: 2.5,
        type: 1,
        mark: 'Ambev'
     } )

test.beforeEach(t => connection.query('TRUNCATE TABLE beers'))
test.after.always(t => connection.query('TRUNCATE TABLE beers'))
// test.serial -> segue uma sequencia
test.serial('Lista de Categoria', async t => {
    await create()    
    const list = await beersModule.all(  )
    t.is( list.results.length, 1 )
})
test.serial('Criação de cerveja', async t => {
    const result = await create()    
    t.is(result.results.affectedRows, 1 )
});

test.serial('Atualização de cerveja', async t => {
    await create()
    const objBeer =   { 
        name: 'Test Beer',
        price: 2.5,
        type: 1,
        mark: 'Ambev',
        id: 1
     }
    const updated =  await beersModule.update( objBeer )
   // console.log('updte', updated.results.affectedRows)
    t.is(updated.results.affectedRows, 1 )
    
});

test.serial('Remoção de cerveja', async t => {
    await create()
    const deleted = await beersModule.del( 1 )    
    t.is(deleted.results.affectedRows, 1)
})

test('Obtendo cerveja', async t => {
    await create()
    const get = await beersModule.getBeer(1)
    t.is(get.length, 1)
})