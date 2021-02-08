
exports.up = function(knex) {
    return knex.schema
        .createTable('users_carpics', tbl => {
            tbl.increments()
            tbl.integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
            tbl.string('carpic')
                .notNullable()
            tbl.string('side')
                .notNullable()
        })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('users_carpics')
};
