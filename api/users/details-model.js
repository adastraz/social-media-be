const db = require('../../database/dbConfig.js')

module.exports = {
    findById,
    findDetails,
    findCreators,
    findCarpics,
    findOthergames,
    findAgents,
    findYtlinks,
    addDetails,
    addCreators,
    addCarpics,
    addOthergames,
    addAgents,
    addYtlinks,
    update,
    remove
}

function findDetails(id) {
    return db('users_details')
        .where({ user_id: id })
        .select('users_details.*')
}

function findCreators(id) {
    return db('users_creators')
        .where({ user_id: id })
        .select('users_creators.*')
}

function findCarpics(id) {
    return db('users_carpics')
        .where({ user_id: id })
        .select('users_carpics.*')
}

function findOthergames(id) {
    return db('users_othergames')
        .where({ user_id: id })
        .select('users_othergames.*')
}

function findAgents(id) {
    return db('users_agents')
        .where({ user_id: id })
        .select('users_agents.*')
}

function findYtlinks(id) {
    return db('users_youtubelinks')
        .where({ user_id: id })
        .select('users_youtubelinks.*')
}

function findById(id, dbtype) {
    return db(dbtype)
        .where({ id })
        .first()
}

async function addDetails(user) {
    const [id] = await db('users_details')
        .insert(user)

    return findById(id, 'users_details')
}

async function addCreators(user) {
    const [id] = await db('users_creators')
        .insert(user)

    return findById(id, 'users_creators')
}

async function addCarpics(user) {
    const [id] = await db('users_carpics')
        .insert(user)

    return findById(id, 'users_carpics')
}

async function addOthergames(user) {
    const [id] = await db('users_othergames')
        .insert(user)

    return findById(id, 'users_othergames')
}

async function addAgents(user) {
    const [id] = await db('users_agents')
        .insert(user)

    return findById(id, 'users_agents')
}

async function addYtlinks(user) {
    const [id] = await db('users_youtubelinks')
        .insert(user)

    return findById(id, 'users_youtubelinks')
}

function update (id, changes){
    return db('users')
        .where({ id })
        .update(changes)
}

function remove(user, post) {
    return db('posts')
        .where({ user_id: user, id: post })
        .del()
}