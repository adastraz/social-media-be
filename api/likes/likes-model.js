const db = require('../../database/dbConfig.js')

module.exports = {
    findById
}

function findById(id) {
    return db('likes')               
        .where({ post_id: id })
}