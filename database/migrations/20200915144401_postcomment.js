
exports.up = function(knex) {
    return knex.schema
        .table('posts', tbl => {
            tbl.integer('comment_number').defaultTo(0)
        })
}

exports.down = function(knex) {
    return knexIfHaveDropColumn('posts', 'comment_number')
}
