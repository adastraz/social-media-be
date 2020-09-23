
exports.up = function(knex) {
    return knex.schema
        .table('posts', tbl => {
            tbl.integer('like_number').defaultTo(0)
        })
}

exports.down = function(knex) {
    return knex.schema.table('posts', tbl => {
        knex.schema.hasColumn('posts', 'like_number').then(exists => {
            if (exists) {
                tbl.dropColumn('like_number')
            }
        })
    })
}
