
exports.up = function(knex) {
    return knex.schema 
        .createTable('tournaments', tbl => {
            tbl.increments()
            tbl.string('name')
                .notNullable()
            tbl.string('img')
            tbl.date('begin_date')
                .notNullable()
            tbl.date('end_date')
                .notNullable()
            tbl.string('start_time')
                .notNullable()
            tbl.string('status')
                .defaultTo('pending')
            tbl.string('livestream_link')
                .defaultTo('https://www.twitch.tv/hyperspacedark')
            tbl.string('game')
                .notNullable()
            tbl.string('bracket')
                .defaultTo('Unavailable')
        })
}

exports.down = function(knex) {
    knex.schema.dropTableIfExists('tournaments')
}
