const db = require('../../database/dbConfig.js')

module.exports = {
    findByUser,
    add,
    remove,
    find,
    findById,
    addLike,
    removeLike
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

async function addLike(like_user, post_id) {
    return db('likes')
        .insert({ like_username: like_user, post_id: post_id })
}

function removeLike(like_user, post_id) {
    return db('likes')
        .where({ like_username: like_user, post_id: post_id })
        .del()
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