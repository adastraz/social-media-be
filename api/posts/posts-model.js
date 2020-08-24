const db = require('../../database/dbConfig.js')

module.exports = {
    findByUser,
    add,
    remove
}

function findByUser(id) {
    return db('posts')
        .where({ user_id: id })
        .orderBy('id', 'desc')
}

async function add(user, post) {
    return db('posts')
        .insert(post, { user_id: user })
}

function remove(user, post) {
    return db('posts')
        .where({ user_id: user, id: post })
}