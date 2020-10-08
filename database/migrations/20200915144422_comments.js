
exports.up = function(knex) {
    return knex.schema
        .createTable('comments', tbl => {
            tbl.increments()
            tbl.string('comment_username').unsigned().references('username').inTable('users').onDelete('CASCADE')
            tbl.integer('post_id').unsigned().references('id').inTable('posts').onDelete('CASCADE')
            tbl.string('comment').notNullable()
            tbl.timestamps(false, true)
        })
}

exports.down = function(knex) {
    knex.schema.dropTableIfExists('likes')
}
