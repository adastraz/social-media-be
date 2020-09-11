
exports.up = function(knex) {
    return knex.schema
        .createTable('likes', tbl => {
            tbl.increments()
            tbl.string('like_username').unsigned().references('username').inTable('users')
            tbl.integer('post_id').unsigned().references('id').inTable('posts')
        })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('likes')
};
