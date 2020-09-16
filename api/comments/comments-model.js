const db = require('../../database/dbConfig.js')

module.exports = {
    findById,
    findByUsername
}

function findById(id) {
    return db('comments')               
        .where({ post_id: id })
}

function findByUsername(id) {
    return db('comments')               
        .where({ comment_username: id })
}

// function removeComment(comment_user, post_id, comment) {
//     return db('comments')
//         .where({ comment_username: comment_user, post_id: post_id, comment: comment })
//         .del()
// }

// async function removeCommentToPost(post_id, comment_num) {
//     return db('posts')
//         .where({ id: post_id })
//         .update({ comment_number: comment_num-1 })
// }