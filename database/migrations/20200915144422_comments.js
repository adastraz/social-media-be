
exports.up = function(knex) {
    return knex.schema
        .createTable('comments', tbl => {
            tbl.increments()
            tbl.string('comment_username').unsigned().references('username').inTable('users')
            tbl.integer('post_id').unsigned().references('id').inTable('posts')
            tbl.string('comment').notNullable()
        })
}

exports.down = function(knex) {
    knex.schema.dropTableIfExists('likes')
}
