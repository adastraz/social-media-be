module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/socialmedia.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations'
    }
  }

}
