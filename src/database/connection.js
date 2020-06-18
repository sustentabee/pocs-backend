const knex = require('knex');
const database = require('../../knexfile');

const connection = knex(database.development);

module.exports = connection;