
exports.up = function(knex) {
    return knex.schema
        .createTable('users_details', tbl => {
            tbl.increments()
            tbl.string('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
            tbl.string('username').unsigned().references('username').inTable('users').onDelete('CASCADE')
            tbl.string('twitch_link').defaultTo(null)
            tbl.string('youtube_link').defaultTo(null)
            tbl.string('plays').defaultTo(null)
            tbl.string('video_link').defaultTo(null)
        })
}

exports.down = function(knex) {
    knex.schema.dropTableIfExists('users_details')
}
