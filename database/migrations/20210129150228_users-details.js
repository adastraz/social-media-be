
exports.up = function(knex) {
    return knex.schema
        .createTable('users_details', tbl => {
            tbl.increments()
            tbl.integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
            tbl.string('twitch_link')
                .defaultTo(null)
            tbl.string('youtube_link')
                .defaultTo(null)
            tbl.string('rank')
                .notNullable()
        })
}

exports.down = function(knex) {
    knex.schema.dropTableIfExists('users_details')
}
