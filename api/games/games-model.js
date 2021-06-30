const db = require('../../database/dbConfig.js')

module.exports = {
    add,
    remove,
    findById,
    update,
    findByTournamentId
}

async function add(game) {
    const [id] = await db('games').insert(game)
    return id
}

function update(id, changes){
    return db('games')
        .where({ id })
        .update(changes)
}

function findByTournamentId(id) {
    return db('games')
        .where({ tournament_id: id })
        .orderBy('date', 'asc')
}

function findById(id) {
    return db('games')
        .where({ id })
        .first()
}

function remove(id) {
    return db('games')
        .where({ id })
        .del()
}