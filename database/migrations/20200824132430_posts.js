
exports.up = function(knex) {
    return knex.schema 
        .createTable('posts', tbl => {
            tbl.increments()
            tbl.integer('user_id').unsigned().references('id').inTable('users').notNullable()
            tbl.string('post').notNullable()
            tbl.string('img')
            tbl.timestamp('created_at')
                .defaultTo(knex.fn.now())
            tbl.string('location')
        })
}

exports.down = function(knex) {
    knex.schema.dropTableIfExists('posts')
}
