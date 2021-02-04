
exports.up = function(knex) {
    return knex.schema
        .createTable('users_othergames', tbl => {
            tbl.increments()
            tbl.string('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
            tbl.string('name')
                .notNullable()
            tbl.string('img_link')
                .notNullable()
        })
}

exports.down = function(knex) {
    knex.schema.dropTableIfExists('users_othergames')
}
