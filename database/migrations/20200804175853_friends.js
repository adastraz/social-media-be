
exports.up = function(knex) {
    return knex.schema
        .createTable('friends', tbl => {
            tbl.increments()
            tbl.integer('user_id').unsigned().references('id').inTable('users').notNullable()
            tbl.integer('friend_id').unsigned().references('id').inTable('users').notNullable()
        })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('friends')
}
