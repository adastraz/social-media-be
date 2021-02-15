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
    removeCreator,
    removeAgent,
    removeYtlinks,
    removeOthergames,
    removeCarpics,
    updateDetails
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

function removeCreator(id) {
    return db('users_creators')
        .where({ id })
        .del()
}
function removeAgent(id) {
    return db('users_agents')
        .where({ id })
        .del()
}
function removeYtlinks(id) {
    return db('users_youtubelinks')
        .where({ id })
        .del()
}
function removeOthergames(id) {
    return db('users_othergames')
        .where({ id })
        .del()
}
function removeCarpics(id) {
    return db('users_carpics')
        .where({ id })
        .del()
}

function updateDetails (id, changes){
    return db('users_details')
        .where({ id })
        .update(changes)
}