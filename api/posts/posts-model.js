const db = require('../../database/dbConfig.js')

module.exports = {
    findByUser,
    add,
    remove,
    find,
    findById,
    addLike,
    removeLike,
    addLikeToPost,
    removeLikeToPost,
    addComment,
    addCommentToPost,
    removeComment,
    removeCommentToPost,
    update
}

function find() {
    return db('posts')
        .join('users', 'posts.user_id', 'users.id').select('posts.*', 'users.username', 'users.is_player')
        .orderBy('id', 'desc')
}

function findByUser(id) {
    return db('posts')
        .where({ user_id: id })
        .orderBy('id', 'desc')
}

async function add(post) {
    const [id] = await db('posts').insert(post)
    return id
}

function update (id, changes){
    return db('posts')
        .where({ id })
        .update(changes)

}
async function addLike(like_user, post_id, user_id) {
    return db('likes')
        .insert({ like_username: like_user, post_id: post_id, user_id: user_id })
}

async function addLikeToPost(post_id, like_num) {
    return db('posts')
        .where({ id: post_id })
        .update({ like_number: like_num+1 })
}

async function addComment(comment_user, post_id, comment, user_id) {
    return db('comments')
        .insert({ comment_username: comment_user, post_id: post_id, comment: comment, user_id: user_id })
}

async function addCommentToPost(post_id, comment_num) {
    return db('posts')
        .where({ id: post_id })
        .update({ comment_number: comment_num+1 })
}

function removeLike(like_user, post_id) {
    return db('likes')
        .where({ like_username: like_user, post_id: post_id })
        .del()
}

function removeComment(comment_id) {
    return db('comments')
        .where({ id: comment_id })
        .del()
}

async function removeCommentToPost(comment_id, comment_num) {
    return db('posts')
        .where({ id: comment_id })
        .update({ comment_number: comment_num-1 })
}

async function removeLikeToPost(post_id, like_num) {
    return db('posts')
        .where({ id: post_id })
        .update({ like_number: like_num-1 })
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