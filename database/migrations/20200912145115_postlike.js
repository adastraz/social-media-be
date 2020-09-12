
exports.up = function(knex) {
    return knex.schema
        .table('posts', tbl => {
            tbl.integer('like_number').defaultTo(0)
        })
}

exports.down = function(knex) {
    return knexIfHaveDropColumn('posts', 'like_number');
}
