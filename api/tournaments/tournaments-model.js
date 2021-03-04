const db = require('../../database/dbConfig.js')

module.exports = {
    findByGame,
    add,
    remove,
    find,
    findById,
    update
}

function find() {
    return db('tournaments')
        .orderBy('date', 'asc')
}

function findByGame(game) {
    return db('tournaments')
        .where({ game: game })
        .orderBy('date', 'asc')
}

async function add(tournament) {
    const [id] = await db('tournaments').insert(tournament)
    return id
}

function update(id, changes){
    return db('tournaments')
        .where({ id })
        .update(changes)
}

function findById(id) {
    return db('tournaments')
        .where({ id })
        .first()
}

function remove(id) {
    return db('tournaments')
        .where({ id })
        .del()
}