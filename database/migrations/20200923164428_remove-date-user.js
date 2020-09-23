
exports.up = function(knex) {
    return knex.schema.table('users', tbl => {
        tbl.dropColumn('birthday')
        tbl.string('birthdate')
    })
}

exports.down = function(knex) {
    return knex.schema.table('users', tbl => {
        knex.schema.hasColumn('users', 'birthdate')
            .then(exists => {
                if (exists) {
                    tbl.dropColumn('birthdate');
                }
            })
    })
}
