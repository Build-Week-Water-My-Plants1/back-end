exports.up = async function(knex) {
    await knex.schema.createTable("users", table => {
        table
            .increments("id")
            .notNullable()
            .unique()
        table.string("first_name").notNullable()
        table.string("last_name").notNullable()
        table
            .string("email")
            .notNullable()
            .unique()
        table
            .string("username")
            .notNullable()
            .unique()
        table.string("password").notNullable()
    })
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("users")
}