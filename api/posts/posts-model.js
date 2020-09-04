const db = require('../../database/dbConfig.js')

module.exports = {
    findByUser,
    add,
    remove,
    find,
    findById
}

function find() {
    return db('posts')
        .join('users', 'posts.user_id', 'users.id').select('posts.*', 'users.username')
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

function findById(id) {
    return db('posts')
        .where({ id })
        .first()
}

function remove(user, post) {
    return db('posts')
        .where({ user_id: user, id: post })
        .del()
}