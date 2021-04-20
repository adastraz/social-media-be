
exports.up = function(knex) {
    return knex.schema.table('games', tbl => {
        tbl.dropColumn('date')
        tbl.string('dateof').notNullable()
    })
}

exports.down = function(knex) {
    return knex.schema.table('games', tbl => {
        tbl.string("dateof")
    })
}
