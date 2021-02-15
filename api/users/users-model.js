const db = require('../../database/dbConfig.js')

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
}

function find() {
    return db('users').select('id', 'username', 'password')
}

async function add(user) {
    const [id] = await db('users').insert(user)

    return findById(id)
}

function findBy(filter) {
    return db('users').where(filter)
}

function findById(id) {
    return db('users')
        .where({ id })
        .first()
}

function update (id, changes){
    return db('users')
        .where({ id })
        .update(changes)
}

function remove(id, user){
    return db('users')
        .where({ id })
        .del()
}