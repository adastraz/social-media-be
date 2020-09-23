
exports.up = function(knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments()
            tbl.string('username', 255)
                .notNullable()
                .unique()
            tbl.string('password', 255)
                .notNullable()
            tbl.string('bio')
            tbl.string('profileimg')
            tbl.string('coverimg')
            tbl.string('relationship')
            tbl.date('birthday')
                .notNullable()
            tbl.timestamps(false, true)
            tbl.string('phone_number', 15)
            tbl.string('nickname')
            tbl.string('location')
            tbl.string('workplace')
            tbl.string('education')
        })
}

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
}
