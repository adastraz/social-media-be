
exports.up = function(knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments()
            tbl.string('username', 255)
                .notNullable()
                .unique()
            tbl.string('password', 255)
                .notNullable()
            tbl.boolean('is_player')
                .defaultTo(false)
            tbl.string('team')
                .defaultTo(null)
            tbl.string('game')
                .defaultTo(null)
        })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
}
