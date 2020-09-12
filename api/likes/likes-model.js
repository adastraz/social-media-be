const db = require('../../database/dbConfig.js')

module.exports = {
    findById,
    findByUsername
}

function findById(id) {
    return db('likes')               
        .where({ post_id: id })
}

function findByUsername(id) {
    return db('likes')               
        .where({ like_username: id })
}