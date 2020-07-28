exports.up = async function(knex) {
    await knex.schema.createTable("users", table => {
        table
            .increments("id")
        table
            .string("phone_number")
            .notNullable()
            .unique()
        table
            .string("username")
            .notNullable()
            .unique()
        table.string("password").notNullable()
    })
    .createTable("plants", (table) => {
        table
            .increments("id")
        table
            .string("nickname")
            .notNullable()
        table 
            .string("species")
            .notNullable()
        table
            .string("h2oFrequency")
            .notNullable()
        table
            .integer("user_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
}

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("plants")
}