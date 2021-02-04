
exports.up = function(knex) {
    return knex.schema
        .createTable('users_creators', tbl => {
            tbl.increments()
            tbl.string('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
            tbl.string('name')
                .notNullable()
            tbl.string('link')
                .notNullable()
            tbl.string('img')
                .notNullable()
        })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('users_creators')
};
