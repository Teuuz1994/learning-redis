const path = require('path');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve('src', 'database', 'db.sqlite'),
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true,
  },
};
