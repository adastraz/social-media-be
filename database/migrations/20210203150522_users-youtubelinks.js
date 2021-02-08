
exports.up = function(knex) {
    return knex.schema
        .createTable('users_youtubelinks', tbl => {
            tbl.increments()
            tbl.integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
            tbl.string('youtubelinks')
                .notNullable()
        })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('users_youtubelinks')
};
