exports.up = async function(knex) {
    await knex.schema.createTable("plants", (table) => {
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
            .integer("plant_users_id")
            .unsigned()
            .notNullable()
            .references("users_id")
            .inTable("users")
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
}

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists("plants")
}