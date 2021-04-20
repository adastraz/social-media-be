
exports.up = function(knex) {
    return knex.schema
        .table('tournaments', tbl => {
            tbl.string('placement')
        })
}

exports.down = function(knex) {
    return knex.schema.table('tournaments', tbl => {
        knex.schema.hasColumn('tournaments', 'placement').then(exists => {
            if (exists) {
                tbl.dropColumn('placement')
            }
        })
    })
}