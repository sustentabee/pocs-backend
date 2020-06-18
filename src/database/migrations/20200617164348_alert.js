
exports.up = function (knex) {
    return knex.schema.createTable('alerts', table => {
        table.increments()
        table.string('description').notNullable()
        table.timestamps(true, true)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('alerts')
};
