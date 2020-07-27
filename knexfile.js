module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/my_plants.db3'
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    useNullAsDefault: true
  },
  
};