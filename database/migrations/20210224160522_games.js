exports.up = function(knex) {
    return knex.schema 
        .createTable('games', tbl => {
            tbl.increments()
            tbl.integer('tournament_id') 
                .unsigned()
                .references('id')
                .inTable('tournaments')
                .onDelete('CASCADE')
            tbl.string('opp_team')
                .notNullable()
            tbl.string('opp_teamimg')
            tbl.string('date')
                .notNullable()
            tbl.string('time')
                .notNullable()
            tbl.string('status')
                .defaultTo('pending')
            tbl.string('livestream_link')
                .defaultTo('https://www.twitch.tv/hyperspacedark')
            tbl.string('hd_score')
                .defaultTo('0')
            tbl.string('opp_team_score')
                .defaultTo('0')
        })
}

exports.down = function(knex) {
    knex.schema.dropTableIfExists('games')
}