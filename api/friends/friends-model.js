const db = require('../../database/dbConfig.js')

module.exports = {
    findAll,
    findFriend,
    findOpp,
    add,
    remove
}

function findAll(user) {
    return db('friends')
        .leftJoin('users', 'friends.friend_id', 'users.id')
        // .leftJoin('users', 'friends.user_id', 'users.id')
        .where({ user_id: user })
}

function findOpp(friend) {
    return db('friends')
        .join('users', 'friends.user_id', 'users.id')
        .where({ friend_id: friend})
}

function findFriend(user, friend) {
    return db('friends')
        .where({ user_id: user, friend_id: friend })
}

async function add(user, friend) {
    return db('friends')
        .insert({ user_id: user, friend_id: friend })
}

function remove(user, friend) {
    return db('friends')
        .where({ user_id: user, friend_id: friend })
        .del()
}