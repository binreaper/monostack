// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
	host:'127.0.0.1',
      user:'db_user',
      password:'db_password',
      database:'db_name'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
