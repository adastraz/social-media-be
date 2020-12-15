const db = require('../../database/dbConfig.js')

module.exports = {
    findByUser
}

function findByUser(id) {
    return db('posts')
        .where({ user_id: id })
        .orderBy('id', 'desc')
}
