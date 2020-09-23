
exports.up = function(knex) {
    return knex.schema
        .table('posts', tbl => {
            tbl.integer('comment_number').defaultTo(0)
        })
}

exports.down = function(knex) {
    return knex.schema.table('posts', tbl => {
        knex.schema.hasColumn('posts', 'comment_number').then(exists => {
            if (exists) {
                tbl.dropColumn('comment_number')
            }
        })
    })
}