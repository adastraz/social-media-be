
exports.up = function(knex) {
    return knex.schema
        .createTable('likes', tbl => {
            tbl.increments()
            tbl.string('like_username').unsigned().references('username').inTable('users').onDelete('CASCADE')
            tbl.integer('post_id').unsigned().references('id').inTable('posts').onDelete('CASCADE')
        })
}

exports.down = function(knex) {
    knex.schema.dropTableIfExists('likes')
}
